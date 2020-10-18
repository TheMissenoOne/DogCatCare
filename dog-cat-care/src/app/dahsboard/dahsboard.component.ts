import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.css']
})
export class DahsboardComponent implements OnInit {

  slides = [
    {img: "LOGO FINAL escrito.png"},
    {img: "LOGO FINAL escrito.png"}
  ];
  innerWidth: number;
  slideConfig: { slidesToShow: number; slidesToScroll: number; };
  w: string;
  h: string;

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (innerWidth < 620) {

    this.slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

    }else if (innerWidth < 944){

    this.slideConfig = {"slidesToShow": 2, "slidesToScroll": 2};

    }else{

      this.slideConfig = {"slidesToShow": 4, "slidesToScroll": 2};
    }
  }


}
