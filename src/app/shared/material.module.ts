import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule, MatInputModule, MatFormFieldModule,MatSelectModule,
  MatCheckboxModule, MatSidenavModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule, MatSidenavModule, MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule, MatSidenavModule, MatIconModule
  ]
})
export class MaterialModule {
}
