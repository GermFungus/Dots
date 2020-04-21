import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { ApiparserService } from '../Services/apiparser/apiparser.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  constructor(
    private ApiParser : ApiparserService
  ){}
  public file : any;
  public uploaded = false;
  fileattach(event){
    this.file = event.target.files[0];
  }

  async upload(user:NgForm){
    let data = new FormData();
    data.append('file' , this.file);
    data.append('password' , user.form.value.password);
    this.ApiParser.file('/upload' , 'post' , data).then((result) =>{
     if(result[0] === "true"){
       this.uploaded =true;
     }
    });
  }
  ngOnInit() {}
}
