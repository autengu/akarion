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
  @Input() selectedRoles = new Array<JobRole>();

  jobRoles = new Array<JobRole>();
  currentRole: JobRole;

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
        selected: false
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
          this.selectedRoles.splice(this.selectedRoles.findIndex(val => val.title === role.title), 1);
        } else {
          this.selectedRoles.push(role);
        }
      }
    });
  }

  changeCurrentRole(role: JobRole): void {
    this.currentRole = role;
  }

}
