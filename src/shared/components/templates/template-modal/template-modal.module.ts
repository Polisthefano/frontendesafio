import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModalComponent } from './template-modal.component';



@NgModule({
  declarations: [TemplateModalComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateModalComponent]
})
export class TemplateModalModule { }
