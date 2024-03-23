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
