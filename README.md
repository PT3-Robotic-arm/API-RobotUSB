# Start the project
## Requirements
This project currently sumport only Linux and MacOs.    
You will need `node`, `git` and `npm` to be able to use the project.  
You can check if you already have those tools installed by running:  

    $ <command> --version

For example:

    $ node --version

If the output displays the version of the program, it means that it is already installed, and you can go to the next step.  
If not, you will need to install them, by checking their respective website.

## Install the project
Retrieve the code from GitHub.

    $ git clone https://github.com/PT3-Robotic-arm/API-RobotUSB

Move to the corresponding folder:

    $ cd API-RobotUSB

Install the dependencies:

    $ npm install

Run the code:

    $ npm start

# Endpoints

## Event representation
Events are sent following this format, in JSON:
```
{
  "x": string,
  "y": string,
  "z": string,
  "acc_x": string,
  "acc_y": string,
  "acc_z": string,
  "direction": string,
  "id": number
}
```

## GET /getLatest
Send the latest event saved by the server, as an array of `event` (one per sensor).

## GET /getRow/:id
Send the event which correspond to the requested id, as an array of `event` (one per sensor).

## GET /getSince/:id
Send the list of the events that appened since the event corresponding to the id in parameter.  
The answer is sent as a two dimensional array of `event`.

## Missing permisions issues

Run the following command in a terminal, to obtain access to the Arduino's port:

    $ sudo chmod a+rw /dev/ttyACM0
