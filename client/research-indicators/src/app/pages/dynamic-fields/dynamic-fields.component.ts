import { Component, inject } from '@angular/core';
import { DynamicComponentSelectorComponent } from './components/dynamic-component-selector/dynamic-component-selector.component';
import { ApiService } from '../../shared/services/api.service';
import { GetViewComponents } from '../../shared/interfaces/api.interface';
import { CacheService } from '../../shared/services/cache.service';
import { DynamicComponentSelectorService } from './components/dynamic-component-selector/dynamic-component-selector.service';

@Component({
  selector: 'app-dynamic-fields',
  standalone: true,
  imports: [DynamicComponentSelectorComponent],
  templateUrl: './dynamic-fields.component.html',
  styleUrl: './dynamic-fields.component.scss'
})
export default class DynamicFieldsComponent {
  componentList: GetViewComponents[] = [];
  api = inject(ApiService);
  cache = inject(CacheService);
  dynamicSelectorSE = inject(DynamicComponentSelectorService);
  ngOnInit(): void {
    // this.getSectionInformation();
  }
  getSectionInformation = async () => {
    this.componentList = (await this.api.GET_ViewComponents()).data;
    console.log(this.componentList.length);
  };
}
