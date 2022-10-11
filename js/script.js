const readMoreBtns = document.querySelectorAll(".read-more");
const toggleBtn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.dataset.para;

    document.querySelector(`.para-${clicked}`).classList.toggle("line-clamp-1");
    if (
      document
        .querySelector(`.para-${clicked}`)
        .classList.contains("line-clamp-1")
    ) {
      btn.innerHTML = "Read More";
    } else {
      btn.innerHTML = "See Less";
    }
  });
});

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // show light icon
  lightIcon.classList.remove("hidden");
} else {
  darkIcon.classList.remove("hidden");
}

// listen for toggle buttoon click
toggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // toggle icon
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  //if it is set in local storage
  if (localStorage.getItem("color-theme")) {
    // if light, make dark save in local storage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", " dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // if not in local storage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
