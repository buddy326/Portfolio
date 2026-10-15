function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = contactForm.querySelector(".contact-form-status");
  const button = contactForm.querySelector(".contact-submit");

  button.disabled = true;
  button.textContent = "Sending...";
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
    status.textContent = "Thanks! Your message has been sent.";
  } catch (error) {
    status.textContent =
      "Something went wrong. Please email me directly instead.";
    status.classList.add("error");
  } finally {
    button.disabled = false;
    button.textContent = "Send Message";
  }
});
