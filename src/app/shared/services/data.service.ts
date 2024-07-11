import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataResponse } from '../../interfaces/Data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = '/assets/data/data.json';
  
  constructor(private http: HttpClient) {}


  getData(): Observable<DataResponse> {
    return this.http.get<DataResponse>(this.data)
  }
}
