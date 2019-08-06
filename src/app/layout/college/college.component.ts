import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../../shared/services/api-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';

export interface sample {
  "college_id": String,
  "college_name": String,
  "college_loc": String,
}
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  public list_value;
  public college_id;
  public selectedItem;
  public display_list_value;
  public edit_data;
  dataSource: any;
  toggleForm: boolean = false;
  displayedColumns: string[] = ['college_id', 'college_name','college_loc', 'actions'];
  constructor(private _apiService: ApiService, private router: Router) {

  }

  getcollegelist() {
    this._apiService.list_colleges().subscribe(data => {
      this.list_value = data;
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.list_value.data
    });
  }
  view(college_id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "college_id": college_id,
      }
    };
    this.router.navigate(['/viewsample'], navigationExtras);
  }

  
  addcollege() {
    this.router.navigate(['/addcollege'])
  }
  ngOnInit() {
    this.getcollegelist()
  }

  edit(element) {
    this.selectedItem = element;
    this.toggleForm = !this.toggleForm;


  }
  delete(college_id) {
    this._apiService.delete_college(college_id).subscribe(data => {

      swal({
        text: "college deleted successfuly",
        buttons: [false],
        dangerMode: true,
        timer: 3000
      })
      location.reload();


    })
  }

  save(form) {
    this.edit_data = form.value;
    this._apiService.edit_college(this.edit_data).subscribe((data: any) => {


      const formcheck = JSON.parse(data['_body']);
      if (formcheck.statuscode == 200) {
        swal({
          text: "college updated successfuly",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        })

        location.reload();

      } else {
        swal({
          text: "Failed to update college.",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        });
        location.reload();
      }

    })
  }

}
