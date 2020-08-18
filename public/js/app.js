document.addEventListener("DOMContentLoaded", () => {

    // console.log(document.cookie)

    let logoutButton = document.querySelector("a#logout")

    if (logoutButton) {

        logoutButton.addEventListener('click', () => {

            document.cookie = "token=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

            window.location.replace("http://localhost/login")
        })
    }
})