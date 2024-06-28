import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { User } from '../../interfaces/user-interface';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { DataService } from './../../services/data.service';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnDestroy{
  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  userListSubscription: Subscription;

  constructor(private dataService: DataService, private dialog: MatDialog, private zone: NgZone) {
     this.userListSubscription = this.dataService.getUsers().subscribe(users => {
        this.users = users;
    });
  }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.dataService.users = this.users;
    }
  }

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: user ? { ...user } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (user) {
          this.dataService.updateUser(result);
        } else {
          const newUser = { ...result, id: this.users.length + 1 };
          this.dataService.addUser(newUser);
        }
      }
    });
  }


  deleteUser(id: number): void {
    this.dataService.deleteUser(id);
  }


  ngOnDestroy(): void {
    if (this.userListSubscription) {
      this.userListSubscription.unsubscribe();
    }
  }
}
