import { menus } from './data.js'

const menuContainer = document.querySelector('.menu_list')

menus.forEach(menu => {
  console.log(menu)
  const li = document.createElement('li')
  const html = `<a href="#">소개</a>`
  const ul = document.createElement('ul')

  li.innerHTML = html

  console.log(li)
})

/* <li>
  <a href="#">소개</a>
  <ul>
    <li><a href="#">인사말</a></li>
    <li><a href="#">주요연혁</a></li>
    <li><a href="#">수상내역</a></li>
  </ul>
</li> */
