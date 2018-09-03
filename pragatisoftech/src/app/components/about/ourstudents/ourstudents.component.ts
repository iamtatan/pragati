import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourstudents',
  templateUrl: './ourstudents.component.html',
  styleUrls: ['./ourstudents.component.css']
})
export class OurstudentsComponent implements OnInit {

  constructor() { }
  myIndex = 0;
  ngOnInit() {
      this.carousel();
  }
  carousel() {
    var i;
    var x = document.getElementsByName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    this.myIndex++;
    if (this.myIndex > x.length) {this.myIndex = 1}    
    x[this.myIndex-1].style.display = "block";  
    setTimeout(this.carousel, 2000);  
}
  
}
