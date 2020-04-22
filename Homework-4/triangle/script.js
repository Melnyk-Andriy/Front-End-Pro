let num = Number(prompt("Введите высоту треугольника :"));

if (Number.isNaN(num))
{
  alert("Не правильные данные !");
}
else
{
  let a;
  for (let i = 0; i < num; i++) 
  {
    let b = "*";
    for (let j = 0; j < i; j++)
    {
      b = b + "*"
    }
    a = a + "\n" + b;
    
  console.log(a);
  }
}
