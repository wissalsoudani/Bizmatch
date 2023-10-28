import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/eventCalendar.model';
import { User } from 'src/app/models/user.model';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrls: ['./course-student.component.scss']
})
export class CourseStudentComponent implements OnInit {
  public routes = routes;
  public courseStudent: any = [];
  user: User = new User;
  email:string='';
  userId :number=0;
    ShowResetPassword= false;
  constructor(private userService: UserService,private DataService: DataService,private eventService: EventService) {
    this.courseStudent = this.DataService.courseStudent;}
 
   
   
  
    getUser() {
      this.email=sessionStorage.getItem('user') as string;
      this.userService.getUser(this.email).subscribe(
        data => {
          this.user = data;
           
          console.log(this.user);
        },
        error => {
          console.log(error);
        }
      );
    }
    events: EventModel[] = [];
    calendarOptions: any;
   
   
  ngOnInit(): void {
    this.getUser()
    this.userService.getEvents(this.email).subscribe(
      (data: EventModel[]) => {
        this.events = data;
    
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          plugins: [dayGridPlugin, interactionPlugin],
          events: this.events.map(event => ({
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            color: this.getColorForEventType(event.type),
          })),
        };
    
        console.log('Calendar Options:', this.calendarOptions);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
    
    
    this.calendarOptions = {
      initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
      events: this.events.map(event => ({
        title: event.title,
        start: event.start,
        end: event.end,
        color: this.getColorForEventType(event.type),
      })),
    };
  
    console.log(this.calendarOptions); // Check the console for the logged data
  }
  
  
    getColorForEventType(type: string): string {
      // Add logic to determine color based on event type
      switch (type) {
        case 'Event':
          return 'blue';
        case 'Conference':
          return 'green';
        case 'Reunion':
          return 'red';
        default:
          return 'gray';
      }
    }
  }

