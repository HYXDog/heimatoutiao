// 方便ben'di本地存取

// 取
export function getItem (key) {
  const res = window.localStorage.getItem(key)
  try {
    return JSON.parse(res)
  } catch (err) {
    return res
  }
}

// 存
export function setItem (key, value) {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

// 删
export function removeItem (key) {
  window.localStorage.removeItem(key)
}
// 全删
export function clearItem () {
  window.localStorage.clearItem()
}
