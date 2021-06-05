import { SettingsModel } from './../../models/settings-model';
import { endpoints } from './../../constants/endpoints';
import { ResponseModel } from './../../models/response-message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarterService {

  constructor(
    private http: HttpClient
  ) { }

  public getStatus(): Promise<ResponseModel> {
    return this.http.get(endpoints.urlRest + endpoints.starter.getStatus).pipe(
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    ).toPromise().catch(
      error => {
        return new ResponseModel("Cannot get status, please check Tradfri GUI Core.");
      }
    );
  }

  public setStartupSettings(settings: SettingsModel): Promise<boolean> {
    return this.http.post(endpoints.urlRest + endpoints.starter.set, settings).pipe(
      map((response: any) => response as any),
      catchError(
        errorObjeto => {
          console.log(errorObjeto);
          return throwError(errorObjeto);
        }
      )
    ).toPromise().catch(
      error => {
        return new ResponseModel("Cannot send startup settings, please check Tradfri GUI Core.");
      }
    );
  }
}
