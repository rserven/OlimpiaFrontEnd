import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyArray } from './hincha';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  constructor( private http: HttpClient ) { }
  private apiURL= environment.apiURL+'/Stadium/GetCapacityByGate';

  public GetGrafico():Observable<MyArray[]>{
    return this.http.get<MyArray[]>(this.apiURL);
  }
}
