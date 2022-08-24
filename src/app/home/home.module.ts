import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AtomInputModule } from 'src/shared/components/atoms/atom-input/atom-input.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AtomInputModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
