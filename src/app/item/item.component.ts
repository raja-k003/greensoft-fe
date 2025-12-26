import { Component, OnInit } from '@angular/core';
import {  } from '../shared/Products';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  productList:any[] = [];
  product:any;
  mainImage:any;
  isSubmit:boolean
  relatedProducts:any = [];
  mobileRegex:RegExp = /^[\+]?[0-9]{10,15}$/;
  name:FormControl = new FormControl("",Validators.required);
  modalRef:any;

  contactNo:FormControl = new FormControl("", [Validators.required,Validators.pattern(this.mobileRegex)])
  constructor(private activateRoute:ActivatedRoute,private router:Router,private model:NgbModal,private commonService:CommonService){}
 schema = [
  {
    "folderName": "10-mm-pu-pushfit-to-3-8-female-connector-for-easy-brine-pipe-fitting-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "5-way-brass-fitting-for-water-softener-pressure-pumps-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "adapter-safety-box-for-water-softeners-and-filters",
    "images": [
      "img-1.png",
    ]
  },
  {
    "folderName": "commercial-pressure-switch-by-purity-hub",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "electronic-ball-valve-3wdn25-for-agriculture-water-treatment-equipments-by-purity-hub-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "electronic-ball-valve-5wdn25-for-agriculture-water-treatment-equipments-by-purity-hub-2",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "fully-automatic-apc-01-residential-pressure-boosting-pump",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "fully-automatic-apc-02-residential-pressure-boosting-pump",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "fully-automatic-business-commercial-ro-plant-10-000-lpd-2000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png"
    ]
  },
  {
    "folderName": "fully-automatic-business-commercial-ro-plant-2500-lpd-500-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png"
    ]
  },
  {
    "folderName": "fully-automatic-business-commercial-ro-plant-5000-lpd-1000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-carbon-and-sand-filter-cum-water-softener-auto-h-100-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-13.png",
      "img-14.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-carbon-and-sand-filter-cum-water-softener-auto-h-150-4000-lph-2",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-13.png",
      "img-14.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-carbon-and-sand-filter-cum-water-softener-auto-h-75-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-13.png",
      "img-14.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-carbon-and-sand-filter-with-water-softener-hybrid-i-100-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-carbon-and-sand-filter-with-water-softener-hybrid-i-150-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-carbon-and-sand-filter-with-water-softener-hybrid-i-75-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-glass-filtration-cum-water-softener-auto-z-100-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-13.png",
      "img-14.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-glass-filtration-cum-water-softener-auto-z-150-4000-lph-2",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-13.png",
      "img-14.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-hybrid-glass-filtration-cum-water-softener-auto-z-75-4000-lph-2",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-12.png",
      "img-13.png",
      "img-14.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-carbon-and-sand-filter-auto-cs-100-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-carbon-and-sand-filter-auto-cs-150-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-carbon-and-sand-filter-auto-cs-75-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-glass-filtration-system-auto-g-100-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-glass-filtration-system-auto-g-150-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-glass-filtration-system-auto-g-75-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-iron-removal-filter-auto-ir-100-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-iron-removal-filter-auto-ir-50-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-cleaning-iron-removal-filter-auto-ir-75-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-apartment-water-softener-auto-s-150s-8000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-2 - Copy.png",
      "img-2.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-continuous-flow-water-softener-kinetic-s-150-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-continuous-flow-water-softener-kinetic-s-200-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-2.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-in-bathroom-water-softener-purity-hub-mini-3000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-water-softener-auto-s-100-4000-lph-2",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-water-softener-auto-s-150-4000-lph-2",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-water-softener-auto-s-50-4000-lph-2",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-2.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-self-regenerative-water-softener-auto-s-75-4000-lph",
    "images": [
      "img-1.png",
      "img-10.png",
      "img-11.png",
      "img-2.png",
      "img-4.png",
      "img-5.png",
      "img-6.png",
      "img-7.png",
      "img-8.png",
      "img-9.png"
    ]
  },
  {
    "folderName": "fully-automatic-water-level-controller-by-purity-hub-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "limescale-prevention-removal-filter-by-purity-hub-2",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "luxe-smart-maintenance-alkaline-copper-ro-water-purifier-by-purity-hub",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "manual-cleaning-iron-removal-filter-manual-ir-100-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "manual-cleaning-iron-removal-filter-manual-ir-50-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "manual-cleaning-iron-removal-filter-manual-ir-75-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "manual-regenerative-commercial-water-softener-manual-s-150-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "manual-regenerative-water-softener-manual-s-100-4000-lph-2",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "manual-regenerative-water-softener-manual-s-50-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "manual-regenerative-water-softener-manual-s-75-4000-lph",
    "images": [
      "img-1.png",
      "img-2.png",
      "img-3.png",
      "img-4.png",
      "img-5.png",
      "img-6.png"
    ]
  },
  {
    "folderName": "mechanically-operated-pressure-release-valve-prv-for-water-softener-2-inch-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "motor-cover-and-motor-guard-for-regeneration-motor-pressure-pumps",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "motor-stand-for-regeneration-motor-and-pressure-pumps",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "pura-smart-maintenance-alkaline-ro-water-purifier-by-purity-hub",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "purity-hub-patented-low-salt-alarm-for-water-softener-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "round-brine-tank-100-litres-for-water-softener-by-purity-hub",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "round-brine-tank-200-litres-for-water-softener-by-purity-hub-2",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "round-brine-tank-500-litres-for-water-softener-by-purity-hub",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "salt-suction-brine-pipe-for-water-softeners-yellow-10-mm-x-6-5-mm-1-meter-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "salt-tablet-99-5-pure-for-water-softener-5-kg-pack-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "sarthi-smart-iot-ai-integration-for-purity-hub-automatic-water-softeners",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "square-brine-tank-100-litres-for-water-softener-by-purity-hub",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "ss-304-and-ss-316l-grade-insulated-overhead-water-storage-tank-i-1250l-one-click-auto-clean-2",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "ss-304-and-ss-316l-grade-insulated-overhead-water-storage-tank-i-1750l-one-click-auto-clean",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "ss-304-and-ss-316l-grade-insulated-overhead-water-storage-tank-i-750l-one-click-auto-clean",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "ss-304-non-insulated-overhead-water-storage-tank-ni-1000l-one-click-auto-clean",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "ss-304-non-insulated-overhead-water-storage-tank-ni-2000l-one-click-auto-clean-2",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "ss-304-non-insulated-overhead-water-storage-tank-ni-500l-one-click-auto-clean-2",
    "images": [
      "img-1.png",
      "img-2.png"
    ]
  },
  {
    "folderName": "vacuum-breaker-and-air-release-valve-for-water-softeners-2",
    "images": [
      "img-1.png"
    ]
  },
  {
    "folderName": "water-softener-ion-exchange-resin-r-15-by-purity-hub-2",
    "images": [
      "img-1.png"
    ]
  }
]
  
  ngOnInit(): void {
    this.productList = this.commonService.getProducts();
   let productId = this.activateRoute.snapshot.params['id'] || ""
   let product = this.productList.filter((item)=> item.id == productId)[0];
   if(product){ 
    product.subUrls = []
    let folder:any[] = this.schema.filter((item)=>item.folderName == product.name);
    let images = folder[0]['images'];
     for(let i in images){
      let imgs = images[i];
       let url = `assets/images/${product.name}/${imgs}`;
       product.subUrls.push(url);
     }    
   this.setMainProduct(product);
  }else{
    alert("Something Went Wrong !!")
   this.router.navigateByUrl("/product")
  }
  }
  setMainProduct(product){
      this.product = product
      this.mainImage = `assets/images/${product.name}/img-1.png`
  }
  onViewImage(image){
    this.mainImage =  image;
  }
  getMoreInfo(content){
    this.name.patchValue("");
    this.contactNo.patchValue("");
    let modalOptions:NgbModalOptions = { backdrop: 'static', backdropClass: 'customBackdrop',size: 'md'  }
    this.modalRef = this.model.open(content,modalOptions);
    this.model.open(content)
  }
  sendEnqiryForm(formData: FormData): Promise<Response> {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
  }

  onSubmit() {

    this.isSubmit = true;

    if (this.name.invalid && this.contactNo.invalid) {

      return
    }
    let formValue: any = {
      "Name": this.name.value,
      "Contact Number": this.contactNo.value,
      "Product":`${this.product.id}~${this.product.name}`
    }
    let formData: FormData = new FormData();
    for (let i in formValue) {
      formData.append(i, formValue[i])
    }
    formData.append('access_key', "d261062c-f9e4-44ac-a4b4-2102d3c70b0e");
    formData.append('subject', 'Enquiry Product Request');
    formData.append('from_name', 'Enquiry - Green Soft');

    this.sendEnqiryForm(formData).then((res: any) => {
    
      res.json().then((result: any) => {
        
        this.closeDialog();
   
        alert("Message Sent Sucessfully !! Our team will contact you soon !!")
      })
    }).catch((error: any) => {
      this.closeDialog();
    }).catch((error: any) => {
      this.closeDialog();
    })
  }
  closeDialog(){
    this.model.dismissAll()
  }
    getProductName(name){
    const out = name.replace(/-/g, ' ');
    return out
  }
}
