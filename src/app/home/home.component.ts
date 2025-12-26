import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carousel:any[] = 
  [
    {
    url:"assets/bg/water-bg-1.png",
    // subHeading:"Welcome to The Water",
    heading:"Pure water, pure life ",
    content:"Your trusted partner in advanced commercial RO solutions. Experience clean, safe, and sustainable water every day!"
  },
  {
    url:"assets/bg/water-bg-2-copy.png",
    heading:"Looking for reliable commercial RO service ?",
    content:"Ensuring clean, safe, and reliable water through expert purification services. Your partner in creating a healthier, purer tomorrow!"
  },
//   {
//     url:"assets/bg/water-bg-3.jpg",
//     heading:"Looking to buy a top-quality water purifier ?",
//     content:"Delivering cutting-edge water purification machines for a healthier, cleaner future. Pure water, made simple and accessible for every home and business!"
//  } 
]
}
