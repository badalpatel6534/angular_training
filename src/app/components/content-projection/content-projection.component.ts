import { Component } from '@angular/core';
import { SharedModule } from '../../common/modules/shared/shared.module';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {

}
