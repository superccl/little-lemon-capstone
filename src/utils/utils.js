import moment from "moment"

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    return (s = (s * a) % m) / m
  }
}

export const fetchAPI = function (date) {
  const dateInMs = moment(date).valueOf()
  let result = []
  let random = seededRandom(dateInMs)

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00")
    }
    if (random() < 0.5) {
      result.push(i + ":30")
    }
  }
  return result
}
export const submitAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 2000)
  })
}
