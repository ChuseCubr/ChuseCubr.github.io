const items = document.getElementsByClassName("info-item");
console.log(items);

function contains(str, pattern) {
	let pattern_idx = 0;
	for (i = 0; i < str.length; i++) {
		if (pattern_idx == pattern.length) {
			return true;
		}
		if (str[i] == pattern[pattern_idx]) {
			pattern_idx += 1;
		}
	}

	if (pattern_idx == pattern.length) {
		return true;
	}

	return false;
}

document.getElementById("search-bar").onkeyup = function() {
	let query = document.getElementById("search-bar").value;
	query = query.trim();

	if (query == "") {
		for (let item of items) {
			item.style["opacity"] = "1.0";
		}
		return;
	}

	for (let item of items) {
		if (contains(item.innerText.toLowerCase(), query.toLowerCase())) {
			item.style["opacity"] = "1.0";
		} else {
			item.style["opacity"] = "0.5";
		}
	}
};
