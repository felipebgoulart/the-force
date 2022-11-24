import { Component, OnInit } from '@angular/core';
import { IExperienceItem } from 'src/app/modules/portfolio/pages/resume/models/experience-item-model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public expericences: IExperienceItem[] = [];

  private apprentice: IExperienceItem = {
    companyName: 'Aperam',
    logo: 'aperam_logo.png',
    job: 'Auxiliar administrativo executivo Aprendiz TI',
    period: '2017 - 2018 | 1 ano 5 meses',
    description:
      'Atuava sob contrato de aprendizagem, realizava trabalhos de auxiliar administrativo e suporte no setor de Informática. Prestava suporte técnico aos usuários internos e dava manutenção em equipamentos de informática em geral, e responsável pelo inventário e organização do setor.',
  };

  private support: IExperienceItem = {
    companyName: 'Dynamix',
    logo: 'dx_logo.png',
    job: 'Suporte técnico',
    period: '2018 - 2020 | 1 ano 9 meses',
    description:
      'Atuava prestando suporte técnico do produto aos usuários, oferecia treinamentos para utilização da plataforma. Além de análise de logs e bugs ocasionais também ajudava na criação de aceleradores para facilitar o trabalho do time.',
  };

  private intern: IExperienceItem = {
    companyName: 'Loop 4',
    logo: 'loop_logo.png',
    job: 'Estagiário de desenvolvimento de software',
    period: '2020 - 2021 | 1 ano',
    description:
      'Atuei como desenvolvedor de software, criando features para os produtos de rastreamento e ferramenta de monitoramento.',
  };

  private santander: IExperienceItem = {
    companyName: 'F1rst',
    logo: 'f1rst_logo.png',
    job: 'IT Developer Pleno',
    period: '2021 - o momento',
    description:
      'Atuando como desenvolvimento de software pleno no canal de investimentos, desenvolvendo soluções para o canal e para o novo portal de investimentos do banco Santander no aplicativo mobile.',
  };

  constructor() {}

  ngOnInit(): void {
    this.expericences.push(
      this.santander,
      this.intern,
      this.support,
      this.apprentice
    );
  }
}
