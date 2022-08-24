import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    expresion: new FormControl('', [Validators.required]),
    expresion2: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
  calcular() {
    console.log(this.form);

    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
  get expresion() {
    return this.form.get('expresion');
  }
  get expresion2() {
    return this.form.get('expresion');
  }
}
