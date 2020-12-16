import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  // This gets called when you click create it then calls the
  //taskService method which calls the web-requestService method
  createList(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);
      // navigate to /lists/response._id
      this.router.navigate(['/lists', response._id])
    });
  }

}
