document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop(); 
  // e.g. "action.html"

  links.forEach(link => {
    // Remove old active class
    link.classList.remove("active");

    // If link matches current page, add active
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
