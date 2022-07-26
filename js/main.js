const range = document.querySelector(".range"),
price = document.querySelector(".price");

range.addEventListener("input",() =>{
    price.innerHTML = range.value;
})