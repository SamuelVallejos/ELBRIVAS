import { Component, Input, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss'],
})
export class ConductorComponent implements OnInit {
  @Input() vehiculos: any;
  constructor() { }

  ngOnInit() {}
  }