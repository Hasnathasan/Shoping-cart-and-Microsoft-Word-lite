document.getElementById('quantity-increase-btn').addEventListener('click', function(){
    inputValueIncrease('input-mobile' ,true);
    const subTotalValue = subTotalCalc('input-mobile', 1219);
    setValueToText('priceOfMobile', subTotalValue);
});
document.getElementById('btn-case-increase').addEventListener('click', function(){
    inputValueIncrease('input-case' ,true);
    const subTotalValue = subTotalCalc('input-case', 59);
    setValueToText('priceOfCase', subTotalValue);
});
document.getElementById('quantity-decrease-btn').addEventListener('click', function(){
    inputValueIncrease('input-mobile',false);
    const subTotalValue = subTotalCalc('input-mobile', 1219);
    setValueToText('priceOfMobile', subTotalValue);
});
document.getElementById('btn-case-decrease').addEventListener('click', function(){
    inputValueIncrease('input-case' ,false);
    const subTotalValue = subTotalCalc('input-case', 59);
    setValueToText('priceOfCase', subTotalValue);
});
document.getElementById('remove-btn1').addEventListener('click', function(){
    document.getElementById('case-cart').style.display = 'none';
});
document.getElementById('remove-btn2').addEventListener('click', function(){
    document.getElementById('mobile-cart').style.display = 'none';
});
document.getElementById('checkOut').addEventListener('click', function(){
    const subTotalValue = document.getElementById('subTotal');
    const mobileTotal = document.getElementById('priceOfMobile').innerText;
    const casePrice = document.getElementById('priceOfCase').innerText;
    const subTotal = parseInt(mobileTotal) + parseInt(casePrice);
    subTotalValue.innerText = subTotal;
    const tax = document.getElementById('tax').innerText;
    const total = document.getElementById('total');
    const totalCalc = subTotal - parseInt(tax);
    total.innerText = totalCalc; 
});

function subTotalCalc(inputId, eachPrice){
    const inputValue = document.getElementById(inputId).value;
    console.log(inputValue);
    const subTotal = inputValue * eachPrice;
    return subTotal;
};
function inputValueIncrease(inputId ,isIncrease){
    const inputValueString = document.getElementById(inputId);
    const inputValue = parseInt(inputValueString.value);
    if(isIncrease === true){
        const newValue = inputValue + 1;
        inputValueString.value = newValue;
    }
    else{
        const newValue = inputValue - 1;
        inputValueString.value = newValue;
    }
    
};

function setValueToText(id, value){
    const setAddress = document.getElementById(id);
    setAddress.innerText = value;
};
function setValueToInput(id, value){
    const setAddress = document.getElementById(id);
    setAddress.value = value;
};