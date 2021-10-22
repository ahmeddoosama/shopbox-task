import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule as ToastsModule } from 'ngx-toastr';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    ToastsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularSvgIconModule,
    FormsModule,
    ToastsModule,
    ReactiveFormsModule,
    CardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
