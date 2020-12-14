import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  // This gets called when you click create new it then calls
  //the taskService method which calls the web-requestService method
  createNewList(){
    this.taskService.createList("Testing").subscribe((response: any) =>{
      console.log(response);
    });
  }
}
