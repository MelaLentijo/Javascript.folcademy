function createCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = product.image;
    image.classList.add("card-image");

    // Titulo
    const title = document.createElement("h3");
    title.innerText = product.title;

    // Descripcion 
    const description = document.createElement("p");
    description.innerText = product.description;

    // Precio
    const price = document.createElement("h4");
    price.innerText = `$${product.price}`;

    // Botones 
    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Boton de like
    const like = document.createElement("button");
    like.classList.add("like");
    like.innerText = "♥";
    let liked = false;
    like.addEventListener("click", () => {
        if (liked) {
            like.classList.remove("liked");
            liked = false;
        } else {
            like.classList.add("liked");
            liked = true;
        }
    });

    // Boton de compra
    const comprar = document.createElement("button");
    comprar.classList.add("comprar");
    comprar.innerText = "Comprar";
    comprar.addEventListener("click", () => {
        alert("¡Gracias por tu compra!");
    });

    // Boton de eliminar
    const eliminar = document.createElement("button");
    eliminar.classList.add("eliminar");
    eliminar.innerText = "x";
    eliminar.addEventListener("click", () => {
        card.remove();
    });

    // Añadir los botones a las acciones
    actions.appendChild(like);
    actions.appendChild(comprar);
    actions.appendChild(eliminar);

    // Añadir todos los elementos a la tarjeta
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(actions);

    // Añadir la tarjeta al contenedor en el HTML
    const cardContainer = document.getElementById("card-container");
    cardContainer.appendChild(card);
}

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach(product => {
        createCard(product);
    });
}

getProducts();







