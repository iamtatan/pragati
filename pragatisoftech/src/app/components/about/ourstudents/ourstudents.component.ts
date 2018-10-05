import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourstudents',
  templateUrl: './ourstudents.component.html',
  styleUrls: ['./ourstudents.component.css']
})
export class OurstudentsComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit() {
    this.galleryspin('-');
  }
  angle = 0;
 galleryspin(sign) { 
   console.log(sign);
  var spinner = document.getElementById("spinner");
 if (!sign) { this.angle = this.angle + 45; } else { this.angle = this.angle - 45; }
 spinner.style.right;
 spinner.style.webkitTransform ="rotateY("+ this.angle +"deg)";

 spinner.style.transform ="rotateY("+this. angle +"deg)";
 setTimeout(() => {
  this.galleryspin('-');
 }, 2000);
 }

 
}
