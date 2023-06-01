function alerta(){

    var gasolina = document.getElementById ("gas").value;
    var gasolinados = gasolina / 2;

    var gassolinatres = document.getElementById ("LitrosDos");
    gassolinatres.textContent = "Debe de cargar " + gasolinados;
    

    var litros = document.getElementById("Litros");
    litros.textContent = "Hola Mundo";
}