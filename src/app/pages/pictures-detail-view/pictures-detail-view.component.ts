import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import config from 'src/app/config';
import Picture from 'src/app/models/Picture/Picture';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-pictures-detail-view',
  templateUrl: './pictures-detail-view.component.html',
  styleUrls: ['./pictures-detail-view.component.scss']
})
export class PicturesDetailViewComponent implements OnInit {
  picture: Picture = new Picture({})
  id: number = -1;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      this.getImage()
    })
  }

  getImage() {
    this.apiService.get(config.apiRoutes.pictureDetailSet(this.id)).subscribe(r=> {
      // console.log(r)
      this.picture=new Picture(r)
      // console.log(this.picture)
    })
  }

}
