const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step => {
		return step.classList.contains("active")
})

if (currentStep < 0) {
	currentStep = 0
	showCurrentStep()
}

multiStepForm.addEventListener("click", e => {
	let incrementor
	const inputs = [...formSteps[currentStep].querySelectorAll("input")]
	const allValid = inputs.every(input => input.reportValidity())
	if (e.target.matches("[data-next]") && allValid)
		currentStep += 1
	else if (e.target.matches("[data-back]"))
		currentStep -= 1
	else
		return
	showCurrentStep()
})

function showCurrentStep() {
	formSteps.forEach((step, index) => {
		step.classList.toggle("active", index === currentStep)
	})
}