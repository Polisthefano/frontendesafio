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
  resultado: { resultadoPost: number | null; resultadoGet: number | null } = {
    resultadoPost: null,
    resultadoGet: null,
  };
  isLoading: method | null = null;
  form: FormGroup = new FormGroup({
    expresion: new FormControl('', [Validators.required]),
    expresion2: new FormControl('', [Validators.required]),
  });
  constructor(
    private homeService: HomeService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  calcular(POST: boolean) {
    if (POST && this.expresion?.valid) {
      this.withPOST();
    } else if (!POST && this.expresion2?.valid) {
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
        this.resultado.resultadoPost =
          resp.resultado == null ? 'nulo' : resp.resultado;
      })
      .catch((err) => {
        console.error(err);
        this.isLoading = null;
        this.toastService.show(err.error.msg, true);
        this.resultado.resultadoPost = null;
      });
  }

  /** Envia la peticion GET y carga resultado o dispara toast error */
  withGET() {
    this.isLoading = 'GET';
    this.homeService
      .calcularResultado(this.form.value.expresion2, 'GET')
      .then((resp: any) => {
        this.isLoading = null;
        this.resultado.resultadoGet =
          resp.resultado == null ? 'nulo' : resp.resultado;
      })
      .catch((err) => {
        console.error(err);
        this.isLoading = null;
        this.toastService.show(err.error.msg, true);
        this.resultado.resultadoGet = null;
      });
  }

  get expresion() {
    return this.form.get('expresion');
  }
  get expresion2() {
    return this.form.get('expresion2');
  }
}
