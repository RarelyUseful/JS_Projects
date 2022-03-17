const dataJSON = require('./Data.json');

// I
(function spent2014(json) {
    let sum = Number(0);
    // json.forEach(e => {
    //     if((e.detailsOfPayent.date).includes('-2014', 5)){
    //         sum+=Number(e.cost); 
    //     }
    // });
    sum = json
    .filter((item) => item.detailsOfPayent.date.includes('2014'))
    .reduce((prev, curr) => (prev += Number(curr.cost)), 0);
    console.log('---Spent in 2014: ' +sum);
})(dataJSON);

// II
(function earningsByCompany(json) {
    let earnMap = new Map();
    json.forEach(e => {
        let currentComp = e.detailsOfPayent.company;
        let currentCost = Number(e.cost);
        if(earnMap.has(currentComp)){
            let cost = Number(earnMap.get(currentComp));
            cost+=Number(currentCost);
            earnMap.set(currentComp, cost);
        }
        else {earnMap.set(currentComp, currentCost)}
    });
    console.log('---Earn Map of companies: ');
    for(let ele of earnMap.keys()){
        console.log(ele + ": " + earnMap.get(ele));}
})(dataJSON);

// III
(function spendingsByType(json) {
    let earnMap = new Map();
    json.forEach(e => {
        let currentType = e.detailsOfPayent.Type;
        let currentCost = Number(e.cost);
        if(earnMap.has(currentType)){
            let cost = Number(earnMap.get(currentType));
            cost+=Number(currentCost);
            earnMap.set(currentType, cost);
        }
        else {earnMap.set(currentType, currentCost)}
    });
    console.log('---Spendings by TYPE: ');
    for(let ele of earnMap.keys()){
        console.log(ele + ": " + earnMap.get(ele));}
})(dataJSON);

// IV
// (function SpendingByMonth(json) {
//     for (let i = 1; i <= 12; i++){
//         let month = String(i);
//         let sum = Number(0);
//         json.forEach(e => {
//             if((e.detailsOfPayent.date).includes((month+'-'), 3)){
//                 sum=sum+Number(e.cost); 
//             }
//         });
//     console.log(`Spent in month ${month}: ${sum}`);
//     }
// })(dataJSON);
const monthAsWord = new Array(13);
monthAsWord[0] = "Error?";
monthAsWord[1] = "Jan";
monthAsWord[2] = "Feb";
monthAsWord[3] = "Mar";
monthAsWord[4] = "Apr";
monthAsWord[5] = "May";
monthAsWord[6] = "Jun";
monthAsWord[7] = "Jul";
monthAsWord[8] = "Aug";
monthAsWord[9] = "Sep";
monthAsWord[10] = "Oct";
monthAsWord[11] = "Nov";
monthAsWord[12] = "Dec";
(function SpendingsByMonthV2(json) {
    let earnMap = new Map();
    json.forEach(e => {
        let datep = (e.detailsOfPayent.date).split('-');
        let currentMonth = monthAsWord[Number(datep[1])];
        let currentCost = Number(e.cost);
        if(earnMap.has(currentMonth)){
            let cost = Number(earnMap.get(currentMonth));
            cost+=Number(currentCost);
            earnMap.set(currentMonth, cost);
        }
        else {earnMap.set(currentMonth, currentCost)}
    });
    console.log('---Spendings by MONTH: ');
    for(let ele of earnMap.keys()){
        console.log(ele + ": " + earnMap.get(ele));}
})(dataJSON);

// V
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

(function earningsByDayOfWeek(json) {
    let earnMap = new Map();
    json.forEach(e => {
        let datep = (e.detailsOfPayent.date).split('-');
        let date = new Date(datep[2], datep[1], datep[0]);
        let currentDate = Number(date.getDay()); //it's more DAY than date, too lazy to change code.
        let currentCost = Number(e.cost);
        if(earnMap.has(currentDate)){
            let cost = Number(earnMap.get(currentDate));
            cost+=Number(currentCost);
            earnMap.set(currentDate, cost);
        }
        else {earnMap.set(weekday[currentDate], currentCost)}
    });
    console.log('---Spendings by DAY of the week: ');
    for(let ele of earnMap.keys()){
        console.log(ele + ": " + earnMap.get(ele));}
})(dataJSON);