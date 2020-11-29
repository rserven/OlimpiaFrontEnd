import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { hinchaEliminacionDto } from '../hincha';


@Component({
  selector: 'app-formulario-eliminar',
  templateUrl: './formulario-eliminar.component.html',
  styleUrls: ['./formulario-eliminar.component.css']
})
export class FormularioEliminarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Output()
  OnSubmit: EventEmitter<hinchaEliminacionDto> = new EventEmitter<hinchaEliminacionDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      documentid: [
        '',
        {
          validators: [Validators.required],
        },
      ]
    });
  }

  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }

}
