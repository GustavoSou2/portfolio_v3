import { IconComponent } from '@/app/shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface ToolIcon {
  descriptionIcon: string;
  description: string;
  experience: string;
}

export const toolsIcons = [
  {
    descriptionIcon: 'angular',
    description: 'Angular',
    experience: '3',
    id: 4,
  },
  {
    descriptionIcon: 'docker',
    description: 'Docker',
    experience: '1',
    id: 6,
  },
  {
    descriptionIcon: 'ionic',
    description: 'Ionic',
    experience: '2',
    id: 5,
  },
  {
    descriptionIcon: 'javascript',
    description: 'Javascript',
    experience: '4',
    id: 3,
  },
  {
    descriptionIcon: 'html',
    description: 'HTML',
    experience: '5',
    id: 1,
  },
  {
    descriptionIcon: 'css',
    description: 'CSS',
    experience: '5',
    id: 2,
  },
  {
    descriptionIcon: 'linux',
    description: 'Linux',
    experience: '2',
  },
  {
    descriptionIcon: 'mysql',
    description: 'MySQL',
    experience: '3',
  },
  {
    descriptionIcon: 'nestjs',
    description: 'NestJS',
    experience: '1',
  },
  {
    descriptionIcon: 'photoshop',
    description: 'Photoshop',
    experience: '5',
  },
  {
    descriptionIcon: 'php',
    description: 'PHP',
    experience: '4',
  },
  {
    descriptionIcon: 'scss',
    description: 'SCSS',
    experience: '3',
  },
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  toolsIcons: ToolIcon[] = toolsIcons;
}
