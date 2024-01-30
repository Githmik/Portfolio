import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private titleServices: Title, private renderer: Renderer2){
    this.titleServices.setTitle('Githmi Kavindi-Resume')
  }

DownloadFile(){
  const link = this.renderer.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '../../assests/Resume.pdf');
  link.setAttribute('download', 'Resume.pdf');
  link.click();
  link.remove();

}
}
