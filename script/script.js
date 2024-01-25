const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')
const openNav = document.querySelector('.burger-btn-box')
const closeNav = document.querySelector('.fa-xmarkl')
const closeBoxNav = document.querySelector('.close-box')
const closeX = document.querySelector('.hide-navigation')
const navDesktop = document.querySelector('.nav-desktop')
const footerYear = document.querySelector('.footer-year')



const formPages = document.querySelectorAll('.opinion-box')
const steps = document.querySelectorAll('.step')
const progressBar = document.querySelector('.progress-bar')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

let currentStep = 1

const handleNAv = () => {
    nav.classList.toggle('nav-active')
    openNav.classList.toggle('hide-nav')
    closeNav.classList.toggle('hide-navigation')
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        closeX.classList.add('hide-navigation') 
        )
        item.addEventListener('click', () =>
        nav.classList.remove('nav-active')
        )
        item.addEventListener('click', () =>
        openNav.classList.remove('hide-nav')
        )
    })
    handleNavItemsAnimation();
}
const handleNavItemsAnimation = () => {
    let delayTime = 0;
    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}



const handleNextBtn = () => {
	currentStep++

	if (currentStep > steps.length) {
		currentStep = steps.length
	}

	handleProgressBar()
}

const handlePrevBtn = () => {
	currentStep--

	if (currentStep < 1) {
		currentStep = 1
	}

	handleProgressBar()
}




const handleProgressBar = () => {
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step')
		} else {
			step.classList.remove('active-step')
		}
	})

	const activeSteps = document.querySelectorAll('.active-step')

	progressBar.style.width = ((activeSteps.length - 1) / (steps.length - 1)) * 100 + '%'

	handleButtons()
    handleFormPage()
}


const handleButtons = () => {
	if (currentStep === 1) {
		prevBtn.disabled = true
	} else if (currentStep === steps.length) {
		nextBtn.disabled = true
	} else {
		prevBtn.disabled = false
		nextBtn.disabled = false
	}
}


const handleFormPage = () => {
	formPages.forEach(page => {
		if (currentStep == page.dataset.number) {
			page.classList.add('active-page')
		} else {
			page.classList.remove('active-page')
		}
	})
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();
navBTN.addEventListener('click', handleNAv)
nextBtn.addEventListener('click', handleNextBtn)
prevBtn.addEventListener('click', handlePrevBtn)