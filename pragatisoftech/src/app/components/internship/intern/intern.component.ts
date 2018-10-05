import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("h1").style.visibility="hidden";
    document.getElementById("h2").style.visibility="hidden";
    document.getElementById("h3").style.visibility="hidden";
    document.getElementById("h4").style.visibility="hidden";
    document.getElementById("h5").style.visibility="hidden";
    document.getElementById("h6").style.visibility="hidden";
    document.getElementById("h7").style.visibility="hidden";
    document.getElementById("h8").style.visibility="hidden";
    document.getElementById("h9").style.visibility="hidden";
  }

 show(tid)
  {
    document.getElementById(tid).style.visibility="visible";
    console.log(tid);
  }
  dshow(tid)
  {
    document.getElementById(tid).style.visibility="hidden";
    console.log(tid);
  }
}
