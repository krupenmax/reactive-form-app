import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  public isPopUp: boolean = false;
  public constructor() { }
}
