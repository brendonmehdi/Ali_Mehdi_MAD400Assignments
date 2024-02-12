import { Injectable } from '@angular/core';
import { IContent } from './icontent';
import { contents } from './data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private contents: IContent[] = contents;

  constructor() { }
  // gets all the movies / contents
  fetchData(): Observable<IContent[]> {
    return of(this.contents);
  }
  getContentById(id: number): Observable<IContent | undefined> { // gets a single movie / content by id
    const item = this.contents.find(content => content.id === id);
    return of(item);
  }
  
  add(content: IContent): Observable<IContent[]> { // adds a new movie / content
    this.contents.push(content);
    return of(this.contents);
  }

  update(updatedContent: IContent): Observable<IContent[]> { // updates a movie / content
    const index = this.contents.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      this.contents[index] = updatedContent;
    }
    return of(this.contents);
  }
  removeContent(id: number): Observable<IContent | undefined> { // removes a movie / content by id
    const index = this.contents.findIndex(content => content.id === id);
    if (index !== -1) {
      const removedItem = this.contents.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }
}
