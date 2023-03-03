import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GoodModel } from '../../models/good.model';
import { GoodService } from '../../services/good.service';

@Component({
  selector: 'app-good-example',
  styleUrls: ['./good-example.component.scss'],
  templateUrl: './good-example.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodExampleComponent {
  readonly products$: Observable<GoodModel[]> = this._goodService.getAll();

  constructor(private _goodService: GoodService) {}
}
