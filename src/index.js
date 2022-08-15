import navbar, { selectTab } from "./nav.js";
import home from "./home.js";
import reviews from "./reviews.js";
import contact from "./contact.js";

const control = (() => {
  document.addEventListener("DOMContentLoaded", () => {
    view.init();
    for (const [key, element] of view.getNavItems().entries()) {
      element.addEventListener("click", function () {
        view.changeTab(key);
      });
    }
  });
})();

const view = (() => {
  let content = null;

  function init() {
    content = document.getElementById("content");
    view.setNavbar(navbar());
    view.setMainContent(home());
  }

  function changeTab(num) {
    selectTab(num);
    if (num === 1) {
      setMainContent(reviews());
    } else if (num === 2) {
      setMainContent(contact());
    } else {
      setMainContent(home());
    }
  }

  function setNavbar(nav) {
    content.append(nav);
  }

  function setMainContent(div) {
    content.children[1]?.remove();
    content.append(div);
  }
  function getNavItems() {
    return Array.from(document.querySelectorAll(".navbar-item"));
  }
  return {
    setNavbar,
    setMainContent,
    init,
    getNavItems,
    changeTab,
  };
})();
