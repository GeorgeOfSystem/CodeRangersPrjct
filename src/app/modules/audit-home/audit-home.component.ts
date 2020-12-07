import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-audit-home',
  templateUrl: './audit-home.component.html',
  styleUrls: []
})
export class AuditHomeComponent implements OnInit {
  
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {}
  public onLogout(): void {
    this.authService.logout();
  }
}
