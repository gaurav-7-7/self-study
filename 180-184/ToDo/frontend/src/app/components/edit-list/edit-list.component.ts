import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  listId!: string;
  taskId!: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['listId'])
        this.listId = params['listId'];
        this.taskId = params['taskId'];
    })
  }

  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId])
    })
  }

}
