import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session';
import { MatTableDataSource } from '@angular/material/table';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  public name = "Session"
  public sessions: Session[] = [];
  public sessionColumns: string[] = ['time', 'ao5', 'ao12'];

  public sessionsDS: MatTableDataSource<Session>;

  constructor(public sessionService: SessionService) { }

  ngOnInit(): void {

    this.sessionService.onAdded.subscribe(() => {    
      this.sessions = this.sessionService.Sessions;
      this.sessionsDS = new MatTableDataSource(this.sessions);
    })

    
    this.sessions = this.sessionService.Sessions;
    this.sessionsDS = new MatTableDataSource(this.sessions);
  }

  get Sessions() {
    return this.sessions;
  }

}