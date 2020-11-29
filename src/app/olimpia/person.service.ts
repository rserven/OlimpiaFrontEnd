import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { hinchaCreacionDto, hinchaEliminacionDto } from './hincha';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor( private http: HttpClient ) { }
  private apiURL= environment.apiURL+'/Person/AddPerson';

  public crear(hincha: hinchaCreacionDto){
    return this.http.post(this.apiURL, hincha);
  }

  public Eliminar(hincha: hinchaEliminacionDto){
        return this.http.delete(environment.apiURL+"/Person/DelPerson?documentId="+hincha.documentid);
  }
}
