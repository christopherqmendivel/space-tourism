import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interfaces/Destination.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  public destinations: Destination[] = [];
  public selectedDestination: Destination | undefined;
  public animate: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.destinations = data.destinations;
      this.selectedDestination = this.destinations.length > 0 ? this.destinations[0] : undefined;
      console.log(this.destinations);
    });
  }

  selectDestination(destination: Destination): void {
    this.selectedDestination = destination;
    this.animate = true;

    setTimeout(() => {
      this.animate = false;
    }, 850);
  }

}
