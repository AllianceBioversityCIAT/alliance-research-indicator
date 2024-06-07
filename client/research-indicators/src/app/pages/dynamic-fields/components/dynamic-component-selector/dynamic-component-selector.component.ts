import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-selector',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-component-selector.component.html',
  styleUrl: './dynamic-component-selector.component.scss'
})
export class DynamicComponentSelectorComponent {
  @Input() fields: any[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.fields);
  }
}
