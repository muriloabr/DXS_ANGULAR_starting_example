import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "TITULO DO INPUT EM COMPTITLE";
  constructor() { }

  ngOnInit(): void { //inicializado componente
  }

  ngOnChanges(): void { //quando recebe dado de fora do componente
    console.log("TITLE ALTERADO DE FORA DO COMPONENTE");
  }

  ngOnDestroy(): void {
    console.log("TITLE MORREU");
  }

}
