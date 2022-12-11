import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import getFileName from 'src/app/helpers/getFileName';
import Picture from 'src/app/models/Picture/Picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnChanges {
  @Input() picture: Picture = new Picture({});
  @Input() index: number = -1;
  @Input() height: number = 200;
  loaded: boolean = false
  width: number = 0;

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

  download() {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = this.picture.downloadUrl;
    a.setAttribute('download',getFileName(this.picture.downloadUrl))
    a.rel="noopener noreferrer"
    a.click()
  }

}
