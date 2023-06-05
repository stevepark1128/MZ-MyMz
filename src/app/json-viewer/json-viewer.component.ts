import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Editor, Toolbar, toDoc, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit, OnDestroy, AfterViewInit  {
  subscriptions: Subscription[] = [];
  jsonInputForm: FormGroup;
  editors: Editor[] = [];
  inputRight:any;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createJsonInputForm();
    this.editors.push(new Editor());
    this.editors.push(new Editor());
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editors.forEach(e=>e.destroy());
  }

  ngAfterViewInit(): void {
    this.editors[0].valueChanges.subscribe((x:any)=>{
      this.inputRight = x;//x.content[0].content[0].text;
    });
  }

  createJsonInputForm() {
    this.jsonInputForm = this.fb.group({
      editorContent1: ['', [Validators.required]],
      editorContent2: ['', [Validators.required]]
    });
  }

  get doc1(): AbstractControl | null{
    return this.jsonInputForm.get('editorContent1');
  }

  get doc2(): AbstractControl | null{
    return this.jsonInputForm.get('editorContent2');
  }

  parseJasonToRight() {
    try{
      let newContent = toDoc(this.inputRight);
      //let newContent2 = JSON.parse(this.inputRight);
      const newContent2 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
      const newContent3 = JSON.stringify(newContent, null, '\t')
      this.editors[1].setContent(toHTML(newContent));
    } catch(e: any) {
      let newContent = toDoc(e);
      this.editors[1].setContent(newContent);
    }
  }

  parseJasonToLeft() {
    
  }
}
