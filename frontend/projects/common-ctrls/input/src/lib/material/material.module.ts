import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
const material = [
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [material]
})
export class MaterialModule { }
