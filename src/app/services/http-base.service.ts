import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(url)
  }

  public post(url: string, body) {
    return this.http.post(url, body);
  }

  public put(url, body) {
    return this.http.put(url, body);
  }

  public delete(url) {
    return this.http.delete(url);
  }
}
