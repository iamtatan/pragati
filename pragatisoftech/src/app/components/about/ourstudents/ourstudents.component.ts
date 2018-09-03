import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourstudents',
  templateUrl: './ourstudents.component.html',
  styleUrls: ['./ourstudents.component.css']
})
export class OurstudentsComponent implements OnInit {
  imgArray:any = [
    '../../../../assets/1.png',
    '../../../../assets/2.png',
    '../../../../assets/3.png',
    '../../../../assets/4.png',
    '../../../../assets/5.png'];
    curIndex = 0;
    imgDuration = 5000;
  constructor() { 
    
  }

  ngOnInit() {
    this.slideShow();
  }
  slideShow() {
   var bikeImage = document.getElementById("image1") as HTMLImageElement;
   bikeImage.src = this.imgArray[this.curIndex];
    this.curIndex++; 
    if (this.curIndex == this.imgArray.length) { this.curIndex = 0; }
    setInterval(() => {
      this.slideShow();
  },this.imgDuration = 5000);
  }  
}
