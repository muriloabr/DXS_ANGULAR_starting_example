import { Component,VERSION, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@simplesDecorator({value1: 5, value2: 7})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  public title = 'DXS | APP ANGULAR: START'; // Libera para Interpolation no HTML, sendo PUBLIC vai ser liberado para usar no HTML
  public valor: number = 1;

  constructor() {
    console.log('Passando pelo constructor() da CLASSE');
  }
  public adicionar(): number
  {
    return this.valor += 1;
  }
  ngOnInit(): void {
    console.log('VALOR 1 : ' + (this as any).value1);
    console.log('VALOR 2 : ' + (this as any).value2);
    this.title = 'DXS | APP ANGULAR: ' + VERSION.full;
  }  

  ngDoCheck(): void { //ao checar a atualizacao
    console.log('Passando pelo ngDoCheck');
  }

  ngAfterContentChecked(): void { //depois do fim da checagem de atualizacao
    console.log('Passando pelo ngAfterContentChecked');
  }

  ngAfterContentInit(): void { //depois da inicializao o conteudo
    console.log('Passando pelo ngAfterContentInit');
  }

  ngAfterViewChecked(): void { //depois do fim da checagem de atualizacao
    console.log('Passando pelo ngAfterViewChecked');
  }

  ngAfterViewInit(): void { //inicializa a view
    console.log('Passando pelo ngAfterViewInit');
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
  
