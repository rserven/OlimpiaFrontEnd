import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hinchaCreacionDto } from '../hincha';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private personService: PersonService, private router:Router) { }

  ngOnInit(): void {
  }  

  guardarCambios(hincha: hinchaCreacionDto){
    this.personService.crear(hincha)    
    .subscribe(() => {
      this.router.navigate(['/']);
    }, error =>  console.log(error));
  }
}
