import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom-button.component.html',
})
export class AtomButtonComponent implements OnInit {
  constructor() {}

  /** Colores */
  @Input() color: string = 'primary';

  /** Estilo outline en los botones */
  @Input() outline: boolean = false;

  /** Estado del boton, puede ser loading  */
  @Input() status: string = '';

  /** Tipo de boton */
  @Input() type: string = 'button';

  /** Habilitar sombra */
  @Input() shadow: boolean = false;

  /** Cualquier clase que sea necesaria */
  @Input() className: string = '';

  /** Deshabilita el boton */
  @Input() disabled: boolean | any = false;

  class: string = 'd-flex align-items-center justify-content-center btn ';

  ngOnInit(): void {
    this._GivingStyle();
  }

  /** Le da estilo al boton */
  _GivingStyle() {
    //Setting color
    let butonColor = 'btn-';

    if (this.outline) {
      butonColor = butonColor.concat('outline-');
    }

    butonColor += this.color;
    this.class += butonColor;

    //Setting extra class
    if (this.className) {
      this.class += ' ' + this.className;
    }
  }
}
