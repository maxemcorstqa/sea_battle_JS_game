var location1 = 3; //Локация корабля
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){

    guess = prompt("Стреляем! (введи цифру от 1 до 7)");
    if(guess < 1 || guess > 7){
        alert("Это не \"от 1 до 7\"");
    }else{
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("Вы выиграли!");
            }
        }else{
            alert("Мимо!");
        }
    }
}
var status = "Вы стреляли по кораблю " + guesses + " раз(а). Ваша точность равна " + (3 / guesses);
alert(status);
alert("Перезагружай страницу - сыграем еще.")