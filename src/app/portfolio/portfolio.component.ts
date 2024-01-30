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

  angular: boolean = false;
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
    if(this.angular){
      filterTag.push(Tag.ANGULAR);
    }


    if(this.typescript || this.angular){
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
