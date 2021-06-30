console.log("This is Project on form validation");

const name = document.getElementById("Username");
const email = document.getElementById("emailid");
const phone = document.getElementById("phone");
validEmail=false;
validUser=false;
validPhone=false;
// console.log(name,email,phone);
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    console.log("name is blurred");
    // Valiadte name here
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it matched");
        name.classList.remove("is-invalid");
        validUser=true;

    }
    else {
        console.log('no match');
        name.classList.add("is-invalid");
        validUser=false;

    }
});

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Valiadte name here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it matched");
        email.classList.remove("is-invalid");
        validEmail=true;

    }
    else {
        console.log('no match');
        email.classList.add("is-invalid");
        validEmail=false;

    }
});

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Valiadte name here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it matched");
        phone.classList.remove("is-invalid");
        validPhone=true;

    }
    else {
        console.log('no match');
        phone.classList.add("is-invalid");
        validPhone=false;

    }
});

let submit=document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    // Submit your form here
    if(validEmail && validUser && validPhone){
        console.log('Phone,email and user are valid.Submitting the form');
        let success=document.getElementById('success');
        success.classList.add('show');
        //  failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('One of Phone,email or user are not valid.Hence not submitting the form.Please correct the errors and gtry again.');
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('shoW');
        $('#success').hide();
        $('#failure').show();
    }
})