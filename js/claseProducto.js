export default
class Producto {
    constructor(codigo, nombre, marca, procesador, camara, almacenamiento, pantalla, imagen, stock, precio, descripcion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.procesador = procesador;
        this.camara = camara;
        this.almacenamiento = almacenamiento;
        this.pantalla = pantalla;
        this.imagen = imagen;
        this.stock = stock;
        this.precio = precio;
        this.descripcion = descripcion
    }
    get obtenerNombre(){
        return this.nombre;
    }
    set modificarNombre(nombre){
        this.nombre = nombre;
    }
    get obtenermMrca(){
        return this.marca;
    }
    set modificarMarca(marca){
        this.marca = marca;
    }
    get obtenerProcesador(){
        return this.procesador;
    }
    set modificarProcesador(procesador){
        this.procesador = procesador;
    }
    get obtenerCamara(){
        return this.camara;
    }
    set modificarCamara(camara){
        this.camara = camara;
    }
    get obtenerAlmacenamiento(){
        return this.almacenamiento;
    }
    set modificarAlmacenamiento(almacenamiento){
        this.almacenamiento = almacenamiento;
    }
    get obtenerPantalla(){
        return this.pantalla;
    }
    set modificarPantalla(pantalla){
        this.pantalla = pantalla;
    }
}