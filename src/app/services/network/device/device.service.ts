
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from 'src/app/constants/endpoints';
import { InputBlind } from 'src/app/models/input-blind';
import { InputLight } from 'src/app/models/input-light';

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

  public setLightBrighness(inputBlind: InputLight): Observable<any> {
    return this.http.post(endpoints.urlRest + endpoints.devices.light.brightness, inputBlind).pipe(
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    )
  }

  public setLightOnOff(inputBlind: InputLight): Observable<any> {
    return this.http.post(endpoints.urlRest + endpoints.devices.light.onOff, inputBlind).pipe(
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    )
  }

  public setLightColor(inputLight: InputLight): Observable<any> {
    return this.http.post(endpoints.urlRest + endpoints.devices.light.color, inputLight).pipe(
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    )
  }

  public getHexAllowedColours(): Observable<string[]> {
    return this.http.get(endpoints.urlRest + endpoints.tradfri.getColors).pipe(
      map((response: string[]) => response as string[]),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    )
  }

}
