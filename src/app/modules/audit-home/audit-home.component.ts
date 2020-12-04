import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-audit-home',
  templateUrl: './audit-home.component.html',
  styleUrls: ['./audit-home.component.scss']
})
export class AuditHomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {}
  public onLogout(): void {
    this.authService.logout();
  }
}
