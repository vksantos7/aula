import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios: Usuario[] = [];
  nome = '';
  email = '';

  adicionarUsuario(): void {
    const nome = this.nome.trim();
    const email = this.email.trim();

    if (!nome || !email) {
      return;
    }

    this.usuarios = [...this.usuarios, { nome, email }];
    this.nome = '';
    this.email = '';
  }
}
