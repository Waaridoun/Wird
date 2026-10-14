# Wird : mise en ligne pas à pas

Compte environ 20 minutes, une seule fois. Tout est gratuit : la base de données est sur **Firebase** (offre gratuite « Spark ») et le site est hébergé sur **GitHub Pages**.

Ce dossier contient :

| Fichier | Rôle |
|---|---|
| `index.html` | l'application |
| `config.js` | **le seul fichier à modifier** (connexion à la base, prénoms, heure du qiyam) |
| `firestore.rules` | les règles de sécurité à coller dans Firebase |
| `sw.js`, `manifest.webmanifest`, `icons/` | pour installer l'app sur l'écran d'accueil |
| `agenda/` | les rappels d'agenda (qiyam et rappel du soir) |

---

## 1. Créer le projet Firebase

1. Va sur **console.firebase.google.com** et connecte-toi avec un compte Google.
2. Clique sur **Créer un projet**, nomme-le par exemple `wird-groupe`.
3. Désactive Google Analytics (inutile ici), puis **Créer le projet**.

> Reste sur l'offre gratuite **Spark**. Ne passe jamais à l'offre Blaze : elle demande une carte bancaire et n'apporte rien pour 5 personnes.

## 2. Créer la base de données

1. Dans le menu de gauche, ouvre **Firestore Database** (rangé selon les versions sous *Créer* / *Build* ou *Bases de données et stockage*), puis **Créer une base de données**.
2. S'il te demande une édition, choisis **Standard**.
3. Emplacement : **eur3 (Europe)** ou **europe-west9 (Paris)**.
4. Choisis **Mode production**, puis **Créer**.

## 3. Coller les règles de sécurité

1. Dans Firestore, ouvre l'onglet **Règles**.
2. Efface tout, colle le contenu du fichier `firestore.rules`, puis **Publier**.

## 4. Récupérer la configuration

1. Clique sur la roue dentée ⚙️ → **Paramètres du projet** → onglet **Général**.
2. En bas, dans **Vos applications**, clique sur l'icône Web **`</>`**.
3. Donne un surnom (`wird`), **ne coche pas** Firebase Hosting, puis **Enregistrer l'application**.
4. Copie le bloc qui ressemble à ceci :

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "wird-groupe.firebaseapp.com",
  projectId: "wird-groupe",
  storageBucket: "wird-groupe.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
```

## 5. Mettre la configuration dans `config.js`

Ouvre `config.js` avec un éditeur de texte (Bloc-notes, TextEdit en mode texte brut) et remplace la ligne

```js
  firebase: null,
```

par le contenu entre accolades que tu as copié :

```js
  firebase: {
    apiKey: "AIza...",
    authDomain: "wird-groupe.firebaseapp.com",
    projectId: "wird-groupe",
    storageBucket: "wird-groupe.firebasestorage.app",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abc123"
  },
```

N'oublie pas la virgule à la fin. Tu peux aussi m'envoyer le bloc dans la conversation : je te renvoie le dossier prêt.

> Tant que `firebase` vaut `null`, l'app tourne en **mode démo** avec des données fictives.

## 6. Mettre le site en ligne avec GitHub Pages

1. Crée un compte gratuit sur **github.com**.
2. Clique sur **New** (nouveau dépôt), nomme-le `wird`, laisse-le **Public**, puis **Create repository**.
3. Clique sur le lien **uploading an existing file**.
4. Glisse **tout le contenu** du dossier `wird` (les fichiers et les dossiers `icons` et `agenda`), puis **Commit changes**.
5. Va dans **Settings** → **Pages**. Dans *Source*, choisis **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
6. Attends 1 à 2 minutes. Ton site est en ligne à l'adresse `https://TON-PSEUDO.github.io/wird/`.

## 7. Partager avec le groupe

Envoie le lien dans votre groupe WhatsApp. Chacun :

1. ouvre le lien sur son téléphone et choisit son prénom ;
2. choisit ses objectifs de lecture et de mémorisation (par jour ou par semaine) ;
3. ajoute les rappels à son agenda (qiyam du vendredi, rappel du soir) ;
4. installe l'app sur l'écran d'accueil :
   - **iPhone** (Safari) : bouton Partager → « Sur l'écran d'accueil » ;
   - **Android** (Chrome) : menu ⋮ → « Installer l'application ».

---

## Comment marchent les rappels

- **Qiyam et rappel du soir** : ajoutés une fois à l'agenda du téléphone, ils sonnent tout seuls chaque semaine ou chaque soir. Sur iPhone, le qiyam sonne à 18h puis 30 minutes avant. Avec Google Agenda, c'est la notification par défaut de ton agenda qui s'applique.
- **Sessions à la mosquée** : quand quelqu'un en ajoute une, l'app propose de prévenir le groupe sur WhatsApp. Le message arrive comme une notification. Chacun peut ensuite l'ajouter à son agenda en un geste.

À tester en premier : le bouton « Agenda iPhone » sur un iPhone et « Google Agenda » sur un Android.

## Règles de fonctionnement (v1)

- Chacun coche **fait / pas fait** selon son propre objectif.
- On peut **rattraper** un oubli : la semaine en cours et la semaine précédente restent modifiables.
- Un téléphone est lié à un prénom : on ne peut cocher que pour soi depuis son téléphone. Après chaque coche, un bouton **Annuler** permet de corriger un mauvais clic.
- La **série du groupe** est hebdomadaire : une semaine est validée quand le groupe atteint **80 %** de ses objectifs. Ce seuil se règle dans `config.js` (`groupGoal`).
- Le **qiyam** est validé par une seule personne, qui indique s'il a eu lieu et combien vous étiez (sans les noms).
- La semaine commence le **lundi**.

## Modifier plus tard

- Pour changer un réglage, modifie `config.js`, puis dans GitHub : **Add file** → **Upload files** → glisse le fichier → **Commit changes**. Le site se met à jour en 1 à 2 minutes.
- Si vous changez le jour ou l'heure du qiyam, les fichiers du dossier `agenda` doivent être régénérés : demande-le-moi.
- Ne change pas les identifiants (`id`) des membres une fois que le groupe a commencé à cocher.

## Sécurité

Le lien du site suffit pour y accéder. Ne le partage qu'entre vous. Les règles Firestore refusent les données qui n'ont pas le bon format, mais elles ne remplacent pas un mot de passe. La configuration Firebase visible dans `config.js` n'est pas un secret : c'est normal qu'elle soit publique.

## Idées gardées pour plus tard

- Suivre la **quantité réelle** lue ou mémorisée, au lieu de « fait / pas fait ».
- Un **jour de révision ou jour off** (par exemple le jour où l'on récite au sheikh, on consolide sans nouvelle mémorisation).
