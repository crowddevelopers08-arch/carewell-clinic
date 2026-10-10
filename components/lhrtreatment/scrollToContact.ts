// Every CTA on the /treatment page scrolls to the real booking form in
// ContactMapSection (id="contact") instead of opening the site-wide popup modal.
export function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
