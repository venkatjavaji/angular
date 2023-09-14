import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/serivces/cognito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alertMessage: string = "";
  showAlert: boolean = false;

  constructor(private router: Router, private cognitoService: CognitoService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  private getUserDetails() {
    this.cognitoService.getUser()
      .then((user: any) => {
        console.log("user info from Auth " + user);
        if (user && user.username) {
          console.log(user);
        }
        else {
          this.router.navigate(['/signin'])
        }
      })
  }

  signOutWithCognito() {
    this.cognitoService.signOut().then(() => {
      console.log("hello user on SignOut ");
      this.router.navigate(['/signin']);
    })
      .catch((error: any) => {
        this.displayAlert(error.message);
      })
  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }
}
