import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class ContactoPage implements OnInit {

  form = {
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  };

  constructor() { }

  ngOnInit() {}

  enviarFormulario() {
    console.log('Formulario enviado:', this.form);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  }

}
