import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Alunos } from '../Menu/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private readonly API = 'http://localhost:3000/alunos';
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get<Alunos[]>(this.API)
  }
}
