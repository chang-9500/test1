import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators'; // RxJS 可觀察物件和運算子

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor(private http: HttpClient) {}
  //  private BaseUrl: string = 'https://jsonplaceholder.typicode.com'; //伺服器固定網址
  private BaseUrl: string = 'http://localhost:8080/authority/v1.0'; //伺服器固定網址

  // 取得User 全部資料GET
  getAllAPIRequest(): Observable<any> {
    const url = `${this.BaseUrl}/task?page=1&limit=20`;
    return this.http.get(url);
  }
  // 取得User資料GET_ONE
  // getAPIRequest(id: any): Observable<any> {
  //   ${}插植(變數+字串)
  //   const url = `${this.BaseUrl}/posts/${id}`;
  //   return this.http.get(url);
  // }
  // 新增User資料POST
  // postAPIRequest(body: any): Observable<any> {
  //   const url = `${this.BaseUrl}/posts`;
  //   return this.http.post(url, body);
  // }
  // 修改User資料PATCH
  // patchAPIRequest(id: any, body: any): Observable<any> {
  //   const url = `${this.BaseUrl}/posts/${id}`;
  //   return this.http.patch(url, body);
  // }
  // 刪除User資料Delete
  // deleteAPIRequest(id: any): Observable<any> {
  //   const url = `${this.BaseUrl}/posts/${id}`;
  //   return this.http.delete(url);
  // }
}
