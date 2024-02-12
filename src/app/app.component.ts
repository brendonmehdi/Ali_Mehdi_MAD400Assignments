import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { IContent } from './icontent';
import { MovieService } from './movie.service';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';

// import { Assignment2 } from './app.assignment2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Ali-Mehdi-MyFirstAngularApplication';

  singleContentItem: IContent | undefined;

  constructor(private movieService: MovieService) {} // Inject MovieService

  ngOnInit(): void { 
    this.movieService.getContentById(1).subscribe(data => { 
      this.singleContentItem = data; 
    });
  }

  // items = [
  //   new Assignment2(true, "Hello"),
  //   new Assignment2(true),
  //   new Assignment2(undefined, "Hello")
  //   ]
}


