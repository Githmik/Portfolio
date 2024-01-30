import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    {id: 0, name: 'Inventory Management System',
    summary: 'University Project',
    description: 'Developed to manage inventory and make reports',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2.jpg","../../assets/images/ProImg3.png"],
    tag: [Tag.JAVA , Tag.MYSQL]},

    {id: 1, name: 'Repair Center Management',
    summary: 'Practise Project',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2","../../assets/images/ProImg3.png"],
    tag: [Tag.HTML , Tag.CSS, Tag.JS]},

    {id: 2, name: 'Digital Clock',
    summary: 'Practise Project',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2","../../assets/images/ProImg3.png"],
    tag: [Tag.JS, Tag.HTML]},

    {id: 3, name: 'Weather App',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2","../../assets/images/ProImg3.png"],
    tag: [Tag.JS , Tag.HTML]},

    {id: 4, name: 'Portfolio',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2","../../assets/images/ProImg3.png"],
    tag: [Tag.ANGULAR , Tag.TYPESCRIPT]},

    {id: 5, name: 'Massage App',
    summary: 'Test Description1',
    description: 'Ts Project',
    projectLink: '//www.github.com',
    pictures: ["../../assets/images/ProImg1.jpg","../../assets/images/ProImg2","../../assets/images/ProImg3.png"],
    tag: [Tag.ANGULAR , Tag.NodeJS]}

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
