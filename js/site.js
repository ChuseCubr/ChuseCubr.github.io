// ELEMENT INITIALIZATION
// Setting these properties in HTML would be repetitive, so do that here
const searchBar = document.getElementById("search-bar");

function goHome() {
  window.location.href = "#";
  searchBar.select();
}

const pages = document.getElementsByClassName("page");
document.getElementById("down").onclick = function() {
  window.location.href = `#${pages[1].id}`;
};

const homeButtons = document.getElementsByClassName("home");
for (let button of homeButtons) {
  button.onclick = goHome;
}

const prevButtons = document.getElementsByClassName("prev");
for (let button of prevButtons) {
  prevSection = button.closest("section").previousElementSibling.id;
  button.href = `#${prevSection}`;
}

const nextButtons = document.getElementsByClassName("next");
for (let button of nextButtons) {
  nextSection = button.closest("section").nextElementSibling.id;
  button.href = `#${nextSection}`;
}

const items = document.getElementsByClassName("info-item");
for (let item of items) {
  item.dataset.highlighted = "1";
}

const sections = document.getElementsByClassName("info-section");
for (const section of sections) {
  const href = section.dataset.sectionHref;
  const links = section.querySelectorAll("a");
  for (let link of links) {
    link.href = href;
  }
}

// KEYMAPS
// Keyboard-based navigation for accessibility (vim users be like)
document.onkeydown = function(ev) {
  if (ev.target.tagName.toLowerCase() === "input") {
    return;
  }

  const activePageIndex = Math.floor(
    window.scrollY / document.documentElement.clientHeight,
  );
  const activePage = pages[activePageIndex];
  switch (ev.key) {
    case "/":
      ev.preventDefault();
      goHome();
      break;
    case "j":
    case "l":
    case "ArrowDown":
    case "ArrowRight":
      if (activePageIndex === pages.length - 1) {
        return;
      }

      const nextPage = activePage.nextElementSibling.id;
      window.location.href = `#${nextPage}`;
      return false;
    case "k":
    case "h":
    case "ArrowUp":
    case "ArrowLeft":
      const prevPage = activePage.previousElementSibling.id;
      window.location.href = `#${prevPage}`;
      return false;
  }
};

// SEARCH BAR LOGIC
function contains(str, pattern) {
  let pattern_idx = 0;
  for (i = 0; i < str.length; i++) {
    if (pattern_idx === pattern.length) {
      return true;
    }
    if (str[i] === pattern[pattern_idx]) {
      pattern_idx += 1;
    }
  }

  if (pattern_idx === pattern.length) {
    return true;
  }

  return false;
}

searchBar.onkeyup = function(ev) {
  const query = searchBar.value.trim();

  if (ev.key === "Escape") {
    searchBar.blur();
    return;
  }

  if (query === "") {
    for (let item of items) {
      if (item.dataset.highlighted !== "1") {
        item.dataset.highlighted = "1";
      }
    }
    return;
  }

  if (ev.key === "Enter") {
    for (const item of items) {
      const item_label = item.innerText.toLowerCase();
      if (contains(item_label, query.toLowerCase())) {
        const parentSection = item.closest(".info-section");
        const href = parentSection.dataset.sectionHref;
        window.location.href = href;
        document.querySelector(href).focus();
        return;
      }
    }
    return;
  }

  for (let item of items) {
    if (contains(item.innerText.toLowerCase(), query.toLowerCase())) {
      if (item.dataset.highlighted !== "1") {
        item.dataset.highlighted = "1";
      }
    } else {
      if (item.dataset.highlighted !== "0") {
        item.dataset.highlighted = "0";
      }
    }
  }
};

// INFO TOGGLE
const noticeIcon = document.getElementById("notice-icon");
const noticeText = document.getElementById("notice-text");
noticeIcon.onmouseover = function() {
  noticeText.dataset.display = "1";
};

noticeIcon.onmouseout = function() {
  noticeText.dataset.display = "0";
};

// COLORSCHEME TOGGLE
const colors = {
  dark: {
    "--clr-base": "25, 23, 36",
    "--clr-surface": "31, 29, 46",
    "--clr-overlay": "38, 35, 58",
    "--clr-muted": "110, 106, 134",
    "--clr-subtle": "144, 140, 170",
    "--clr-text": "224, 222, 244",
    "--clr-love": "235, 111, 146",
    "--clr-gold": "246, 193, 119",
    "--clr-rose": "235, 188, 186",
    "--clr-pine": "49, 116, 143",
    "--clr-foam": "156, 207, 216",
    "--clr-iris": "196, 167, 231",
    "--clr-highlight-low": "33, 32, 46",
    "--clr-highlight-med": "64, 61, 82",
    "--clr-highlight-high": "82, 79, 103",
    "--clr-bg1": "var(--clr-base)",
    "--clr-bg2": "var(--clr-overlay)",
    "--clr-shadow": "var(--clr-base)",
  },
  light: {
    "--clr-base": "250, 244, 237",
    "--clr-surface": "255, 250, 243",
    "--clr-overlay": "242, 233, 222",
    "--clr-muted": "152, 147, 165",
    "--clr-subtle": "121, 117, 147",
    "--clr-text": "87, 82, 121",
    "--clr-love": "180, 99, 122",
    "--clr-gold": "234, 157, 52",
    "--clr-rose": "215, 130, 126",
    "--clr-pine": "40, 105, 131",
    "--clr-foam": "86, 148, 159",
    "--clr-iris": "144, 122, 169",
    "--clr-highlight-low": "244, 237, 232",
    "--clr-highlight-med": "223, 218, 217",
    "--clr-highlight-high": "206, 202, 205",
    "--clr-bg1": "var(--clr-highlight-high)",
    "--clr-bg2": "var(--clr-surface)",
    "--clr-shadow": "var(--clr-highlight-med)",
  },
};

let darkMode = true;
let root = document.querySelector(":root");
const darkModeButton = document.getElementById("toggle-dark-mode");

function toggleDarkMode() {
  if (darkMode === false) {
    darkMode = true;
    for (const [name, color] of Object.entries(colors.dark)) {
      root.style.setProperty(name, color);
      darkModeButton.innerText = "light_mode";
    }
  } else {
    darkMode = false;
    for (const [name, color] of Object.entries(colors.light)) {
      root.style.setProperty(name, color);
      darkModeButton.innerText = "dark_mode";
    }
  }
}

darkModeButton.onclick = toggleDarkMode;
