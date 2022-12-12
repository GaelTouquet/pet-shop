import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent {
  formGroup: FormGroup = this.fb.group({
    name: [
      'Sieur de Toto, le fameux',
      [Validators.required, Validators.minLength(3)],
    ],
    species: ['chien', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    isAvailable: [true, [Validators.required]],
    imageUrl: '',
  });

  constructor(private petService: PetService, private fb: FormBuilder) {}

  public onSubmit(): void {
    this.petService.createPet(
      this.formGroup.value.name,
      this.formGroup.value.species,
      this.formGroup.value.price,
      this.formGroup.value.isAvailable,
      this.formGroup.value.imageUrl);
  }
}
