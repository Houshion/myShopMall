const searchKey = "searchKey"; //token

export function loadSearch() {
  try {
    return uni.getStorageSync(searchKey);
  } catch (e) {
    // error
  }
}

export function saveSearch(key) {
  try {
    uni.setStorageSync(searchKey, key);
  } catch (e) {
    // error
  }
  return key;
}

export function removeSearch() {
  uni.removeStorageSync(searchKey)
  return ''
}
