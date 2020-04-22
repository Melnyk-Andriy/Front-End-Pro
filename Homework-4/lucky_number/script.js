const WIN = ("Вы выиграли!");
const ERROR = ("Не правильные данные!");
alert("Игра - Угадай число");

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const ourNumber = getRandomInt(0, 11);
let userNumber = Number(prompt("Введите число(от 0 до 10) :", 0));

while (ourNumber !== userNumber)
{
    userNumber = Number(prompt("Не правильно. Введите число ещё раз :"));
    if (Number.isNaN(userNumber))
    {
        alert(ERROR);
    }
}
alert(WIN);
