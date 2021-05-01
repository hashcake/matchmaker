import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/entities/calendar';
import { Team } from 'src/app/entities/team';
import { CalendarService } from 'src/app/services/calendar.service';
import { ManagerService } from 'src/app/services/manager.service';

var ss: Team[] = [
  {name: 'A', venue: 'X', misc: 'N'},
  {name: 'B', venue: 'X', misc: 'N'},
  {name: 'C', venue: 'X', misc: 'N'},
  {name: 'D', venue: 'X', misc: 'N'},
  {name: 'E', venue: 'X', misc: 'N'},
  {name: 'F', venue: 'X', misc: 'N'},
  {name: 'G', venue: 'X', misc: 'N'},
  {name: 'H', venue: 'X', misc: 'N'}
];

@Component({
  selector: 'mm-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.scss']
})
export class MatchCalendarComponent implements OnInit {
  
  teams: Team[]
  calendar: Calendar

  constructor(private managerService: ManagerService, private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.managerService.teams$.subscribe(t => {
      this.teams = t
    })
  }

  createCalendar(): void {
    this.calendar = this.calendarService.matchmake(this.teams); //mock
  }

}
