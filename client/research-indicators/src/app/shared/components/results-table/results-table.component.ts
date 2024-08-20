import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [TableModule, InputTextModule, TagModule, DropdownModule, MultiSelectModule, ProgressBarModule, ButtonModule, FormsModule, CardModule, TabViewModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.scss'
})
export class ResultsTableComponent implements OnInit {
  api = inject(ApiService);
  results: WritableSignal<any[]> = signal([]);
  customers: WritableSignal<any[]> = signal([]);

  representatives!: any[];

  statuses!: any[];

  loading = signal(true);

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  columns = [
    { attr: 'code', header: 'Code' },
    { attr: 'title', header: 'Title' },
    { attr: 'indicator', header: 'Indicator' },
    { attr: 'status', header: 'Status' },
    { attr: 'project', header: 'Project' },
    { attr: 'lever', header: 'Lever' },
    { attr: 'year', header: 'Year' },
    { attr: 'result_owner', header: 'Result Owner' },
    { attr: 'created_by', header: 'Created By' },
    { attr: 'creation_date', header: 'Creation Date' }
  ];

  GET_results = async () => this.results.set(await this.api.GET_results());

  ngOnInit() {
    this.GET_results();
    setTimeout(() => {
      this.loading.set(false);
    }, 1000);

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
    return null;
  }
  // }
}
