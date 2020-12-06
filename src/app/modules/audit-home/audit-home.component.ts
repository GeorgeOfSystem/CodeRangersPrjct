import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from 'src/shared/services/auth.service';
=======
import { AuthService } from "src/app/shared/services/auth.service";
>>>>>>> upstream/pr/11


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
