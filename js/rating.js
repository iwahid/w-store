console.log("123 456 789")



const ratingItemsList = document.querySelectorAll(".rating__item")
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList)

ratingItemsArray.map( item => {
  item.addEventListener("click", () => {
    
    const {itemValue} = item.dataset
    /* 
    отправляю данные на сервер 
    получаю данные с сервера и обновляю:
    1. сам звёздный рейтинг
    */
    item.parentNode.parentNode.dataset.totalValue = itemValue
    /* цифровое значение, полученное с бека */
    console.log(item.parentNode.parentNode.querySelectorAll(".rating__counter"))
    /* странное решение, но помогло отвязаться от структуры вёрстки */
    item.parentNode.parentNode.querySelectorAll(".rating__counter")[0].innerText = itemValue
  })
})