import { Component, OnInit } from '@angular/core';
import { IContent } from '../icontent'; // Adjust the path to where you created icontent.ts

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
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
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
    
  }
}
