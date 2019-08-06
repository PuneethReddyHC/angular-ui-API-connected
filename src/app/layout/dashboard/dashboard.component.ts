import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api-service';
import swal from 'sweetalert';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    contractform:FormGroup;
    public adminaccount;
    public items;
    constructor( public _apiService: ApiService,public formBuilder: FormBuilder) {
    
    }


    ngOnInit() {
        
        this.getData();
        
    }
    getData(){
        if( localStorage.getItem('currentuser') == ''){
            this.items = ' ';
        }else{
            this.items = JSON.parse(localStorage.getItem('currentuser'));
        }
        
    }
    logout() {
       
        this._apiService.logout().subscribe(data => {
            localStorage.setItem('isLoggedin', 'false');
            localStorage.setItem("currentuser",'');
          swal({
            text: "logged out successfully",
            buttons: [false],
            dangerMode: true,
            timer: 5000
          });
          location.reload();
    
        });
      }
      isLoggedin(){
          if (localStorage.getItem('isLoggedin') == 'true'){
              return true;
          }else{
            return false;  
          }
      }

 
}
