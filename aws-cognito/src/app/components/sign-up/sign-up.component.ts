import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CognitoService } from 'src/app/serivces/cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user!: User;
  isConfirm : boolean = false;
  alertMessage : string  = '';
  showAlert : boolean = false;
  constructor(private router:Router, private cognitoService : CognitoService) { }

  ngOnInit(): void {
    this.user =  {} as User;
    this.isConfirm=false;
  }

  public signUpWithCognito() {
    if(this.user && this.user.email && this.user.password) {
      this.cognitoService.signUp(this.user)
      .then (()=>{
        this.isConfirm = true;
      })
      .catch ((error : any) => {
          console.error(error);
          this.displayAlert(error.message);
      });
    } else {
      this.displayAlert("Missing email or password");
    }
  }

  public confirmSignUp() {
    if(this.user) {
      this.cognitoService.confirmSignUp(this.user)
      .then(()=> {
          this.router.navigate(['/signin'])
      })
      .catch((error:any) => {
        this.displayAlert(error.message);
      })

    } else {
      this.displayAlert("Missing user information");
    }
  }

  private displayAlert(message:string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

}
