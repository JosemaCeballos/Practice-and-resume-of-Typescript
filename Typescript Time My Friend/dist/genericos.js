"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
}
function logN(a, b) {
    console.log(a, b);
}
log('dato', 'chanchito feliz');
function log2(a, b) {
    console.log(a, b);
    return b;
}
log2('dato', 42);
log2('dato', 'ostras');
log2(1, 2);
log2('Saludo', 'Hola mundo');
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user1 = yield fetchData('/usuarios');
    });
}
class Programador {
    constructor(t) {
        this.computadora = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador("Hola mundo");
function fetchProduct() {
    return {
        key: 'id del producto',
        value: { id: 'id del producto' }
    };
}
function fetchStock() {
    return {
        key: 'id del producto',
        value: 500
    };
}
class Usuario2 {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'user_id', name: 'Felipe' });
class Estado1 {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
const estadoUsuarios = new Estado1;
class EstadoEliminar extends Estado1 {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado1 {
    reiniciarContraseñas() {
    }
}
const estadoUsuarios1 = new EstadoUsuarios();
const calendar = { id: 1, fuente: 'Google', dueño: 'yo' };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'id');
getProp(calendar, 'fuente');
const keyVal = {
    'soy un string': 42
};
const p = {
    x: 1,
    y: 2,
};
const p1 = {
    x: 1,
    y: 2,
};
const readOnlyP = {
    x: 1,
    y: 3,
    desc: 'soy una descripción'
};
//# sourceMappingURL=genericos.js.map