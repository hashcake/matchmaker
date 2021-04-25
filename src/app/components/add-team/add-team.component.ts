import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit';
import { Team } from 'src/app/entities/Team';
import { Validators } from '@angular/forms';

@Component({
  selector: 'mm-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    venue: ['', Validators.required],
    misc: ['']
  })

  constructor(
    public modalRef: MdbModalRef<AddTeamComponent>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modalRef.close()
  }

  add(): void {
    const teamToAdd = this.mapFrom()
    this.modalRef.close(teamToAdd)
  }

  private mapFrom(): Team {
    return {
      name: this.teamForm.value.name, 
      venue: this.teamForm.value.venue, 
      misc: this.teamForm.value.misc}
  }

}
