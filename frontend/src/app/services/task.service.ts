// Responsible for modifying our data
import { Injectable } from '@angular/core';
import { Task } from '../models/Task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getLists() {
    return this.webReqService.get('lists'); // in our api /lists returns all lists
  }
  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
  createList(title: String) {
    // Send a request to create a lists -> Return an observable
    return this.webReqService.post(`lists`, { title });
  }

  createTask(title: String, listId: string) {
    // Send a request to create a task -> Return an observable
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  completed(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: true });
  }

}
