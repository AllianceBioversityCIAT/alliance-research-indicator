import { Component, inject, Input } from '@angular/core';
import { CacheService } from '../../../../shared/services/cache.service';

@Component({
  selector: 'app-dynamic-component-selector',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-component-selector.component.html',
  styleUrl: './dynamic-component-selector.component.scss'
})
export class DynamicComponentSelectorComponent {
  cache = inject(CacheService);
  @Input() fields: any[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.fields);
  }
  dragstart(event: DragEvent, item: any) {
    console.log(item.type);
    console.log('Drag iniciado');
    // Puedes manejar el evento aquí
    this.cache.orderMode = true;
    this.cache.currentItem = item;
  }

  drop(ev: any, container: any) {
    ev.preventDefault(); // Evita el comportamiento predeterminado
    ev.stopPropagation(); // Detiene la propagación del evento a elementos padre
    console.log(container.type);

    console.log(ev);
    console.log('drop');
    container.fields.push(this.cache.currentItem);
    //! drop: Ocurre cuando un objeto arrastrado es soltado dentro del contenedor.
  }
  dragend(ev: any) {
    console.log('dragend');
    //! Se lanza cuando el arrastre finaliza (por soltar el elemento o cancelar el arrastre).
    this.cache.orderMode = false;
  }
  dragenter(ev: any, type: string) {
    // console.log('dragenter: ' + type);
    //! dragenter: Se dispara cuando un objeto arrastrado entra en el área del contenedor.
  }
  dragover(ev: any, type: string) {
    console.log('dragover: ' + type);
    ev.preventDefault();
    ev.stopPropagation(); // Detiene la propagación del evento a elementos padre

    //! dragover: Ocurre cuando un objeto arrastrado está sobre un contenedor (necesita ser prevenido para permitir soltar).
  }
  dragleave(ev: any) {
    console.log('dragleave');
    //! dragleave: Se lanza cuando un objeto arrastrado deja el área del contenedor.
  }
}
