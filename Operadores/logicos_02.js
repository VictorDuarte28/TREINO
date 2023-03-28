let t1 = true;
let t2 = true;

buytv50 = t1 && t2; //AND (E)
console.log('Vamos comprar a TV DE 50" ?', buytv50) 

buytv32 = t1 !== t2; //XOR (OU EXCLUSIVO)
console.log('Vamos comprar a TV de 32" ?', buytv32) 

let sorvete = t1 || t2; //OR (OU)
console.log('Vamos comprar sorvete ?', sorvete); 

let ficaremcasa = !sorvete; //NOT
console.log('Vamos ficar em casa ?', ficaremcasa ); 