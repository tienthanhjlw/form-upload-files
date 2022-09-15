import { Injectable } from '@angular/core';
import {HttpBaseService} from "./http-base.service";

@Injectable({
  providedIn: 'root'
})
export class UploadFileApiService extends HttpBaseService{
  public uploadExcel(data: any) {
    return this.post('localhost:8083/api/excel/upload', data);
  }

  public uploadExcelConfig(data: any) {
    return this.post('localhost:8083/api/excel/upload-config', data);
  }
}
