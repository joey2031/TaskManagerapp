import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/Task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      }
    )
  }

  createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((createdTask: Task) => {
      this.router.navigate(['../'], { relativeTo: this.route }); // ../ goes back a subroute
    });
  }

}
