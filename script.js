//dom elements
const viewers = document.querySelector("span.viewers");
const rangeInput =document.getElementById('vol');
const cost=document.querySelector('span.cost');
const slider = document.querySelector('div.slider')
const swichToggle=document.querySelector('input.swich');
const swichText = document.querySelector('span.swich-text');

// We create data, price and views,
const priceData = {
    1: '8',
    2: '12',
    3: '16',
    4: '24',
    5: '36',
}

const viewersData = {
    1: '10K',
    2: '50K',
    3: '100K',
    4: '500K',
    5: '1M',
}
/*The function returns the number of views, 
from viewersData, according to the given parameter*/
function pageViewers(x){
    return viewersData[x]
};
/*When listening to the range, we pass the received values to our functions
 as parameters, and we provide the result to outputs.*/
rangeInput.addEventListener("input", function(){
  let rangeInputValue=this.value
   cost.innerHTML=(swichPrice(rangeInputValue)+'.00');
   viewers.innerHTML=pageViewers(rangeInputValue);
   swichToggle.addEventListener('input', () => {
    cost.innerHTML=(swichPrice(rangeInputValue)+'.00'); 
});
   
   });
   /*The function returns the amount of the price, from priceData,
    yearly or monthly, depending on the check box observed.*/
function swichPrice(x){
    if(swichToggle.checked){
        return ((priceData[x])*(0.75*12))||
       (swichText.textContent = "/year")
    } else {
        return priceData[x] ||
        (swichText.textContent = "/month")
    }
};
/*If the client pressed the check button before acting on the range,
 in this case we need this function, because we cannot get the value 
 from the range listener. without clicking on it*/
swichToggle.addEventListener('input', () => {
    if(swichToggle.checked){
        cost.innerHTML='144.00'
    }else{
        cost.innerHTML='16.00'
    }
    this.removeEventListener
    });

















