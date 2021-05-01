import { TestBed } from '@angular/core/testing';
import { Team } from '../entities/team';

import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should split the arrays equally', () => {
    let teams: Team[] = [
      {name: 'A', venue: 'X', misc: 'N'},
      {name: 'B', venue: 'X', misc: 'N'},
      {name: 'C', venue: 'X', misc: 'N'},
      {name: 'D', venue: 'X', misc: 'N'},
      {name: 'E', venue: 'X', misc: 'N'},
      {name: 'F', venue: 'X', misc: 'N'},
      {name: 'G', venue: 'X', misc: 'N'},
      {name: 'H', venue: 'X', misc: 'N'}
    ];
    let firstHalf = teams.slice(0, teams.length/2 );
    let secondHalf = teams.slice((teams.length /2) );

    expect(firstHalf.length).toBe(secondHalf.length)
    expect(firstHalf[0].name).toBe('A')
    expect(firstHalf[3].name).toBe('D')
    expect(secondHalf[0].name).toBe('E')
    expect(secondHalf[3].name).toBe('H')
    
  });

  it('should rotate the 2 arrays', () => {
    let home: Team[] = [
      {name: 'A', venue: 'X', misc: 'N'},
      {name: 'B', venue: 'X', misc: 'N'},
      {name: 'C', venue: 'X', misc: 'N'},
      {name: 'D', venue: 'X', misc: 'N'}
    ];
    let away: Team[] = [
      {name: 'E', venue: 'X', misc: 'N'},
      {name: 'F', venue: 'X', misc: 'N'},
      {name: 'G', venue: 'X', misc: 'N'},
      {name: 'H', venue: 'X', misc: 'N'}
    ];

    // first rotation
    service.rotate(home, away);
    expect(home[0].name).toBe('A');
    expect(home[3].name).toBe('C');
    expect(away[0].name).toBe('F');
    expect(away[3].name).toBe('D');

    // second rotation
    service.rotate(home, away);
    expect(home[0].name).toBe('A');
    expect(home[3].name).toBe('B');
    expect(away[0].name).toBe('G');
    expect(away[3].name).toBe('C');
  });

  it('should create day one', () => {
    let home: Team[] = [
      {name: 'A', venue: 'X', misc: 'N'},
      {name: 'B', venue: 'X', misc: 'N'},
      {name: 'C', venue: 'X', misc: 'N'},
      {name: 'D', venue: 'X', misc: 'N'}
    ];
    let away: Team[] = [
      {name: 'E', venue: 'X', misc: 'N'},
      {name: 'F', venue: 'X', misc: 'N'},
      {name: 'G', venue: 'X', misc: 'N'},
      {name: 'H', venue: 'X', misc: 'N'}
    ];

    service.rotate(home, away);
    let day = service.getDay(home, away, 1);

    expect(day).toBeTruthy();
    expect(day.matches.length).toBe(4);
    expect(day.matches[0].home.name).toBe('A');
    expect(day.matches[0].away.name).toBe('F');
  })
});
