import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomInputComponent } from './atom-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ AtomInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AtomInputComponent]
})
export class AtomInputModule { }
