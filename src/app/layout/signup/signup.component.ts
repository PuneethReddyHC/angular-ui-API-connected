import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../shared/services/api-service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import swal from "sweetalert";
import { MatRadioChange, MatRadioButton } from "@angular/material";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type = "password";
  show = false;
  loginform: FormGroup;
  submitted = false;
  public checked_type;
  public stype;
  
//   @Output() change: EventEmitter<MatRadioChange>;

    constructor(private router: Router,
        public _apiService: ApiService,
        private formBuilder: FormBuilder
        ) {}

        toggleShow() {
            this.show = !this.show;
            if (this.show) {
              this.type = "text";
            } else {
              this.type = "password";
            }
          }

    ngOnInit() {

    this.stype = "user";
    this.loginform = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    }
    get f() {
        return this.loginform.controls;
      }

      trimValue(event) {
        event.target.value = event.target.value.trim();
      }
    
      onChange(mrChange: MatRadioChange) {
        if (mrChange.value) {
          this.checked_type = mrChange.value;
        }
        let mrButton: MatRadioButton = mrChange.source;
      }
    onSignup() {
        // localStorage.setItem('isLoggedin', 'true');
        // this.router.navigate(['/dashboard']);
      this.submitted = true;
   
      this._apiService.signup(this.loginform.value).subscribe((data: any) => {
        console.log(data.data);
       
        if(data.data != undefined){
        if (data.statuscode == 200) {
          localStorage.setItem("token", data.data["jwt_token"]);
          localStorage.setItem("currentuser", JSON.stringify(data.data));
          localStorage.setItem('isLoggedin', 'true');
          window.location.replace("/dashboard");
         
          
        } else if (data.statuscode == 201) {
          swal({
            text: "Invalid Username and Password. Please try again!!",
            buttons: [false],
            dangerMode: true,
            timer: 3000
          });
        } else if (data.statuscode == 202) {
          swal({
            text: "Invalid Username and Password. Please try again!!",
            buttons: [false],
            dangerMode: true,
            timer: 3000
          });
        }
        else if (data.statuscode == 500) {
          swal({
            text: "Something went wrong! Please try again.",
            buttons: [false],
            dangerMode: true,
            timer: 3000
          });
        } else if (data.statuscode == 205) {
          swal({
            text: "Your account has been Deactivated, Please contact admin to activate",
            buttons: [false],
            dangerMode: true,
            timer: 3000
          });
        }
      
    } 
}); 
    }
}
