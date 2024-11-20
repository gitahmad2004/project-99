const cardwrapper = document.querySelector(".feposts");
const cardwrapperChildren = Array.from(cardwrapper.children);
const widthToScroll = cardwrapper.children[0].offsetWidth;
const arrowPov = document.querySelector("#fleft");
const arrowNext = document.querySelector("#fright");

arrowPov.onclick = function () {
    cardwrapper.scrollLeft -= widthToScroll;
    updateButtonOpacity(); 
}
arrowNext.onclick = function () {
    cardwrapper.scrollLeft += widthToScroll;
    updateButtonOpacity(); 
}

function updateButtonOpacity() {
    if (cardwrapper.scrollLeft <= 0) {
        arrowPov.style.opacity = 0.4;
        arrowPov.style.cursor = none;
    }
    else if (cardwrapper.scrollLeft >= (cardwrapper.scrollWidth - cardwrapper.offsetWidth)) {
          arrowNext.style.opacity = 0.4;
          arrowNext.style.cursor = none;
    }
    else {
        arrowNext.style.opacity = 1;
        arrowPov.style.opacity = 1;
    }
}

const navBtn = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
    navList.classList.toggle("active")
})