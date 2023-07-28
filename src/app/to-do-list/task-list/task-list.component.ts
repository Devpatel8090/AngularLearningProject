import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/task.model';
import { TaskService } from 'src/app/services/task.service';
import { FormsModule, NgForm }   from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskDialogueComponent } from '../update-task-dialogue/update-task-dialogue.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
displayedColumns: string[] = ['id', 'title', 'description', 'status','action'];
constructor(private taskService:TaskService,private dialog:MatDialog) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getDetails();
  }
task: Task[] = [];
getDetails(){
  
  this.taskService.getDetails().subscribe((data:any) =>
  {    
    this.task = data;
    console.log(this.task);
  });
}
AddDetails(data:NgForm,ToDoListAddForm:NgForm){
  
    this.taskService.AddDetails(data).subscribe((result:any) =>{
    console.warn(this.task);
    console.log(result);    
    ToDoListAddForm.reset();
    this.getDetails();    
  }); 
  
  
}
DeleteDetails(id:number){
  
  this.taskService.DeleteDetails(id).subscribe((result) => {
    console.log(result);
    this.getDetails(); 
  })
}
// UpdateDetails() {

// }


openDialog(item:any): void {
  debugger;
  const dialogRef = this.dialog.open(UpdateTaskDialogueComponent, {
   width:"500px",
   height:"300px",
   data:item,
   autoFocus:false
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result){
      this.getDetails();
    }    
  });
}
}




