import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    
  mobileRegex:RegExp = /^[\+]?[0-9]{10,15}$/;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  form: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl(""),
    contactNo: new FormControl("", [Validators.required,Validators.pattern(this.mobileRegex)] ),
    emailId: new FormControl("", [Validators.required,Validators.pattern(this.emailregex) ]),
    address: new FormControl("", Validators.required),
    enquiryType: new FormControl("GENERAL_ENQUIRY", Validators.required),
    message: new FormControl("", Validators.required),

  })
  isSubmitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.isSubmitted = true;

    if (this.form.invalid) {

      return
    }
    let formValue: any = {
      "Name": this.form.value.firstName + " " + this.form.value.lastName,
      "Contact Number": this.form.value.contactNo,
      "Email Id": this.form.value.emailId,
      "Address": this.form.value.address,
      "Enquiry About": this.form.value.enquiryType,
      "Message": this.form.value.message
    }
    let formData: FormData = new FormData();
    for (let i in formValue) {
      formData.append(i, formValue[i])
    }
    formData.append('access_key', "1d995ecc-216d-462f-9f0d-903ef51809d0");
    formData.append('subject', 'Enquiry Support');
    formData.append('from_name', 'Enquiry - Green Soft');

    this.sendEnqiryForm(formData).then((res: any) => {
      res.json().then((result: any) => {
        this.reset();
        alert("Message Sent Sucessfully !! Our team will contact you soon !!")
      })
    }).catch((error: any) => {
      this.reset();
    }).catch((error: any) => {
      this.reset();
    })
  }

  getControl(control) {
    return this.form.get(control)
  }

  reset() {
    this.form.get("firstName")?.patchValue("");
    this.form.get("lastName")?.patchValue("");
    this.form.get("contactNo")?.patchValue("");
    this.form.get("emailId")?.patchValue("");
    this.form.get("address")?.patchValue("");
    this.form.get("message")?.patchValue("");
    this.form.get("enquiryType")?.patchValue("GENERAL_ENQUIRY");
    this.isSubmitted = false;
  }

  sendEnqiryForm(formData: FormData): Promise<Response> {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
  }

}
