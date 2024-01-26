import { Component, Input } from '@angular/core';
import { IContent } from '../icontent';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() contentItem?: IContent;

  constructor() { }

  // Other methods or properties
}
