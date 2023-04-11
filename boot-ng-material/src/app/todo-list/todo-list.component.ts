import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from './task';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class ToDoListComponent implements OnInit {
tasks:ITask[]=[];
signUP!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUP=this.fb.group({
      task:['',Validators.required]
     } )
  }

  Addtask(){
    console.log("hi")
    this.tasks.push({
      description:this.signUP.value.task,
    done:false
     } )

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