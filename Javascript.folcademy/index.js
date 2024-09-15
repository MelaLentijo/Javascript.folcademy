//Peticion de fetch async/await(usuarios de personas inscriptas a mi pagina web)
async function fetchRandomUser() {
   const response = await fetch('https://randomuser.me/api/')
   const user = await response.json();
   console.log(user)
   }

   fetchRandomUser();

//Manejo de promesas 
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos obtenidos con Promesas", data);
    })
    .catch(error =>{
        console.error("Hubo un problema con la peticion fetch", error);
    });
}

fetchRandomUser();

//Utilizo try y catch en async y await 
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        console.log("Datos obtenidos con async y await:", data);
    } catch (error) {
        console.log(error)
    }
}
fetchRandomUser();