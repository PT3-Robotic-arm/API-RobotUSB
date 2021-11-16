const serialport = require('serialport');
const ReadLine = require("serialport").parsers.Readline;
const { addRow } = require('./db');

let port;

async function findAdress() {
    const ports = await serialport.list();
    let path = null
    ports.forEach(port => {
        if (port.path.match(/ttyACM\d*/)) {
            console.log(port)
            path = port.path;
        }
    })
    return path;
}

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

function parseDataToJson(temp) {
    if (!temp.startsWith("{"))
        return

    temp = JSON.parse(temp);
    addRow(temp);
    //console.log(temp);
}


function listen() {
    let temp = ""
    port.on('data', (data) => {
        data = data.toString();

        if (data.includes(";")) {
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
