module.exports = class Store {
  constructor(storage) {
    if (this.storage) return this.storage
    this.storage = storage
  }

  getValue(key) {
    return this.storage.get(key)
  }

  setValue(key, value) {
    this.storage.update(key, value)
  }
}