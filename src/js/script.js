
const submitBtn = document.querySelector('.form-submit');

const form = document.querySelector(".form-layout");


const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const emailInput = form.querySelector('#email');
const subjectInput = form.querySelector('#subject');
const massageInput = form.querySelector('#massage-text');


let faultCounter = 0;


const emailValid = () =>{
if(emailInput.value.includes('@')){
	emailInput.classList.remove('invalid');
	faultCounter = 0
}
else{
	
	emailInput.classList.add('invalid');
	faultCounter++;
	
}
}

const inputValid = (input) =>{

	if(input.value.length <3){
		input.classList.add('invalid');
		faultCounter++;
		
	}else{
		input.classList.remove('invalid');
		faultCounter=0;
		
	}
}


// const submitHandler = (event) =>{
// 	event.preventDefault();

// 	// emailValid();

// }


const footerYear = document.querySelector(".footer-year");

const footerYearChangeHandler = () => {
	const year = new Date().getFullYear();

	footerYear.textContent = year;
};

footerYearChangeHandler();

form.addEventListener('submit',  function(event){
	event.preventDefault();
	inputValid(firstNameInput);
	inputValid(lastNameInput);
	emailValid();
	
	console.log(faultCounter);

	if (faultCounter == 0) {
			submitBtn.classList.add('loading')
			submitBtn.disabled = true;

		setInterval( () =>{
			submitBtn.classList.remove('loading')
			submitBtn.disabled = false;
			firstNameInput.value = ''
			lastNameInput.value = '';
			emailInput.value = '';
			subjectInput.value = '';
			massageInput.value = '';
		},3000
		)
	}
})
// submitBtn.addEventListener('button', submitHandler);
