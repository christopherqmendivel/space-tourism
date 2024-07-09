import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        console.log(this.currentRoute);
      }
    });
  }

  getRouteClass(): string {
    switch (this.currentRoute) {
      case '/home':
        return 'home-background';

      case '/crew':
        return 'crew-background';

      case '/destination':
        return 'destination-background';

      case '/technology':
        return 'technology-background';
        
      default:
        return ''; // Devuelve una cadena vacía por defecto si no coincide ninguna ruta en base al case y al routing
    }
  }
}
