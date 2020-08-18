document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("form#create a[name=create]").addEventListener('click', (event) => {

        event.preventDefault

        let host = document.querySelector("[name='host']")
        let isHostValid = false

        if (host.value == '') {
            
            if(!host.classList.contains("input-error")) {
                
                host.classList.add("input-error")
                isHostValid = false
            }
            
        } else if (host.value !== '') {
            
            isHostValid = true
            
            if(host.classList.contains("input-error")) {
            
                host.classList.remove("input-error")
            }
        }

        let user = document.querySelector("[name='user']")
        let isUserValid = false

        if (user.value == '') {
            
            if(!user.classList.contains("input-error")) {
                
                user.classList.add("input-error")
                isUserValid = false
            }
            
        } else {

            isUserValid = true
            
            if (user.classList.contains("input-error")) {
                
                user.classList.remove("input-error")
            }
        }

        let port = document.querySelector("[name='port']")
        let isPortValid = false

        if (port.value == '') {
            
            if(!port.classList.contains("input-error")) {
                
                port.classList.add("input-error")
                isPortValid = false
            }
            
        } else {

            isPortValid = true
            
            if (port.classList.contains("input-error")) {
                
                port.classList.remove("input-error")
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

        if (isHostValid && isUserValid && isPortValid && isPasswordValid) {

            createServer(host.value, user.value, port.value, password.value)
        }
    })
});

function createServer (host, user, port, password) {

    return fetch('http://localhost/server/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

                // figure out a way to protect request in express!!!!
                // https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token
            },
            body: JSON.stringify({
                host,
                user,
                port,
                password
            })
        })
        .then((res) => res.json())
        .then((data) => {   
            
            console.log(data)

            if (data.status === "success") {
                
                window.location.replace("http://localhost/server/list")
            }
        });
}