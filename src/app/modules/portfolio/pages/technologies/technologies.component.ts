import { Component, OnInit } from '@angular/core';
import { IcardItem } from 'src/app/modules/portfolio/pages/technologies/interfaces/card-item-interface';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public technologies: IcardItem[] = [];

  public angular: IcardItem = {
    icon: 'fa-brands fa-angular',
    title: 'Angular',
    description: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.',
    color: '#DD0031'
  };

  public html: IcardItem = {
    icon: 'fa-brands fa-html5',
    title: 'Html 5',
    description: 'HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML',
    color: '#F06126'
  };

  public css: IcardItem = {
    icon: 'fa-brands fa-css3',
    title: 'Css 3',
    description: 'CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.',
    color: '#2CAAE8'
  };

  public javascript: IcardItem = {
    icon: 'fa-brands fa-square-js',
    title: 'Javascript',
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
    color: 'yellow'
  };

  public node: IcardItem = {
    icon: 'fa-brands fa-node-js',
    title: 'Node JS',
    description: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
    color: 'green'
  };

  public flutter: IcardItem = {
    svg: 'assets/svg/flutter.svg',
    title: 'Flutter',
    description: 'Flutter é um kit de desenvolvimento de interface de usuário, de código aberto, criado pela empresa Google em 2015, baseado na linguagem de programação Dart, que possibilita a criação de aplicativos compilados nativamente, para os sistemas operacionais Android, iOS, Windows, Mac, Linux e, Fuchsia e Web.',
    color: 'blue'
  };

  public java: IcardItem = {
    icon: 'fa-brands fa-java',
    title: 'Java',
    description: 'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.',
    color: 'red'
  };

  public camel: IcardItem = {
    svg: 'assets/svg/camel.svg',
    title: 'Camel',
    description: 'O Apache Camel é uma estrutura de código aberto para middleware orientado a mensagens com um mecanismo de roteamento e mediação baseado em regras que fornece uma implementação baseada em objetos',
    color: '#FF9D00'
  };

  constructor() { }

  ngOnInit(): void {
    this.technologies.push(
      this.angular,
      this.html,
      this.css,
      this.javascript,
      this.node,
      this.flutter,
      this.java,
      this.camel
    )
  }

}

