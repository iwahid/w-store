console.log("fired!")

const selectAllElements = document.querySelectorAll("[data-select]") /* если ищу по атрибуту, то указываю его в []  */

/* вытащил все элементы по data, и на каждый навешал слушателя */
selectAllElements.forEach((item) => {
  item.addEventListener("click", function () {
    /* беру следующий в DOM дереве элемент - сосед выбранного item-a */
    const realSelect = this.nextElementSibling

    /* попал по селектору, и теперь определяю попал ли я именно по айтему внутри... */
    if (event.target.hasAttribute("data-select-item")) {
      
      /* сейчас по this понимается "header-select" */
      /* вытаскиваю значение атрибута у выбранного элемента и меняю на него заголовок у dropdown */
      let itemTitle = event.target.getAttribute('data-select-item')
      this.querySelector('[data-select-title]').innerText = itemTitle

      /* после выбора параметра, скрываю всё обратно */
      this.querySelector(".header-select__dropdown").classList.toggle("hidden") 

      realSelect.value = itemTitle
    } else { /* .... или попал по заголовку */
      /* свичу открть/закрыть */
      this.querySelector(".header-select__dropdown").classList.toggle("hidden")
    }

  })
})

