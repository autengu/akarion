import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JobRole} from '../app.component';

enum Permissions {
  Read = 'Read',
  Write = 'Write',
  Delete = 'Delete'
}

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {

  @Output() selectPermissionEvent = new EventEmitter<string>();

  @Input() currentRole: JobRole;

  permissions = Object.values(Permissions);

  changeSelection(permission: string): void {
    if (this.currentRole.permissions.includes(permission)) {
      this.currentRole.permissions.splice(this.currentRole.permissions.findIndex(val => val === permission), 1);
    } else {
      this.currentRole.permissions.push(permission);
    }
  }

}
