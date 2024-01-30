import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;

  constructor(private titleServices: Title, private projectService:ProjectsService ){
    this.titleServices.setTitle('Githmi Kavindi-Home')

  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectByID(0);
  }

}
