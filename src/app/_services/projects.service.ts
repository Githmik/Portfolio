import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    {id: 0, name: 'Sample Project1',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2.jpg","../../assets/images/ProImg3.jpg"],
    tag: [Tag.ANGULAR , Tag.REACT]},

    {id: 1, name: 'Sample Project2',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: [],
    tag: [Tag.ANGULAR , Tag.TYPESCRIPT]},

    {id: 2, name: 'Sample Project3',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: [],
    tag: [Tag.REACT]},

    {id: 3, name: 'Sample Project4',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: [],
    tag: [Tag.ANGULAR , Tag.REACT]},

    {id: 4, name: 'Sample Project5',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: [],
    tag: [Tag.ANGULAR , Tag.REACT]},

    {id: 5, name: 'Sample Project6',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: [],
    tag: [Tag.ANGULAR , Tag.REACT]}

]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectByID(id: number) : Project {
    let project = this.projects.find( project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if(project.tag.includes(filterTag) == false){
          foundAll = false;
        }

      });

      if(foundAll){
        filteredProjects.push(project);
      }

    });

    return filteredProjects;
  }
}
