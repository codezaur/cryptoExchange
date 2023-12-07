import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TickersApiService {

  constructor(private http: HttpClient) {}
  
  public getTickers(url: string): Observable<Object> {
    return this.http.get(url);
  }
  
}