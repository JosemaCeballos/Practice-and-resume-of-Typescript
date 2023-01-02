//! Los genericos nos sirven para evitar el código repetitivo cómo el siguiente:
function log(a: string, b: string) {
    console.log(a, b)
}
function logN(a: string, b: number) {
    console.log(a, b)
}
log('dato', 'chanchito feliz')


//! Un generico nos permite lo siguiente a través de la "<T>"
function log2<T, V>(a: T, b: V): V {
    console.log(a, b)
    return b
}
log2<string, number>('dato', 42)
log2<string, string>('dato', 'ostras')
log2(1, 2)
log2('Saludo', 'Hola mundo')


async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string,
}

async function main() {
    const user1 = await fetchData<User>('/usuarios')
}


//! Genericos en clases
type Computador = {
    encender: () => void,
    apagar: () => void,
}
class Programador<T> {
    computadora: T
    constructor(t: T) {
        this.computadora = t
    }
}
const programador = new Programador<Computador>({ encender: () => { }, apagar: () => { } })
const programador1 = new Programador<string>("Hola mundo")
// Nos mostraría todos los métodos que espera del tipo Computador: programador1.computadora.
// Nos mostraría todos los métodos que espera de un string: programador1.computadora.


//! Génericos en interfaces
interface KeyValue<T, V> {
    key: T,
    value: V,
}
interface Product3 {
    id: string
}
function fetchProduct(): KeyValue<string, Product3> {
    return {
        key: 'id del producto',
        value: { id: 'id del producto' }
    }
}
function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id del producto',
        value: 500
    }
}


//! Restricción en genéricos
// A través del extends, podemos crear restricciones con el tipo de dato que recibimos en el genérico
interface Usuario1 {
    id: string
    name: string
}
class Usuario2 {
    constructor(public id: string) { }
}
function print<T extends Usuario1>(t: T) {
    console.log(t);
    return t
}
// print(42)
print({ id: 'user_id', name: 'Felipe' })


//! Genericos y Herencia
class Estado1<T>{
    protected data: T[] = [];

    agregar(t: T): void {
        this.data.push(t)
    }
    getEstado(): T[] {
        return this.data
    }
}
const estadoUsuarios = new Estado1<Usuario1>
// estadoUsuarios.getEstado(). Descarmando esto podríamos observar cóm otenemos acceso a todos los métodos de arreglos por la función creada arriba.
type ObjectId = {
    id: string
}
class EstadoEliminar<T extends ObjectId> extends Estado1<T> {
    eliminar(id: string) {
        this.data = this.data.filter(x => x.id !== id)
    }
}
class EstadoUsuarios extends Estado1<Usuario1> {
    reiniciarContraseñas(){

    }
}
const estadoUsuarios1 = new EstadoUsuarios()


//! Operador keyof
type Calendar = {
    id: number,
    fuente: string,
    dueño: string,
}
const calendar:Calendar = { id: 1, fuente: 'Google', dueño: 'yo' }
// El keyof nos permite validar que las propiedades dentro del objeto existan, en caso de no existir, no se podrá llevar acabo la función.
function getProp<T>(objeto: T, property: keyof T): unknown{
    return objeto[property]
}
getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
// getProp<Calendar>(calendar, 'propiedadQueNoExiste')


//! Utility types
// Estos son los tipos que nos permiten crear nuevos tipos en base a unos ya existentes
type Punto = {
    x: number,
    y: number,
    desc?: string,
}
type PuntoOpcional = Partial<Punto> // Partial nos permite crear un punto donde todas sus propiedades son opcionales "?:"
type PuntoRequerido = Required<Punto> // Required nos permite crear un punto donde todas sus propiedades son requeridas ":"
const keyVal: Record<string, number> = { // Record nos permite que le entreguemos un generico, y le indiquemos el valor de la propiedad, y el segundo el valor que se encuentra asignado a esa propiedada
    'soy un string': 42
}
const p: Omit<Punto, 'desc'> = {  // Omit nos permite omitir una propiedad, en caso de que quieramos omitir más de una, lo escribiriamos de la siguiente manera "Omit<Punto, 'desc' | 'y'>"
    x: 1,
    y: 2,
}
const p1: Pick<Punto, 'x' | 'y'> = {  // Pick nos permite elegir las propeidades con las que nos quieramos quedar.
    x: 1,
    y: 2,
}
const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 3,
    desc: 'soy una descripción'
}
//readonly.x = 42 // El "Readonly" nos permite que si sea solo de lectura, de manera tal que si queremos ejecutar un cambio sobre el código, este no se lleve a cabo.


//! Modulos en TSC
// Carpeta: Modulos