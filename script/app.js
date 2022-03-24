//console.log("Helow World!");
//alert("Hellow World!");
const openPopUp = document.getElementById('open_pop_up');
console.log(openPopUp);
const closePopUp = document.getElementById('close_pop_up');
console.log(closePopUp);
const popUp = document.getElementById('popup');

openPopUp.addEventListener('click', ()=>{
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', ()=>{
	popUp.classList.remove('active');
})
