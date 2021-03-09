import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public imgSrc: string;
  public chooseImage(newImageSrc: string) {
    this.imgSrc = newImageSrc;
  }
  constructor() {}

  ngOnInit(): void {}
}
