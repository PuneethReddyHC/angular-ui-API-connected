import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './events/addevent/addevent.component';
import { CollegeComponent} from './college/college.component'
import { AddCollegetComponent } from './college/add-colleget/add-colleget.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'events'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
           
            {
                path: 'menubar',
                component: MenubarComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path:'events',
                component:EventsComponent
            },
            {
                path:'addevent',
                component:AddeventComponent
            },
            {
                path:'college',
                component:CollegeComponent
            },
            {
                path:'addcollege',
                component:AddCollegetComponent
            },
            {
                path:'posts',
                component:PostsComponent
            },
            {
                path:'addpost',
                component:AddPostComponent
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
