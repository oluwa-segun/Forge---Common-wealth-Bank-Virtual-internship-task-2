const nameField = document.querySelector('#name')
const checkout = document.querySelector('#checkout')
const cup = document.querySelector('input[value=cup]')
const cone = document.querySelector('input[value=cone]')
const type = document.querySelectorAll('input[name=type]')
const priceCoco = document.querySelector('#prod1')
const priceCaramel = document.querySelector('#prod2')
const priceBerry = document.querySelector('#prod3')
const inputCoco = document.querySelector('input[name=coco]')
const inputCaramel = document.querySelector('input[name=caramel]')
const inputBerry = document.querySelector('input[name=berry]')
const test = document.querySelector('#btn')



// test.addEventListener('click', (e) =>{
//   const price1 = priceCoco.textContent
//   const input1 = inputCoco.value
//   const result1 = price1 * input1

//   const price2 = priceCaramel.textContent
//   const input2 = inputCaramel.value
//   const result2 = price2 * input2

//   const price3 = priceBerry.textContent
//   const input3 = inputBerry.value
//   const result3 = price3 * input3

//   const total = result1 + result2 + result3;

//   console.log(total)


//})







//To verify if the radio input was clicked
 for (each of type) {

     if (each.checked) {
       console.log("checked")
     }else{
       console.log("object")
     }
 
}

checkout.addEventListener('click', (e) =>{

  const price1 = priceCoco.textContent
  const input1 = inputCoco.value
  const result1 = price1 * input1

  const price2 = priceCaramel.textContent
  const input2 = inputCaramel.value
  const result2 = price2 * input2

  const price3 = priceBerry.textContent
  const input3 = inputBerry.value
  const result3 = price3 * input3

  const total = result1 + result2 + result3;

  if (nameField.value ==="") {
    alert("hi there, please input your name")
  }else if(cup.checked){
      alert("New order from: " + nameField.value + ' in type ' + cup.value + ": Your total order cost is " + "$" + total )
  }else if(cone.checked){
    alert("New order from: " + nameField.value + ' in type ' + cone.value + ": Your total order cost is " + "$" + total)
  }
})



nameField.addEventListener('keypress', (e) =>{
  const name = e.target.value
  if (e.key === 'Enter') {

    for (each of type) {

      if (each.checked) {
          alert('What a great Gelato choice ' + name + "" + " " + each.value + " is a great option!")
      } else {
        console.log("object")
      }

    }
    // alert('What a great Gelato choice ' + name + "" + type)
  }
})




