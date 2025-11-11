const modal = () => {
  const modalBtn = document.querySelector('.modal__button')
  const modal = document.querySelector('.modal')
  const modalInner = modal.querySelector('.modal__inner')

  modalInner.style.position = 'relative'

  const addCloseBtn = () => {
    const closeBtn = document.createElement('div')
    closeBtn.classList.add('close-button')
    closeBtn.innerHTML = '&times'
    closeBtn.style.position = 'absolute'
    closeBtn.style.right = '10px'
    closeBtn.style.top = '10px'
    closeBtn.style.width = '20px'
    closeBtn.style.height = '20px'
    closeBtn.style.fontSize = '26px'
    closeBtn.style.cursor = 'pointer'
    closeBtn.style.display = 'flex'
    closeBtn.style.justifyContent = 'center'
    closeBtn.style.alignItems = 'center'

  modalInner.append(closeBtn)
  closeBtn.addEventListener('click', () => {
    modal.style.display = ''
  })
}
addCloseBtn()

  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
  modal.addEventListener('click', event => {
    const modalContent = event.target.closest('.modal__inner')
    if (!modalContent) {
      modal.style.display = ''
    }
  })
}

modal()