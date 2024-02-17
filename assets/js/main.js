document.querySelector('.side-bar button').onclick = function () {
    document.querySelector('.side-bar').classList.add('hide-side-bar');
    document.querySelector('.side-bar').classList.remove('show-side-bar');
    document.querySelector('.overlay').classList.remove('show-overlay');
};
document.querySelector('.header button').onclick = function () {
    document.querySelector('.side-bar').classList.remove('hide-side-bar');
    document.querySelector('.side-bar').classList.add('show-side-bar');
    document.querySelector('.overlay').classList.add('show-overlay');
};