const tabsButtons = document.getElementsByClassName("tabs-section__btn")
const tabsContents = document.getElementsByClassName("tabs-section__content-box")

let arrTabsButtons = [...tabsButtons]
let arrTabsContents = [...tabsContents]
console.log(arrTabsButtons)
console.log(arrTabsContents)

arrTabsContents.forEach(element => {
  element.style.display = "none"
})

arrTabsContents[0].style.display = 'flex'

arrTabsButtons[0].addEventListener('click', () => {
  arrTabsContents[1].style.display = 'none'
  arrTabsContents[0].style.display = 'flex'
})

arrTabsButtons[1].addEventListener('click', () => {
  arrTabsContents[1].style.display = 'flex'
  arrTabsContents[0].style.display = 'none'
})

