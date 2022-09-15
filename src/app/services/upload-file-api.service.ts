import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileApiService {

  constructor(private http: HttpClient) {
  }

  public uploadExcel(data: any) {
    return this.http.post('localhost:8083/api/excel/upload', data);
  }

  public uploadExcelConfig(data: any) {
    return this.http.post('localhost:8083/api/excel/upload-config', data);
  }
}
