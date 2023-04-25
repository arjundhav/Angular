import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from 'src/app/todo-list/task';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class ToDoListComponent implements OnInit {
tasks:ITask[]=[];
signUP!:FormGroup
updateID!: any;
done: ITask[]=[];
isEditEnabled:boolean = false;
action: string='Add';
Inprogress:ITask[]=[];
Done:ITask[]=[];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUP=this.fb.group({
      task:['',Validators.required]
     } )
  }

  addTask(){
    console.log("Adding Task")
    this.tasks.push({
      description:this.signUP.value.task,
      done:false
     })
  }

  deleteTask(i:number){
    console.log("Deleting")
    this.tasks.splice(i,1);
  }

  deleteTaskInprogress(i:number){
    console.log("Deleting")
    this.Inprogress.splice(i,1);
  }

  deleteTaskDone(i:number){
    console.log("Deleting")
    this.Done.splice(i,1);
  }

  editTask(item:ITask,i:number){
    console.log("Editing")
    this.signUP.controls['task'].setValue(item.description);
    this.updateID=i;
    this.isEditEnabled=true;
  }

  updateTask(){
    console.log("Updating")
    this.tasks[this.updateID].description=this.signUP.value.task;
    this.tasks[this.updateID].done=true;
    this.signUP.reset();
    this.updateID= undefined;
    this.isEditEnabled=false;
  }


  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}