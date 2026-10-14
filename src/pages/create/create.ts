import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  public readonly title = signal('Create');
}
