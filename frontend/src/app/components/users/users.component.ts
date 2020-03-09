import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  displayedColumns: string[] = ['username', 'firstname', 'lastname'];
  data: User[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsers()
      .subscribe((res: any) => {
        this.data = res;
        this.isLoadingResults = false;
      }, err => {
        console.error(err);
        this.isLoadingResults = false;
      })
  }

}
