const currencyOne=document.getElementById('currency-one');
const currencyTwo=document.getElementById('currency-two');
const amountOne=document.getElementById('amount-one');
const amountTwo=document.getElementById('amount-two');
const swap=document.getElementById('swap')
const rateEl=document.getElementById('rate')


//Functions
function calculate(){
    const currency_one=currencyOne.value
    const currency_two=currencyTwo.value
fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
.then(res=> res.json())
.then(data =>{
    const rate = data.rates[currency_two]
rateEl.innerText = `1 ${currencyOne.value} = ${rate} ${currencyTwo.value}`;
amountTwo.value=(amountOne.value * rate).toFixed(2);

})
}
function swapEl(){
    const temp=currencyOne.value
    currencyOne.value=currencyTwo.value
    currencyTwo.value=temp
    calculate();
}


//Event Listners
currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);
swap.addEventListener('click',swapEl)


calculate();

