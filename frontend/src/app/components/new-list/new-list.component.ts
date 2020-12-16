import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/List.model';

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
    this.taskService.createList(title).subscribe((list: List) => {
      console.log(list);

      // navigate to /lists/list._id
      this.router.navigate(['/lists', list._id])
    });
  }

}
