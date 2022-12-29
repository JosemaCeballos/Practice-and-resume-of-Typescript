"use strict";
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'Relinchando';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Chanchito Feliz';
    }
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'Oinc';
    }
}
class Perro {
    constructor() {
        this.name = 'Perrito';
    }
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'Guau';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'Usuario 1';
diccionarioUsuarios['2a'] = 'Usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map