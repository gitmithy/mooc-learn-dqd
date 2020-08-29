import axios from 'axios'
const getCode = async () => {
  let res = ''
  try {
    res = await axios.get('/getCaptcha')
    if (res.status === 200) {
      return res.data;
      // if (obj.code === 200) {
      //   this.svg = obj.msg;
      // }
    }
  } catch (e) {
    console.log(e)
  }
  return res
}
const forget = async (option) => {
  let res = ''
  try {
    res = await axios.post('/forget', {
      ...option
    })
    if (res.status === 200) {
      return res.data
    }
  } catch (e) {
    console.log(e)
  }
  return res
}

export {
  getCode,
  forget
}
