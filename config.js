/*
  Wird : réglages du groupe
  -------------------------
  C'est le seul fichier à modifier.

  1. Colle la configuration de ton projet Firebase à la place de `null`
     (étape 5 du guide). Tant qu'elle vaut `null`, l'app tourne en mode
     démo avec des données fictives, et rien n'est partagé.
  2. Les identifiants (id) des membres ne doivent plus changer une fois
     que le groupe a commencé à cocher.
*/
window.WIRD_CONFIG = {
  appName: "Wird",

  firebase: {
  apiKey: "AIzaSyClPACQH-qqEXdhiO3TOkP87rU8bPf6e3Y",
  authDomain: "wird-groupe-863a9.firebaseapp.com",
  projectId: "wird-groupe-863a9",
  storageBucket: "wird-groupe-863a9.firebasestorage.app",
  messagingSenderId: "425471204806",
  appId: "1:425471204806:web:413617d6269608499666c7"
};
  // Exemple de ce que tu dois coller :
  // firebase: {
  //   apiKey: "AIza...",
  //   authDomain: "wird-groupe.firebaseapp.com",
  //   projectId: "wird-groupe",
  //   storageBucket: "wird-groupe.firebasestorage.app",
  //   messagingSenderId: "1234567890",
  //   appId: "1:1234567890:web:abc123"
  // },

  members: [
    { id: "ilyas", name: "Ilyas" },
    { id: "elias", name: "Elias" },
    { id: "anes",  name: "Anes"  },
    { id: "amine", name: "Amine" },
    { id: "hilal", name: "Hilal" }
  ],

  // Qiyam hebdomadaire : 5 = vendredi (0 = dimanche, 1 = lundi, ...)
  qiyam: { weekday: 5, time: "22:30", durationMin: 90, place: "" },

  // La semaine du groupe est validée quand le groupe atteint ce pourcentage
  groupGoal: 0.8,

  // Heure du rappel du soir pour cocher sa journée
  dailyReminder: "21:00",

  timezone: "Europe/Paris"
};
