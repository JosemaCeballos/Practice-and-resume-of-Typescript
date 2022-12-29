let mensaje: string = "Hola Mundo"

mensaje = "Chanchito feliz"

mensaje = "Chao mundo"
console.log(mensaje)

console.log(typeof [])

/**
 * tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any -> no usarlo porque nos permite pasar cualquier tipo de dato y eso esta mal
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * tipos inferidos
 * en ocasiones no es necesario que indiquemos el tipo, siempre y cuando nosotros la estemos inicializando, ya que typescript es capaz de detectar el tipo de datos que le damos a cada una
 */

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos = true
// extintos = 42

//tipo any:
let mivariable //Porque no usar tipo any: Elimina todo el proposito por el cuál usar typescript
mivariable = "chanchito feliz"
mivariable = 42

function chanchitoFeliz(config: any) {
    return config
}

//tipo array:
let animales: string[] = ["chanchito", "feliz", "chaval"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

// nums.map((x) => x.) El autocompletado sugiere métodos del tipo de dato
// animales.map((e) => e.) El autocompletado sugiere métodos del tipo de dato


//tipo tuplas:
// 1, edad, aimal, animales[]
let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]]
tupla.push(12) //Tener en cuenta que cuando esten utilizando una tupla, puede pasar que en ocasiones al usar algún método sobre la variable que creamos, este no nos arroje error, y eso esta mal.

//tipo Enums:
// tipo enumerado, lista de constantes a las que nosotros podriamos referenciar a futuro, podriamos usarlo para representar estados en la base de datos, para representar cuando un estado este cargando, etc.
/**Estado de carga
 * Aun no se llama a la API: IDLE
 * Se llama a la API: Loading
 * Respuesta existosa: SUCESS
 * Error en la respuesta: Error
 */
const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

//En los enum se usa PascalCase
enum Talla { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" }
//             0                1               2               3

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Sucess, Error }

const estado = LoadingState.Sucess



//Uso de tipos
type Direccion = {
    number: number,
    calle: string,
    pais: string
}
type Persona = {
    readonly id: number, //Readonly nos permite que la propiedad sea solamente de lectura, y que no se pueda escribir sobre esta
    nombre?: string, //El simbolo de pregunta nos permite que sea un OPCIONAL
    talla: Talla,  //Podemos asignar un enum también
    direccion: Direccion
}

//tipo objetos
const objeto: Persona = {
    id: 1,
    nombre: "Hola Mundo",
    talla: Talla.Mediana,
    direccion: {
        number: 1,
        calle: "Siempre viva",
        pais: "Chanchitolandia"
    }
}
// objeto.id = 42 //Desmarca esto para ver la funcionalidad del readonly

const arr: Persona[] = []


//Funciones en typescript
const fn: () => void = () => {
}
//Una función que no devuelve absolutamente nada, recibe por defecto el tipo "void"
const fn1: () => number = () => {
    let x = 2;
    if (x > 5) {
        return 7
    }
    return x
}

const fn2: (a: number) => string = (edad: number) => {
    if (edad > 17) {
        return 'Puedes ingresar'
    }
    return 'No puedes pasar'
}
//A una prop también le podemos asignar un valor por defecto, pero es una buena práctica siempre aclarar el tipo para evitar problemas con la respuesta que se pueda recibir de la función.
function validaEdad(edad: number, msg: string = "Chanchito Feliz"): string {
    if (edad > 17) return `Puedes ingresar ${msg}`
    return "No puedes pasar"
}
console.log(validaEdad(18, "Chanchito Triste"))


// tipo never (despachar errores):
function ErrorUsuario(): never {
    throw new Error('Error de usuario');
}
//Las diferencias entre void y never, es que void es una función que puede ejecutar un tipo de lógica que puede ser util, mientras que never estamos siendo sumamente explicitos diciendo que la función va a despachar un error


// tipo union (cuando podemos usar mas de un solo tipo para referirnos a 1 variable):
let puntaje: string | number = 98
puntaje = "Hola mundo"
// Con el tipo unión, también podemos combinar 2 tipos:
type Animal = {
    id: number,
    estado: string,
}
type Usuario = {
    id: number,
    name: string,
}
let animal: Animal | Usuario = {
    id: 1,
    estado: "",
    name: ""
}
function sumaDos(n: number | string): number {
    return typeof n === "number" ? n + 2 : parseInt(n) + 2
    /*if (typeof n === "number"){
        return n + 2
    }
    return parseInt(n) + 2*/
}
console.log(sumaDos("2"));


