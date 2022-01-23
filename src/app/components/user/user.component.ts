import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()users?: IUser[];

  constructor() { }

  ngOnInit(): void {
  }

}
