import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  result:any = {}
  isResult:boolean = false;
ngOnInit(): void {
  this.form1 = new FormGroup({
    resinQuantity:new FormControl(null, Validators.required),
    waterHardness:new FormControl(null, Validators.required)
  })
  this.form2 = new FormGroup({
    dailyWaterUse:new FormControl(null, Validators.required),
    waterHardnessPPm:new FormControl(null, Validators.required),
    regenerationFrequency:new FormControl(null, Validators.required)
  })
   this.form3 = new FormGroup({
    resinQuantity:new FormControl(null, Validators.required),
    waterHardness:new FormControl(null, Validators.required),
    regenDays:new FormControl(null, Validators.required),
    waterUnit:new FormControl(null, Validators.required),
    controlMode:new FormControl(null, Validators.required),
    signalMode:new FormControl(null, Validators.required)
  })
}
type = "WATER_SOFTNER_TEST";
isSubmitted:boolean =false;
form1:FormGroup;
form2:FormGroup;
form3:FormGroup;
getControl(form, control){
return form.get(control)
}



onSubmit(){
  this.isSubmitted = true;
  if(this.type == 'WATER_SOFTNER_TEST'){
if(this.form1.invalid){
  return
}
this.isSubmitted = false;
this.onSubmitWaterSoftening();
}else if(this.type == 'WATER_SOFTNER_TEST1'){
if(this.form2.invalid){
  return
}
this.isSubmitted = false;
this.onSubmitWaterSoftener();
}else{
  this.isSubmitted = false;
  this.calculateResults()
}

}

onSubmitWaterSoftening() {
  // Get values from form
  const resinQuantity = Number(this.form1.get("resinQuantity").value);
  const waterHardness = Number(this.form1.get("waterHardness").value);

  // Validate inputs
  if (!resinQuantity || !waterHardness || resinQuantity <= 0 || waterHardness <= 0) {
    alert("Please enter valid positive numbers for both fields.");
    return;
  }

  // OBR calculation
  const obr = (resinQuantity * 50000) / waterHardness;

  // Salt quantity (grams to kg)
  const saltRequired = (resinQuantity * 150) / 1000;

  // Water required for brine
  const waterRequired = saltRequired * 3;
  let result = {}
  // Store results in variables bound to the template
  let obrResult = obr.toFixed(0) + " Litres";
  let saltResult = saltRequired.toFixed(0) + " Kg";
  let waterResult = waterRequired.toFixed(0) + " Litres";
  this.isResult = true;
this.result = {obrResult,saltResult,waterResult};
console.log(result)
}
onSubmitWaterSoftener() {
  const dailyWaterUse = Number(this.form2.value.dailyWaterUse);
  const waterHardnessPPm = Number(this.form2.value.waterHardnessPPm);
  const regenerationFrequency = Number(this.form2.value.regenerationFrequency);

  // Check missing fields
  if (!dailyWaterUse || !waterHardnessPPm || !regenerationFrequency) {
    alert("Please enter values for Daily Water Use, Water Hardness, and Regeneration Frequency.");
    return;
  }

  // Validate positive numbers
  if (
    dailyWaterUse <= 0 ||
    waterHardnessPPm <= 0 ||
    regenerationFrequency <= 0
  ) {
    alert("Please enter valid positive numbers for all fields.");
    return;
  }

  // Calculate resin quantity
  const resinQuantity =
    (regenerationFrequency * dailyWaterUse * waterHardnessPPm) / 50000;

  // Regeneration interval = input value
  const regenerationInterval = regenerationFrequency;

  // Assign results to variables
  let resinQuantityResult = resinQuantity.toFixed(0) + " Litres";

  let regenerationIntervalResult = regenerationInterval + " Days";
  this.isResult = true;
this.result = {resinQuantityResult,regenerationIntervalResult}
console.log(this.result)
}

     calculateResults() {
        const resinQuantity = this.form3.get("resinQuantity").value;
        const waterHardness = this.form3.get("waterHardness").value;
        const regenDays = this.form3.get("regenDays").value;
        const waterUnit = this.form3.get("waterUnit").value;
        const controlMode = this.form3.get("controlMode").value;
        const signalMode = this.form3.get("signalMode").value;

        const GALLON_TO_LITERS = 3.78541; // Define once
        const LITERS_TO_CUBIC_METER = 1000; // Define once

        if (!resinQuantity || !waterHardness || !regenDays) {
            alert("All fields are required. Please fill them out.");
            return;
        }

        if (isNaN(resinQuantity) || isNaN(waterHardness) || isNaN(regenDays)) {
            alert("Please fill out all fields with valid numbers.");
            return;
        }

        const backwash = (resinQuantity * 0.1).toFixed(0);
        const brineDraw = (resinQuantity * 0.2).toFixed(0);
        const brineRefill = (resinQuantity * 0.15).toFixed(0);
        const fastRinse = (resinQuantity * 0.21).toFixed(0);
        const obrLiters = ((50000 * resinQuantity) / waterHardness).toFixed(0);
        const obrGallons = (parseInt(obrLiters) / GALLON_TO_LITERS).toFixed(0); // Convert to gallons
        const obrCUBIC = (parseInt(obrLiters) / LITERS_TO_CUBIC_METER).toFixed(0); // Convert to gallons
        const regenInterval = `${regenDays} Days`;

        let backwash1 = `${backwash} Minutes`;
        let brineDraw1 = `${brineDraw} Minutes`;
        let brineRefill1 = `${brineRefill} Minutes`;
        let fastRinse1  = `${fastRinse} Minutes`;
        let obr = `${obrLiters} Liters / ${obrGallons} Gallons / ${obrCUBIC} M³`;
        let regenInterval1 = `H-${regenDays}D`;
        this.isResult = true;
        this.result = {backwash1,brineDraw1,brineRefill1,fastRinse1,obr,regenInterval1};
  }
  onChange(type){
    this.type = type;
    this.isSubmitted = false;
    this.result = {};
    this.isResult = false;
  }
}
