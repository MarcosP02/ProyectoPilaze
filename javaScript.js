

//Proyecto

alert('BIENVENIDO AL MUNDO DONDE TU LUGAR Y ESPACIO SON SOLAMENTE PARA DIFRUTAR') 

let nombre = prompt('Ingrese su nombre');

let nuevo = prompt('Si su nombre es = ' + nombre + ' es correcto escriba SI de lo contraio escriba no');
while(nuevo !== "SI"){   

nombre = prompt('Ingrese su nombre')
if(nombre){
    alert('Su nombre se actualizo correctamente = ' + nombre )      
} 
else{
    alert('Usted no ingreso ninguna opcion Vuelva a intentarlo')       
}
    nuevo = prompt('Si su nombre es =' + nombre + ' es correcto escriba SI de lo contraio escriba no'); 
    
}


alert('Bienvenido al Mundo' + ' '+ nombre)

let dias = parseInt(prompt('Cuantos dias quiere irse de vacaciones'));
let diasVacaciones = prompt(' Usted ingreso = ' + dias + ' ' + 'dias escriba "SI" para seguir o de lo contrario marque "NO"' ) ;

while(diasVacaciones !== "SI"){ 
    dias = parseInt(prompt('Cuantos dias quiere irse de vacaciones'));
if(dias){
alert('Difrute su estadia de = '+ dias + ' ' +'dias')
}
else(
    alert('Usted no ingreso ninguna opcion vuelva a intentarlo')
)
    diasVacaciones = prompt(' Usted ingreso = ' + dias + ' ' + 'dias escriba "SI" para seguir o de lo contrario marque "NO"' ) ;
}

dias = dias * 3000
alert('El total en dinero en los dias de su vacaciones es =  $' + dias )





let Bariloche = 80000 + dias
let Buzios = 450000 + dias
let Disney = 380000 + dias
let Hawaii =460000 + dias
let Mardel = 120000 + dias

Bariloche =  parseInt(Bariloche)
Buzios =  parseInt(Buzios)
Disney =  parseInt(Disney)
Hawaii =  parseInt(Hawaii)
Mardel =  parseInt(Mardel)


let menu = parseInt(prompt("Escriba un destino \n 1. Bariloche tiene un costo 80000, para dos personas, todo incluido \n 2.Buzios tiene un costo 220000, para dos personas, todo incluido \n 3. Disney  tiene un costo 380000, para dos personas, todo incluido \n4.Hawaii tiene un costo 460000, para dos personas, todo incluido \n 5. Mardel tiene un costo 120000 , para dos personas, todo incluido \n 6.Salir")); 

                                    switch (menu){

case 1:   
    alert('Su paquete en total con el IVA es = $' + calcularIva(Bariloche,Bariloche))

    alert(" Difrute su estadia, Muchas Gracias por confiar en nosotros, Vuelva Pronto")

    
break;

case 2:
    alert( 'Su paquete en total con el IVA es = $' +calcularIva(Buzios));
alert(" Difrute su estadia, Muchas Gracias por confiar en nosotros, Vuelva Pronto")
   
break;

case 3:
    alert( 'Su paquete en total con el IVA es = $' +calcularIva(Disney)); 
alert(" Difrute su estadia, Muchas Gracias por confiar en nosotros, Vuelva Pronto")
 
break;

case 4:
    alert( 'Su paquete en total con el IVA es = $' +calcularIva(Hawaii));
   
alert(" Difrute su estadia, Muchas Gracias por confiar en nosotros, Vuelva Pronto")
break;

case 5:
    alert( 'Su paquete en total con el IVA es = $' +calcularIva(Mardel));
       
alert(" Difrute su estadia, Muchas Gracias por confiar en nosotros, Vuelva Pronto")
 break;
default:
    alert("Salir");
break;
} 

                                    






function calcularIva(sinIva){
 return sinIva - (sinIva * 21 /100)
   
}

