import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome : string = "Musica";


 val1 : number = 0;
 val2 : number = 0;

 verificar(num: Number) : string{
   if (num % 2 == 0){
     return ' par';
   }
   else{
     return ' impar';
   }
 }
  somar() : void {
     let total = Number(this.val1) + Number(this.val2);
     alert('a soma é: ' + total + this.verificar(total));
    verificar(num);

  }


}
