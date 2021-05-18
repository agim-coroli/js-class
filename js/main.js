// INTRO CLASS 
// class Personnage{
//     constructor(nom, prenom, age){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age; 
//         this.parler = (phrase)=>{
//             return phrase;
//         }
//     }
// }

// let fanny = new Personnage("Hunin", "Fanny", 24); // on appelle ca une instance de classe "personnage"
// let pilouLeChat = new Personnage("Le chat", "pilou", 10);

// console.log(fanny);
// console.log(fanny.parler("salut la coding 19"));

// console.log(pilouLeChat);
// console.log(pilouLeChat.parler("miaou"));







// exo1 
// Créer une class Personnage avec comme propriétés : 
// age , nom , ville
// Faire 2 instances de cette class.

// exo2 
// Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// Lancer cette méthode sur les deux instances de l'exo1 
// class Personnage{
//     constructor(age , nom , ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//     }
//     sePresenter(){
//         console.log(`bonjour, je m'appelle ${this.nom}`);
//     }
// }

// let Fanny = new Personnage(24, "Hunin", "Mons");
// let Agim = new Personnage(24, "Coroli", "Bruxelles");

// Fanny.sePresenter()
// Agim.sePresenter()










// exo2 
// parti 1 
// Traduire le code suivant en class et en instances

// ### lieux

// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };

// exo2.1
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### }; 

// exo2.2 
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

// class Lieux {
//     constructor(nom, contenu, ingredients){
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }
// let maison = new Lieux("maison", []);
// console.log(maison);

// let epicerie = new Lieux("epicerie", [], []);// let cuisine = new Lieux("cuisine", [], []);








// exo2
// parti 2 
// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };
// class Ingredients{
//     constructor(nom, etat, prix){
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }
// let poivrons = new Ingredients("poivrons", "entier", 1);
// let oignon = new Ingredients("oignon", "entier", 2);
// let oeuf = new Ingredients("oeuf", "entier", 4);
// let epice = new Ingredients("epice", "moulu", 3.25);
// let paprika = new Ingredients("paprika", "moulu", 1.5);
// let fromage = new Ingredients("fromage", "coupé", 1.6);

// console.log(poivrons);
// console.log(oignon);
// console.log(oeuf);
// console.log(epice);
// console.log(paprika);
// console.log(fromage);








// exo2 
// parti 3 
// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// class Personne{
//     constructor(nom, lieu, argent, panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//     }
//     se_deplacer = () => {

//     }
//     payer = () => {

//     }
//     couper = () => {
//     }
//     maMth = () => {
            // avant on etait obliger de bind la fct
//     }
// }
// let personnage = new Personne("Maxime", "néant", 100, []);

// let personnage = new Personne('Maxime', "néant", 100, []);
// console.log(personnage);






// exo 3 
// Créer une class Objet 
// // _Propriétés : nom, prix
// class Objet {
//     constructor(nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }
// // Créer deux instances d'objets avec un nom et un prix
// // Créer une boite (tableau) et mettre les deux objets dedans.
// let crayon = new Objet("crayon", 50);
// let samsung = new Objet("samsung", 60);
// let boite = [];
// boite.push(crayon);
// boite.push(samsung);


// Créer une class Personnage 
// // _Propriétés : nom(string), sac(tableau), argent(number)
// class Personnage {
//     constructor(nom, sac, argent) {
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//     }
//     // _Méthode : prendre(objet)
//     prendre(objet) {
//         this.sac.push(objet);
//         boite.splice(boite.indexOf(objet),1);
//         console.log(`${this.nom} a mis un ${objet.nom} dans son sac`);
//     }
//     // _Méthode : acheter(vendeur, objet)
//     acheter(vendeur, objet) {
//         if(this.argent >= objet.prix){
//             //je peux acheter

//             this.argent -= objet.prix; 
//             //this.argent = this.argent-objet.prix
//             //tu as 60 la théière vaut 40
//             //il te reste 20
        
//             vendeur.argent += objet.prix;
//             //vendeur.argent = vendeur.argent+objet.prix
//             //le vendeur empoche les 40 dépensés pour la théière

//             this.sac.push(objet);
//             vendeur.sac.splice(vendeur.sac.indexOf(objet), 1);
//             console.log(`${this.nom} a acheté ${objet.nom} a ${vendeur.nom}`);
//         }else{
//             //je peux pas acheter
//             console.log("Va acheter des trucs moins chers !");
//         }
//     }
// }


// let perso1 = new Personnage("Paul", [], 50);
// let perso2 = new Personnage("Taulier", [], 20);

// perso1.prendre(crayon, boite);
// perso2.prendre(samsung, boite);

// perso2.acheter(perso1, crayon);
// perso1.acheter(perso2, samsung);


// Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.










// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison

// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus ou en y allant à pieds.
// ### Puis créez une instance de votre personnage.

// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
// Sinon, il faut y aller à pied.
// ### Créez une instance de Bus.
class Lieu {
    constructor(nom, personnage) {
        this.nom = nom;
        this.personnage = personnage;
    }
}

let molenGeek = new Lieu("molenGeek", []);
let snack = new Lieu("snack", []);
let maison = new Lieu("maison", []);

class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arriver, transport) => {
            if (transport == "pied") {
                console.log(`${this.prenom} est forcer d'arriver a pied`);
            } else if (transport.embarquer(this) == true) {
                console.log(`${this.prenom} est rentré dans le bus`);
            } else {
                console.log(`${agim} n'a pas d'argent et il arrive a pied`);
            }
            arriver.personnage.push(this);
            depart.personnage.splice(depart.personnage.indexOf(this), 1)
        }
    }
}
let agim = new Personne("Coroli", "Agim", 15);


class Bus {
    constructor(personnes, caisse, prix){
        this.personnes = personnes;
        this.caisse = caisse;
        prix = 2.50;
        this.prix = prix;
        this.embarquer = (user) => {
            if (user.argent >= this.prix) {
                user.argent -= this.prix;
                this.caisse += this.prix;
                this.personnes.push(user);
                this.personnes.splice(user)
                return true;
            } else {
                alert("marche a pied ptit batard");
                return false;
            }
        }
    }
}

let bus = new Bus([], 100, 2.50);


// 8h00
console.log(`8h00 agim est a la maison`);
maison.personnage.push(agim)
console.log(maison);

// 8h30
agim.seDeplacer(maison ,molenGeek ,bus);
console.log(bus);

// 8h45
console.log(`8h45 agim est arriver a molengeek`);
console.log(molenGeek);

// 12h45
console.log(`12h45 agim sort de MG pour aller au snack`);
agim.seDeplacer(molenGeek, snack, bus);
console.log(bus);

// 13h30
console.log(`13h30 agim sort de du snack pour retrouner a MG a pied`);
agim.seDeplacer(snack, molenGeek, "pied");
console.log(molenGeek);

// 17h10 
console.log(`17h10 agim sort de MG pour rentrer chez lui`);
agim.seDeplacer(molenGeek, maison, bus);
console.log(maison);

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(agim.argent);
console.log(bus.caisse);




