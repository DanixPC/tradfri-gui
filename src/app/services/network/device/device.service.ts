import { InputBlind } from './../../../models/input-blind';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from 'src/app/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient
  ) { }

  public setBlindPosition(inputBlind: InputBlind): Observable<any> {
    return this.http.post(endpoints.urlRest + endpoints.devices.blind.setPosition, inputBlind).pipe(
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    )
  }

}
