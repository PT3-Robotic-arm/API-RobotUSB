# API-RobotUSB
## Utiliser le programme

### Launch.sh 
La première solution pour lancer le projet est d'utiliser le fichier launch.sh qui installe toutes les librairies et qui le lance :

	$ chmod 777
	$ ./launch.sh

### Installation des librairies

	$ sudo pip install serial 
	$ sudo pip install django
	$ sudo pip install django-cors-headers

###  Initialisation des dépendances : 
Dans un premier temps, il va falloir initialiser le projet et toutes les dépendances. Pour ce faire il va falloir exécuter la commande: 

    $ python3 manage.py migrate
Cela permet de créer les elements de base du programme.

### Création d'un utilisateur administrateur :
Afin d’accéder facilement aux données, il va falloir mettre en place un super utilisateur. On va donc devoir exécuter une commande simple :

	$ python3 manage.py createsuperuser

On doit ensuite donner un nom:

	Nom d'utilisateur: admin

On demande ensuite une adresse mail: 

	Adresse électronique: admin@exemple.com

Enfin, il faut saisir un mot de passe ( minimum 8 caractères avec des chiffres ) puis une vérification de celui-ci : 

	Password: *********
	Password (again): *********
	Superuser created successfully.

### Démarrage du serveur de développement

Pour lancer le programme, il faut maintenant utiliser la commande:

	$ python3 manage.py runserver

Vous pouvez maintenant accéder a la page d'administration, http://127.0.0.1:8000/admin . Un écran de connexion devrait apparaître: 
![Interface de connexion au panel d'administration](https://docs.djangoproject.com/fr/1.8/_images/admin01.png)

La page suivante devrait ensuite s'afficher:
![Image du panel d'aministration](https://i.ibb.co/KLn5Mg5/Capture-d-cran-de-2021-11-11-14-20-43.png)
En cliquant sur le lien 'Coordinatess' on arrive sur une visualisation de la base de donnée.
