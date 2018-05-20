import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'File',
    //     items: [{
    //       label: 'New',
    //       icon: 'fa-plus',
    //       items: [
    //         { label: 'Project' },
    //         { label: 'Other' },
    //       ]
    //     },
    //     { label: 'Open' },
    //     { label: 'Quit' }
    //     ]
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'fa-edit',
    //     items: [
    //       { label: 'Undo', icon: 'fa-mail-forward' },
    //       { label: 'Redo', icon: 'fa-mail-reply' }
    //     ]
    //   }
    // ];
  }

}
