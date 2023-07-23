const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentActive = 0;
let previousActive = 0;

let currentFeedback = 0;
let previousFeedback = 0;

// Active header
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

// Feedback
const dotActive = $$(".js-dot-active");
const feedbackItems = $$(".js-fb-item");
const activeDot = (curr, prev) => {
    dotActive[curr].classList.add("active");
    dotActive[prev].classList.remove("active");
    feedbackItems.forEach((item) => {
        if (curr != 0) {
            item.style.transform = `translateX(calc(${curr} * (-100% - 135px))`;
        } else {
            item.style.transform = `translateX(0)`;
        }
    });
};
dotActive[currentFeedback].classList.add("active");
dotActive.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        if (index != currentFeedback) {
            previousFeedback = currentFeedback;
            currentFeedback = index;
            activeDot(currentFeedback, previousFeedback);
        }
    });
});
