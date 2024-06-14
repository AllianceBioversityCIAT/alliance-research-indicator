import { Component, inject, Input } from '@angular/core';
import { CacheService } from '../../../../shared/services/cache.service';
import { DynamicComponentSelectorService } from './dynamic-component-selector.service';

@Component({
  selector: 'app-dynamic-component-selector',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-component-selector.component.html',
  styleUrl: './dynamic-component-selector.component.scss'
})
export class DynamicComponentSelectorComponent {
  dynamicSelectorSE = inject(DynamicComponentSelectorService);
  @Input() index = 0;
  @Input() fields: any[] = [];
  @Input() parent: any = {};

  dragstart(event: DragEvent, item: any, i: number) {
    this.dynamicSelectorSE.orderMode = true;
    this.dynamicSelectorSE.current.container = this.parent;
    this.dynamicSelectorSE.current.item = item;
    this.dynamicSelectorSE.current.i = i;
  }

  drop(ev: any) {
    ev.preventDefault(); // Evita el comportamiento predeterminado
    ev.stopPropagation(); // Detiene la propagación del evento a elementos padre

    const itemA = { ...this.dynamicSelectorSE.current.item };
    const itemB = { ...this.dynamicSelectorSE.replace.item };
    this.dynamicSelectorSE.replace.container.fields[this.dynamicSelectorSE.replace.i] = itemA;
    this.dynamicSelectorSE.current.container.fields[this.dynamicSelectorSE.current.i] = itemB;

    //! drop: Ocurre cuando un objeto arrastrado es soltado dentro del contenedor.
  }

  dragend(ev: any) {
    console.log('dragend');
    //! Se lanza cuando el arrastre finaliza (por soltar el elemento o cancelar el arrastre).
    this.dynamicSelectorSE.orderMode = false;
  }
  dragenter(ev: any, field: any, i: number) {
    document.querySelectorAll('.dropper').forEach((element: any) => {
      element.style.opacity = '0';
    });
    const dropperElement = ev.target.querySelector('.dropper');
    dropperElement && (dropperElement.style.opacity = '1');

    this.dynamicSelectorSE.replace.container = this.parent;
    this.dynamicSelectorSE.replace.item = field;
    this.dynamicSelectorSE.replace.i = i;

    ev.stopPropagation();
    //! dragenter: Se dispara cuando un objeto arrastrado entra en el área del contenedor.
  }
  dragover(ev: any, type: string) {
    ev.preventDefault();
    ev.stopPropagation(); // Detiene la propagación del evento a elementos padre
    //! dragover: Ocurre cuando un objeto arrastrado está sobre un contenedor (necesita ser prevenido para permitir soltar).
  }
  dragleave(ev: any) {
    console.log('dragleave');
    //! dragleave: Se lanza cuando un objeto arrastrado deja el área del contenedor.
  }
}
