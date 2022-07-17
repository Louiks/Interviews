import { Component, Input } from "@angular/core";

@Component({
    selector: "grid-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class GridHeaderComponent {
    @Input() public headers!: string[];
}
