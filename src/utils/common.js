function getLocalstorage (key) {
  let data = {}
  try {
    data = window.localStorage.getItem(key)
    return data
  } catch (e) {
    console.error(e)
  }
}

function setLocalstorage (key, val) {
  let _val = val
  if (typeof _val === 'object') {
    _val = JSON.stringify(val)
  }
  window.localStorage.setItem(key, _val)
  return _val
}

export default {
  getLocalstorage,
  setLocalstorage
}
