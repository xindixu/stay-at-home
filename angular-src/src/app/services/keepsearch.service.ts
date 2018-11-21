import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KeepsearchService {
  // observable string source
  private searchSource = new BehaviorSubject('default');

  // observable string stream
  currentSearch = this.searchSource.asObservable();

  updateSearch(search: string){
    this.searchSource.next(search);
  }

  constructor() { }
}
