import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClienteModel } from '../models/clienteModel/cliente.Model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly apiUrl: string = 'https://localhost:7110/api/Clientes';

  private readonly http = inject(HttpClient);

  getClientes() {
    return this.http.get<ClienteModel[]>(this.apiUrl);
  }

  getCliente(id: number) {
    return this.http.get<ClienteModel>(`${this.apiUrl}/${id}`);
  }
}
