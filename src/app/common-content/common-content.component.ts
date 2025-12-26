import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface SerenityItem {
  title: string;
  text: string;
  image: string;
}
@Component({
  selector: 'app-common-content',
  templateUrl: './common-content.component.html',
  styleUrls: ['./common-content.component.scss']
})
export class CommonContentComponent implements OnInit {
  choosenImage:any
  ngOnInit(): void {
  setInterval(() => {
    
    this.next()
  }, 2500);
  }
  showPreview:boolean =false;
  @Input() content:string = "";
    cardsPerView = 4;
  currentIndex = 0;
  constructor(private modelService:NgbModal){}
 benefits: SerenityItem[] = [
    {
      title: 'Anxiety Relief',
      text:
        'Exposure to simulated natural environments can reduce cortisol levels, and increase feelings of calm and well-being.',
      image: 'assets/images/serenity/anxiety.jpg'
    },
    {
      title: 'Mental Reset',
      text:
        'Studies indicate that environments with captivating visuals, like immersive starry skies, help rejuvenate focus, relieve stress, and promote mental recovery.',
      image: 'assets/images/serenity/mental-reset.jpg'
    },
    {
      title: 'Better sleep quality',
      text:
        'Repeated exposure to restorative environments makes relaxation a habit, leading to improved circadian rhythms and deeper sleep.',
      image: 'assets/images/serenity/better-sleep.jpg'
    }
  ];
  reviews = 
    [
  {
    "image": "assets/user/user1.svg",
    "name": "Arun Kumar",
    "verified": true,
    "text": "Excellent commercial RO service. The installation was clean and professional. Water quality has improved a lot."
  },
  {
    "image": "assets/user/user5.svg",
    "name": "Praveena",
    "verified": true,
    "text": "Very reliable service. Their team responds quickly and maintenance is handled smoothly every time."
  },
  {
    "image": "assets/user/user2.svg",
    "name": "Sathish",
    "verified": true,
    "text": "The industrial RO system works perfectly. Consistent purified water output and great overall performance."
  },
  {
    "image": "assets/user/user6.svg",
    "name": "Varshaa",
    "verified": true,
    "text": "Professional installation and on-time delivery. Service engineers were polite and knowledgeable."
  },
  {
    "image": "assets/user/user7.svg",
    "name": "Karthika",
    "verified": true,
    "text": "Perfect RO system for heavy usage in our facility. Water taste and purity levels are excellent."
  },
  {
    "image": "assets/user/user3.svg",
    "name": "Kumaresan",
    "verified": true,
    "text": "Great support team. Their AMC plan is affordable and they remind us for filter changes on time."
  },
  {
    "image": "assets/user/user8.svg",
    "name": "Mohana",
    "verified": true,
    "text": "We installed this for our commercial kitchen. Water purification is top quality and staff are happy with it."
  },
  {
    "image": "assets/user/user4.svg",
    "name": "Gokul",
    "verified": true,
    "text": "Neat installation and excellent output water quality. Highly satisfied with their service."
  },
  {
    "image": "assets/user/user1.svg",
    "name": "Saravanan",
    "verified": true,
    "text": "Fantastic customer support. They resolve issues quickly and provide clear communication."
  },
  {
    "image": "assets/user/user8.svg",
    "name": "Tamzhini",
    "verified": true,
    "text": "Great long-term performance. Energy efficient and totally worth the investment for our business."
  }
];
  features = [
    {
      icon: 'assets/other/check-verified-02.png',
      title: '3-Year Warranty'
    },
    {
      icon: 'assets/other/sun-rain-dust-protection.png',
      title: '100% Sun Rain & Dust Protection'
    },
    {
      icon: 'assets/other/Dual-Function-Regenration-Motor.png',
      title: 'Dual Function Regeneration Motor'
    },
    {
      icon: 'assets/other/Inbuilt-BYpass-Valve.png',
      title: 'Inbuilt Bypass Valve'
    },
    {
      icon: 'assets/other/Smart-Info-Panel.png',
      title: 'LCD Display'
    }
  ]
    logos = [
    { src: 'assets/other/nlc-logo.png', alt: 'NLC' },
    { src: 'assets/other/tn_coke.png', alt: 'COKE' },
    { src: 'assets/other/india-post-logo.png', alt: 'INDIA-POST' },
    { src: 'assets/other/tanhoda-logo.png', alt: 'TANHODA' },
    { src: 'assets/other/kgk-logo.png', alt: 'KGK' },
    { src: 'assets/other/carismaa-logo.png', alt: 'CARISMAA' },
    { src: 'assets/other/cmrl-logo.png', alt: 'CMRL' }
  ];

blogPosts = [
    {
      image: "assets/other/blog1.jpeg",
      tag: "COST",
      title: "How Industrial RO Systems Reduce Production Costs for MSMEs",
      description:
        "For micro, small, and medium enterprises (MSMEs), lowering operational costs is essential for business growth. One of the most overlooked expenses is equipment maintenance caused by hard water scale, corrosion, and deposits. Industrial RO systems help reduce these issues by delivering soft, low-TDS water that protects machinery and pipelines....",
      date: "Jun 9, 2025"
    },
    {
      image: "assets/other/blog2.jpeg",
      tag: "Healthy",
      title: "Top Benefits of Choosing Professional RO Maintenance Services for Commercial Units",
      description:
        "Having a commercial RO system is only effective when it is maintained properly. Filters, membranes, pumps, and valves require periodic servicing to ensure efficient water purification and stable output. Professional RO service providers help businesses maintain system performance by identifying issues early and preventing costly breakdowns....",
      date: "Jun 4, 2025"
    },
    {
      image: "assets/other/blog3.jpeg",
      tag: "Hard Water",
      title:
        "Why Small-Scale Industries Need a Dedicated RO Water Purification System",
      description:
        "In today’s competitive manufacturing environment, water quality directly influences product consistency, machinery life, and overall production efficiency. Many small-scale industries underestimate how impurities like dissolved salts, minerals, heavy metals, and microbial contaminants can damage equipment and affect output.....",
      date: "Apr 24, 2025"
    }
  ];


  projects: any[] = [
  {
  type:"video",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/video1.mp4"
  },
  {
  type:"image",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-container",
  src:"assets/other/image4.jpeg"
  },
  {
  type:"video",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/video3.mp4"
  },
    {
  type:"image",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/image.jpeg"
  },
  {
  type:"video",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-container",
  src:"assets/other/video2.mp4"
  },
  {
  type:"image",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/image5.jpeg"
  },
    {
  type:"image",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/image6.jpeg"
  },
  {
  type:"image",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-container",
  src:"assets/other/image7.jpeg"
  },
  {
  type:"video",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/video3.mp4"
  },
    {
  type:"image",
  title:"Project 1",
  description:"media-containermedia-containermedia-containermedia-containermedia-container",
  src:"assets/other/image8.jpeg"
  }
];
  getTemplate(){}
   next() {
    if(this.currentIndex == 6){
       this.cardsPerView = 4
      this.currentIndex = 0;
    }
    if (this.currentIndex < this.reviews.length - this.cardsPerView) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  onViewImg(content,image){
    this.choosenImage = image
    this.modelService.open(content)
  }
}
