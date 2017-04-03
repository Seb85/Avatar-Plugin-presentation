Présentation
=========

Ce plugin est un add-on pour le framework [Avatar](https://github.com/Spikharpax/Avatar-Serveur)

Avatar se présente


## Installation

- Dézippez le fichier `Avatar-Plugin-presentation-Master.zip` dans un répertoire temporaire
- Copiez le répertoire `presentation` dans le répertoire `Avatar-Serveur/plugins`
- Copiez le fichier `intents/intent.presentation.js`dans le répertoire `Avatar-Serveur/ia/intents/`
- Copiez le fichier `actions/action.present.js` dans le répertoire `Avatar-Serveur/ia/actions/`
- Editez le fichier `Avatar-Serveur/ia/actions/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript
var _actionPresentation = require('./action.present');

Object.defineProperty(exports, 'present', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionPresentation).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/intents/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript

var _intentPresentation = require('./intent.presentation');

Object.defineProperty(exports, 'presentation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intentPresentation).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/index.js`
	- Ajoutez dans l'import des intents, l'intention `presentation`
	- Ajoutez dans l'import des actions, l'action `present`
	- Ajoutez dans la fonction export.intent(), l'association de l'intention-action

```javascript
import { presentation, tvChannels, tvActions, music, weather, hour,  blague, manageAvatar, shoppingList, translate, lastAction, intentEnd} from './intents';
import { present, freeTV, freeRules, Sonos, forecastMsn, forecastYahoo, worldHour, jokeOfDay, avatarRules, shopping, translator, backupAction, actionEnd} from './actions';


exports.intent = function () {

	// Configure the intents
	ava
	 .intent(translate, translator)
	 // Déclaration presentation CI-DESSOUS !
	 .intent(presentation, present)
	 .intent(hour, worldHour)
	 .intent(weather, [forecastYahoo, forecastMsn])
	 .intent(music, Sonos)
	 .intent(blague, jokeOfDay)
	 .intent(manageAvatar, avatarRules)
	 .intent(shoppingList, shopping)
	 .intent(lastAction, backupAction)
	 .intent(intentEnd, actionEnd)  // Toujours à la fin, controle si une règle est passée
}
```


## Configuration
Vous pouvez modifier la phrase de présentation dans le fichier `Avatar-Serveur/plugins/presentation/presentation.js`

## Les commandes
Toutes les syntaxes de phrases qui comprennent ces mots peuvent être utilisées. Ce ne sont pas des règles fixes.

Les règles sont définies dans le tableau de syntaxes `presentation`

Une seule syntaxe est définie. La règles doit inclure le mot **présente** 

Quelques exemples possibles:
- Présente-toi
- Présentez-vous
- Peux-tu te présenter s'il te plait
...
   
## Versions
Version 1.0 
- Version Released
