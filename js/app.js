import { menus } from './data.js'

const menuContainer = document.querySelector('.menu_list')

menus.forEach(menu => {
  console.log(menu)
  const li = document.createElement('li')
  const html = `<a href="#">${menu.title}</a>`
  const ul = document.createElement('ul')

  li.innerHTML = html
  li.appendChild(ul)

  menu.subMenu.forEach(item => {
    const li = document.createElement('li')
    const html = `<a href=${item.url}>${item.text}</a>`
    li.innerHTML = html

    ul.appendChild(li)
  })

  menuContainer.appendChild(li)
})

/* <li>
  <a href="#">소개</a>
  <ul>
    <li><a href="#">인사말</a></li>
    <li><a href="#">주요연혁</a></li>
    <li><a href="#">수상내역</a></li>
  </ul>
</li> */
