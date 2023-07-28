import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UpdateTaskDialogueComponent } from './update-task-dialogue/update-task-dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TaskListComponent,
    UpdateTaskDialogueComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
   MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule, 
    MatDialogModule ,
    ReactiveFormsModule       
  ]
})
export class ToDoListModule { }
