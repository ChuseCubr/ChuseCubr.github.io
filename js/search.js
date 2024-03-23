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
