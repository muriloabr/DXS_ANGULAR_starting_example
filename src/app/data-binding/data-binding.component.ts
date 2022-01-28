import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public projetos: number = 108;
  public nomeEmpresa: string = "DXS";
  public checkedDisabled = false;
  public habilitarBotao() {
    (!this.checkedDisabled)?(this.checkedDisabled=true):(this.checkedDisabled=false);
  }
  public alertaInfo() {
    alert("AUIAUAI");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
