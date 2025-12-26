import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  subs: Subscription = new Subscription();
  private scrollIntervalSub: Subscription | null = null;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;
    @ViewChild('scrollContainer1', { static: false }) scrollContainer1!: ElementRef<HTMLDivElement>;
  reviews: Review[] = [
    { id: 1, name: 'Arun S.', rating: 5, text: 'Excellent installation & training. Technicians arrived on time and water quality improved immediately.', image: 'assets/common/image_user.png' },
    { id: 2, name: 'Meera K.', rating: 5, text: 'Reliable preventive maintenance. Filters replaced on schedule.', image: 'assets/common/image_user.png' },
    { id: 3, name: 'Rahul P.', rating: 4, text: 'Good service, but billing could be more transparent.', image: 'assets/common/image_user.png' },
    { id: 4, name: 'Sonal J.', rating: 5, text: 'Quick emergency support. Issue resolved same day.', image: 'assets/common/image_user.png' },
    { id: 5, name: 'Karthik R.', rating: 4, text: 'Good long-term support across multiple outlets.', image: 'assets/common/image_user.png' },
    { id: 6, name: 'Nisha V.', rating: 5, text: 'Hygiene-focused technicians. Very thorough.', image: 'assets/common/image_user.png' },
    { id: 7, name: 'Girish M.', rating: 3, text: 'Service is fine but parts sometimes delay.', image: 'assets/common/image_user.png' },
    { id: 8, name: 'Priya L.', rating: 5, text: 'Great value annual contract. Water quality consistent.', image: 'assets/common/image_user.png' },
    { id: 9, name: 'Vijay D.', rating: 5, text: 'Detailed service reports every visit.', image: 'assets/common/image_user.png' },
    { id: 10, name: 'Anita S.', rating: 4, text: 'Friendly team and transparent pricing.', image: 'assets/common/image_user.png' }
  ];
  

  ngAfterViewInit(): void {
    const container = this.scrollContainer.nativeElement;
        const container1 = this.scrollContainer1.nativeElement;
    const tick = 40;
    const step = 2;


    this.scrollIntervalSub = interval(tick).subscribe(() => {
      if (!container) return;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollLeft += step;
      }
      if (!container1) return;
      if (container1.scrollLeft + container1.clientWidth >= container1.scrollWidth - 1) {
        container1.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container1.scrollLeft += step;
      }

    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.scrollIntervalSub?.unsubscribe();
  }

  getStarsArray(rating: number): number[] {
    return Array.from({ length: rating });
  }
}
