import { Component, OnInit } from '@angular/core';
import { ExperienceItemModel } from 'src/app/shared/models/experience-item-model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public expericences: ExperienceItemModel[] = [];

  private freelancer: ExperienceItemModel = {
    job: 'Full Stack Developer',
    period: '2017 - 2019 | Freelance',
    description: 'labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit incididunt ut labore et. labore et dolore magna aliqua Lorem ipsum dolor '
  }

  constructor() { }

  ngOnInit(): void {
    this.expericences.push(
      this.freelancer,
      this.freelancer,
      this.freelancer,
      this.freelancer,
      this.freelancer,
      this.freelancer,
    )
  }

}
