import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() class!: string;
  @Input() icon!: IconProp;
  @Input() type!: string;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
  onClick(){
    this.btnClick.emit();
  }
}
