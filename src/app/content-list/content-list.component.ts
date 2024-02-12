import { Component, OnInit } from '@angular/core';
import { IContent } from '../icontent';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, CommonModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: IContent[] = []; // Array of content items
  
  constructor(private movieService: MovieService) { } // Injects the movie service

    ngOnInit(): void {
      this.movieService.fetchData().subscribe(data => { // Subscribes to the fetchData method
        this.contents = data; // Assigns the data to the contents array
    });

    
  }
}
