import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { UserService } from "src/app/shared/services/user.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: "app-auditor",
  templateUrl: "./auditor.component.html",
  styleUrls: ["./auditor.component.scss"]
})
export class AuditorComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [
    "id",
    "mail",
    "tipo",
    "detalles",
    "delete",
    "update"
  ];

  users = [];
  dataSource = [];
  userGetSubs: Subscription;
  userDeleteSubs: Subscription;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadProduct();
    //this.dataSource = this.users;
  }

  loadProduct(): void {
    this.users = [];
    this.dataSource=[];
    this.userGetSubs = this.userService
      .getUser()
      .subscribe(res => {
        Object.entries(res).map((p: any) => {
        if (p[1].tipo=='Auditor') {
          this.users.push(p[1]);
          this.dataSource = this.users;
          console.log("Data auditor ",this.dataSource)
          }
        });
      });
  }

  onDelete(id: any): void {
    this.userDeleteSubs = this.userService.deleteUser(id).subscribe(
      res => {
        console.log("RESPONSE: ", res);
        this.loadProduct();
      },
      err => {
        console.log("ERROR: ");
      }
    );
  }

  ngOnDestroy() {
    this.userGetSubs ? this.userGetSubs.unsubscribe() : "";
    this.userDeleteSubs ? this.userDeleteSubs.unsubscribe() : "";
  }
}