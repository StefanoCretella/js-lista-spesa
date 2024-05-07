// Lista della spesa presenti nella "ul"
let listaSpesa = ["Pomodori", "Pane", "Latte", "Uova", "Formaggio"];

// Trova l'elemento "ul" dove aggiungiamo gli elementi della lista
let listaUl = document.getElementById("lista-spesa");

let i = 0;

// Ciclo while per stampare gli elementi della lista
while (i < listaSpesa.length) {

    // Creazione di un nuovo elemento di lista
    let listItem = document.createElement("li");

    // Aggiunta elemento nella lista spesa
    listItem.textContent = listaSpesa[i];

    // Aggiunta dell'elemento di lista alla lista "ul"
    listaUl.appendChild(listItem);

    // Incremento oggetti nella lista
    i++;
}
