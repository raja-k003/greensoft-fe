import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Loading } from './Loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
 
  isLoading = false;
 
  constructor(private changeDetectorRef: ChangeDetectorRef){}
 
  ngOnInit()
 
  {
    Loading.onChange.subscribe(isLoading =>
    {
      this.isLoading = isLoading;
      this.changeDetectorRef.detectChanges();
    });
  }
}
