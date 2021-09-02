import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isDefault:boolean=false
  isGoogle:boolean=false
  isKibana:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  kibanaSet(){
  this.isDefault=false
  this.isGoogle=false
  this.isKibana=true

  }
  googleSet()
  {
    this.isDefault=false
    this.isGoogle=true
    this.isKibana=false
    
  }

}
