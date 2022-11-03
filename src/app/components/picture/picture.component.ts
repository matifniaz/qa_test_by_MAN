import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Picture from 'src/app/models/Picture/Picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnChanges {
  @Input() picture: Picture = new Picture({});
  loaded: boolean = false
  height: number = 200;
  width: number = 0;

  constructor() {
    console.log(this.picture.width, this.picture.height)

  }

  ngOnChanges(changes: SimpleChanges): void {
      const param = 'picture';
      // console.log(changes);
      if(typeof(changes[param].currentValue)!=='undefined' && typeof(changes[param].currentValue.width)!=='undefined' && changes[param].currentValue.width>0) {
        this.width = (this.picture.width * this.height) / this.picture.height 
      }
      // if(changes[])
  }

  setLoaded() {
    this.loaded = true  
  }

}
