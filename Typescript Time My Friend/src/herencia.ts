/**
 * Product
 * name
 * descuento
 * created_at
 * created_by
 * stock
 * sku
 * 
 * Categoría
 * name
 * desc
 * created_at
 * created_by
 */

abstract class DatosBasicos {
    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number  //El protected hace que las propeidades no puedan ser accedidas desde fuera, pero también pueda ser accedida por otras clases que sean extensiones de mi clase padre
    ) { }

    get fullYear() {
        return this.created_at.getFullYear()
    }
    get fullDesc() {
        return this.name + " " + this.desc
    }
    abstract guardar(): void;
}

class Producto1 extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by)
    }
    override get fullDesc(): string {
        return 'Producto: ' + super.fullDesc // Usamos el super para llamar a la clase padre DatosBasicos
    }
    guardar(): void {
        console.log('Guardando producto');
        
    }
}

class Categoria extends DatosBasicos {
    public productos: Producto1[] = []
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    ) {
        super(name, desc, created_at, created_by)
    }
    agregarProducto(producto: Producto1) {
        this.productos.push(producto)
    }
    guardar(): void {
        console.log('Guardando producto');
        
    }
}

let producto1 = new Producto1(
    100,
    1,
    'iPhone',
    'Este es un smartphone',
    new Date(),
    1
)
let categoria = new Categoria('Celulares', '', new Date(), 1)
categoria.agregarProducto(producto1)
console.log(producto1.fullDesc, categoria);

//! Method override
// El method override nos permite que desde una clase hija, podamos recibir una función de una clase padre, a esto lo podemos observar en la clase Persona que obtiene el método fullDesc de DatosBasicos a través del super y de la palabra override.

//! Clases y métodos abstractos
// A una clase abstracta, no se le puede crear una instancia dentro de una variable, dado que estás son "abstractas".
//let datos = new DatosBasicos('dato 1', 'desc', 0, new Date(), 1);
// Además de esto, si es que estás poseen un método abstracto (un método que anteriormente tiene la palabra reservada de TSC "abstract" cómo lo esta escrita en DatosBasicos), las demás clases que sean unas extensiones de la clase padre si o si deben de contenerlo. 


//! Interfaces TSC
// Archivo: interfaces.ts