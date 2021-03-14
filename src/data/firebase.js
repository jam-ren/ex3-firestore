import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrAl_deR0fqGQ2BTp7x7-XtLog8vmy5o0",
  authDomain: "pvt-2021.firebaseapp.com",
  projectId: "pvt-2021",
  storageBucket: "pvt-2021.appspot.com",
  messagingSenderId: "181939174741",
  appId: "1:181939174741:web:65d800cd36a9e2e94803dc"
};
// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;