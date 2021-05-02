import { Injectable } from '@angular/core';
import { Calendar } from '../entities/calendar';
import { Match } from '../entities/match';
import { Matchday } from '../entities/matchday';
import { Team } from '../entities/team';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  matchmake(teams: Team []): Calendar {
    //randomize
    this.shuffle(teams)

    let firstHalf = teams.slice(0, teams.length/2)
    let secondHalf = teams.slice(teams.length/2)
    secondHalf.reverse()

    let calendar: Calendar = {
      name: 'Serie A',
      days:  new Array()
    }
    for (let i = 0; i < teams.length - 1; i++) {
      this.rotate(firstHalf, secondHalf)
      const day = this.getDay(firstHalf, secondHalf, i)
      calendar.days.push(day)
    }

    return calendar
  }

  rotate(first: Team[], second: Team[]) {
    let toBeInserted = second[0]
    for(let i = 1; i < first.length; i++) {
      let tmp = first[i]
      first[i] = toBeInserted
      toBeInserted = tmp
    }

    second.reverse()
    for (let i = 0; i < second.length; i++) {
      let tmp = second[i]
      second[i] = toBeInserted
      toBeInserted = tmp
    }

    second.reverse()
  }

  getDay(home: Team[], away: Team[], dayOfCalendar: number): Matchday {
    let day: Matchday = {
      dayNo: dayOfCalendar,
      matches: new Array()
    }

    for (let i = 0; i < home.length; i++) {
      const match: Match = {
        home: home[i],
        away: away[i],
        venue: home[i].venue
      }
      day.matches.push(match)
    }

    return day
  }

  private shuffle(teams: Team[]) {
    for (let i = teams.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [teams[i], teams[j]] = [teams[j], teams[i]];
  }
  }
}
