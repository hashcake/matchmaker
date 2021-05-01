import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';
import { Team } from 'src/app/entities/team';
import { ManagerService } from 'src/app/services/manager.service';
import { AddTeamComponent } from '../add-team/add-team.component';

@Component({
  selector: 'mm-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.scss']
})
export class TeamGridComponent implements OnInit {

  public teams: Team[]
  private addTeamDialogRef: MdbModalRef<AddTeamComponent>

  constructor(
    private manager: ManagerService, 
    private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.manager.teams$.subscribe(t => {
      this.teams = t
    })
  }

  openAddTeamDialog(): void {
    this.addTeamDialogRef = this.modalService.open(AddTeamComponent)
    this.addTeamDialogRef.onClose.subscribe((t: Team) => {
      if (t != undefined)
        this.manager.addTeam(t)
    })
  }

}
