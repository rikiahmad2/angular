import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  constructor(private user:UsersService){
    this.user.getUsers().subscribe(data =>{
      console.warn(data); 
    })
    this.user.getData().subscribe(date => {
      console.warn(date);
    })
  }
}
