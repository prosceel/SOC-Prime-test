import { sendEvent } from './analytics';

export const openModal = () => {
  try {
    document.documentElement.classList.add('modal--is-opened')
    document.querySelector('.modal').classList.add('modal--is-active')
    document.querySelector('.modal-overlay').classList.add('modal-overlay--is-active')
  } catch (e) {
    console.error(e)
  }
}

export const closeModal = () => {
  try {
    document.documentElement.classList.remove('modal--is-opened')
    document.querySelector('.modal').classList.remove('modal--is-active')
    document.querySelector('.modal-overlay').classList.remove('modal-overlay--is-active')
  } catch (e) {
    console.error(e)
  }
}

export const removeActiveClass = () => {
  ;[].slice.call(document.querySelectorAll('.options-item')).forEach(node => {
    node.classList.remove('options-item--is-active')
  })
}

export default () => {
  ;[].slice.call(document.querySelectorAll('.options-item-buttons__continue')).forEach(node => {
    node.addEventListener('click', (e) => {
      openModal()
      e.target.closest('.options-item').classList.add('options-item--is-active')
    })
  })

  ;[
    document.querySelector('.modal__close-button'),
    document.querySelector('.modal-buttons__item-cancel-button'),
    document.querySelector('.modal-overlay')
  ].forEach(node => {
    try {
      node.addEventListener('click', () => {
        sendEvent({
          event: 'click',
          text: 'Click On Close Button From Modal'
        })
        closeModal()
        removeActiveClass()
      })
    } catch (e) {
      console.error(e)
    }
  })

  try {
    document.querySelector('.modal-buttons__item-continue-button').addEventListener('click', () => {
      sendEvent({
        event: 'click',
        text: 'Click On Get Started Button From Modal'
      })
      closeModal()
      removeActiveClass()
    })
  } catch (e) {
    console.error(e)
  }
}