import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../../shared/services/api-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';
import { Injectable } from '@angular/core';
export interface sample {
  "postId":String,
  "title": String,
  "description": String,
  "images": String,
}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public list_value;
  public postId;
  public selectedItem;
  public display_list_value;
  public edit_data;
  dataSource: any;
  toggleForm: boolean = false;
  displayedColumns: string[] = ['title', 'description','images', 'actions'];
  constructor(private _apiService: ApiService, private router: Router) {

  }

  getpostlist() {
    this._apiService.list_posts().subscribe(data => {
      this.list_value = data;
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.list_value.data
    });
  }
  view(postId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "postId": postId,
      }
    };
    this.router.navigate(['/viewsample'], navigationExtras);
  }

  
  addpost() {
    this.router.navigate(['/addpost'])
  }
  ngOnInit() {
    this.getpostlist()
  }
  
  edit(element) {
    
    this.selectedItem = element;
    
    this.toggleForm = !this.toggleForm;


  }
  delete(postId) {

    this._apiService.delete_post(postId).subscribe(data => {

      swal({
        text: "post deleted successfuly",
        buttons: [false],
        dangerMode: true,
        timer: 3000
      })
      location.reload();


    })
  }

  postviews(postId) {
    this._apiService.edit_views(postId).subscribe(data => {

      
      location.reload();


    });
  }

  save(form) {
    this.edit_data = form.value;
    this._apiService.edit_post(this.edit_data).subscribe((data: any) => {


      const formcheck = JSON.parse(data['_body']);
      if (formcheck.statuscode == 200) {
        swal({
          text: "post updated successfuly",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        })

        location.reload();

      } else {
        swal({
          text: "Failed to update post.",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        });
        location.reload();
      }

    })
  }

}

