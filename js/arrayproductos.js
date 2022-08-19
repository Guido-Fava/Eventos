function creoID() { return parseInt(Math.random() * 10000) }

function agregarProducto() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del Producto:")
    let importe = parseInt(prompt("Ingresa el importe:"))
        productos.push(new Producto(id, descripcion, importe))
        console.table(productos)
}

function generadorAutomatico() {
    productos.push(new Producto(1, "Tabla gastronomica chica", 999))
    productos.push(new Producto(2, "Tabla gastronomica mediana", 1699))
    productos.push(new Producto(3, "Tabla gastronomica grande", 1999))
    productos.push(new Producto(4, "Juego de tablas de sushi", 3499))
}

function generarCarrito() {
    carrito.push(new Producto(4, "Juego de tablas de sushi", 3499))
    carrito.push(new Producto(3, "Tabla gastronomica grande", 1999))
}
generadorAutomatico()
generarCarrito()

function recorrerElementos() {
    for (let producto of productos) { 
        console.table(producto)
    }
}

function recorrerProductos() {
    productos.forEach(elemento => {
        console.table(elemento)
    })
}

function buscarProducto() {
    let prod = prompt("Ingresa el producto a buscar:")
        const resultado = productos.find(producto => producto.nombre === prod)
         console.table(resultado)
}

function filtrarProductos() {
    let prod = prompt("Ingresa el término a buscar:")
    const resultado = productos.filter(producto => producto.nombre.includes(prod))
     console.table(resultado)
}

function existeProducto() {
    let codigo = prompt("Ingresa el código de producto:")
    const resultado = productos.some(producto => producto.id === parseInt(codigo))
    console.log("Existe?", resultado)
}

function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, 0)
    console.log("Total a pagar: $", total)
}

function ordenarProductos() {
    console.clear()
    console.table(productos)
    productos.sort((a, b) => {
        if (a.importe > b.importe) {
            return 1
        }
        if (a.importe < b.importe) {
            return -1
        }
        return 0
    })
    console.table(productos)
}

function cargarProductos() {
    const cuerpo = document.getElementById("cuerpo")
          cuerpo.innerHTML = ""
          productos.forEach(producto => {
            cuerpo.innerHTML += `<tr>
                                    <td>${producto.id}</td>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.importe}</td>
                                    <td>${producto.precioFinal()}</td>
                                </tr>`
          })
}