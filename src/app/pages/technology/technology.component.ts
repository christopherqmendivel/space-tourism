import { Component, HostListener, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/Technology.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  public technologies: Technology[] = []
  public selectedTechnology: Technology | undefined;
  public animate: boolean = false;
  public imageUrl: string = '';


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe( (data) => {
      this.technologies = data.technology;
      this.selectedTechnology = this.technologies.length > 0 ? this.technologies[0] : undefined;
      this.updateImageUrl();
      console.log(this.technologies)
    })
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImageUrl();
  }

  updateImageUrl() {
    if(this.selectedTechnology) {
      this.imageUrl = window.innerWidth >= 992 ? this.selectedTechnology.images.portrait : this.selectedTechnology.images.landscape;
    }
  }

  selecTechnology(technology: Technology):void {
    this.selectedTechnology = technology;
    this.updateImageUrl();
    this.animate = true;

    setTimeout(() => {
      this.animate = false;
    }, 850);
  }
} 
