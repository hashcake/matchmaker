import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Team } from '../entities/Team';

const stdTeams: Team[] = [
  {name: 'Inter', venue: 'San Siro', misc: 'Niente'},
  {name: 'Chievo', venue: 'Bentegodi', misc: 'Pellissier #1'},
  {name: 'Milan', venue: 'San Siro', misc: 'Il calabrese'},

]

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private teamSubject: ReplaySubject<Team []> = new ReplaySubject<Team[]>()
  public teams$: Observable<Team []> = this.teamSubject.asObservable()
  private teams: Team[] = []

  constructor() {
    //mock data result by using stdTeams instead of teams property
    this.teamSubject.next(stdTeams)
   }

  addTeam(team: Team): void {
    this.teams.push(team)
    this.teamSubject.next(this.teams)
  }
}
