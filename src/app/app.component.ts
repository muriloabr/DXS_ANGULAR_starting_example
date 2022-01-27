import { Component,VERSION } from '@angular/core';

@simplesDecorator({value1: 5, value2: 7})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor() {
    console.log('Passando pelo constructor() da CLASSE');
  }
 
  ngOnInit() {
    console.log('VALOR 1 : ' + (this as any).value1);
    console.log('VALOR 2 : ' + (this as any).value2);
    this.title = 'DXS | APP ANGULAR: ' + VERSION.full;
  }  
}

function simplesDecorator(args: any) {
  console.log('ARGUMENTOS DO DECORADOR: '+ JSON.stringify(args));
 
  return function(target: any) {
    console.log('Passando pelo metodo Decorator');
    console.log('TIPO: ' + typeof target);
    console.log('ALVO: ' + target);
 
    Object.defineProperty(target.prototype, 'value1', {
      value: args.value1 + 10,
      writable: false
    });
 
    Object.defineProperty(target.prototype, 'value2', {
      value: args.value2 + 20,
      writable: false
    });
  };  
}
  
