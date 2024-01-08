import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservation } from 'src/app/core/entities/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  reservations: Reservation[] = [];
  reservation: Reservation = new Reservation();
  add(f: NgForm) {
    console.log('reservation to add', this.reservation);
    this.reservations.push(this.reservation);
    console.log('reservations:', this.reservations);
  }
}
