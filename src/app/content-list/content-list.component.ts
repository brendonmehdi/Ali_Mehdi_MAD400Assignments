import { Component, OnInit } from '@angular/core';
import { IContent } from '../icontent'; // Adjust the path to where you created icontent.ts
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: IContent[] = [
    {
      title: 'Item One',
      description: 'Description of Item One',
      author: 'Author One',
      imgSrc: 'path/to/image1.jpg', // Placeholder image path
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Item Two',
      description: 'Description of Item Two',
      author: 'Author Two',
      imgSrc: 'path/to/image2.jpg', // Placeholder image path
      tags: ['tag3', 'tag4']
    },
    {
      title: 'Item Three',
      description: 'Description of Item Three',
      author: 'Author Three',
      imgSrc: 'path/to/image1.jpg', // Placeholder image path
      tags: ['tag5', 'tag6']
    },
    {
      title: 'Item Three',
      description: 'Description of Item Three',
      author: 'Author Three',
      imgSrc: 'path/to/image2.jpg', // Placeholder image path
      tags: ['tag7', 'tag8']
    },
  
  ];
  
  

  constructor() { }

  ngOnInit(): void {
    
  }
}
