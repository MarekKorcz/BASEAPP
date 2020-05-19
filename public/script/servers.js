document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("ul button").addEventListener('click', (event) => {

        let clickedButtonParent = event.target.parentNode
        let clickedButtonParentClassListLength = clickedButtonParent.classList.length

        // getting last class list element to have a hook on a clicked server element
        let serverName = clickedButtonParent.classList.item(clickedButtonParentClassListLength - 1)

        getServerResponse(serverName)
    })
});

function getServerResponse (serverName) {

    return fetch('http://localhost:5000/send-request-to-server', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

                // figure out a way to protect request in express!!!!
                // https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token
            },
            body: JSON.stringify({
                serverName: serverName
            })
        })
        .then((res) => res.json())
        .then((data) => {            
            if (data.type === "success")
            {
                console.log(data)
            }
        });
}