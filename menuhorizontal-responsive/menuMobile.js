const btnMenu = document.getElementById('btnMenu')
const linksMobile = document.getElementById('linksMobile')

btnMenu.addEventListener('click', () => {
  linksMobile.classList.toggle('collapsed')
})
/*
function isOpen () {
  btnMenu.classList.remove('btnMenu')
  btnMenu.classList.add('display')
  btnCloseMenu.classList.remove('btnCloseMenu')
  btnCloseMenu.classList.add('displayOn')
  containerLinks.classList.remove('links')
  containerLinks.classList.add('displayOn')
}

function isClose () {
  btnMenu.classList.remove('displayOn')
  btnMenu.classList.add('btnMenu')
  btnCloseMenu.classList.remove('displayOn')
  btnCloseMenu.classList.add('btnCloseMenu')
  containerLinks.classList.remove('displayOn')
  containerLinks.classList.add('links')
} */
