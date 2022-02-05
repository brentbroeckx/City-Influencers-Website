import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { 
  }


  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);


    let tl = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2}})
    tl.to('.nav', {duration: 1, 'clip-path': 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)', opacity: 1, y: 0 })
      .from('#header', { duration: 2.2, opacity: 0,  y: 100})

    let tl2 = gsap.timeline({scrollTrigger: {trigger: '.howitworksTrigger', start: 'top top', end: 'bottom bottom',scrub: 1}});
    tl2.from('.howitworks', {duration: 5.2, opacity: 0,  y: 300, ease: Power4.easeInOut})

    
      
  }


}


