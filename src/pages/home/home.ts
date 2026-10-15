import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { ClienteModel } from '../../models/clienteModel/cliente.Model';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  public readonly title = signal('Clientes');
  clientes: ClienteModel[] = [];

  //X----------------------X-------------------------------------------FILTROS
  clientesFiltrados: ClienteModel[] = [];

  nomeBusca = '';

  private readonly homeService = inject(HomeService);

  ngOnInit(): void {
    // Initialization logic here
    this.homeService.getClientes().subscribe({
      next: (response) => {
        this.clientes = response;
        this.clientesFiltrados = response;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  pesquisar(): void {
    this.clientesFiltrados = this.clientes.filter((cliente) =>
      cliente.nome?.toLowerCase().includes(this.nomeBusca.toLowerCase()),
    );
  }

  limpar(): void {
    this.nomeBusca = '';
    this.clientesFiltrados = this.clientes;
  }
}
