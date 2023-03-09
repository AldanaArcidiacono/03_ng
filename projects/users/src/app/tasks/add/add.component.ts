import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  isDisplayForm: boolean;
  formGroup: FormGroup; // Lo de gruop es porque los formularios reactivos pueden hacerse muy complejos y tener diferentes grupos

  constructor(public fb: FormBuilder) {
    this.isDisplayForm = false;
    this.formGroup = fb.group({
      title: 'Nueva tarea', // Cada campo del form es un form control. Le podes poner valores por defecto
      owner: '',
    }); // FormBuilder es un factory. Le pediremos que nos cree un grupo
  }
}
