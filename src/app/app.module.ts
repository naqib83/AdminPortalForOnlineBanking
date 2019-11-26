import { LoginService } from "./login.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LoginService],
  declarations: [AppComponent, NavbarComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
