# Template Exemple Express

Système de routage et de controllers.

- Framework: [Express](https://www.npmjs.com/package/express)
- Moteur de templating: [EJS](https://www.npmjs.com/package/ejs)
- Parser de requête POST: [body-parser](https://www.npmjs.com/package/body-parser)
- Middleware pour CouchDB: [pouchdb](https://www.npmjs.com/package/pouchdb)
- Plugin Find pour PouchDB: [pouchdb-find](https://www.npmjs.com/package/pouchdb-find)

### Base de données

CouchDB utilisé, base de données de test: ```test_couch```

Une seule base de données, ajout d'un champs ```type``` sur les documents (User, Post, News, etc...) pour différencier les types de documents.

##### Exemple de document:
```javascript
{
  "_id": "1ec905a9436a1d9d4d2af4011d0034ce",
  "_rev": "4-8d1831d7366d7fee6fee28ba995599de",
  "name": "Michel",
  "age": 21,
  "type": "User"
}
```

### Mise en ligne
#### Méthode Heroku

- [Télécharger](https://devcenter.heroku.com/articles/heroku-cli#windows) et installer la Heroku CLI
- Heroku se manipule en ligne de commande
- ```heroku login``` pour se connecter au compte heroku
- ```heroku create --region eu``` pour créer l'application sur heroku dans la region européenne
- Le deploiement via heroku se passe entièrement via GIT, avec ```heroku create```, heroku a ajouté un repository au projet nommé 'heroku', quand on veut mettre en production, il suffit de push l'application sur cette branche
- ```git push heroku master``` pour envoyer l'application en prod
- ```heroku open``` pour ouvrir l'application sur le navigateur

A noter que en version gratuite, quand l'application n'ets plus utilisée pendant 30 minutes, celle ci se met en veille, la prochaine requete est un peu longue.

Exemple de mon application: [https://frozen-forest-73233.herokuapp.com](https://frozen-forest-73233.herokuapp.com)

### Méthode à la main

Dites moi, je vous héberge l'appli sur un serveur.

Bon courage :wink: