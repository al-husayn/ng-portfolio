import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() projectName: string = 'Sample Project';
  @Input() projectDescription: string = 'sample project Description';
  @Input() projectLink: string = 'https://google.com';
  @Input() projectImage: string =
    'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier';
}
    