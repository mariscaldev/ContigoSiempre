import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonCol, IonCol, IonRow, IonRow, IonGrid, IonContent, IonButton, IonIcon, CommonModule, FormsModule, IonGrid, IonRow],
})
export class InicioPage implements OnInit, OnDestroy {

  slides = [
    {
      image: 'assets/images/slide1.png',
      subtitle: 'Bienvenidos',
      title: 'En Contigo Siempre encontrarás un equipo médico experto en el cuidado de los residentes.',
      description: 'Casa de reposo ubicada en X con grandes jardines, profesionales dedicados y un ambiente familiar.'
    },
    {
      image: 'assets/images/slide2.png',
      subtitle: 'Atención Integral',
      title: 'Brindamos bienestar y atención personalizada para cada residente.',
      description: 'Nuestro enfoque se centra en el respeto, la empatía y la calidad de vida.'
    },
    {
      image: 'assets/images/slide3.png',
      subtitle: 'Ambiente Familiar',
      title: 'Un lugar donde el cariño y la tranquilidad se sienten cada día.',
      description: 'Disfruta de áreas verdes, recreación y acompañamiento constante.'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), 10000);
  }

  stopAutoSlide() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
