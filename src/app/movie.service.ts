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
  
}
