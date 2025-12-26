import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  
  ngOnInit(): void {
    let width: number = window.innerWidth
    if (width < 550) {
      this.hideMenus = !this.hideMenus
    }
    this.startSloganRotation();
  }
  hideMenus: boolean;
  @ViewChild("menuItems") menuItems: ElementRef;
  slogans = [
    "Save water, save life",
    "Water is life – use it right",
    "Water is Worth for the Life on the Earth.",
    "If you Save Water, Water will Save You.",
    "Be clever, become water savior.",
    "Every drop counts so let’s start having fount."]
  slogan: string = "";
  animate: boolean = false;

  constructor(private modelService:NgbModal,private router:Router){}
  onShowmenu(content) {
  let modalOptions = { backdropClass: 'customBackdrop', size: "md", windowClass: 'mob-modal',animation:true }
    this.modelService.open(content,modalOptions)
  }
startSloganRotation() {
  let index = 0;

  this.slogan = this.slogans[index];
  this.animate = true;

  setInterval(() => {
    index = (index + 1) % this.slogans.length;

    this.animate = false; // restart animation
    this.slogan = this.slogans[index];

    setTimeout(() => {
      this.animate = true;
    }, 500);

  }, 3000);
}
onRoute(path){
  this.modelService.dismissAll();
  if(path == '/whatsapp'){
    window.open("https://api.whatsapp.com/send/?phone=919884883171&text&type=phone_number&app_absent=0","_blank")
  }else{
   this.router.navigateByUrl(path);
  }
}
}
