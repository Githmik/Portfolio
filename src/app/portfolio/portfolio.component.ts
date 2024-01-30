import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  javascript: boolean = false;
  css: boolean = false;
  html: boolean = false;
  java: boolean = false;
  mysql: boolean = false;

  angular: boolean = false;
  expressjs: boolean = false;
  nodejs: boolean = false;
  filtering: boolean = false;
  

  constructor(private titleServices: Title, private projectService: ProjectsService){
    this.titleServices.setTitle('Githmi Kavindi-Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  filter(){
    let filterTag: Tag[] = [];

    if(this.typescript){
      filterTag.push(Tag.TYPESCRIPT);
    }

    if(this.javascript){
      filterTag.push(Tag.JS);
    }

    if(this.css){
      filterTag.push(Tag.CSS);
    }

    if(this.java){
      filterTag.push(Tag.JAVA);
    }

    if(this.mysql){
      filterTag.push(Tag.MYSQL);
    }

    if(this.html){
      filterTag.push(Tag.HTML);
    }


    if(this.angular){
      filterTag.push(Tag.ANGULAR);
    }

    if(this.expressjs){
      filterTag.push(Tag.EXPRESSJS);
    }

    if(this.nodejs){
      filterTag.push(Tag.NodeJS);
    }


    if(this.typescript || this.angular || this.css || this.expressjs || this.java || this.javascript|| this.html || this.mysql || this.nodejs ){
      this.filtering = true;
    }
    else{
      this.filtering= false;
    }




    this.projects = this.projectService.GetProjectsByFilter(filterTag);
  }

  RestFillters(){
    this.typescript = false;
    this.angular = false;
    this.filtering =false;

    this.projects = this.projectService.GetProjects();
  }
}
