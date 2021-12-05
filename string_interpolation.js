
let a = 'trilou';
let b = 'somethiong';

function myConcat(myStr, arg) {
  console.log(myStr);
  console.log(arg1);
  return 'whatever';
}

console.log(myConcat` that's a string with ${a} and then ${b} `);
return;











let my_char = 'something reallly nice';



let another_char = 'youpi';

let str = `whatever  ${my_char}`;

function concatCusto(chaines, ...arg1){
    console.log(chaines);
    console.log(arg1);
    let parite;
    if(arg1 % 2 === 0){
      parite = "paire";
    } else {
      parite = "impaire";
    }
    return `${chaines[0]}${parite}.`;
  }
  // concaténation spécifique où on modifie la sortie
  console.log(
    concatCusto`La réponse est ${str}.
     it's ${another_char}`);
  