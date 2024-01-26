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
      imgSrc: 'path/to/image1.jpg'
    },
    {
      title: 'Item Two',
      description: 'Description of Item Two',
      imgSrc: 'path/to/image2.jpg', 
    },
    {
      title: 'Item Three',
      description: 'Description of Item Three',
      imgSrc: 'path/to/image3.jpg', 
    },
    {
      title: 'Item Four',
      description: 'Description of Item Four',
      imgSrc: 'path/to/image4.jpg', 
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
    
  }
}
