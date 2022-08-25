import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'template-modal',
  templateUrl: './template-modal.component.html',
})
export class TemplateModalComponent implements OnInit {
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter();
  @Input() showDismiss: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() showBorderTopFooter: boolean = false;
  @Input() classHeader: string = '';
  @Input() classFooter: string = '';
  /*** Primary, secondary, success, danger, warning, dark, light, violet y gray-bg (para modal todo gris).
   * Si no se provee, el modal es full blanco.*/
  @Input() modalStyle: string = '';

  /**Input para indicar si esta cerrado o no */
  @Input() showHideModal: boolean = true;

  /***Centered: si es true el modal se muestra centrado. Por defecto se mostrará centrado.  */
  @Input() centered: boolean = true;

  /*** TAMAÑO DEL MODAL. Puede ser xl, lg, sm. */
  @Input() modalSize: string = '';

  /**
   * Es para cuando el contendio del modal excede el ALTO de la pantalla,
   * si es true: el scroll será sobre el body del modal.
   * El header y el footer estarán siempre visibles
   * Si es false: el scroll es sobre TODO el modal.
   */
  @Input() scrollContent: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
