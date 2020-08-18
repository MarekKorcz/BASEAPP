document.addEventListener("DOMContentLoaded", () => {

    // console.log(document.cookie)

    let logoutButton = document.querySelector("a#logout")

    if (logoutButton) {

        logoutButton.addEventListener('click', () => {

            document.cookie = "token=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

            window.location.replace("http://localhost/login")
        })
    }
    

    let createButton = document.querySelector("a#create")

    if (createButton) {

        createButton.addEventListener('click', () => {

            window.location.replace("http://localhost/server/create")
        })
    }


    let listButton = document.querySelector("a#list")

    if (listButton) {

        listButton.addEventListener('click', () => {

            window.location.replace("http://localhost/server/list")
        })
    }
})