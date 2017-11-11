
module.exports = value => {
  value = String(value)
  if (value.length >= 2) return value
  else return `0${value}`
}
