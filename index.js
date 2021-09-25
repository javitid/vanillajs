function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function generaTabla() {
    // Obtener la referencia del elemento table_container
    var table_container = document.getElementById("table_container");

    // Crea un elemento <table> y un elemento <tbody>
    var table   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 2; i++) {
        // Crea las filas de la tabla
        var fila = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la fila de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la fila "+i+", columna "+j);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        }

        // agrega la fila al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(fila);
    }

    // posiciona el <tbody> debajo del elemento <table>
    table.appendChild(tblBody);
    // appends <table> into <body>
    table_container.appendChild(table);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    table.setAttribute("border", "2");
}