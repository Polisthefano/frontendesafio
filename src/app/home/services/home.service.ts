import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
export type method = 'POST' | 'GET';
@Injectable()
export class HomeService {
  urlBase: string = environment.urlBase;
  constructor(private Http: HttpClient) {}

  calcularResultado(expresion: string, method: method) {
    console.log(`this.urlBase/math/expresiones`);

    return method == 'POST'
      ? firstValueFrom(
          this.Http.post(`${this.urlBase}/math/expresiones`, { expresion })
        )
      : firstValueFrom(
          this.Http.get(
            `${this.urlBase}/math/expresiones?expresion=${encodeURIComponent(
              expresion
            )}`
          )
        );
  }
}
