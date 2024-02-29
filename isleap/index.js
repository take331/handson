const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector("#output");

btn.onclick = () => {
    let year = input.value;

    if (isLeap(year) === true) {
        output.textContent = `${year} is Leap Year.`;
    } else {
        output.textContent = `${year} is not Leap Year.`;
    }
}

function isLeap(year) { 
    let ans = false;
    if (year % 4 === 0) {
        ans = true;
    }
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            ans = true;
        } else {
            ans = false;
        }
    }
    
    return ans
}