import { Component, Input } from '@angular/core';
import { IPet } from '../../model/pet';
import { PetService } from '../../pet.service';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.scss'],
})
export class PetListItemComponent {
  @Input() pet: IPet | undefined = undefined;

  constructor(private petService: PetService) {}

  public get isSelected(): boolean {
    if ((this.petService.selectedPet == null) || (this.pet == null)) return false;
    return this.petService.selectedPet.id === this.pet.id;
  }
}
