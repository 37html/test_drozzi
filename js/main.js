
// Плавный скролл

  const links = document.querySelectorAll('.header__menu-link')
  const btn = document.querySelector('.header__link')

  const allLinks = [...links, btn]

  allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
    
      const id = link.getAttribute('href').substring(1)
      const section = document.getElementById(id)
    
      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    })
  })



  
// Бургер-меню (открываем)

const burger = document.querySelector('.header__burger-menu-btn')
const menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
  menu.classList.remove('header__menu')
  menu.classList.add('header__menu-active')
})


// Бургер-меню (закрываем)

const close = document.querySelector('.header__menu-close-btn')

close.addEventListener('click', () => {
  menu.classList.remove('header__menu-active')
  menu.classList.add('header__menu')
})





