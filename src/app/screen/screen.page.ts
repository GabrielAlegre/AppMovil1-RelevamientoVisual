import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('login');
    },3700);
   }

  ngOnInit() {
  }

}
