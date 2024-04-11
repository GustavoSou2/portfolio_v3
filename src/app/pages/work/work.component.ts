import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toolsIcons } from '../about/about.component';

const works = [
  {
    image: {
      banner: 'assets/public/images/tabuada_virtual.PNG',
      page: 'assets/public/images/tabuada_interativa_full_screen.jpeg',
    },
    description: 'Tabuada Interativa',
    descriptionProject:
      'Um projeto que simula uma tabuada, onde o usuário pode colocar a tabuada que deseja ver e será exibida na tela.',
    descriptionCode: 'tabuadaInterativa',
    typeProject: 1,
    github: 'https://github.com/GustavoSou2/Tabuada-interativa',
    deploy: 'https://projeto-tabuada-git-master-gustavosou2.vercel.app/',
    stacks: [
      {
        id: 1,
        descriptionIcon: 'html',
        description: 'HTML',
        experience: '5',
      },
      {
        id: 2,
        descriptionIcon: 'css',
        description: 'CSS',
        experience: '5',
      },
      {
        id: 3,
        descriptionIcon: 'javascript',
        description: 'Javascript',
        experience: '4',
      },
    ],
  },
];

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  works = works;

  workDetail$ = new BehaviorSubject<any>(null);

  showWorkDetail: boolean = false;

  set workDetail(work: any) {
    this.showWorkDetail = true;

    this.workDetail$.next(work);
  }

  onAnimation(workElement: HTMLElement) {
    workElement.classList.add('anime__full_screen');
  }

  closeModal() {
    this.showWorkDetail = false;

    this.workDetail$.next(null);
  }
}
