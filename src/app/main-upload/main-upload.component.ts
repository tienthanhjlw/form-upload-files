import { Component, OnInit } from '@angular/core';
import { UploadFileApiService } from '../services/upload-file-api.service';

@Component({
  selector: 'app-main-upload',
  templateUrl: './main-upload.component.html',
  styleUrls: ['./main-upload.component.scss']
})
export class MainUploadComponent implements OnInit {
  fileName = '';
  file!: File;
  fileConfig!: File;

  constructor(private http: UploadFileApiService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any, fileType: number = 1) {
    if (fileType == 1) {
      this.file = event.target.files[0];
    } else {
      this.fileConfig = event.target.files[0]
    }
  }

  onClickUploadFile() {
    const formData = new FormData();
    formData.append("file", this.file);
    this.http.uploadExcel(formData).subscribe(res => {

    });
  }

  onClickUploadFileConfig() {
    const formData = new FormData();
    formData.append("file", this.fileConfig);
    this.http.uploadExcelConfig(formData).subscribe(res => {

    });
  }

}
