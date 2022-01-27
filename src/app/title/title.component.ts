import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "TITULO DO INPUT EM COMPTITLE";

  constructor() { }

  ngOnInit(): void { //inicializado componente
  }

  ngOnChanges(): void { //quando recebe dado de fora do componente
    console.log("TITLE ALTERADO DE FORA DO COMPONENTE");
  }



}
