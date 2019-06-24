import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  
    public sports: Array<{value:string}> = [
      {value: 'Todos'},
      {value: 'Futbol'},
      {value: 'Tenis'}
    ];  
  constructor(private breakpointObserver: BreakpointObserver) {
    
  }

}
