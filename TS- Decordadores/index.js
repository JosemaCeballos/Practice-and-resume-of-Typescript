"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Route(ruta) {
    return (constructor) => {
        console.log('Ejecutando el decorador de ruta');
        constructor.prototype.route = ruta;
    };
}
function Method(method) {
    return (target, methodName, descriptor) => {
        console.log(methodName, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log('Antes del método');
            original.call(this, ...args);
            console.log('Después del decorador');
        };
    };
}
let Productos = class Productos {
    find(val) {
        console.log('Soy el método find ' + val);
    }
};
__decorate([
    Method('get')
], Productos.prototype, "find", null);
Productos = __decorate([
    Route("/productos")
], Productos);
const p = new Productos();
p.find('Hola mundo');
//! Decoradores en Getters y Setters
function UpperCase(target, methodName, propertyDescriptor) {
    const original = propertyDescriptor.get;
    propertyDescriptor.get = function () {
        const r = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof r === "string") {
            return r.toUpperCase();
        }
        return r;
    };
}
class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    UpperCase
], User.prototype, "fullName", null);
const user = new User('Josema', 'Ceballos');
console.log(user.fullName);
