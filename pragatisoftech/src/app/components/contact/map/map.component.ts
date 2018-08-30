import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 12.9948343;
  lng: number = 77.5526649;


  constructor() { }

  ngOnInit() {
    
  }

}
