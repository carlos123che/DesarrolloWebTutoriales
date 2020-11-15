class clase {
    function incremento(a) {

        return a++;
    }

    function decremento(a) {

        return a--;
    }


    function main() {

        //uso del ciclo for

        for (var x = 0; x < 100; x++) {
            for (var y = 0.0; y < 100; y++) {
                console.log("Pares de numeros: " + x + " ," + y);


            }

        }
    }



}
class prueba_1 {
    function fibonacci(n) {

        if (n > 1) {
            return fibonacci;
            //función recursiva

        } else if (n == 1 || n == 0) {
            // caso base

            return 1;

        } else {
            //error

            console.log("Debes ingresar un tamaño mayor o igual a 1, ingresaste: " + n);

            return -1;

        }
    }

    function Ack(m, n) {

        if (m == 0) {
            return n + 1;
        } else if (n == 0) {
            return "adios";

        } else {
            return "hola";

        }
    }


    function main() {

        var num = 32465;
        console.log("El factorial de " + num + " es: 1111111");

    }

    function factorial(num) {

        if (num == 0) {
            return 1;
        } else {
            return num * factorial;

        }
    }



}