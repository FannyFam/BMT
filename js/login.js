
let contactForm = document.getElementById('contact-form')
// console.log(contactForm)

//attach eventlistener to submit tag
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
//prevent the page from refresh 
    let fullname = document.getElementById('full-name').value
    let email = document.getElementById('email').value
    let domain = document.getElementById('domain').value
    let userid = document.getElementById('userid').value

    if (fullname == "" || email == "") {
        alert("Full name and email fields must not be empty")
        return
        // Return - not to execute remaining code and exit the function immediately
    }

    // validate email input
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
        alert('email is not valid')
        return
    }

    if (domain == "" || userid == "") {
        alert("Domain and user ID must not be empty")
        return
    }
    
    let instr = document.getElementById('instr').checked
    if (!instr) {
        alert('Please read the instructions')
        return
    }
    
    window.location.href = "quiz.html";

} )
