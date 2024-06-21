import { Component, inject, OnInit } from '@angular/core';
import { DynamicComponentSelectorComponent } from './components/dynamic-component-selector/dynamic-component-selector.component';
import { ApiService } from '../../shared/services/api.service';
import { GetViewComponents } from '../../shared/interfaces/api.interface';
import { CacheService } from '../../shared/services/cache.service';
import { DynamicComponentSelectorService } from './components/dynamic-component-selector/dynamic-component-selector.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-fields',
  standalone: true,
  imports: [DynamicComponentSelectorComponent, ReactiveFormsModule],
  templateUrl: './dynamic-fields.component.html',
  styleUrl: './dynamic-fields.component.scss'
})
export default class DynamicFieldsComponent implements OnInit {
  componentList: GetViewComponents[] = [];
  api = inject(ApiService);
  cache = inject(CacheService);
  dynamicSelectorSE = inject(DynamicComponentSelectorService);
  formGroup: FormGroup = new FormGroup({});

  campos: any = [
    { nombre: 'nombre', valor: '', validations: { required: true } },
    { nombre: 'edad', valor: '', validations: { required: false, min: 18 } },
    { nombre: 'apellido', valor: '', validations: { required: false } }, //, maxLength: 7
    { nombre: 'correo', valor: '', validations: { required: false } }, //, patron: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    { nombre: 'telefono', valor: '', validations: { required: false } } //, patron: /^[0-9]{7,14}$/
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const formControls: any = {};
    this.campos.forEach((campo: any) => {
      // this.myForm = new FormGroup({
      //   name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      //   age: new FormControl('', [Validators.required, Validators.min(18)])
      // });
      const validations: ValidatorFn[] = [];

      for (const key in campo.validations) {
        if (key == 'required' && campo.validations[key]) validations.push(Validators.required);
        if (key == 'min') validations.push(Validators.min(campo.validations[key]));
        if (key == 'max') validations.push(Validators.max(campo.validations[key]));
        if (key == 'maxLength') validations.push(Validators.maxLength(campo.validations[key]));
        if (key == 'patron') validations.push(Validators.pattern(campo.validations[key]));
      }

      formControls[campo.nombre] = new FormControl('', validations);

      // if (campo.requerido) {
      //   validaciones.push(Validators.required);
      // }

      // if (campo.patron) {
      //   validaciones.push(Validators.pattern(campo.patron));
      // }

      // formControls[campo.nombre] = [campo.valor, validaciones];
    });

    this.formGroup = new FormGroup(formControls);
  }

  getSectionInformation = async () => {
    this.componentList = (await this.api.GET_ViewComponents()).data;
  };
  save() {
    console.log(this.formGroup.value);
    console.log(this.formGroup.valid);
  }
}
