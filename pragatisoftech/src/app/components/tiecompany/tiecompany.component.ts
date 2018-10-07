import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiecompany',
  templateUrl: './tiecompany.component.html',
  styleUrls: ['./tiecompany.component.css']
})
export class TiecompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.getElementById("i1").style.opacity="0.2";
    document.getElementById("i2").style.opacity="0.2";
    document.getElementById("i3").style.opacity="0.2";
    document.getElementById("i4").style.opacity="0.2";
    document.getElementById("i5").style.opacity="0.2";
    document.getElementById("i6").style.opacity="0.2";
    document.getElementById("i7").style.opacity="0.2";
    document.getElementById("i8").style.opacity="0.2";
    document.getElementById("i9").style.opacity="0.2";
    document.getElementById("i10").style.opacity="0.2";
  }


  ope(imid)
  {
    document.getElementById(imid).style.opacity="1.0";
  } 
  dope(imid)
  {
    document.getElementById(imid).style.opacity="0.2";
  } 
}
