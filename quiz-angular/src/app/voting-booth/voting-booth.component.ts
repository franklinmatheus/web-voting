import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'voting-booth',
  templateUrl: './voting-booth.component.html'
})

export class VotingBoothComponent {
  @Input() options: string[]
  @Output() vote = new EventEmitter<number>()
  constructor() { }
}
