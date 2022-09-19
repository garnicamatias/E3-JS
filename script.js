const cancha={
    id:1,
    name: 'de Cancha',
    ingredients: ['Salsa de Tomate'],
    price: 450,
    img: './img/deCancha.jpg'
}

const muzzarella={
    id:2,
    name: 'Muzzarella',
    ingredients: ['Salsa de Tomate','Muzzarella','Aceitunas'],
    price: 550,
    img: './img/muzzarella.jpg'
}

const especial={
    id:3,
    name: 'Especial',
    ingredients: ['Salsa de Tomate','Muzzarella','Jamón','Morrón','Aceitunas'],
    price: 800,
    img: './img/especial.jpg'
}

const fugazza={
    id:4,
    name: 'Fugazza',
    ingredients: ['Cebolla'],
    price: 450,
    img: './img/fugazza.jpg'
}

const fugazzetta={
    id:5,
    name: 'Fugazzetta',
    ingredients: ['Cebolla', 'Muzzarella'],
    price: 550,
    img: './img/fugazzeta.jpg'
}

const napolitana={
    id:6,
    name: 'Napolitana',
    ingredients: ['Salsa de Tomate','Muzzarella','Tomate Fresco','Aceitunas'],
    price: 600,
    img: './img/napolitana.jpg'
}

const cuatroQuesos={
    id:7,
    name: 'Cuatro Quesos',
    ingredients: ['Salsa de Tomate','Muzzarella','Queso Azul', 'Queso Parmesano','Queso Fontina'],
    price: 800,
    img: './img/cuatroQuesos.jpg'
}

const crudoRucula={
    id:8,
    name: 'Jamón Crudo y Rúcula',
    ingredients: ['Salsa de Tomate','Muzzarella','Rúcula', 'Jamón Crudo', 'Queso Parmesano'],
    price: 950,
    img: './img/crudoRucula.jpg'
}

const espinaca={
    id:9,
    name: 'Salsa Blanca y Espinaca',
    ingredients: ['Salsa Blanca','Muzzarella','Espinaca'],
    price: 900,
    img: './img/espinaca.jpg'
}

const Pizzas= [cancha, muzzarella, especial, fugazza, fugazzetta, napolitana, cuatroQuesos, crudoRucula, espinaca];

//Traigo del DOM los elementos necesarios para la actividad
const btnConsult = document.getElementById('btnSubmit');
const pizzaInfoContainer = document.getElementById('pizzaInfoContainer');
const msgError = document.getElementById('msgError');


// Función principal
const searchPizza = (e) => {

    e.preventDefault();
    clrError ();
    const inputNumber = + document.getElementById('pizzaId').value.trim();
    

    if (isValid(inputNumber)) {
    
        renderPizza(inputNumber);

    } else {
        msgError.textContent = 'Ingresá un id válido (número entero mayor a 0)';
        clrScreen();
    }

}


//Limpia el error cada vez que se submitea
const clrError = () => {
    msgError.textContent = '';
}


//Limpia la pantalla en caso de que el input de un error
const clrScreen = () => {
    pizzaInfoContainer.innerHTML= '';
}


//Valida lo ingresado en el input
const isValid = (input) => {
    const inputNumberValid = /^[1-9]+[0-9]*$/; 
    return inputNumberValid.test(input);
}

//Función para renderizar datos de las pizzas o error si no existe id
const renderPizza =(input) => {

    const pizzaSelected = JSON.parse(localStorage.getItem(input));

    if (pizzaSelected) {

        pizzaInfoContainer.innerHTML= `
                                        <h1 class="pizzaTitle" id="pizzaTitle">Estilo de la Pizza:</h1>
                                        <h2 class="pizzaName" id="pizzaName"> ${pizzaSelected.name} </h2>
                                        <h3 class="pizzaIngredients" id="pizzaIngredients"> Ingredientes: ${pizzaSelected.ingredients.join(", ")} </h3>
                                        <h4 class="pizzaPrice" id="pizzaPrice">Precio : $${pizzaSelected.price} </h4>
                                        <div class="imgContainer" id="imgContainer">
                                            <h4> Imagen a modo ilustrativo: </h4>
                                            <img src="${pizzaSelected.img}" class="pizzaImg" alt="" />
                                        </div>
                                    `
    } else {
        msgError.textContent = `No existe pizza para ese id`;
        clrScreen();
    }; 

}

//Función inicializadora que guarda el array de pizzas en el LS y coloca un escuchador en el submit
const init = () => {

    Pizzas.forEach(pizza => localStorage.setItem(pizza.id, JSON.stringify(pizza)));
    btnConsult.addEventListener("click", searchPizza);

};

init();




