import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GridHeaderComponent } from "src/app/components/data-grid/header/header.component";

@NgModule({
    declarations: [GridHeaderComponent],
    exports: [GridHeaderComponent],
    imports: [CommonModule]
})
export class GridHeaderModule {}
