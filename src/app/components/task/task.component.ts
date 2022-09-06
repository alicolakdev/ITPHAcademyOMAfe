import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDTO } from 'src/app/models/task-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId: number = 1;
  taskDetail :TaskDTO= {} as TaskDTO;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.params['id'];
    this.getTaskDetail(this.taskId);
  }


  getTaskDetail(id: number) {
    this.apiService.getTaskDetail(id).subscribe((data) => {
      this.taskDetail = data;
      console.log(this.taskDetail)
    })
  }

}
