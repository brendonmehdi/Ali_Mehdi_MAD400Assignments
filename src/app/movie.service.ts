import { Injectable } from '@angular/core';
import { IContent } from './icontent';
import { contents } from './data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private contents: IContent[] = contents;

  constructor() { }
  // gets all the movies / contents
  getContents(): IContent[] {
    return this.contents;
  }
  
}
