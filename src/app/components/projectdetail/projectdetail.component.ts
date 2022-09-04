import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectDetailDTO } from 'src/app/models/projectDetail-model';
import { TaskDTO } from 'src/app/models/task-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  projectDetail: ProjectDetailDTO = {} as ProjectDetailDTO;
  projectId: number = 1;
  tasks: TaskDTO[] = {} as TaskDTO[];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params)
      this.projectId = params['id']
      this.getProjectDetail(this.projectId);
    })
  }

  getProjectDetail(id: number) {
    this.apiService.getProjectDetail(id).subscribe((data) => {
      this.projectDetail = data;
      //this.tasks = this.projectDetail.tasks
      console.log(this.projectDetail)
    }) 
  }

  async getTaskDetail() {
   let x= await this.apiService.getTasks().subscribe((data) => {
      // this.projectDetail = data;
      console.log(data)
    })
  }
}
