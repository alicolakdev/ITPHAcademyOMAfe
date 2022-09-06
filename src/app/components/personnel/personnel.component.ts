import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  userList :UserDTO[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.apiService.getUsers().subscribe((data) => {
      console.log(data)
      this.userList = data;
    })
  }

}
