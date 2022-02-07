const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const list = document.querySelector('#ingredients')

const newItem = ingredients.map((liItem) => {
  const item = document.createElement('li')
  item.textContent = liItem
  item.classList.add('item')
  return item
})

list.append(...newItem)
