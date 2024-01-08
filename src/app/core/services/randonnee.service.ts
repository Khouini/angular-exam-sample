import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Randonnee } from '../entities/randonnee';

@Injectable({
  providedIn: 'root',
})
export class RandonneeService {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:3000/randannees';

  getListRandonnees() {
    return this.http.get<Randonnee[]>(this.api);
  }
}
