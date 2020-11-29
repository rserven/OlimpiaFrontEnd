import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hinchaEliminacionDto } from '../hincha';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private personService: PersonService, private router:Router) { }


  ngOnInit(): void {
  }

  guardarCambios(hincha: hinchaEliminacionDto){
    this.personService.Eliminar(hincha)    
    .subscribe(() => {
      this.router.navigate(['/']);
    }, error =>  console.log(error));
  }

}
