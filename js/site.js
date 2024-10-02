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

// INFO TOGGLE
const noticeIcon = document.getElementById("notice-icon");
const noticeText = document.getElementById("notice-text");

noticeIcon.onmouseover = function() {
  noticeText.dataset.display = "1";
};

noticeIcon.onmouseout = function() {
  noticeText.dataset.display = "0";
};

// EXPERIENCE CARD DISPLAYS
const projects = document. getElementById("projects");
const technologies = document. getElementById("technologies");
const education = document. getElementById("education");
const projectsButton = document. getElementById("projects-button");
const technologiesButton = document. getElementById("languages-button");
const educationButton = document. getElementById("education-button");

projectsButton.onclick = function() {
  selectSection(projectsButton, projects, [technologiesButton, educationButton], [technologies, education]);
}

technologiesButton.onclick = function() {
  selectSection(technologiesButton, technologies, [projectsButton, educationButton], [projects, education]);
}

educationButton.onclick = function() {
  selectSection(educationButton, education, [projectsButton, technologiesButton], [projects, technologies]);
}

function selectSection(
  selectedButton,
  selectedSection,
  otherButtons,
  otherSections
) {
  selectedButton.dataset.selected = "1";
  selectedSection.dataset.display = "1";
  otherButtons.forEach(element => element.dataset.selected = "0");
  otherSections.forEach(element => element.dataset.display = "0");
}
