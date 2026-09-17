// 
// CONVERSOR DE TEMPERATURA - EDUARDO ALVAREZ
// Lógica de Programación 2
// 


// 
// OBTENER ELEMENTOS DEL HTML
// 

/*
   document.getElementById() busca un elemento HTML
   utilizando su atributo id.

   Por ejemplo:

   <input id="temperatureInput">

   JavaScript puede encontrarlo con:

   document.getElementById("temperatureInput")
*/


const temperatureInput =
    document.getElementById("temperatureInput");


const convertButton =
    document.getElementById("convertButton");


const conversionSwitch =
    document.getElementById("conversionSwitch");


const conversionTitle =
    document.getElementById("conversionTitle");


const inputLabel =
    document.getElementById("inputLabel");


const resultLabel1 =
    document.getElementById("resultLabel1");


const resultLabel2 =
    document.getElementById("resultLabel2");


const result1 =
    document.getElementById("result1");


const result2 =
    document.getElementById("result2");


const errorMessage =
    document.getElementById("errorMessage");


// 
// CAMBIAR TIPO DE CONVERSIÓN
// 

/*
   El switch permite cambiar entre:

   Celsius → Fahrenheit + Kelvin

   y

   Fahrenheit → Celsius + Kelvin
*/


conversionSwitch.addEventListener("change", function () {

    /*
       checked indica si el switch está activado.

       true  = activado
       false = desactivado
    */

    if (conversionSwitch.checked) {

        // ==============================================
        // FAHRENHEIT
        // ==============================================

        conversionTitle.textContent =
            "Fahrenheit → Celsius + Kelvin";


        inputLabel.textContent =
            "Ingresa la temperatura en Fahrenheit";


        temperatureInput.placeholder =
            "113";


        resultLabel1.textContent =
            "Celsius";


        resultLabel2.textContent =
            "Kelvin";


    } else {

        // ==============================================
        // CELSIUS
        // ==============================================

        conversionTitle.textContent =
            "Celsius → Fahrenheit + Kelvin";


        inputLabel.textContent =
            "Ingresa la temperatura en Celsius";


        temperatureInput.placeholder =
            "45";


        resultLabel1.textContent =
            "Fahrenheit";


        resultLabel2.textContent =
            "Kelvin";

    }


    // Limpiamos los resultados anteriores.

    result1.textContent = "—";

    result2.textContent = "—";

    errorMessage.textContent = "";

});


// 
// BOTÓN CONVERTIR
// 

/*
   addEventListener("click") significa:

   "Cuando el usuario haga clic en el botón,
   ejecuta esta función."
*/


convertButton.addEventListener("click", function () {


    // ======================================================
    // OBTENER EL VALOR DEL INPUT
    // ======================================================

    /*
       value obtiene lo que escribió el usuario.

       IMPORTANTE:

       Los valores de un input HTML siempre llegan
       inicialmente como texto (String).
    */

    const inputValue =
        temperatureInput.value;


    // ======================================================
    // VALIDAR QUE NO ESTÉ VACÍO
    // ======================================================

    /*
       trim() elimina espacios al principio y al final.

       Ejemplo:

       "   45   "

       se convierte en:

       "45"
    */

    if (inputValue.trim() === "") {

        mostrarError(
            "Error: debes ingresar una temperatura."
        );

        return;
    }


    // ======================================================
    // CONVERTIR TEXTO A NUMBER
    // ======================================================

    /*
       Number() convierte un texto a número.

       Ejemplo:

       Number("45")

       resultado:

       45
    */

    const temperature =
        Number(inputValue);


    // ======================================================
    // VALIDAR SI REALMENTE ES UN NÚMERO
    // ======================================================

    /*
       Number.isFinite() verifica que sea un número
       válido y finito.

       Ejemplos:

       Number.isFinite(45)
       → true

       Number.isFinite("hola")
       → false

       Number.isFinite(NaN)
       → false
    */


    if (!Number.isFinite(temperature)) {

        mostrarError(
            "Error: debes ingresar solamente números."
        );

        return;
    }


    // ======================================================
    // SI LLEGAMOS AQUÍ, EL DATO ES VÁLIDO
    // ======================================================

    errorMessage.textContent = "";


    // ======================================================
    // VARIABLES PARA LOS RESULTADOS
    // ======================================================

    let resultado1;

    let resultado2;


    // ======================================================
    // CONVERSIÓN CELSIUS
    // ======================================================

    if (!conversionSwitch.checked) {


        /*
           FÓRMULA:

           Fahrenheit = (Celsius × 9/5) + 32
        */

        resultado1 =
            (temperature * 9 / 5) + 32;


        /*
           FÓRMULA:

           Kelvin = Celsius + 273.15
        */

        resultado2 =
            temperature + 273.15;


    } else {


        // ==================================================
        // CONVERSIÓN FAHRENHEIT
        // ==================================================

        /*
           FÓRMULA:

           Celsius = (Fahrenheit - 32) × 5/9
        */

        resultado1 =
            (temperature - 32) * 5 / 9;


        /*
           FÓRMULA:

           Kelvin = Celsius + 273.15
        */

        resultado2 =
            resultado1 + 273.15;

    }


    // ======================================================
    // MOSTRAR RESULTADOS
    // ======================================================

    /*
       toFixed(2) limita el resultado a dos decimales.

       Después usamos Number() para quitar ceros
       innecesarios.

       Ejemplo:

       113.00 → 113

       57.20 → 57.2
    */

    result1.textContent =
        Number(resultado1.toFixed(2));


    result2.textContent =
        Number(resultado2.toFixed(2));


    // ======================================================
    // MOSTRAR RESULTADOS TAMBIÉN EN CONSOLA
    // ======================================================

    console.log(
        "Temperatura ingresada:",
        temperature
    );


    console.log(
        "Resultado 1:",
        resultado1
    );


    console.log(
        "Resultado 2:",
        resultado2
    );

});


// 
// FUNCIÓN PARA MOSTRAR ERRORES
// 

/*
   Creamos una función para no repetir código.

   Cada vez que exista un error podemos llamar:

   mostrarError("mensaje");
*/


function mostrarError(mensaje) {

    errorMessage.textContent = mensaje;


    /*
       Limpiamos los resultados anteriores
       para evitar confusiones.
    */

    result1.textContent = "—";

    result2.textContent = "—";


    /*
       Colocamos el cursor nuevamente
       dentro del input.

       Así el usuario puede corregir
       inmediatamente el dato.
    */

    temperatureInput.focus();

}
