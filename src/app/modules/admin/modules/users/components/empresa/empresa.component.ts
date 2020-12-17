import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "src/app/shared/services/user.service";


@Component({
  selector: "app-empresa",
  templateUrl: "./empresa.component.html",
  styleUrls: ["./empresa.component.scss"]
})
export class EmpresaComponent implements OnInit,  OnDestroy {

  displayedColumns: string[] = [
    "id",
    "mail",
    "tipo",
    "detalles",
    "delete",
    "update"
  ];

  users1 = [];
  dataSource1 = [];
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
    this.users1 = [];
    this.dataSource1=[];
    this.userGetSubs = this.userService
      .getUser()
      .subscribe(res => {
        Object.entries(res).map((p: any) => {
        if (p[1].tipo=='Empresa') {
          this.users1.push(p[1]);
          this.dataSource1 = this.users1;
          console.log("Data Empresa ",this.dataSource1)
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