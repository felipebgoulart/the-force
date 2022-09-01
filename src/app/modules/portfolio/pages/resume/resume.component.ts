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
    job: 'Auxiliar administrativo executivo Aprendiz TI',
    period: '2017 - 2018 | 1 ano 5 meses | Aperam',
    description:
      'Contrato de aprendizagem, realizava trabalhos de auxiliar administrativo e suporte no setor de Informática. Organizar e Enviar notas fiscais. Arquivamento de Documentos. Suporte técnico aos usuários internos. Manutenção em equipamentos de informática. Gestão de Documentos',
  };

  private support: IExperienceItem = {
    job: 'Suporte técnico',
    period: '2018 - 2020 | 1 ano 9 meses | Dynamix',
    description:
      'Prestar suporte técnico do produto aos usuários. Demonstrar e oferecer treinamentos para utilização da plataforma. Análise de bugs. Testes do sistema pós correções',
  };

  private intern: IExperienceItem = {
    job: 'Estagiário de desenvolvimento de software',
    period: '2020 - 2021 | 1 ano | Loop 4',
    description: 'Desenvolver e dar manutenção em software da empresa',
  };

  private santander: IExperienceItem = {
    job: 'IT Developer',
    period: '2021 - o momento | Santander',
    description: 'Desenvolver e dar manutenção em software da empresa',
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
