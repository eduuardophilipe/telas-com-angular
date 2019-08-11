import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    //if (usuario.email === '' &&
    //usuario.senha === '') {

    this.usuarioAutenticado = true;

    this.router.navigate(['/beers']);

  } //else
    //this.usuarioAutenticado = false; 
}
