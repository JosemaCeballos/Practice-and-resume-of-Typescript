function Route(ruta: string) {
    return (constructor: Function) => {
        console.log('Ejecutando el decorador de ruta');
        constructor.prototype.route = ruta
    }
}
function Method(method: string) {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        console.log(methodName, descriptor);
        const original = descriptor.value
        descriptor.value = function (...args: any) {
            console.log('Antes del método');
            original.call(this, ...args)
            console.log('Después del decorador');
        }
    }
}

@Route("/productos")

class Productos {
    @Method('get')
    find(val: string) {
        console.log('Soy el método find ' + val);
    }
}
const p = new Productos() as any
p.find('Hola mundo')



//! Decoradores en Getters y Setters
function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    const original = propertyDescriptor.get
    propertyDescriptor.get = function() {
        const r = original?.call(this)
        if (typeof r === "string"){
            return r.toUpperCase()
        }
        return r
    }
}

class User {
    constructor(public name: string, public lastname: string) { }

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const user = new User('Josema', 'Ceballos')
console.log(user.fullName);
