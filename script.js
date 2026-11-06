function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const CV_FILES = {
  en: "./assets/CResume.pdf",
  ja: "./assets/FSResume.pdf",
};

function openCV() {
  window.open(CV_FILES[currentLang]);
}

/* LANGUAGE SWITCH */

const LANG_STORAGE_KEY = "portfolio-lang";
const englishHtml = new Map();
const englishTitles = new Map();
const englishPageTitle = document.title;
let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  const ja = lang === "ja";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (!englishHtml.has(el)) englishHtml.set(el, el.innerHTML);
    const key = el.dataset.i18n;
    el.innerHTML = ja && key in JA ? JA[key] : englishHtml.get(el);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    if (!englishTitles.has(el)) englishTitles.set(el, el.title);
    const key = el.dataset.i18nTitle;
    el.title = ja && key in JA ? JA[key] : englishTitles.get(el);
  });

  document.querySelectorAll(".skill-chip[title]").forEach((chip) => {
    if (!chip.dataset.levelEn) chip.dataset.levelEn = chip.title;
    const level = chip.dataset.levelEn;
    chip.title = ja ? LEVEL_NAMES_JA[level] || level : level;
  });

  document.documentElement.lang = lang;
  document.title = ja ? JA["page.title"] : englishPageTitle;

  document.querySelectorAll("[data-lang-option]").forEach((option) => {
    option.classList.toggle("active", option.dataset.langOption === lang);
  });

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (error) {
    // Storage can be unavailable (private browsing); the switch still works.
  }
}

function savedLanguage() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "ja") return saved;
  } catch (error) {
    // Fall through to the browser's language.
  }
  return (navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en";
}

document.querySelectorAll(".lang-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ja" : "en");
  });
});

applyLanguage(savedLanguage());

/* CONTACT FORM */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = contactForm.querySelector(".contact-form-status");
  const button = contactForm.querySelector(".contact-submit");
  const messages = MESSAGES[currentLang];

  button.disabled = true;
  button.textContent = messages.sending;
  status.textContent = "";
  status.classList.remove("error");

  try {
    const response = await fetch(
      contactForm.action.replace("formsubmit.co/", "formsubmit.co/ajax/"),
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    contactForm.reset();
    status.textContent = messages.success;
  } catch (error) {
    status.textContent = messages.error;
    status.classList.add("error");
  } finally {
    button.disabled = false;
    button.textContent = MESSAGES[currentLang].send;
  }
});
