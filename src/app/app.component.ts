import {Component, Input, OnInit} from '@angular/core';


export interface JobRole {
  title: string;
  permissions?: Array<string>;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multiselectPermission';

  currentRole: JobRole;

  @Input() jobRoles = new Array<JobRole>();


  //Testdata
  ngOnInit(): void {
    this.jobRoles.push(
      {
        title: 'CEO',
        permissions: [],
        selected: false
      },
      {
        title: 'Software Engineer',
        permissions: [],
        selected: true
      }, {
        title: 'Marketing guy',
        permissions: [],
        selected: false
      }
    );
  }

  selectRole(selectorRole: string): void {
    this.jobRoles.find((role) => {
      if (role.title === selectorRole) {
        this.currentRole = role;
        role.selected = !role.selected;
        if (role.selected === false) {
          this.currentRole = undefined;
        }
      }
    });
  }

  changeCurrentRole(role: JobRole): void {
    this.currentRole = role;
  }

}
