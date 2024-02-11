import { Component, OnInit } from '@angular/core';
import { IContent } from '../icontent'; // Adjust the path as necessary
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, CommonModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // Fetch data using a service (to be implemented)
  }
}
