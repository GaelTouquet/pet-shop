import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPet } from '../model/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  constructor(private petService: PetService) {}

  public get petList() {
    return this.petService.petList;
  }

  onClickPet(petID: number): void {
    if (
      this.petService.selectedPet != null &&
      this.petService.selectedPet.id === petID
    )
      this.petService.selectPet(undefined);
    else this.petService.selectPet(petID);
  }
}
