// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if (scrollY > sectionId && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }

        else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)


// SHOW SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// CALCULATE
const calculateForm = document.getElementById('calculate-form')
const calculateCm = document.getElementById('calculate-cm')
const calculateKG = document.getElementById('calculate-kg')
const calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    if (calculateCm.value === '' || calculateKG.value === '') {
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the Height and Weight'

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    }

    else {
        const cm = calculateCm.value / 100
        const kg = calculateKG.value
        const bmi = Math.round(kg / (cm * cm))

        if (bmi < 18.5) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
        }

        else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        }

        else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
        }

        calculateCm.value = ''
        calculateKG.value = ''

        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 4000)
    }
}
calculateForm.addEventListener('submit', calculateBmi)



// EMAILJS
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your email'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    }

    else{
        emailjs.sendForm('service_6fvv452','template_b1cizga','#contact-form','3YQB1kpc-K0ktz2YR')
            .then(() =>{
                console.log("ok")
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully'

                setTimeout(() =>{
                    contactMessage.textContent=''
                }, 3000)
            }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)