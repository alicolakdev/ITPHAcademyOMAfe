import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentDTO } from 'src/app/models/comment-model';
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
  tasks: TaskDTO[] = [];
  comments: CommentDTO[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id']
    console.log(this.projectId)
    this.getProjectDetail(this.projectId)
  }

  getProjectDetail(id: number) {
    this.apiService.getProjectDetail(id).subscribe((data) => {
      this.projectDetail = data;
      console.log(this.projectDetail)
    })
  }

  goToComments(id: number){
    console.log(id)
  }
}
