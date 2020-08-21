document.addEventListener("DOMContentLoaded", () => {

    let serverList = document.querySelector("ul button")

    if (serverList) {
        
        serverList.addEventListener('click', (event) => {

            let clickedButtonParent = event.target.parentNode
            let clickedButtonParentClassListLength = clickedButtonParent.classList.length
    
            // getting last class list element to have a hook on a clicked server element
            let serverName = clickedButtonParent.classList.item(clickedButtonParentClassListLength - 1)
    
            getServerResponse(serverName)
        })
    }

    let deleteButtons = document.getElementsByClassName("delete")

    if (deleteButtons.length) {

        for (let btn of deleteButtons) {

            btn.addEventListener('click', (event) => {

                if(confirm('Do you want to delete this server?')) {

                    let serverId = event.target.getAttribute('data-id')
                    
                    deleteServer(serverId)
                }
            })
        }
    }

    let dateButtons = document.querySelectorAll(`input[name='date']`)

    if (dateButtons.length) {

        for (let dateBtn of dateButtons) {

            dateBtn.addEventListener('change', (event) => {

                let chosenDate = event.target.value
                let serverId = event.target.getAttribute('data-id')

                console.log({chosenDate})
                console.log({serverId})
            })
        }
    }
});

function deleteServer (serverId) {

    return fetch('http://localhost/server/delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

                // figure out a way to protect request in express!!!!
                // https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token
            },
            body: JSON.stringify({
                serverId: serverId,
                // token: getCookie('token')
            })
        })
        .then((res) => res.json())
        .then((data) => {

            if (data.status === "success") {
                let serverButtonElement = document.querySelector(`[data-id='${data.serverId}']`)
                removeServerElementFromWebPage(serverButtonElement, "server-list")
            } else {
                alert('Something might have went wrong')
            }
        });
}

// recursive function to delete element with set timeout
function removeServerElementFromWebPage(element, targetId) {

    if (element.getAttribute('id') !== targetId) {
        // get parent element
        let parentElement = element.parentNode
        // remove child without wanted id
        parentElement.removeChild(element)
        // initiate same function in order to find element with wanted id 
        setTimeout(() => {
            removeServerElementFromWebPage(parentElement, targetId)
        }, 51)
    }
}





// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
// }




function getServerResponse (serverName) {

    return fetch('http://localhost/send-request-to-server', {
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
            if (data.type === "success") {
                
                console.log(data)
            }
        });
}