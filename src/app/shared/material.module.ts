import {NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule, MatInputModule, MatFormFieldModule,MatSelectModule,
  MatCheckboxModule, MatSidenavModule, MatIconModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatCardModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule, MatSidenavModule, MatIconModule,
    MatGridListModule, 
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule, MatSidenavModule, MatIconModule,
    MatGridListModule,
  ]
})
export class MaterialModule {
}
