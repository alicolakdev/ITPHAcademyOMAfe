import { Component, OnInit } from '@angular/core';
import { ProjectDTO } from 'src/app/models/project-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectList: ProjectDTO[]=[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.apiService.getProjects().subscribe((data:ProjectDTO[]) => {
      console.log(data)
      this.projectList = data;
    })
  }
}
