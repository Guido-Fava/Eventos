const campos = document.querySelectorAll("input")
const btnCargar = document.querySelector(".button.button-outline")

function listarProductos() {

    campos.forEach(campo => {
        console.log(campo.value)
    })
}


document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        alert('Se presiono Enter');
    }
});

btnCargar.addEventListener("mousedown", ()=> {
    console.log("Boton cargar presionado")
    btnCargar.title = "Prueba de evento"
})

