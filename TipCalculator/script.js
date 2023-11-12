const calculatebtn = document.getElementById('calculate');

const billInput= document.getElementById('bill');

const tipInput= document.getElementById('tip');

const total= document.getElementById('total')



function calculateTotalBill(){
    const bill= billInput.value;
    const tip= tipInput.value;

    const totalbill= bill*(1+tip/100);

    total.innerHTML=totalbill.toFixed(2);
}

calculatebtn.addEventListener("click", calculateTotalBill)