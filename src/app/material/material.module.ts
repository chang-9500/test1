import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';//slider
import { MatMenuModule } from '@angular/material/menu';//menu
import { MatCardModule } from '@angular/material/card';//card
import { MatButtonModule } from '@angular/material/button';//button
import { MatAutocompleteModule } from '@angular/material/autocomplete';//input
import { MatInputModule } from '@angular/material/input';//input
import { MatFormFieldModule } from '@angular/material/form-field';//form-field
import { MatTableModule } from '@angular/material/table';//table
import { MatListModule } from '@angular/material/list';//List
import { MatSortModule } from '@angular/material/sort';//table
import { MatPaginatorModule } from '@angular/material/paginator';//table
import { MatCheckboxModule } from '@angular/material/checkbox';//checkbox
import { MatGridListModule } from '@angular/material/grid-list';//gridlist
import { MatStepperModule } from '@angular/material/stepper';//stepper
import { MatDialogModule } from '@angular/material/dialog';//dialog
import { MatRadioModule } from '@angular/material/radio';//radio
import { MatTabsModule } from '@angular/material/tabs';//tabs
import { MatSelectModule } from '@angular/material/select';//select

// 放所有要import的material components，之後新增material只要修改這裡就好
const MaterialCompomnents = [
  MatSliderModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatGridListModule,
  MatStepperModule,
  MatDialogModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialCompomnents,//所有material cmponents
    ],
  exports: [
    MaterialCompomnents,//所有material cmponents
  ]
})
export class MaterialModule { }
