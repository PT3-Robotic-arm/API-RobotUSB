const serialport = require('serialport');
const ReadLine = require("serialport").parsers.Readline;
const { addRow } = require('./db');

let port;

// Trouve et renvoie l'adresse de l'Arduino
async function findAdress() {
    const ports = await serialport.list();
    let path = null
    ports.forEach(port => {
        // Sur linux, l'Arduino est monté sur le port /dev/ttyACM0
        if (port.path.match(/ttyACM0/))
            path = port.path;
    })
    return path;
}

// Connecte le serveur à l'Arduino, et initialise le flux de donnée
async function connect() {
    if (port)
        return;

    const adress = await findAdress();
    console.log(adress)

    if (adress) {
        port = new serialport(adress, 9600);
        port.pipe(new ReadLine());
        listen();
    } else {
        console.log("No USB device found");
    }

}

// Permet de convertir les données reçues en JSON
function parseDataToJson(temp) {
    if (!temp.startsWith("{"))
        return

    temp = JSON.parse(temp);
    addRow(temp);
    //console.log(temp);
}

// Récupère les données envoyé par l'Arduino
function listen() {
    let temp = ""
    port.on('data', (data) => {
        data = data.toString();

        // Pour distinguer les différents events, l'Arduino met un ; à la fin de chaque event (le reste est du json)
        // Ainsi, si le bout de donnée reçu contient un ;, c'est qu'un event entier a été reçu par le serveur
        if (data.includes(";")) {
            // Sépare le bout de donnée en la fin du 1er event et le début du 2e event
            const parts = data.split(";")
            parseDataToJson((temp + parts[0]).trim());
            temp = parts[1];
        } else {
            temp += data.toString();
        }
    })
}

module.exports = {
    connect: connect,
}
