import { Injectable } from '@angular/core';
import { menus } from '../../menu/constants/SideMenus';
import { MenuNode } from '../models/MenuNode';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MzMenuService {

  menus$: Observable<MenuNode[]> = of(menus);
  constructor() { }
}
