import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginService } from './login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
  // imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required, Validators.minLength(6)]);
  contraBind="";
  emailBind="";

  visible:boolean=true;
  changetype:boolean=true;
  icon="eye";

  constructor(private loginService:LoginService, private router:Router){

  }

  verPass(){
    if(this.visible)
    {
      this.visible=!this.visible;
      this.changetype=!this.changetype;
      this.icon="eye-off"
    }
    else{
      this.visible=!this.visible;
      this.changetype=!this.changetype;
      this.icon="eye"

    }
  }

  @ViewChild('videoPlayer') mVideoPlayer: any;

async ionViewWillEnter() {
    const video = await this.mVideoPlayer.nativeElement;
    await video.muted;
    await video.play();
}

  login(){
  const email= this.email.value?.toString();
  const password= this.password.value?.toString();
  this.loginService.login(email, password);
  setTimeout(()=>{
    if(this.loginService.getSeLogueo()){
      this.emailBind="";
      this.contraBind="";
    }
  },1000);
  // setTimeout(()=>{
  // },1000);
  }

  cambio(event: any){

    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }else{
      document.body.setAttribute('color-theme','light')

    }
  }

  loginAutomatico(email:string, constraseña:string){
    this.emailBind=email;
    this.contraBind=constraseña;
  }
  ngOnInit() {
  }

}
