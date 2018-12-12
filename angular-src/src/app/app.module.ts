import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// import Angular Material modules below
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

// 3rd-party modlules
import { FlashMessagesModule } from 'angular2-flash-messages/module';
//services
import { ValidateService } from './services/validate.service';
import { AuthService } from "./services/auth.service";
import { IngredientService } from './services/ingredient.service';
import { ApiService } from './services/api.service';
import { KeepsearchService } from './services/keepsearch.service';

// guards
import { AuthGuard } from './guards/auth.guard';

import { GetIdPipe } from "./get-id.pipe";

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { BypassSecurityComponent } from './components/bypass-security/bypass-security.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    GetIdPipe,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    ResultComponent,
    RecipeComponent,
    VideoSearchComponent,
    IngredientSearchComponent,
    BypassSecurityComponent,
    ChatbotComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,

    //3rd-party modules
    FlashMessagesModule.forRoot(),

    // import Angular Material below
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    IngredientService,
    ApiService,
    KeepsearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
