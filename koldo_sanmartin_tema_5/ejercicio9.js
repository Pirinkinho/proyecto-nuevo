// Función titulo para convertir la primera letra de una palabra en mayúscula 
// y el resto en minúsculas dentro de una cadena.
function titulo(cadena) {

    // Creamos una matriz para separar la cadena en palabras usando el espacio como 
    // separador, asegurándonos de que no haya varios espacios en blanco juntos.
    let palabras = cadena.split(/\s+/);

    // Creamos una nueva matriz para convertir la primera letra en mayúscula y el resto en minúsculas.
    let palabrasFormateadas = palabras.map(palabra => {
            return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
        });

    // Unir las palabras formateadas de nuevo con espacios.
    return palabrasFormateadas.join(" ");
}

// Pedir al usuario que ingrese una cadena de texto.
let texto = prompt("Escribe el texto que desees:");

// Invocar la función.
let resultado = titulo(texto);

// Mostrar resultados.
alert(`Texto original:\n${texto}\nTexto modificado:\n${resultado}`);
