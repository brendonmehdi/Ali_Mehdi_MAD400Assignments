import { Component, Input } from '@angular/core';
import { IContent } from '../icontent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() contentItem?: IContent;
// content-list-item.component.ts
  @Input() isOdd: boolean = false;


  constructor() { }

  // Other methods or properties
}
