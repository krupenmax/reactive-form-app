import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";


@NgModule({
  bootstrap: [MainComponent],
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
})
export class MainModule { }
