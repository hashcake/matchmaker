import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Team } from '../entities/team';

const stdTeams: Team[] = [
  {name: 'Inter', venue: 'San Siro', misc: 'Niente'},
  {name: 'Chievo', venue: 'Bentegodi', misc: 'Pellissier #1'},
  {name: 'Milan', venue: 'San Siro', misc: 'Il calabrese'},
  {name: 'Genoa', venue: 'Marassi', misc: ''},
  {name: 'Parma', venue: 'Tardini', misc: ''},
  {name: 'Sampdoria', venue: 'Marassi', misc: ''},
  {name: 'Juventus', venue: 'Juventus stadium', misc: ''},
  {name: 'Reggina', venue: 'Boh', misc: ''},
  {name: 'Pro Sesto', venue: 'Sesto Stadium', misc: ''},
  {name: 'Monza', venue: 'Mah', misc: 'Per silvio'}
]

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private teamSubject: ReplaySubject<Team []> = new ReplaySubject<Team[]>()
  public teams$: Observable<Team []> = this.teamSubject.asObservable()
  private teams: Team[] = stdTeams

  constructor() {
    this.teamSubject.next(this.teams)
   }

  addTeam(team: Team): void {
    this.teams.push(team)
    this.teamSubject.next(this.teams)
  }
}
