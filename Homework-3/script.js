const ERROR = "Не правильные данные!";
const name = prompt("Введите имя", "имя");

if (isNaN(name))
{
    const age = prompt("Сколько вам лет ?", 18);

    if(isNaN(age))
    {
        alert(ERROR);
    }
    else
    {
        const question = confirm("Алкоголь употребляем ?");
        if (question)
        {
            if(age > 40)
            {
                alert("Не злоупотребляйте!");
            }
            else if (age < 18)
            {
                alert("Ты что?! Маме расскажу!");
            }
            else 
            {
                alert( "Только водку с пивом не мешай...");
            }
        } 
        else if (!question)
        {
            alert("Так держать!");
        }
        else
        {
            alert(ERROR);
        }
    }
}
else 
{
    alert(ERROR);
}
