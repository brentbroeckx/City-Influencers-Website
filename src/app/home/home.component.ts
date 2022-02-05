import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { gsap, Power4 } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { 
  }


  ngOnInit(): void {
    let tl = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2}})
    tl.to('.nav', {duration: 1, 'clip-path': 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)', opacity: 1, y: 0 })
      .from('#header', { duration: 2.2, opacity: 0,  y: 100})
      
  }


}


