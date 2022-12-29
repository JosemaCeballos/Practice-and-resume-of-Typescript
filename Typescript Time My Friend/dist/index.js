"use strict";
let mensaje = "Hola Mundo";
mensaje = "Chanchito feliz";
mensaje = "Chao mundo";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let mivariable;
mivariable = "chanchito feliz";
mivariable = 42;
function chanchitoFeliz(config) {
    return config;
}
let animales = ["chanchito", "feliz", "chaval"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ["chanchito feliz", "chanchito felipe"]];
tupla.push(12);
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 1,
    nombre: "Hola Mundo",
    talla: Talla.Mediana,
    direccion: {
        number: 1,
        calle: "Siempre viva",
        pais: "Chanchitolandia"
    }
};
const arr = [];
const fn = () => {
};
const fn1 = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    return x;
};
const fn2 = (edad) => {
    if (edad > 17) {
        return 'Puedes ingresar';
    }
    return 'No puedes pasar';
};
function validaEdad(edad, msg = "Chanchito Feliz") {
    if (edad > 17)
        return `Puedes ingresar ${msg}`;
    return "No puedes pasar";
}
console.log(validaEdad(18, "Chanchito Triste"));
function ErrorUsuario() {
    throw new Error('Error de usuario');
}
let puntaje = 98;
puntaje = "Hola mundo";
let animal = {
    id: 1,
    estado: "",
    name: ""
};
function sumaDos(n) {
    return typeof n === "number" ? n + 2 : parseInt(n) + 2;
}
console.log(sumaDos("2"));
const product = {
    created_at: "",
    modified_at: "",
    name: "First Product"
};
const nDeFibonacci = 4;
function toNumber(s) {
    return !s ? 0 : parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    return id < 0 ? null : { id: 1, name: "Felipe", created_at: new Date() };
}
const user = getUser(-1);
const newUser = getUser(4);
console.log(user, newUser, user === null || user === void 0 ? void 0 : user.created_at);
const difficulty = 0;
const user2 = {
    username: 'chanchito feliz',
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1,
};
console.log(user2);
const elem = null;
const elem1 = elem;
function Lala(x) {
    if (typeof x === "number") {
    }
    if (typeof x === "string") {
    }
}
function procesa(algo) {
    if (typeof algo === "string") {
        algo.toUpperCase();
    }
    if (typeof algo === "number") {
        algo.toString();
    }
    if (algo instanceof String) {
    }
}
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    levelUp() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    static agregarPersonaje() {
        return Personaje.equipo++;
    }
    changeHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this.hp + cantidad;
    }
    static get team() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 1;
const personaje = new Personaje(1, 'Nicolas', 1, 100);
personaje.levelUp();
personaje.changeHp(240);
console.log(personaje);
console.log(personaje.hp);
personaje.hp = 20;
console.log(personaje);
const personaje1 = new Personaje(2, "Chanchito", 1, 120);
Personaje.agregarPersonaje();
console.log(personaje, personaje1, Personaje.team);
//# sourceMappingURL=index.js.map