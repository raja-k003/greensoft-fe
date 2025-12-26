import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  features = [
    {
      title: "Free shipping",
      icon: "assets/other/free-shipping.png",
      srcset: `
        assets/other/free-shipping.png 1x,
        assets/other/free-shipping@2x.png 2x,
        assets/other/free-shipping@3x.png 3x
      `
    },
    {
      title: "Secure payment",
      icon: "assets/other/secure-payment.png",
      srcset: `
        assets/other/secure-payment.png 1x,
        assets/other/secure-payment@2x.png 2x,
        assets/other/secure-payment@3x.png 3x
      `
    },
    {
      title: "2-Year warranty",
      icon: "assets/other/warranty.png",
      srcset: `
        assets/other/warranty.png 1x,
        assets/other/warranty@2x.png 2x,
        assets/other/warranty@3x.png 3x
      `
    },
    {
      title: "30-Day return",
      icon: "assets/other/return.png",
      srcset: `
        assets/other/return.png 1x,
        assets/other/return@2x.png 2x,
        assets/other/return@3x.png 3x
      `
    }
  ];

}
