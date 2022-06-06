import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpApiService } from 'src/API/http-api.service';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
// 表單
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(fb: FormBuilder, private HttpApiService: HttpApiService) {
    // 填單
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  ngOnInit(): void {
    this.getAllDatas();
    this.postData();
  }

  // 填單
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  // 表單
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];
  DataSource = new MatTableDataSource();
  Col = ['userId', 'id', 'title']; //欄位

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  //取得User資料
  //取得User資料
  userDatas: any;
  totalCount: any;
  getAllDatas(): void {
    this.HttpApiService.getAllAPIRequest().subscribe((Request) => {
      console.log('All Data', Request);
      this.userDatas = Request;
      this.showData(this.DataSource, this.userDatas);
    });
  }

  // 顯示資料
  showData(dataSource: any, data: any) {
    dataSource.data = data; //將資料帶入
    dataSource.sort = this.sort;
    dataSource.paginator = this.paginator;
  }

  //新增User資料
  postData(): void {
    let body = {
      title: 'Test_AddData',
      body: 'bar',
      userId: 1,
    };
    this.HttpApiService.postAPIRequest(body).subscribe((Request) => {
      console.log(Request);
    });
  }
}
