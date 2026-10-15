import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ClienteModel } from '../../models/clienteModel/cliente.Model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  public readonly title = signal('Clientes');
  clientes: ClienteModel[] = [];

  private readonly homeService = inject(HomeService);

  ngOnInit(): void {
    // Initialization logic here
    this.homeService.getClientes().subscribe({
      next: (response) => {
        console.log('API:', response);
        this.clientes = response;
      },
      error: (err) => {
        console.error('Error fetching clientes:', err);
      },
    });

    const clienteId = 1; // Passe o ID desejado
    this.homeService.getCliente(clienteId).subscribe((cliente) => {
      console.log(cliente);
    });
  }
}
