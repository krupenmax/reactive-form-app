import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PopUpWindowComponent } from "../pop-up-window/pop-up-window.component";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";


@NgModule({
  bootstrap: [MainComponent],
  declarations: [MainComponent, PopUpWindowComponent],
  imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
})
export class MainModule { }
