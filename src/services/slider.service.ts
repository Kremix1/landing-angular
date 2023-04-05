import {Injectable} from "@angular/core";

interface IServiceItem {
  name: string,
  image: string,
}
@Injectable({
  providedIn: 'root'
})
export class SliderService {
  serviceItems: IServiceItem[]
  private offset: number
  private slide: number
  private initialSlide: number
  constructor() {
    this.serviceItems = [
      {name: 'Balance transform', image: 'transfer'},
      {name: 'Internet Banking', image: 'banking'},
      {name: 'Buying Payment', image: 'payment'},
      {name: 'Buy Air Ticket', image: 'ticket'},
      {name: 'Balance transform', image: 'transfer'},
      {name: 'Internet Banking', image: 'banking'},
    ]
    this.offset = 300;
    if(window.screen.width < 1050 )
      this.initialSlide = this.serviceItems.length - 6;
    else if(window.screen.width < 1600)
      this.initialSlide = this.serviceItems.length - 5;
    else if(window.screen.width < 1900)
      this.initialSlide = this.serviceItems.length - 4;
    else
      this.initialSlide = this.serviceItems.length - 3;
    this.slide = this.initialSlide
  }
  slideLeft = (): void => {
    if(this.slide === this.initialSlide)
      return
    this.offset += 300
    this.slide--
    let sliderLine: HTMLDivElement | null = document.querySelector('.service__slider_line')
    if(sliderLine)
      sliderLine.style.left = this.offset + 'px'
  }
  slideRight = (): void => {
    this.offset -= 300
    this.slide++
    if(this.slide === this.serviceItems.length){
      this.slide = this.initialSlide
      this.offset = 300;
    }
    let sliderLine: HTMLDivElement | null
    sliderLine = document.querySelector('.service__slider_line')
    if(sliderLine)
      sliderLine.style.left = this.offset + 'px'
  }
}
