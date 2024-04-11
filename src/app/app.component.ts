import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BehaviorSubject } from 'rxjs';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IconComponent } from './shared/components/icon/icon.component';

const steps: string[] = ['home', 'about', 'work', 'contact'];
const idsToAnimate: string[] = [
  'about__image',
  'about__text_one',
  'about__text_two',
  'about__skill',
  'about__softskill_one',
  'about__softskill_two',
  'about__softskill_three',
  'works__container',
  'contact',
];

const animationByScrollDict: { [key: number]: (t: any) => void } = {
  1: (stepToPage: number) => {
    const elementAboutImage: HTMLElement | null = <HTMLElement>(
      document.getElementById('about__image')
    );
    const elementAboutTextOne: HTMLElement | null = <HTMLElement>(
      document.getElementById('about__text_one')
    );
    const elementAboutTextTwo: HTMLElement | null = <HTMLElement>(
      document.getElementById('about__text_two')
    );
    const elementAboutSkillss: HTMLElement | null = <HTMLElement>(
      document.getElementById('about__skill')
    );
  },
  2: () => {},
  3: () => {},
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    IconComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio_v2';

  stepToPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const _steps: { [key: string]: any } = steps.reduce((obj, currentValue) => {
      let idsFilteredForStep = idsToAnimate.filter((_id) => {
        return _id.includes(currentValue);
      });

      const dataStepObj = idsFilteredForStep.map((_id) => ({
        _id,
        offsetTop: document.getElementById(_id)?.offsetTop,
        gapInToTop:
          (<HTMLElement>document.getElementById(_id)).getBoundingClientRect()
            ?.top * -1,
      }));

      return {
        ...obj,
        [currentValue]: dataStepObj,
      };
    }, {});

    steps.map((key: string) => {
      console.log(_steps[key]);
      const idsByStep = _steps[key];

      idsByStep.map(({ _id, offsetTop, gapInToTop }: any) => {
        if (window.scrollY >= offsetTop) {
          document.getElementById(_id)?.classList.add('active');
          console.log(window.pageYOffset, gapInToTop * 1);
        }
      });
    });

    // const element: HTMLElement | null = <HTMLElement>(
    //   document.getElementById('home')
    // );

    // const gapInTheTop = element.getBoundingClientRect().top * -1;

    // const stepToPage = gapInTheTop / window.innerHeight;

    // this.stepToPage$.next(<number>stepToPage);

    // console.log(stepToPage);

    // animationByScrollDict[Number(stepToPage.toFixed(0))](stepToPage);
  }

  validateItemMenuActivated(itemMenu: number) {
    return Number(this.stepToPage$.getValue().toFixed(0)) == itemMenu;
  }

  nav(link: string) {
    window.open(link, '_blank');
  }
}
