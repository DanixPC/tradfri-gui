import { Device } from './../../../models/device';
import { ResponseModel } from './../../../models/response-message';
import { endpoints } from './../../../constants/endpoints';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradfriService {

  constructor(
    private http: HttpClient
  ) { }

  public getTradfriIp(): Promise<ResponseModel> {
    return this.http.get(endpoints.urlRest + endpoints.tradfri.ip).pipe(
      timeout(180000),
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    ).toPromise().catch(
      error => {
        return new ResponseModel("Tradfri IP not found, please enter manually");
      }
    );
  }

  public getAllDevices(): Observable<Device[]> {
    return this.http.get(endpoints.urlRest + endpoints.tradfri.getDevices).pipe(
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
