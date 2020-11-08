import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JobRole} from '../app.component';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  @Output() selectPermissionEvent = new EventEmitter<string>();

  @Input() currentRole: JobRole;

  permissions = new Array<string>();

  ngOnInit(): void {
    this.permissions.push('Read', 'Write', 'Delete');
  }

  changeSelection(permission: string): void {
    if (this.currentRole.permissions.includes(permission)) {
      this.currentRole.permissions.splice(this.currentRole.permissions.findIndex(val => val === permission), 1);
    } else {
      this.currentRole.permissions.push(permission);
    }
  }

}
