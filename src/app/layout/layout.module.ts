import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { PageHeaderComponent } from '../shared/modules/page-header/page-header.component';
import { MaterialModule } from '../shared/modules/material/material-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatModule } from '../shared/modules/stat/stat.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './events/addevent/addevent.component';
import { CollegeComponent } from './college/college.component';
import { AddCollegetComponent } from './college/add-colleget/add-colleget.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        StatModule,
        FormsModule, ReactiveFormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [
        SignupComponent,LoginComponent,
        LayoutComponent,
        NavComponent, 
        TopnavComponent, 
        SidebarComponent, 
        PageHeaderComponent,
        DashboardComponent,
        MenubarComponent,
        EventsComponent,
        AddeventComponent,
        CollegeComponent,
        AddCollegetComponent,
        PostsComponent,
        AddPostComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] 
})
export class LayoutModule {}
