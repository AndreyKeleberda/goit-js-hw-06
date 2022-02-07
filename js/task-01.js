const allCategories = document.querySelectorAll('h2')
console.log(`Number of categories: ${allCategories.length}`)

const items = document.querySelectorAll('.item')

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
  console.log(`Elements:${item.lastElementChild.children.length}`)
})
