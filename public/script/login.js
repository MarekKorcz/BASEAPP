document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("form#login a[name=submit]").addEventListener('click', (event) => {

        event.preventDefault

        let email = document.querySelector("[name='email']")
        let isEmailValid = false

        if (email.value == '') {
            
            if(!email.classList.contains("input-error")) {
                
                email.classList.add("input-error")
                isEmailValid = false
            }
            
        } else if (email.value !== '') {
            
            if (validateEmail(email.value)) {

                isEmailValid = true
                
                if(email.classList.contains("input-error")) {
                
                    email.classList.remove("input-error")
                }
                
            } else {
                
                if(!email.classList.contains("input-error")) {
                
                    email.classList.add("input-error")
                    isEmailValid = false
                }
            }
        }

        let password = document.querySelector("[name='password']")
        let isPasswordValid = false

        if (password.value == '') {
            
            if(!password.classList.contains("input-error")) {
                
                password.classList.add("input-error")
                isPasswordValid = false
            }
            
        } else {

            isPasswordValid = true
            
            if (password.classList.contains("input-error")) {
                
                password.classList.remove("input-error")
            }
        }

        if (isEmailValid && isPasswordValid) {

            logIn(email.value, password.value)
        }
    })
})

function logIn (data) {

    return fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

                // figure out a way to protect request in express!!!!
                // https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token
            },
            body: JSON.stringify({
                data: data
            })
        })
        .then((res) => res.json())
        .then((data) => {            
            if (data.type === "success") {
                
                // console.log(data)
                window.location.replace("http://localhost:5000/servers.html")
            }
        });
}

function validateEmail(email) 
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
}