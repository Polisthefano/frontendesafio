import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomInputModule } from './atom-input/atom-input.module';
import { AtomButtonModule } from './atom-button/atom-button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AtomButtonModule, AtomInputModule],
})
export class AtomsModule {}
