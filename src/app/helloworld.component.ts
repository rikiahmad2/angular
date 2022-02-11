import { Component } from "@angular/core";

@Component({
    selector: 'helloworld',
    templateUrl: './helloworld.component.html',
    styles:['h2, p{font-family : sans-serif}']
})
export class HelloWorldComponent {
    data = "Riki Ahmad"
    nama_gambar = "assets/angular.png"
    active = true
}