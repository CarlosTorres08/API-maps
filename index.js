function calcular () {
  let number1 = document.getElementById("num1").value
  let number2 = document.getElementById("num2").value
  let n = Number(number1)
  let s = Number(number2)
  let calcular = n + s
  alert(calcular)
  
}
document.getElementById('somar').addEventListener('click', (evento) => {
    // callback aqui
    calcular()
    })
