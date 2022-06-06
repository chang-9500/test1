import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators'; // RxJS 可觀察物件和運算子

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor(private http: HttpClient) {}
  private BaseUrl: string = 'https://jsonplaceholder.typicode.com'; //伺服器固定網址
  //取得User 全部資料
  getAllAPIRequest(): Observable<any> {
    const url = `${this.BaseUrl}/posts`;
    return this.http.get(url);
  }
  //取得User資料
  getAPIRequest(id: any): Observable<any> {
    //${}插植(變數+字串)
    const url = `${this.BaseUrl}/posts/${id}`;
    return this.http.get(url);
  }
  //新增User資料
  postAPIRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/posts`;
    return this.http.post(url, body);
  }
}
