import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { hinchaCreacionDto } from '../hincha';

@Component({
  selector: 'app-formulario-hincha',
  templateUrl: './formulario-hincha.component.html',
  styleUrls: ['./formulario-hincha.component.css']
})
export class FormularioHinchaComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Output()
  OnSubmit: EventEmitter<hinchaCreacionDto> = new EventEmitter<hinchaCreacionDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      documentid: [
        '',
        {
          validators: [Validators.required],
        },
      ],fullname: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      location: [
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
