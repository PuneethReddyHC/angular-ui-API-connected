import { Injectable, NgModule } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//BackEnd access URL
// const devUrl = 'http://192.168.0.189:8003/smart_health/api/v1';
// const devUrl = 'http://192.168.0.184:8003/smart_health/api/v1';

const API_URL = 'http://localhost:9000/project_name/api/v1';
const httpOptionsImage = {
    headers: new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': localStorage.getItem('token') || '' })
};

// const httpOptionsClient = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem('token') || '' })
// };
// const httpOption = {
//     headers: new Headers({ 'Authorization': localStorage.getItem('token') || '' })
// };

// const httpOptionss = {
//     headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem('token') || '' })
// };

const httpOptionsClient = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem('token') || '' })
};

const httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' })
};

// const httpOptions = {
//     headers: new Headers({ 'Authorization': localStorage.getItem('token') || '' })
// };

@NgModule({ providers: [ApiService] })
@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: Http, private httpclient: HttpClient) {

    }
    
    login(data) {
        return this.httpclient.post(API_URL + '/login', data);
    }
    
    signup(data) {
        return this.httpclient.post(API_URL + '/signup', data);
    }
    
    logout() {
        return this.httpclient.get(API_URL + '/logout');
    }

    list_events() {
        return this.httpclient.get(API_URL + '/list_events');
    }
    list_colleges() {
        return this.httpclient.get(API_URL + '/list_colleges');
    }

    getEvent(event_id) {
        return this.httpclient.get(API_URL + '/get_event?event_id=' + event_id)
    }
    getCollege(college_id) {
        return this.httpclient.get(API_URL + '/get_college?college_id=' + college_id)
    }

    addevent(event) {
        return this.http.post(API_URL + '/add_event', (event), httpOptions)
            .pipe(map(res => res.json()));
    }
    addcollege(event) {
        return this.http.post(API_URL + '/add_college', (event), httpOptions)
            .pipe(map(res => res.json()));
    }


    delete_event(data) {
        var element = {
            event_id: data
        }
        console.log("")
        return this.http.post(API_URL + '/delete_event', element);
    }
    delete_college(data) {
        var element = {
            college_id: data
        }
        console.log("")
        return this.http.post(API_URL + '/delete_college', element);
    }
    edit_event(data) {
        var event_data = {
            event_id: data.event_id,
            event_name: data.event_name
        }
        return this.http.post(API_URL + '/edit_event', event_data, httpOptions);
    }
    edit_college(data) {
        var event_data = {
            college_id: data.college_id,
            college_name: data.college_name,
            college_loc : data.college_loc
        }
        return this.http.post(API_URL + '/edit_college', event_data, httpOptions);
    }

    list_posts() {
        return this.httpclient.get(API_URL + '/list_posts');
    }

    getPost(post_id) {
        return this.httpclient.get(API_URL + '/get_post?post_id=' + post_id)
    }

    addpost(post) {
        return this.http.post(API_URL + '/add_post', (post), httpOptions)
            .pipe(map(res => res.json()));
    }
    delete_post(data) {
        var element = {
            postId: data
        }
        console.log("")
        return this.http.post(API_URL + '/delete_post', element);
    }
    edit_post(data) {
        var post_data = {
            postId : data.postId,
            title: data.title,
            description: data.description,
            images :data.images
        }
        return this.http.post(API_URL + '/edit_post', post_data, httpOptions);
    }
    edit_views(data) {
        var post_data = {
            postId: data.postId,
        }
        return this.http.post(API_URL + '/edit_views',post_data, httpOptions);
    }
}
