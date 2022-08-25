import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import { HomeService, method } from './services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  classIcons: Array<{ class: string; value: string }> = [
    { class: 'ri-eraser-line  ri-1x', value: 'deleteAll' },
    { class: 'ri-percent-line  ri-1x', value: '%' },
    { class: 'ri-delete-back-2-line  ri-1x', value: 'deleteLast' },
    { class: 'ri-divide-fill  ri-1x', value: '/' },
    { class: 'ri-number-7  ri-1x', value: '7' },
    { class: 'ri-number-8  ri-1x', value: '8' },
    { class: 'ri-number-9  ri-1x', value: '9' },
    { class: 'ri-close-line ri-1x', value: '*' },
    { class: 'ri-number-4  ri-1x', value: '4' },
    { class: 'ri-number-5  ri-1x', value: '5' },
    { class: 'ri-number-6  ri-1x', value: '6' },
    { class: 'ri-subtract-line  ri-1x', value: '-' },
    { class: 'ri-number-1  ri-1x', value: '1' },
    { class: 'ri-number-2  ri-1x', value: '2' },
    { class: 'ri-number-3  ri-1x', value: '3' },
    { class: 'ri-add-fill  ri-1x', value: '+' },
    { class: 'ri-checkbox-blank-circle-fill  ri-1x', value: '.' },
    { class: 'ri-number-0  ri-1x', value: '0' },
    { class: 'ri-history-line  ri-1x', value: 'history' },
    // { class: 'ri-calculator-line  ri-1x', value: 'result' },
  ];
  resultado: { Post: number | null; Get: number | null } = {
    Post: null,
    Get: null,
  };
  historial: string[] = [];
  isLoading: method | null = null;
  form: FormGroup = new FormGroup({
    expresion: new FormControl('', [Validators.required]),
    expresion2: new FormControl('', [Validators.required]),
  });
  openHistorial: boolean = false;
  constructor(
    private homeService: HomeService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  calcular() {
    if (this.expresion?.valid) {
      this.withPOST();
      this.withGET();
    }
  }

  /** Envia la peticion POST y carga resultado o dispara toast error */
  withPOST() {
    this.isLoading = 'POST';
    this.homeService
      .calcularResultado(this.form.value.expresion, 'POST')
      .then((resp: any) => {
        this.isLoading = null;
        this.resultado.Post = resp.resultado == null ? 'nulo' : resp.resultado;
        this.cargarHistorial();
      })
      .catch((err) => {
        console.error(err);
        this.isLoading = null;
        this.toastService.show(
          err.error.msg,
          true,
          'Error en la peticion POST'
        );
        this.resultado.Post = null;
      });
  }

  /** Envia la peticion GET y carga resultado o dispara toast error */
  withGET() {
    this.isLoading = 'GET';
    this.homeService
      .calcularResultado(this.form.value.expresion, 'GET')
      .then((resp: any) => {
        this.isLoading = null;
        this.resultado.Get = resp.resultado == null ? 'nulo' : resp.resultado;
        this.cargarHistorial();
      })
      .catch((err) => {
        console.error(err);
        this.isLoading = null;
        this.toastService.show(err.error.msg, true, 'Error en la peticion GET');
        this.resultado.Get = null;
      });
  }

  get expresion() {
    return this.form.get('expresion');
  }
  get expresion2() {
    return this.form.get('expresion2');
  }
  armarExpresion(data: { class: string; value: string }) {
    let expresionActual = this.expresion?.value;
    switch (data.value) {
      case 'deleteAll':
        this.expresion?.setValue('');
        break;
      case 'deleteLast':
        this.expresion?.setValue(
          expresionActual.substring(0, expresionActual.length - 1)
        );
        break;
      case 'history':
        this.openHistorial = true;
        break;
      case 'result':
        this.calcular();
        break;
      default:
        this.expresion?.setValue(expresionActual + data.value);
    }
  }
  cargarHistorial() {
    if (!this.historial.includes(this.expresion?.value)) {
      this.historial.push(this.expresion?.value);
    }
  }
}
