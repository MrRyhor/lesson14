
let listOfSites = [
    {
        company: 'Sepultura',
        owner: 'Max Cavalera',
        sponsors: [
            {
                firstName: 'Ros',
                secondName: 'Robinson',
                investmentAmount: 102000
            },
            {
                firstName: 'Terry',
                secondName: 'Date',
                investmentAmount: 40000
            },
            {
                firstName: 'Jason',
                secondName: 'Leeway',
                investmentAmount: 60000
            }
        ],
        year: 2002,
        price: 45000
    },
    {
        company: 'Machine Head',
        owner: 'Rob Flyn',
        sponsors: [
            {
                firstName: 'Jerry',
                secondName: 'Botriil',
                investmentAmount: 10000
            },
            {
                firstName: 'Rick',
                secondName: 'Rubin',
                investmentAmount: 25000
            }
        ],
        year: 2007,
        price: 27000
    },
    {
        company: 'Pantera',
        owner: 'Dimbag Darell',
        sponsors: [
            {
                firstName: 'Zues',
                secondName: 'Allmighty',
                investmentAmount: 60000
            },
            {
                firstName: 'Rick',
                secondName: 'Rubin',
                investmentAmount: 35000
            },
            {
                firstName: 'Bob',
                secondName: 'Rock',
                investmentAmount: 25000
            }
        ],
        year: 2010,
        price: 53000
    },
    {
        company: 'Testament',
        owner: 'Chuck Billy',
        sponsors: [
            {
                firstName: 'Gregory',
                secondName: 'Peck',
                investmentAmount: 10000
            },
            {
                firstName: 'Jason',
                secondName: 'Mamoa',
                investmentAmount: 5000
            },
            {
                firstName: 'Kirk',
                secondName: 'Weindstein',
                investmentAmount: 7000
            }
        ],
        year: 2012,
        price: 9000
    }
]

//========================== 1 загальну вартість усіх сайтів ==========================================================
const totalPriceOfAllSites = listOfSites.reduce((prevSum, site) => prevSum + site.price, 0)
document.write(`<p>1) Загальну вартість усіх сайтів = <span>${totalPriceOfAllSites}</span></p><br>`)

//========================== 2 кількість сайтів, що було зроблено між 2000 та 2009 рр.==========================================================
const qntSitesBetween2000And2009 = listOfSites.reduce((prevQnt, site) => site.year >= 2000 && site.year <= 2009 ? prevQnt + 1 : prevQnt, 0)
document.write(`<p>2) Кількість сайтів, що було зроблено між 2000 та 2009 рр. = <span>${qntSitesBetween2000And2009}</span></p><br>`)

//========================== 3 кількість сайтів, де сума спонсорських вкладень була більшою за 100000==========================================================
//--------------------------------------------- (1) -------------------------------------
function getQntOfSites(listOfSites) {
    let arr = [], qntSites
    for (const site of listOfSites) {
        let sumOfInvestment = site.sponsors.reduce((prevSum, sponsors) => prevSum + sponsors.investmentAmount, 0)
        arr.push(sumOfInvestment)
        qntSites = arr.reduce((prevQnt, element) => element > 100000 ? prevQnt + 1 : prevQnt, 0)
    }
    return qntSites
}

const qntSitesWithInvestmentsGreaterThan100000 = getQntOfSites(listOfSites)
document.write(`<p>3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 = <span>${qntSitesWithInvestmentsGreaterThan100000}</span></p><br>`)

//--------------------------------------------- (2) -------------------------------------
// const sumOfInvestment = listOfSites.filter(sites => sites.sponsors.reduce((prevSum, sponsors) => prevSum + sponsors.investmentAmount, 0) > 100000).length
// console.log(sumOfInvestment)

//========================== 4 створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)==========================================================
//--------------------------------------------- (1) -------------------------------------
const investorsNames = listOfSites.map(site => site.sponsors.map(sponsor => `${sponsor.firstName} ${sponsor.secondName}`))
document.write(`<p>4) Створити загальний список усіх спонсорів = [<span>${investorsNames}</span>]</p><br>`)

//--------------------------------------------- (2) -------------------------------------
//const investorsNames = listOfSites.map(site => site.sponsors.map(sponsor => { return { firstName: sponsor.firstName, secondName: sponsor.secondName } }))

//--------------------------------------------- (3) -------------------------------------
// function getInvestorsNames() {
//     let arr = []
//     for (const sites of listOfSites) {
//         const investorsNames = sites.sponsors.map(sponsors => `${sponsors.firstName} ${sponsors.secondName}`)
//         arr.push(investorsNames)
//     }
//     return arr
// }

// const arrInvestorsNames = getInvestorsNames(listOfSites)
// document.write(`<p>4) Створити загальний список усіх спонсорів = [<span>${arrInvestorsNames}</span>]</p><br>`)

//========================== 5 знайти рік, коли прибуток був найбільшим==========================================================

let maxPrice = listOfSites[0].price
const yearWithMaxPrice = listOfSites.find(site => {if(site.price > maxPrice) return site.year})
console.log(yearWithMaxPrice)
document.write(`<p>5) знайти рік, коли прибуток був найбільшим = <span>${yearWithMaxPrice.year}</span></p><br>`)

//========================== 6 упорядкувати список за спаданням прибутку==========================================================
const sortListOfSites = listOfSites.sort((price1, price2) => price2.price - price1.price)
console.log(sortListOfSites)
document.write(`<p>6) Упорядкувати список за спаданням прибутку = <span>См. в консоль</span></p><br>`)

//========================== 7 Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000==========================================================
//--------------------------------------------- (1) -------------------------------------
const sitePriceLessThan10000 = listOfSites.filter(site => site.price < 10000) 
const sitePriceGreaterThan10000 = listOfSites.filter(site => site.price > 10000)
console.log(sitePriceLessThan10000)
console.log(sitePriceGreaterThan10000)
document.write(`<p>7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000 = <span>См. в консоль</span></p><br>`)

//--------------------------------------------- (2) -------------------------------------
// const sitePriceLessThan10000 = [],
// sitePriceGreaterThan10000 = []

// for (const site of listOfSites) {
//     if (site.price < 10000)
//     sitePriceLessThan10000.push(site)
//     else
//     sitePriceGreaterThan10000.push(site) 
// }
// console.log(sitePriceLessThan10000)
// console.log(sitePriceGreaterThan10000)





