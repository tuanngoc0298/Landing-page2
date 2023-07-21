const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentActive = 0;
let previousActive = 0;
const navActive = $$(".js-nav-active");

const activeSong = () => {
    const navItem = navActive[currentActive];
    navItem.classList.add("active");
    navActive[previousActive].classList.remove("active");
};
navActive.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        if (currentActive != index) {
            previousActive = currentActive;
            currentActive = index;
        }
        activeSong();
    });
});
