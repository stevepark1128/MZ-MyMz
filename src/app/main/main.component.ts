import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';

import { MenuNode } from '../menu/models/MenuNode';
import { MzMenuService } from '../menu/services/mz-menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );
  @ViewChild('sidenav') sidenav: any;
  filteredMenus: MenuNode[] = [];
  public isHandsetOrTablet$: Observable<boolean> = this.breakpointObserver
  .observe([Breakpoints.Handset, Breakpoints.Tablet])
  .pipe(map((result: BreakpointState) => result.matches));
  constructor(private breakpointObserver: BreakpointObserver,
    private menuService: MzMenuService) { }
  ngOnInit(): void {
    this.menuService.menus$.subscribe(menu => this.filteredMenus = menu);
  }

  onSideMenuSelected() {
    if (this.sidenav._mode == 'over') {
      this.sidenav.close();
    }
  }

}
function Of(arg0: never[]): Observable<MenuNode[]> {
  throw new Error('Function not implemented.');
}

