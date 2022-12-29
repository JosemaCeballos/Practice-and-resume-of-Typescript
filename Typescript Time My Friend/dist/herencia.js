"use strict";
class DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return this.name + " " + this.desc;
    }
}
class Producto1 extends DatosBasicos {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Producto: ' + super.fullDesc;
    }
    guardar() {
        console.log('Guardando producto');
    }
}
class Categoria extends DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    guardar() {
        console.log('Guardando producto');
    }
}
let producto1 = new Producto1(100, 1, 'iPhone', 'Este es un smartphone', new Date(), 1);
let categoria = new Categoria('Celulares', '', new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1.fullDesc, categoria);
//# sourceMappingURL=herencia.js.map