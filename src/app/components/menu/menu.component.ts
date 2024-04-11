import { IconComponent } from '@/app/shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() appearMenu: boolean | null = false;

  stepToPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  menuState: boolean = false;

  onMenuClick = () => (this.menuState = !this.menuState);

  constructor(private router: Router) {}

  validateItemMenuActivated(itemMenu: number) {
    return Number(this.stepToPage$.getValue().toFixed(0)) == itemMenu;
  }

  navTo(link: string) {
    const elementOffsetTop = document.getElementById(link)?.offsetTop;
    this.menuState = false;
    window.scrollTo({ top: elementOffsetTop, behavior: 'smooth' });
  }

  scrollParaElementoComVelocidade(idDoElemento: any, velocidade: any = 1000) {
    const elemento = document.getElementById(idDoElemento);
    if (!elemento) return;

    const startPosicao = window.pageYOffset;
    const targetPosicao = elemento.offsetTop;

    const distancia = targetPosicao - startPosicao;
    const duracao = Math.abs(distancia) / velocidade;
    console.log(startPosicao, targetPosicao, duracao);

    let startTempo: any = null;

    function animar(tempoAtual: any) {
      console.log(tempoAtual);
      if (startTempo === null) startTempo = tempoAtual;
      const tempoPassado = tempoAtual - startTempo;

      const progresso = Math.min(tempoPassado / duracao, 1); // Progresso da animação (0 a 1)
      const interpolacao = progresso * (1 - Math.cos(progresso * Math.PI)); // Interpolação para um movimento suave

      window.scrollTo(0, startPosicao + distancia * interpolacao); // Interpolação da posição de rolagem

      if (tempoPassado < duracao) {
        requestAnimationFrame(animar);
      }
    }

    requestAnimationFrame(animar);
  }

  nav(link: string) {
    window.open(link, '_blank');
  }
}
