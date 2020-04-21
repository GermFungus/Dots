import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FileUploadRoutingModule } from "./file-upload.routing"
import { FileUploadComponent } from './file-upload.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadRoutingModule,
    NgbModule
  ]
})
export class FileUploadModule { }
