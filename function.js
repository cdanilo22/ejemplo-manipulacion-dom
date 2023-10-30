

/*
function datosUsuario(name, lastname, nickname) {
    console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}.`)
}


 datosUsuario('César Danilo', 'de León Chávez', 'cdanilo');


 */

/*

  const tipoSuscripcion = "Basic";

   if(tipoSuscripcion === 'Basic') {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
   }
   else if(tipoSuscripcion === 'Free') {
       console.log("Solo puedes tomar los cursos gratis");
   }
    else if(tipoSuscripcion === "Expert") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
   }
    else if(tipoSuscripcion === 'ExpertPlus') {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
   } else{
       console.log("El tipo de suscripción que solicitaste no está disponible");
   }

 */

/*

 let tipoSuscripcion = [
     {plan: "Free", descripcion: "Solo puedes tomar los cursos gratis"},
     {plan: "Basic", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
     {plan: "Expert", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año"},
     {plan: "ExpertPlus", descripcion: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
  ]


 let verificar = tipoSuscripcion.some(tipo => {
     if(tipo.plan === 'ExpertPlus') {
         console.log(`Elegiste el plan ${tipo.plan} , ${tipo.descripcion}`)
     }
 })*/



/*
  let i = 10;

   while(i >= 2) {

       console.log(`El valor de i es ${i}`);
       i--;
   }
*/


let resp = parseInt(prompt('¿Cuánto es 2 + 2 ?'));

while(resp !== 4) {
    resp = parseInt(prompt('¿Cuánto es 2 + 2 ?'));
}
console.log('Felicidades');