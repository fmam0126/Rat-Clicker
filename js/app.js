const moneyElement = document.getElementById("money")



let money = 0
let clickpower = 1
let autoclickpower = 0

function ratclick(){
    money = money + clickpower
    moneyElement.textContent = money
}

function autoclicker(){
    money = money + autoclickpower
    moneyElement.textContent = money
}

setInterval(() => {
    autoclicker()
}, 1000);





function buyclickpower1(){
    if (money >= 10){
        money = money - 10
        clickpower = clickpower + 1
        moneyElement.textContent = money  
    }else{
        alert("you have no money!")
    }

}
function buyallclickpower1(){
    let boughtSomething = false;
    while (money >= 10){
        money -= 10
        clickpower += 1
        boughtSomething = true
    }
    if (boughtSomething){
        console.log(boughtSomething);
        
        moneyElement.textContent = money
    } else {
        console.log(boughtSomething)
        alert("you have no money!")
    }
}

function buyclickpower10(){
    if (money >= 100){
        money = money - 100
        clickpower = clickpower + 10
        moneyElement.textContent = money  
    }else{
        alert("you have no money!")
    }

}
function buyautoclicker1(){
    if (money >= 200){
        money = money - 200
        autoclickpower = autoclickpower + 1
        moneyElement.textContent = money  
    }else{
        alert("you have no money!")
    }

}


