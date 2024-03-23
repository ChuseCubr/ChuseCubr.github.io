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
