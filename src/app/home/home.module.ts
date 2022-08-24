import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AtomInputModule } from 'src/shared/components/atoms/atom-input/atom-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AtomButtonModule } from 'src/shared/components/atoms/atom-button/atom-button.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AtomInputModule,
    AtomButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
