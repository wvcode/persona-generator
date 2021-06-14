import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';
  name = 'Test App';
  photo = 'https://placehold.it'
  genero = ''
  cidade = ''
  estado = ''
  pais = ''
  idade = ''

  constructor(private data: DataService) { }

  callPersona() {
    this.data.callPersona().subscribe(response => {
      this.photo = response['results'][0].picture.medium;
      this.name = response['results'][0].name.first + ' ' + response['results'][0].name.last;
      this.genero = response['results'][0].gender == 'male' ? 'Masculino' : 'Feminino'
      this.cidade = response['results'][0].location.city
      this.estado = response['results'][0].location.state
      this.pais = response['results'][0].location.country
      this.idade = response['results'][0].dob.age
    })
  }

  ngOnInit(): void {
    this.callPersona();
  }
}
