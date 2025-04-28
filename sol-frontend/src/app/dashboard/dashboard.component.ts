import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true
})
export class DashboardComponent { }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario: any;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // Aquí podrías hacer una llamada al backend para obtener los datos del usuario
      this.usuario = { nombre: 'Usuario Autenticado' }; // Ejemplo estático
    }
  }
}
