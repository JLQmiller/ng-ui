import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrubItemComponent } from './breadcrub-item/breadcrub-item.component';

@NgModule({
  declarations: [BreadcrumbComponent, BreadcrubItemComponent],
  imports: [
    CommonModule
  ]
})
export class BreadcrumbModule { }
