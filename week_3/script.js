var x=document.getElementById('#first').innerHTML=(Math.floor(Math.random()*10));
console.log(x)
// console.log(Math.floor(Math.random()*10))

function main() {
	first_row();
	first_column();
	second_row();
	second_column();
	third_row();
	third_column();
	fourth_row();
	fourth_column();
	fifth_row();
	fifth_column();
	sixth_row();
	sixth_column();
	seventh_row();
	seventh_column();
	eighth_row();
	eighth_column();
	nineth_row();
	nineth_column();

	
}


function first_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.first_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function first_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#first');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function second_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.second_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function second_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#second');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function third_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.third_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function third_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#third');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function fourth_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.fourth_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function fourth_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#fourth');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function fifth_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.fifth_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function fifth_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#fifth');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function sixth_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.sixth_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function sixth_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#sixth');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function seventh_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.seventh_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function seventh_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#seventh');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function eighth_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.eighth_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function eighth_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#eighth');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}

function nineth_row() {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('.ninth_row');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}	

function nineth_column () {
	var array = []
	var sumr =0;
	var element;
 	var parent = document.querySelector('.main');
	var child = parent.querySelectorAll('#nineth');
	for ( i = 0; i <child.length; i++) {
		element=child[i].value;	
		array.push(element);	
		}
	for (j = 0; j <array.length ; j++) {	
		sumr+=Number(array[j]);	
	}
	if(sumr == 45) {
		alert('Valid')
	}
	else{
		alert('invalid')
	}
	return(sumr)
}