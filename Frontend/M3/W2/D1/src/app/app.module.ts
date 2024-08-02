import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'active',
        component: ActivePostsComponent,
        title: 'Active Posts',
    },
    {
        path: 'inactive',
        component: InactivePostsComponent,
        title: 'Inactive Posts',
    },
    {
        path: 'post/:id',
        component: PostDetailComponent,
        title: 'Post Detail',
    },
    {
        path: 'single-post',
        component: SinglePostComponent,
        title: 'Single Post',
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        PostDetailComponent,
        SinglePostComponent,
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
