import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../models/Task';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ToDoEditComponent } from 'src/app/to-do-edit/to-do-edit.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit, AfterViewInit {
  toDoForm: FormGroup;
  toDos: Task[] = [{
    id: 1,
    name: "Task1",
    description: '',
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 2,
    name: "Task2",
    description: '',
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 3,
    name: "Task3",
    description: '',
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 4,
    name: "Task4",
    description: '',
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 5,
    name: "Task5",
    description: '',
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 6,
    name: "Task6",
    description: '',
    startDate: undefined,
    endDate: undefined,
  }
];

  displayedColumns: string[] = ['id', 'name', 'description', 'startdate', 'enddate', 'edit'];
  dataSource = new MatTableDataSource(this.toDos);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.toDos);
    
  }

  reDrawTable() {
    this.dataSource.data = this.dataSource.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(id: number) {
    this.openDialog(id);
  }

  onAdd() {
    this.openDialog(this.toDos[this.toDos.length - 1].id + 1);
    
  }

  openDialog(id: number): void {
    let todo:Task;
    let exist = this.toDos.find(x=>x.id == id);
    if(id && exist) {
      todo = exist;
    } else {
      todo = {id:id, name:''};
    }
    
    const dialogRef = this.dialog.open(ToDoEditComponent, {
      data: todo,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(todo && exist && result) {
        let index = this.toDos.indexOf(todo);
        this.toDos[index] = result;
      } else if(result) {
        this.toDos.push(result);
      }
      this.reDrawTable();
    });
  }
}
