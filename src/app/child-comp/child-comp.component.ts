import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() public FirstName: string | undefined;
  @Input() public lastName: string | undefined;
  @Input() public  EmpId: any;
  @Input() public  Experience: any;
  @Input() public PrevCompany : any;
  @Input() public PrevCTC : any;
  @Input() public  ExpectedCTC: any;
 
}


