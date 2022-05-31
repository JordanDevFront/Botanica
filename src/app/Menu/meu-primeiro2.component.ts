import { Component, OnInit } from '@angular/core';
//import { AlunoService } from '../services/aluno.service';
//import {Alunos} from './alunos';


@Component({
  selector: 'menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.component.css']
})
export class Menu implements OnInit {
  //alunos: Alunos[] | undefined
  
  //constructor(private service: AlunoService) { }

  ngOnInit() {
    //this.service.getList()
    //.subscribe(data => this.alunos = data);   
  }

}
