import { Randonnee } from 'src/app/core/entities/randonnee';
import { RandonneeService } from './../../core/services/randonnee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randonne',
  templateUrl: './randonne.component.html',
  styleUrls: ['./randonne.component.css'],
})
export class RandonneComponent implements OnInit {
  data: Randonnee[];

  selectedRandonnee: any;
  constructor(private randonneeService: RandonneeService) {}

  ngOnInit() {
    this.randonneeService.getListRandonnees().subscribe({
      next: (data) => {
        this.data = data;
        console.log('data', data);
      },
    });
  }

  showDetails(id: number) {
    console.log('id', id);

    this.selectedRandonnee = this.data.filter((el) => el.id === id)[0];
    console.log(
      '🚀 ~ RandonneComponent ~ showDetails ~ this.selectedRandonnee:',
      this.selectedRandonnee
    );
  }
}
