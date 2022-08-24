import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'atom-input',
  templateUrl: './atom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtomInputComponent),
      multi: true,
    },
  ]
})
export class AtomInputComponent implements ControlValueAccessor,OnInit {

/** Establece el tipo de input */
@Input() type = "text";

/** Pone gris el input, si no es blanco */
@Input() grayBackGround = true;

@Input() pinkBackGround: boolean = false;

/** Desabilitar el input */
@Input() disabled = false;

/** Label para el input, si no se provee, no se muestra. */
@Input() labelText: string|null=null;

@Input() helpText: string|null=null;

/** Sombras en el input */
@Input() shadow: boolean = false;

//** Auto focus */
@Input() autoFocus = false;

/** Recibe class perzonalizada */
@Input() customClass:string|null=null;

 /** Texto/Placeholder cuando no tiene contenido el modal */
 @Input() placeholder: string|null=null;

 @Input() val = "";
 @Output() inputVal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
    }
  }

  get value() {
    return this.val;
  }
  onChange: any = () => {};
  onTouch: any = () => {
    this.inputVal.emit(this.val);
  };
}
