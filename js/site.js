const items = document.getElementsByClassName("info-item");

for (let item of items) {
	item.dataset.highlighted = "1";
}

const sections = document.getElementsByClassName("info-section");
for (let section of sections) {
	const href = section.dataset.sectionHref;
	const links = section.querySelectorAll("a");
	for (let link of links) {
		link.href = href;
	}
}

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

const searchBar = document.getElementById("search-bar");
searchBar.onkeyup = function(ev) {
	const query = searchBar.value.trim();

	if (query === "") {
		for (let item of items) {
			if (item.dataset.highlighted !== "1") {
				item.dataset.highlighted = "1";
			}
		}
		return;
	}

	if (ev.key === "Enter") {
		for (let item of items) {
			const item_label = item.innerText.toLowerCase();
			if (contains(item_label, query.toLowerCase())) {
				const page = item.children[0].href;
				window.location.href = page;
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
