import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BadService } from '../../services/bad.service';

@Component({
  selector: 'bad-example',
  styleUrls: ['./bad-example.component.scss'],
  templateUrl: './bad-example.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadExampleComponent implements OnInit {
  data: any;
  all$: Observable<any[]> = this._badService.getAll();

  constructor(private _badService: BadService) {}

  ngOnInit() {
    this._badService.getAll().subscribe((all) => (this.data = all));
  }
}
