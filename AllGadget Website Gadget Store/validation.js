let registForm = document.getElementById("register-form")
let erorMessage = document.getElementById("error")

registForm.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})

function errorText(eror) {
    erorMessage.innerHTML = eror
}

function validateName(fullname) {
    if (fullname.length > 0) return true
    else return false
}

function validateGender(gender) {
    let selected = gender.selectedIndex
    if (selected == 0) return false
    else return true
}

function validateEmail(email) {
    if (email.length == 0) return 0

    let checkAtEmail = email.split("@")
    if (checkAtEmail.length != 2) return 1

    if (checkAtEmail[0] == '' || checkAtEmail[1] == '') return 1

    let checkDotEmail = checkAtEmail[1].split(".")
    if (checkDotEmail.length == 1) return 2

    for (let i = 0; i < checkDotEmail.length; i++) {
        if (checkDotEmail[i] == "") return 2
    }
    return -1
}

function validatePhoneNumber(phonenum) {
    if (phonenum.length < 4 || phonenum.length > 12) return 0
    else return -1
}

function validatePassword(password) {
    if (password.length < 6 || password.length > 20) return 0
    let haveLetter = false
    let haveNumber = false

    for (let i = 0; i < password.length; i++) {
        if(isNaN(password[i])) haveLetter = true
        else haveNumber = true
    }
    if(!haveLetter || !haveNumber) return 1
    return -1
}

function validateForm() {
    //fullname
    let regisName = document.getElementById("fullname")
    let validName = validateName(regisName.value)
    if(!validName) {
        errorText("Sign Up Failed : Please enter your name first")
        return
    }

    //gender
    let genderPicker = document.getElementById("gender")
    if(!validateGender(genderPicker)) {
        errorText("Sign Up Failed : Please identify your gender first")
        return
    }

    //email
    let regisEmail = document.getElementById("email")
    let validEmail = validateEmail(regisEmail.value)
    if(validEmail > -1) {
        if(validEmail == 0) {
            errorText("Sign Up Failed : Email must be filled")
        }
        else if(validEmail == 1) {
            errorText("Sign Up Failed : Email must contain '@'")
        }
        else if(validEmail == 2) {
            errorText("Sign Up Failed : Email must contain '.'")
        }
        return
    }

    //phone
    let regisPhonenum =  document.getElementById("phonenumber")
    let validPhone = validatePhoneNumber(regisPhonenum.value)
    if(validPhone > -1) {
        if(validPhone == 0) {
            errorText("Sign Up Failed : Phone must be 4 - 12 Numbers")
            return
        }
        return
    }

    //password
    let regisPassword = document.getElementById("password")
    let validPassword = validatePassword(regisPassword.value)
    if(validPassword > -1) {
        if(passwordValidation == 0) {
            errorText("Sign Up Failed : Password must be 5 - 15 characters")
        }
        else if(passwordValidation == 1) {
            errorText("Sign Up Failed : Password must be at least 1 letter and 1 number")
        }
        return
    }

    //confirmpassword
    let conPassword = document.getElementById("conpassword")
    let validconPass = validatePassword(conPassword.value)
    if(validconPass != validPassword) {
        errorText("Sign Up Failed : Confirm Password must be same with the password you entered")
        return
    }

    //terms & policy
    let checkbox = document.getElementById("terms-policy")
    if(!checkbox.checked) {
        errorText("Sign Up Failed : You must agree to AllGadget Terms & Policy")
        return
    }

    errorText("")
    alert("Sign Up Succeded")
    window.location.assign('index.html')

    console.log(regisName.value)
    console.log(genderPicker.value)
    console.log(regisEmail.value)
    console.log(regisPhonenum.value)
    console.log(regisPassword.value)
    console.log(conPassword.value)


}
