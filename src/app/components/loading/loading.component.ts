import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import APIResponse from 'src/app/models/APIResponse/APIResponse';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() showLoading: boolean = true

}
