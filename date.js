const dateToUnix = (date) => {
  if (!date) throw new Error('date is not provided!')
  if (date instanceof Date) return Math.floor(date.getTime() / 1000)
  return Math.round(Date.parse(date) / 1000)
}

const today = () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  return (today = mm + '/' + dd + '/' + yyyy)
}
const unixToDate = (unix) => {
  let date = new Date(unix * 1000)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = date.getFullYear()

  return (date = mm + '/' + dd + '/' + yyyy)
}

const sixtyDaysAgo = () => {
  return dateToUnix(today()) - 5184000
}

module.exports = {
  dateToUnix,
  today,
  tenDaysAgo: sixtyDaysAgo,
  unixToDate,
}
