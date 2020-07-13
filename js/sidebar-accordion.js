var acc = document.getElementsByClassName("main-navigation__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("main-navigation__item_selected");
    var panel = this.nextElementSibling;

    /* анимирование поворота стрелочки */
  /*   if (this.childNodes[7].childNodes[1].classList.contains("main-navigation__item-arrow-icon"))
        console.log(123)
        console.log(this.childNodes[7].childNodes[1]) */
    this.childNodes[7].childNodes[1].classList.toggle("adapt")

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}