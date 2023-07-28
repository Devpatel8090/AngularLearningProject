import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task-dialogue',
  templateUrl: './update-task-dialogue.component.html',
  styleUrls: ['./update-task-dialogue.component.css']
})
export class UpdateTaskDialogueComponent implements OnInit {
  updateForm!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<UpdateTaskDialogueComponent>,private taskService:TaskService,) {  
    
   }
  ngOnInit(): void {    
    console.log(this.data);
    this.UpdateTaskDetail();
    this.setValue();
  }
  setValue() {
    this.updateForm.patchValue({
      id:this.data.id?this.data.id:+'',
      title:this.data.title?this.data.title:'',
      description:this.data.description?this.data.description:'',
      status:this.data.status?this.data.status:''
    })
  }
  //close modal
  close(data?:any) {
    this.dialogRef.close(data);
  }

  UpdateTaskDetail(){
    this.updateForm = new FormGroup({
      id:new FormControl(''),
      title:new FormControl(''),
      description:new FormControl(''),
      status:new FormControl('')
  });
}

  UpdateDetails(){
    console.warn(this.updateForm.value);
    this.taskService.UpdateDetails(this.updateForm.value).subscribe((result:any) =>{     
      console.log(result);
      if(result == 'success'){
        this.close(true);
      }
      else{
        this.close(false);
      }      

    },
    (error:any)=>{
      this.close(false);
    }   
    ); 

  }
}
