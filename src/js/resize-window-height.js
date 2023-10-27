import debounce from 'lodash/debounce'

export default () => {
  const handler = debounce(() => {
    document.documentElement.style.setProperty('--height-point', `${window.innerHeight * 0.01}px`)
  }, 50)

  window.addEventListener('resize', handler)
  handler()
}