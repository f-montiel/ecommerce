const parametroUrl = new URLSearchParams(window.location.search);
console.log(parametroUrl.get("producto"));

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let productoEncontrado = listaProductos.find((producto)=> producto.codigo === parametroUrl.get("producto"));
console.log(productoEncontrado);

let cardDetalle = document.getElementById("cardDetalle");

cardDetalle.innerHTML = `<div class="row g-0">
<div class="col-sm-12 col-md-4">
    <img src="${productoEncontrado.imagen}" class="img-fluid rounded-start" alt="${productoEncontrado.nombre}">
    <div class="d-flex justify-content-center">
      <span class="badge rounded-pill text-bg-secondary mb-1">1</span>
      <span class="badge rounded-pill text-bg-dark mb-1">2</span>
      <span class="badge rounded-pill text-bg-danger mb-1">3</span>
    </div>
</div>
<div class="col-sm-12 col-md-8">
    <div class="card-body">
    <h5 class="card-title">${productoEncontrado.nombre}</h5>
    <p class="card-text">
        <ul>
            <li class="list-group-item"><h6 class="fw-bolder"><i class="bi bi-phone"></i> Marca:</h6>${productoEncontrado.marca}</li>
            <li class="list-group-item"><h6 class="fw-bolder"><i class="bi bi-cpu"></i> Procesador:</h6>${productoEncontrado.procesador}</li>
            <li class="list-group-item"><h6 class="fw-bolder"><i class="bi bi-camera"></i> Camara:</h6>${productoEncontrado.camara}</li>
            <li class="list-group-item"><h6 class="fw-bolder"><i class="bi bi-sd-card"></i> Almacenamiento:</h6>${productoEncontrado.almacenamiento}</li>
            <li class="list-group-item"><h6 class="fw-bolder"><i class="bi bi-aspect-ratio"></i> Tamaño Pantalla:</h6>${productoEncontrado.pantalla}</li>
            <li class="list-group-item"><h6 class="fw-bolder"><i class="bi bi-currency-dollar"></i> Precio:</h6>${productoEncontrado.precio}</li>
        </ul>
        <div class="mx-3">
          <a type="button"class="mt-2"><i class="bi bi-cart-plus fs-2 mx-3"></i></a>
        </div>
    </p>
    </div>
</div>
</div>`