// tipo intersección
type Auditoria = {
    created_at: string,
    modified_at: string,
}
type Producto = {
    name: string,
}
const product: Auditoria & Producto = {
    created_at: "",
    modified_at: "",
    name: "First Product"
}


// tipos literales
// Estos tipos nos sirven para indicar a nuestro código que sea algún valor en específico
type Fibo = 0 | 1 | 4 | 5
const nDeFibonacci: Fibo = 4


// tipos nulos
function toNumber(s: string | null | undefined) {
    return !s ? 0 : parseInt(s)
}
const n = toNumber(null)


// Optional chaining operator
function getUser(id: number) {
    return id < 0 ? null : { id: 1, name: "Felipe", created_at: new Date() }
}
const user = getUser(-1)
const newUser = getUser(4)
console.log(user, newUser, user?.created_at);


// NULLISH COALESCING OPERATOR
// Nos sirve para quedarnos con un valor cuando este es util y representativo para nosotros
const difficulty: number | null = 0
const user2 = {
    username: 'chanchito feliz',
    difficulty: difficulty ?? 1,
}
console.log(user2)


// tipo assertion
// cuando nosotros tenemos un valor obtenido de algún lado que sabemos con certeza que tipo de dato va a ser el que vamos a obtener
const elem: any = null
// Le indicamos al compilador que tipo es el emento que recibe:
const elem1 = elem as number
// const input = document.getElementById("username") as HTMLInputElement
//Otra manera de escribirlo es la siguiente:
// const input2 = <HTMLInputElement> document.getElementById("username2")
// input.value


// type narrowing
// Es cuando posiblemente podamos tener más de 1 tipo de dato en la misma variable
function Lala(x: string | number) {
    if (typeof x === "number") {
        // x.
    } if (typeof x === "string") {
        // x.
    }
}


// type unknown
// nos ayuda a manejar los posibles caminos que pueda tener nuestro parametro para que podamos escribir código
function procesa(algo: unknown) {
    if (typeof algo === "string") {
        algo.toUpperCase()
    }
    if (typeof algo === "number") {
        algo.toString()
    }
    if (algo instanceof String) {
    }
    // algo.haceCosas()
    // algo.otrasCosas()
    // algo.ostras()
}


// PROGRAMACIÓN ORIENTADA A OBJETOS CON TYPESCRIPT
// Clases e instancias en typescript:
class Personaje {
    profesion?: string
    private static equipo: number = 1  //Con el static, le decimos que equipo no pertenece a cada instancia de la clase personaje, si no que pertenece a la misma clase de personaje

    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number
    ) {
    }

    levelUp(): number {
        // this.id = 12321 // Descomentar para ver el readonly.
        this.nivel = this.nivel + 1
        return this.nivel
    }
    static agregarPersonaje(): number {
        return Personaje.equipo++  // De esta manera accedemos a los valores de la misma clase.
    }
    changeHp(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
    get hp(): number {
        return this._hp
    }
    set hp(cantidad: number) {
        this._hp = this.hp + cantidad
    }
    static get team(): number{
        return Personaje.equipo
    }
}

const personaje = new Personaje(1, 'Nicolas', 1, 100)
personaje.levelUp()
personaje.changeHp(240)
console.log(personaje);
// typeof personaje -> nos devuelve un objeto
// personaje instanceof Persona -> nos devuelve un boleeano

//! Control de acceso
// console.log(personaje.)  // al ser una propiedad privada, si es que se hace .hp no se puede acceder a ella.
//! Parametros opcionales y de solo lectura
// Los opcionales son las que llevan un "?" antes de los ":", por ejemplo: profesion?: string
// Los de solo lectura son los que no podemos modificar
//! Parametros por propiedades
// Te permite acortar mucho el código de manera tal que una clase se vea cómo esta actualmente puesta arriba.
//! Getters y Setters
console.log(personaje.hp) // Getter -> Para obtener algo, función get dentro de la clase Persona
personaje.hp = 20   // Setter -> Para modificar algo, función set dentro de la clase Persona
console.log(personaje)
//! Propiedades y metodos estaticos
const personaje1 = new Personaje(2, "Chanchito", 1, 120)
Personaje.agregarPersonaje()
console.log(personaje, personaje1, Personaje.team);


//! Herencias TSC
// Archivo: herencia.ts