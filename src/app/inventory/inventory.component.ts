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
  task_name: string;
  remark: number;
  task_code: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  // {  task_name: 'A', remark: 1, task_code: '10' },
  // {  task_name: 'B', remark: 2, task_code: '20' },
  // {  task_name: 'C', remark: 3, task_code: '30' },
  // {  task_name: 'D', remark: 4, task_code: '40' },
  // {  task_name: 'E', remark: 5, task_code: '50' },
  // {  task_name: 'F', remark: 6, task_code: '60' },
  // {  task_name: 'G', remark: 7, task_code: '70' },
  // {  task_name: 'H', remark: 8, task_code: '80' },
  // {  task_name: 'I', remark: 9, task_code: '90' },
  // {  task_name: 'J', remark: 10, task_code: '100' },
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
    // this.postData();
    // this.patchData();
    // this.deleteData();
  }

  // 填單
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('NEW');

  // 表單
  displayedColumns: string[] = [ 'task_id', 'documents_id', 'task_name','remark','create_time','task_code','last_task'];
  dataSource = [...ELEMENT_DATA];
  DataSource = new MatTableDataSource();
  // Col = ['userId', 'id', 'title']; //欄位
  Col = ['task_id', 'documents_id', 'task_name','remark','create_time','task_code','last_task']; //欄位

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
      console.log('All Data', Request.body.task);
      this.userDatas = Request.body.task;
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
  // postData(): void {
  //   let body = {
  //     title: 'Test_AddData',
  //     body: 'bar',
  //     userId: 1,
  //   };
  //   this.HttpApiService.postAPIRequest(body).subscribe((Request) => {
  //     console.log(Request);
  //   });

    // 0614NEW
  //   documents_id: '36b85b5c-1dd2-11b2-8000-080027b246c3',
  //   task_name:'J',
  //   remark:'10',
  //   task_code:'100',
  //   last_task:'36b85b5c-1dd2-11b2-8000-080027b246c3'
  // };
  // this.HttpApiService.postAPIRequest(body).subscribe((Request) => {
  //   console.log(Request);
  // });
  // }
  //修改User資料
  // patchData(): void {
  //   let id = 1;
  //   let body = {
  //     title: '0607',
  //   };
  //   this.HttpApiService.patchAPIRequest(id, body).subscribe((Request) => {
  //     console.log(Request);
  //   });
  // }

  //刪除User資料
  // deleteData(): void {
  //   let id = 1; 
  //   this.HttpApiService.deleteAPIRequest(id).subscribe((Request) => {
  //     console.log(Request);
  //   });
  // }
}
