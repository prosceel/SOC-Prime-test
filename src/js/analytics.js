import axios from 'axios';

export const sendEvent = async (data) => {
  try {
    await axios.post('https://analytics.dev/event', data)
  } catch (e) {
    console.error(e)
  }
}
