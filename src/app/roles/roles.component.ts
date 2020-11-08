import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JobRole} from '../app.component';

@Component({
  selector: 'app-role',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  @Output() changeRoleSelection = new EventEmitter<string>();
  @Output() selectRole = new EventEmitter<JobRole>();

  @Input() roles = new Array<JobRole>();

  changeSelected(role: string): void {
    this.changeRoleSelection.emit(role);
  }

  onRoleClick(role: JobRole): void {
    this.selectRole.emit(role);
  }

}
