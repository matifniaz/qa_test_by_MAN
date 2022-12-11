import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import config from 'src/app/config';
import APIResponse from 'src/app/models/APIResponse/APIResponse';
import Picture from 'src/app/models/Picture/Picture';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-pictures-list-view',
  templateUrl: './pictures-list-view.component.html',
  styleUrls: ['./pictures-list-view.component.scss']
})
export class PicturesListViewComponent implements OnInit {
  pictures: Array<Picture> = []
  apiResponse: APIResponse = new APIResponse()
  selectedPicture: Picture = new Picture({});

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.get(config.apiRoutes.picturesListView).subscribe(r => {
      this.apiResponse.ready(r);
      this.pictures = [...this.apiResponse.data.map((d:any) => new Picture(d))]
    })
  }

  showDetails(index: number) {
    // alert(index)
    this.selectedPicture = this.pictures[index];
    this.router.navigateByUrl(config.routes.picturesDetailViewSet(this.selectedPicture.id))
  }

}
