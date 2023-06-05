import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../to-do-list/models/Task';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent implements OnInit {
  task: FormGroup;
  isEdit: boolean;
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ToDoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}

  ngOnInit(): void {
    this.isEdit = this.data.name ? true : false;
    this.task = this.fb.group({
      id:[this.data.id],
      name: [this.data.name, [Validators.required]],
      description:  [this.data.description],
      startDate:  [this.data.startDate],
      endDate:  [this.data.endDate],
    });
    this.task.valueChanges.subscribe(x=>this.data = x);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
