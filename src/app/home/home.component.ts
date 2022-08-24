import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}
  calcular(POST: boolean) {
    if (POST && this.expresion?.valid) {
      this.isLoading = 'POST';
      this.homeService
        .calcularResultado(this.form.value.expresion, 'POST')
        .then((resp: any) => {
          console.log(resp);
          this.isLoading = null;
          this.resultado.resultadoPost = resp.resultado;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = null;
          this.resultado.resultadoPost = null;
        });
    } else if (!POST && this.expresion2?.valid) {
      this.isLoading = 'GET';
      this.homeService
        .calcularResultado(this.form.value.expresion, 'GET')
        .then((resp: any) => {
          this.isLoading = null;
          this.resultado.resultadoGet = resp.resultado;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = null;
          this.resultado.resultadoGet = null;
        });
    }
  }

  get expresion() {
    return this.form.get('expresion');
  }
  get expresion2() {
    return this.form.get('expresion');
  }
}
