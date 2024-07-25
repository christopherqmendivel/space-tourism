import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interfaces/Crew.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  public crews: Crew[] = [];
  public selectedCrew: Crew | undefined;
  public animate: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe( (data) => {
      this.crews = data.crew;
      this.selectedCrew = this.crews.length > 0 ? this.crews[0] : undefined;
      console.log(this.crews)
    })
  }

  selecCrew(crew: Crew):void {
    this.selectedCrew = crew;
    this.animate = true;

    setTimeout(() => {
      this.animate = false;
    }, 850);
  }
}


