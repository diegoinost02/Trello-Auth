import { Component } from '@angular/core';
import { GenericDataSource } from './data-source';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent {

  dataSource = new GenericDataSource();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.dataSource.init(users);
    });
  }
}
