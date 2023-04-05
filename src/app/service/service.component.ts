import { Component } from '@angular/core';
import {SliderService} from "../../services/slider.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  constructor(
    protected slider: SliderService
  ) {}
}
