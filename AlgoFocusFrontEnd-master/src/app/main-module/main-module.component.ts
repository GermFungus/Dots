import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Services/registration/registration.service'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { ApiparserService } from '../Services/apiparser/apiparser.service';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.scss']
})
export class MainModuleComponent implements OnInit {
  public step = 1;
  public QuestionCounter = 0;
  public resultArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  public userDetails;
  public quizeList;
  public currentQuiz;
  public timer = 30;
  public stopTimer = 0;
  public currentQuestion = 0;
  public currentAnswere = 0;
  public result = 0;
  public red = false;
  public blue = false;
  public green = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RegistrationService: RegistrationService,
    private ApiParser : ApiparserService
    ){}

  storeAnswere = (data)=>{
    this.currentAnswere = data; 
  }  

  submitQuiz = ()=>{
    let sum = 0 ;
    for(let i = 0 ; i < 20 ; ++i){
      if(this.resultArray[i] === parseInt(this.quizeList[this.currentQuiz].questions[i].correct_answer)){
        ++sum;
      }
    }
    this.result = (sum/20)*100;
    if(this.result >= 85){this.green = true}
    if(this.result < 85 && this.result >= 45){this.blue = true}
    if(this.result < 45){this.red = true}
    console.log(this.result);
    this.continue();
  }

  home(){
    this.step = 2;
  }

  QuestionChange = ()=>{
    if(this.currentQuestion <20){
      this.resultArray[this.currentQuestion] = this.currentAnswere+1;
      ++this.currentQuestion;
      this.timer=30;
    }
    if(this.currentQuestion === 19){
      document.getElementById("submitQuiz").click();
    }
  }
  
  start = async ()=>{
    console.log("start called");
    if(this.stopTimer === 0){
    this.timerFunc();}
  }

  timerFunc = async () =>{
    if(this.timer === 0){
      document.getElementById("nextQuestion").click();
      this.start();
    }
    else{
      setTimeout(() => {
        --this.timer;
        this.start();
      }, 1000);
  }
}

  startQuize = (index)=>{
    this.currentQuiz = index;
    this.continue();
    this.start();
  }

  login = async (user : NgForm)=>{
    if(!user || !user.valid) return;
    this.RegistrationService.login(user.form.value).then(async (resp : any)=>{
      if(resp[0] === 'LoggedIn'){
        console.log(resp[1]);
        this.userDetails = resp[1];
        this.quizeList = resp[2];
        console.log(this.quizeList);
        this.step = 2; 
        
      }
    })
  }  

  async register(user : NgForm){
      if(!user || !user.valid) return;
      var userToSend = user.form.value;
      console.log(userToSend);
      this.RegistrationService.register(userToSend).then(async (result:any)=>{
        if(result[0] === 'Recieved'){
          this.userDetails=user.form.value;
          this.quizeList = result[1];
          this.step = 2;
        }
      }).catch((err)=>{
        err = err || new Object();
      });
  }
    continue(){
      this.step = this.step + 1;
    }

  ngOnInit() {}
}
