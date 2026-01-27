const moneyElement = document.getElementById("money")



let money = 0
let clickpower = 1
let autoclickpower = 0

function ratclick(){
    money = money + clickpower
    moneyElement.innerText = money
}

function autoclicker(){
    money = money + autoclickpower
    moneyElement.innerText = money
}

setInterval(() => {
    autoclicker()
}, 1000);





function buyclickpower1(){
    if (money >= 10){
        money = money - 10
        clickpower = clickpower + 1
        moneyElement.innerText = money  
    }else{
        alert("you have no money!")
    }

}
function buyclickpower10(){
    if (money >= 100){
        money = money - 100
        clickpower = clickpower + 10
        moneyElement.innerText = money  
    }else{
        alert("you have no money!")
    }

}
function buyautoclicker1(){
    if (money >= 200){
        money = money - 200
        autoclickpower = autoclickpower + 1
        moneyElement.innerText = money  
    }else{
        alert("you have no money!")
    }

}


