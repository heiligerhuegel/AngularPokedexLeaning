import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SeachbarComponent } from './seachbar/seachbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    MyHeaderComponent,
    CardComponent,
    ModalComponent,
    SeachbarComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PokedexComponent, pathMatch: 'full' },
      { path: 'team', component: TeamComponent, pathMatch: 'full' },
      { path: '**', component: PokedexComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
