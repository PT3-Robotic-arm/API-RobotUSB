# Démarrer  le projet
## Prérequis
Le projet ne supporte actuellement que Linux.  
Vous aurez besoin de `node`, de `git` et de `npm`.  
Vous pouvez vous assurer que vous possédez bien chacun de ces programmes en faisant la commande:

    $ <command> --version

Par exemple:

    $ node --version

Si l'exécution affiche la version installé du programme, c'est qu'il est installé, et vous pouvez passer à l'étape suivante. 
Sinon, il vous faut les installer.

## Installer le projet
Récupérer le code du projet sur github.

    $ git clone https://github.com/PT3-Robotic-arm/API-RobotUSB

Se déplacer dans le dossier correspondant au projet

    $ cd API-RobotUSB

Installer les dépendances

    $ npm install

Exécuter le code

    $ npm start

# Endpoints

## Représentation d'un event
Les events sont envoyé sous ce format par le serveur, en json:
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
Renvoie le dernier event enregistré par le serveur, sous la forme d'un [event](#Représentation d'un event).

## GET /getRow/:id
Renvoie l'event correspondant à l'id passé dans le path, sous la forme d'un [event](#Représentation d'un event).

## GET /getSince/:id
Renvoie la liste des events qui se sont produit depuis l'event avec l'id passé dans le path. 
La réponse est une liste d'[events](#Représentation d'un event).
