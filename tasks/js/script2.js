function getRandomNum(minval, maxVal) {
    return minval + Math.floor(Math.random() * (maxVal - minval + 1))
}
function getShiftedYear({month, year}, n) {
    let whatMonth = month + n
    let whatYear = Math.floor(whatMonth / 12)
    if (whatMonth > 12) return year + whatYear
    else return year
}

const day = getRandomNum(1, 30)
const month = getRandomNum(1, 12)
const year = 2023

const userDate = {
    day,
    month,
    year
}
console.log(userDate)

const n = parseInt(prompt('n ='))
const findedYear = getShiftedYear(userDate, n)

result1.innerHTML = `Через ${n} месяцев будет год = <span>${findedYear}</span>`