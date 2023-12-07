import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ce-page-title[textMain]',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input() textMain!: string;  
  @Input() textExtra?: string;  
  @Input() iconPath?: string;

}
