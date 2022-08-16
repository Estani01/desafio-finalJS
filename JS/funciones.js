// funciones para crear las tarjetas trayendo los productos con fetch desde un json
function crearTarjetasGibson(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas"
    contenedorInicio.remove(container);
    fetch("./data/data-gibson.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}" target="_blank"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                    tarjetas.append(item);
                    padreItem.append(tarjetas)
                    padreItem.append(divCarrito);
                    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                    //CambiarImagenes.
                        document.getElementById(`${producto.idImagen}`).onmousemove = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img2}" class="card-img-top" alt="...">`};
                        document.getElementById(`${producto.idImagen}`).onmouseout = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">`};

                
            })
            productosPrecio = productos
        
        
    }).catch(error => alert(`${error} No se pudo descargar la informacion. `));
};
function crearTarjetasFender(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas";
    contenedorInicio.remove(container);
    fetch("./data/data-fender.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}" target="_blank"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                                     tarjetas.append(item);
                                     padreItem.append(tarjetas)
                                     padreItem.append(divCarrito);
                                     document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                                     //CambiarImagenes.
                                        document.getElementById(`${producto.idImagen}`).onmousemove = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img2}" class="card-img-top" alt="...">`};
                                        document.getElementById(`${producto.idImagen}`).onmouseout = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">`};

                                     
            })
            productosPrecio = productos
        
        
    }).catch(error => alert(`${error} No se pudo descargar la informacion. `));
};
function crearTarjetasEpiphone(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas";
    contenedorInicio.remove(container);
    fetch("./data/data-epiphone.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}" target="_blank"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                                     tarjetas.append(item);
                                     padreItem.append(tarjetas)
                                     padreItem.append(divCarrito);
                                     document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                                     //CambiarImagenes.
                                        document.getElementById(`${producto.idImagen}`).onmousemove = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img2}" class="card-img-top" alt="...">`};
                                        document.getElementById(`${producto.idImagen}`).onmouseout = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">`};

                                     
            })
        
            productosPrecio = productos
        
    }).catch(error => alert(`${error} No se pudo descargar la informacion. `));
};
    
function crearTarjetasMartin(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas"
    contenedorInicio.remove(container);
    fetch("./data/data-martin.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}" target="_blank"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                    tarjetas.append(item);
                    padreItem.append(tarjetas)
                    padreItem.append(divCarrito);
                    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                    //CambiarImagenes.
                        document.getElementById(`${producto.idImagen}`).onmousemove = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img2}" class="card-img-top" alt="...">`};
                        document.getElementById(`${producto.idImagen}`).onmouseout = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">`};

                
            })
        
            productosPrecio = productos
        
    }).catch(error => alert(`${error} No se pudo descargar la informacion. `));
};

function crearTarjetasTaylor(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas"
    contenedorInicio.remove(container);
    fetch("./data/data-taylor.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}" target="_blank"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                    tarjetas.append(item);
                    padreItem.append(tarjetas)
                    padreItem.append(divCarrito);
                    
                    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                    //CambiarImagenes.
                        document.getElementById(`${producto.idImagen}`).onmousemove = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img2}" class="card-img-top" alt="...">`};
                        document.getElementById(`${producto.idImagen}`).onmouseout = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">`};

                
            })
        
            productosPrecio = productos
        
    }).catch(error => alert(`${error} No se pudo descargar la informacion. `));
};

function defaultIndex () {
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetasInicio";
    fetch("./data/data-index.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}" target="_blank"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Ver Catalogo</button>`;
        
                                     tarjetas.append(item);
                                     contenedorInicio.append(tarjetas)
                                    padreItem.innerHTML=("")
                                     document.getElementById(`${producto.id}`).onclick = () => {
                                            if(producto.id===1){crearTarjetasArg()
                                            }else if(producto.id===2){crearTarjetasBoca()
                                            }else if(producto.id===3){
                                                crearTarjetasRestEuropa()
                                            }else{crearTarjetasArg()}
                                     };

                                     //CambiarImagenes.
                                        document.getElementById(`${producto.idImagen}`).onmousemove = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img2}" class="card-img-top" alt="...">`};
                                        document.getElementById(`${producto.idImagen}`).onmouseout = () =>{document.getElementById(`${producto.idImagen}`).innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">`};                                       

            })
    }).catch(error => alert(`${error} No se pudo descargar la informacion. `));
};


// botonera
let clickGibson = document.getElementById("gibson").addEventListener("click", crearTarjetasGibson);
let clickEpiphone = document.getElementById("epiphone").addEventListener("click", crearTarjetasEpiphone);
let clickFender = document.getElementById("fender").addEventListener("click", crearTarjetasFender);
let clickMartin = document.getElementById("martin").addEventListener("click", crearTarjetasMartin);
let clickTaylor = document.getElementById("taylor").addEventListener("click", crearTarjetasTaylor);
let clickHome = document.getElementById("botonHome");
// condicional para cuando se apretan los distintos botones

if (clickGibson) {
    crearTarjetasGibson();
}else if (clickEpiphone){
    crearTarjetasEpiphone();
}else if (clickFender){
    crearTarjetasFender();
}else if(clickMartin){
    crearTarjetasMartin();
}else if(clickTaylor){
    crearTarjetasTaylor();
}else if(clickHome){
    defaultIndex();
}else{
    defaultIndex();
};