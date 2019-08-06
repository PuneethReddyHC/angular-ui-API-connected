import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../../shared/services/api-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';

export interface sample {
  "event_id": String,
  "event_name": String,
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public list_value;
  public event_id;
  public selectedItem;
  public display_list_value;
  public edit_data;
  dataSource: any;
  toggleForm: boolean = false;
  displayedColumns: string[] = ['event_id', 'event_name', 'actions'];
  constructor(private _apiService: ApiService, private router: Router) {

  }

  getlist() {
    this._apiService.list_events().subscribe(data => {
      this.list_value = data;
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.list_value.data



    });
  }
  view(event_id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "event_id": event_id,
      }
    };
    this.router.navigate(['/viewsample'], navigationExtras);
  }

  addevent() {
    this.router.navigate(['/addevent'])
  }
  
  ngOnInit() {
    this.getlist()
  }

  edit(element) {
    this.selectedItem = element;
    this.toggleForm = !this.toggleForm;


  }
  delete(event_id) {
    this._apiService.delete_event(event_id).subscribe(data => {

      swal({
        text: "Event deleted successfuly",
        buttons: [false],
        dangerMode: true,
        timer: 3000
      })
      location.reload();


    })
  }

  save(form) {
    this.edit_data = form.value;
    this._apiService.edit_event(this.edit_data).subscribe((data: any) => {


      const formcheck = JSON.parse(data['_body']);
      if (formcheck.statuscode == 200) {
        swal({
          text: "Event updated successfuly",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        })

        location.reload();

      } else {
        swal({
          text: "Failed to update event.",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        });
        location.reload();
      }

    })
  }

}





