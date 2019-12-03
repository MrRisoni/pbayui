import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.css']
})
export class FiltersModalComponent implements OnInit {

    @Input() filterValsObj;

    constructor() { }

  ngOnInit() {
  }

}
