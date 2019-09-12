import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-grid',
  template: `<ejs-grid [dataSource]="data" [allowFiltering]="true" [allowSorting]="true" [allowPaging]="true" [allowGrouping]="true" [pageSettings]="pageSettings" >
    <e-columns>
      <e-column field='id' headerText='User Id' textAlign='center' width=90></e-column>
      <e-column field='name' headerText='User Name' textAlign='center'></e-column>
      <e-column field='drone' headerText='Drone Model' textAlign='center'></e-column>
      <e-column field='voucher' headerText='Vouchers' textAlign='center'></e-column>
    </e-columns>
  </ejs-grid>`,
  // templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public pageSettings: PageSettingsModel = { pageSize: 3 }
  public data: object[] = [
    {
      id: 1,
      name: "John Doe",
      drone: "DJI Spark",
      voucher: [
        {id: 1,
        code: '794qhis',
      },
      {id: 2,
        code: '794qjfad89ehis',
      }
      ]
    },
    {
      id: 2,
      name: "Maria Downing",
      drone: "DJI Spark",
      Vaoucher: [
        {id: 1,
        code: '7lkasd',
      }
      ]
    },
    {
      id: 3,
      name: "Johnattan Smith",
      drone: "DJI Spark",
      Vaoucher: []
    },
    {
      id: 4,
      name: "Alex Jenkins",
      drone: "DJI Spark",
      voucher: [
        {id: 1,
        code: '794qhis',
      },
      {id: 2,
        code: '794qjfad89ehis',
      }
      ]
    },
    {
      id: 5,
      name: "Brad Pitt",
      drone: "DJI Spark",
      Vaoucher: [
        {id: 1,
        code: '7lkasd',
      }
      ]
    },
    {
      id: 6,
      name: "Anne Woods",
      drone: "DJI Spark",
      Vaoucher: []
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
