import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../../../shared/services/api-service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-colleget',
  templateUrl: './add-colleget.component.html',
  styleUrls: ['./add-colleget.component.css']
})
export class AddCollegetComponent implements OnInit {
  public add_college_value;
  public add_college;
  constructor(private _apiService: ApiService, private router: Router) {
    this.add_college = {
      college_id: '',
      college_name: '',
      college_loc:''
    }
  }

  onSubmit() {
    var event = this.add_college
    this._apiService.addcollege(event).subscribe(data => {
      if (data.statuscode = 200) {

        swal({
          text: "college added successfuly",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        })
        this.router.navigate(['/college']);

      } else {
        swal({
          text: "Failed to add college.",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        });
      }


    });
  }
  ngOnInit() {
  }

}

