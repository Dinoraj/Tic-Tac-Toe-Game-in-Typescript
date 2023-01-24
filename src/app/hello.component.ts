import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `  <button *ngIf="!value">{{ value }}</button>
  <button hero status="success" *ngIf="value == 'X'">{{ value }}</button>
  <button hero status="info" *ngIf="value == 'O'">{{ value }}</button>`,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class HelloComponent {
  @Input() value: any ;
}
