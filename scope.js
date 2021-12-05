
let param = 4;

function incr(myVar)
{
    myVar++;
    console.log(myVar);
}

console.log(param);
incr(param);
console.log(param);



let t = [];
t.push(4);

function func(myAr){
        myAr[0]++;
}

console.log(t);
func(t);
console.log(t);





/*
let x = 5;
var y = 10;

//On définit une première fonction qui utilise les variables globales
function scope1(){
    console.log('Depuis scope1() : x = ' + x + ' et y = ' + y);
}
//On définit une deuxième fonction qui définit des variables locales
function scope2(){
    const a = 1;
    var b = 2;
    console.log(
    'Depuis scope2() :  a = ' + a + ' et b = ' + b);
}
//On définit une troisième fonction qui défnit également des variables locales
function scope3(){
    let x = 20;
    var y = 40;
    console.log('Depuis scope3() : x = ' + x + ' et y = ' + y);
}

//On pense bien à exécuter nos fonctions !
scope1();
scope2();
scope3();

//On tente d'afficher des variables globales puis locales depuis l'espace global
console.log('Depuis le scope global : x = ' + x + ' et y = ' + y);

console.log('Depuis le scope global : a = ' + typeof(a) + ' et b = ' +  typeof(b));
*/