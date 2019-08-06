import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../../../shared/services/api-service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public add_post_value;
  public add_post;
  public postId = '_' + Math.random().toString(36).substr(2, 9);
  constructor(private _apiService: ApiService, private router: Router) {
    this.add_post = {
      postId: this.postId,
      title: '',
      description: '',
      images:{}
    }
  }

  onSubmit() {
    var event = this.add_post
    this._apiService.addpost(event).subscribe(data => {
      if (data.statuscode = 200) {

        swal({
          text: "post added successfuly",
          buttons: [false],
          dangerMode: true,
          timer: 3000
        })
        this.router.navigate(['/posts']);

      } else {
        swal({
          text: "Failed to add post.",
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

