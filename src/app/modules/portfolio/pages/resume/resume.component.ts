import { Component, OnInit } from '@angular/core';
import { ExperienceItemModel } from 'src/app/shared/models/experience-item-model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public expericences: ExperienceItemModel[] = [];

  private apprentice: ExperienceItemModel = {
    job: 'Auxiliar administrativo executivo Aprendiz TI',
    period: '2017 - 2018 | 1 ano 5 meses',
    description: 'Contrato de aprendizagem, realizava trabalhos de auxiliar administrativo e suporte no setor de Informática. Organizar e Enviar notas fiscais. Arquivamento de Documentos. Suporte técnico aos usuários internos. Manutenção em equipamentos de informática. Gestão de Documentos'
  };

  private support: ExperienceItemModel = {
    job: 'Suporte técnico',
    period: '2018 - 2020 | 1 ano 9 meses',
    description: 'Prestar suporte técnico do produto aos usuários. Demonstrar e oferecer treinamentos para utilização da plataforma. Análise de bugs. Testes do sistema pós correções'
  };

  private intern: ExperienceItemModel = {
    job: 'Estagiário de desenvolvimento de software',
    period: '2020 - 2021 | 1 ano',
    description: 'Desenvolver e dar manutenção em software da empresa'
  };

  private santander: ExperienceItemModel = {
    job: 'IT Developer',
    period: '2021 - o momento',
    description: 'Desenvolver e dar manutenção em software da empresa'
  };

  constructor() { }

  ngOnInit(): void {
    this.expericences.push(
      this.santander,
      this.intern,
      this.support,
      this.apprentice
    )
  }

}
