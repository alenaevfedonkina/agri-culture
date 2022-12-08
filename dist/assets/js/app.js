// const slider = ItcSlider.getOrCreateInstance(".itc-slider");
// document.addEventListener("DOMContentLoaded", () => {
// });
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".slider").forEach((el) => {
//     ItcSlider.getOrCreateInstance(el);
//   });
// });
// this.#state.elListItem.forEach((el, index) => {
//   this.#state.els.push({ el, index, order: index, translate: 0 });
// });
// this.#state.intervalId = setInterval(function() {
//   this.#state.direction = 'next';
//   this.#move();
// }, 1000); 
  
// function #onMouseEnter() {
//   this.#autoplay('stop');
// }
// #onMouseLeave() {
//   this.#autoplay();
// }
// function #onVisibilityChange() {
//   if (document.visibilityState === 'hidden') {
//     this.#autoplay('stop');
//   } else if (document.visibilityState === 'visible' && this.#config.loop) {
//     this.#autoplay();
//   }
// }
// #onResize() {
//   window.requestAnimationFrame(this.#reset.bind(this));
// }
// Object.keys(this.#state.events).forEach((type) => {
//   if (this.#state.events[type][2]) {
//     const el = this.#state.events[type][0];
//     const fn = this.#state.events[type][1];
//     el.addEventListener(type, fn);
//   }
// });