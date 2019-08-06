import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../../../shared/services/api-service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  public add_event_value;
  public add_event;
  constructor(private _apiService: ApiService, private router: Router) {
    this.add_event = {
      event_id: '',
      event_name: ''
    }
  }

  onSubmit() {
    var event = this.add_event
    this._apiService.addevent(event).subscribe(data => {
      if (data.statuscode = 200) {

        swal({
          text: "Event added successfuly",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        })
        this.router.navigate(['/events']);

      } else {
        swal({
          text: "Failed to add event.",
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




