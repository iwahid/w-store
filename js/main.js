console.log("fired!")

const selectElement = document.querySelector("[data-select]")
const selectReal = document.getElementById("selectReal")

/* чекаю на уровне всего селекта-контейнера */
selectElement.addEventListener('click', function (event) {

  if (event.target.hasAttribute("data-select-item")) {
    const itemTitle = event.target.getAttribute("data-select-item") //mobile /* или */ /* dataset["select-item"] */
    console.log(itemTitle)
    event.target.closest("[data-select]").querySelector("[data-select-title]").innerText = itemTitle // нахожу родителя, что бы через него выйти на title и закинуть в него значение
    event.target.closest("[data-select]").querySelector(".header-select__dropdown").classList.toggle("hidden") //после выбора параметра, скрываю всё обратно

    selectReal.value = itemTitle
    console.log("Значение selectReal: ", selectReal.value)
  } else {
    this.querySelector(".header-select__dropdown").classList.toggle("hidden")
  }

})