import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FloatLabelType} from '@angular/material/form-field';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
