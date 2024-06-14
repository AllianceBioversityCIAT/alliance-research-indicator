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

  fields: any[] = [
    {
      id: 1,
      type: 'section',
      fields: [
        { type: 'title', id: 10 },
        { type: 'input', id: 11 },
        {
          type: 'block',
          id: 100,
          fields: [
            { type: 'title', id: 101 },
            { type: 'input', id: 102 }
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
