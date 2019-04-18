import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users = [
    {name: 'Nik',
    location: 'Boston'},
    {name: 'Gary',
      location: 'Ohio'},
    {name: 'Louis',
      location: 'Florida'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
