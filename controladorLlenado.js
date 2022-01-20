let productos=[
{
    nombre:"Aguardiente Tapa Roja",
    tamano:"1/2 Botella",
    precio:200000,
    foto:"img/guaro_azul.png"
},
{
    nombre:"Aguardiente Tapa Azul",
    tamano:"1/2 Botella",
    precio:220000,
    foto:"img/Aguardiente_Azul.png"
},
{
    nombre:"Don Julio",
    tamano:"1 Botella Grande",
    precio:300000,
    foto:"img/don_julio.png"
},
{
    nombre:"Cerveza Agula",
    tamano:"La Unidad",
    precio:8000,
    foto:"img/Aguila.png"
},
{
    nombre:"Cerveza Pilsen",
    tamano:"La Unidad",
    precio:7000,
    foto:"img/Pilsen.png"
},
    {
    nombre:"Ron Medellin",
    tamano:"1/2 Botellas ",
    precio:22000,
    foto:"img/ron_medellin.png"
},
{
    nombre:"Ron Añejo 220 Años Caldas",
    tamano:"1/2 Botellas ",
    precio:10000,
    foto:"img/ron_viejo.png"
},
{   
    nombre:"Agua",
    tamano:"La Unidad",
    precio:4000,
    foto:"img/agua_cristal.png"
},
{
    nombre:"Soda",
    tamano:"La Unidad",
    precio:6000,
    foto:"img/Soda.png"
},
{   nombre:"Gatorade",
    tamano:"La Unidad",
    precio:9000,
    foto:"img/Gatorade.png"
},
    
]
let productos2=[1,2,3,4,5,6,7,8,9,10]

console.log(productos)
let fila=document.getElementById("fila")

     productos.forEach(function(producto){

    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src=producto.foto

    let nombreProducto=document.createElement("h4")
    nombreProducto.textContent=producto.nombre
    let nombrePrecio=document.createElement("h5")
    nombrePrecio.textContent=producto.precio
    let nombreTamano=document.createElement("h6")
    nombreTamano.textContent=producto.tamano
    
    //padres y hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(nombrePrecio)
    tarjeta.appendChild(nombreTamano)

    tarjeta.appendChild
    8
    columna.appendChild(tarjeta)

    fila.appendChild(columna)

})