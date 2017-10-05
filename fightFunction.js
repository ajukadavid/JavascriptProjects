//stats for first fighter


function fighter1(power1, speed1){
   this.power1 = power1;
   this.speed1 = speed1;
    return power1*speed1
}
//stats for second fighter


function fighter2(power2, speed2){
    this.power2 = power2;
    this.speed2 = speed2;
    return power2*speed2;
}
/// DO NOT TAMPER WITH ANY CODE ABOVE

//function to fight

//EDIT THE VALUES OF THE SPEED AND POWER
//AND CHANGE THE NAME WHEN CALLING THE FIGHT FUNCTION
function fight(name1, name2){
    this.name1 = name1;
    this.name2 = name2;
    if(fighter1(13, 12) > fighter2(29, 19)){
        console.log(name1 + " wins the battle");
    }else{
        console.log(name2 + " wins the battle");
    }
}
console.log(fight("white people", "black people"))