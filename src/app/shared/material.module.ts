import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule, MatInputModule, MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule {
}
