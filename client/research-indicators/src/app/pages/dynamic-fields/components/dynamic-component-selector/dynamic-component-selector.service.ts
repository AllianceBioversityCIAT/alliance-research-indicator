import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentSelectorService {
  current: any = {
    item: {},
    container: {},
    i: null
  };

  replace: any = {
    item: {},
    container: {},
    i: null
  };

  currentContainer: any = {};
  orderMode = false;

  // campos: any = [
  //   { nombre: 'nombre', valor: '', validations: { required: true } },
  //   { nombre: 'edad', valor: '', validations: { required: false, min: 18 } },
  //   { nombre: 'apellido', valor: '', validations: { required: false } }, //, maxLength: 7
  //   { nombre: 'correo', valor: '', validations: { required: false } }, //, patron: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  //   { nombre: 'telefono', valor: '', validations: { required: false } } //, patron: /^[0-9]{7,14}$/
  // ];

  fields: any[] = [
    {
      id: 1,
      type: 'section',
      fields: [
        { type: 'title', id: 10 },
        { type: 'input', attr: 'nombree', id: 11, validations: { required: true } },
        {
          type: 'block',
          id: 100,
          fields: [
            { type: 'title', id: 101 },
            { type: 'input', attr: 'edad', id: 102, validations: { required: false, min: 18 } }
          ]
        }
      ]
    },
    {
      type: 'title',
      id: 2
    }
  ];
}
