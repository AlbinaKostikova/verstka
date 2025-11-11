const accordeon = () => {
  const contens = document.querySelectorAll('.program-line__content')
  const contentDescr = document.querySelectorAll('.program-line__descr')

  contens.forEach(elem => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    descr.style.transition = 'height .3s'
    descr.style.overflow = 'hidden'

    title.addEventListener('click', () => {
      contentDescr.forEach(tab => {
        if (tab === descr) {
          tab.style.height = tab.scrollHeight + 'px'
        } else {
          tab.style.height = 0
        }
      })
    })
  })
}

accordeon()