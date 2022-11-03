import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get('list').subscribe(r => {
      console.log(r)
      this.apiResponse.ready(r);
      this.pictures = [...this.apiResponse.data.map((d:any) => new Picture(d))]
      console.log(this.pictures)
    })
  }

}
