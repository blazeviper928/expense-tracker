let balance = 0;
let income = 0;
let expense = 0;

let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

let balanceDisplay = document.getElementById("balance");
let incomeDisplay = document.getElementById("income");
let expenseDisplay = document.getElementById("expense");

addBtn.addEventListener("click", addTransaction);

function addTransaction(){

let desc = document.getElementById("desc").value;
let amount = Number(document.getElementById("amount").value);

if(desc === "" || amount === 0){
alert("Enter valid data");
return;
}

if(amount > 0){
income += amount;
}else{
expense += Math.abs(amount);
}

balance += amount;

balanceDisplay.innerText = balance;
incomeDisplay.innerText = income;
expenseDisplay.innerText = expense;

let li = document.createElement("li");

li.innerHTML = `
${desc} : ₹${amount}
<button class="delete">X</button>
`;

list.appendChild(li);

li.querySelector(".delete").addEventListener("click", function(){

balance -= amount;

if(amount > 0){
income -= amount;
}else{
expense -= Math.abs(amount);
}

balanceDisplay.innerText = balance;
incomeDisplay.innerText = income;
expenseDisplay.innerText = expense;

li.remove();

});

document.getElementById("desc").value="";
document.getElementById("amount").value="";

}