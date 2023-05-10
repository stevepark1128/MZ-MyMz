import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MenuNode } from '../models/MenuNode';
import { MenuItem } from '../enums/MenuItem';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-mz-menu',
  templateUrl:'./mz-menu.component.html',
  styleUrls: [
    './mz-menu.component.scss'
  ]
})
export class MzMenuComponent {

  MenuItem = MenuItem;
  @Input() set menus(ms: MenuNode[]) {
    this.menuTreeDataSource.data = ms;
  }
  selected: MenuNode | undefined;
  menuTreeControl = new NestedTreeControl<MenuNode>((node) => node.children);
  menuTreeDataSource = new MatTreeNestedDataSource<MenuNode>();
  @Output() menuSelected = new EventEmitter();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  hasChild = (_: number, node: MenuNode) =>
    !!node.children && node.children.length > 0;

  isSelected = (node: MenuNode) => {
    return this.selected && node.name == this.selected.name;
  };

  onSelected(node: MenuNode) {
    if (node.link) {
      if (node.link.startsWith('http')) {
        window.open(node.link, '_blank');
        return;
      } else if (node.params) {
        this.router.navigate([node.link], {
          relativeTo: this.route,
          queryParams: node.params,
        });
      } else {
        this.router.navigate([node.link], {relativeTo: this.route});
      }
    }

    if (!!node && (!node.children || node.children.length == 0))
      this.menuSelected.emit();


    this.selected = node;
  }
}
