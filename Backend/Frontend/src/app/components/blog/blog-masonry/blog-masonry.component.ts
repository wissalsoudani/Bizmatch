import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-blog-masonry',
  templateUrl: './blog-masonry.component.html',
  styleUrls: ['./blog-masonry.component.scss']
})
export class BlogMasonryComponent implements OnInit {
  public blogMasonry : any = [];
  public routes = routes;
  events: any;

  constructor(private DataService: DataService,private eventService:EventService) {
    this.blogMasonry = this.DataService.blogMasonry;
    }

  ngOnInit(): void {
    this.getEvents()
  }
  getEvents() {
    this.eventService.getAllEvents().subscribe(
      events => {
       this.events=events
       console.log(this.events)
      },
      error => {
        console.log(error);
      }
    );
  }

}
