import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

const materiaModules = [
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
];



@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    ...materiaModules,
    CommonModule,
    
  ],
  exports: [
    CardComponent,
  ]
})
export class SharedModule { }
