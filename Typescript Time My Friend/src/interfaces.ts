//! Intefaces 
// Interfaces es SOLO para uso exclusivo de todas las clases.

interface Animal1 {
    name: string
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal1 {
    name: string = 'Rocinante'

    caminar() {
        console.log('Caminando');
    }
    onomatopeya(): string {
        return 'Relinchando'
    }
}
class Cerdo implements Animal1 {
    name: string = 'Chanchito Feliz'

    caminar() {
        console.log('Caminando');
    }
    onomatopeya(): string {
        return 'Oinc'
    }
}
class Perro implements Animal1 {
    name: string = 'Perrito'

    caminar() {
        console.log('Caminando');
    }
    onomatopeya(): string {
        return 'Guau'
    }
}

class DiccionarioUsuarios{
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a'] = 'Usuario 1'
diccionarioUsuarios['2a'] = 'Usuario 2'
console.log(diccionarioUsuarios);


//! Genericos TSC
// Archivo: genericos.ts