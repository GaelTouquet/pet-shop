import { Injectable } from '@angular/core';
import { IPet, Species } from './model/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private _petList: IPet[] = [
    {
      name: 'milou',
      species: 'chien',
      price: 500,
      id: 0,
      isAvailable: true,
      imageUrl:
        'https://cdn001.tintin.com/public/tintin/img/static/milou/milou_v3.png',
    },
    {
      name: 'garfield',
      species: 'chat',
      price: 400,
      id: 1,
      isAvailable: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png',
    },
    {
      name: 'nemo',
      species: 'poisson',
      price: 10,
      id: 2,
      isAvailable: true,
      imageUrl:
        'https://easydrawingguides.com/wp-content/uploads/2017/05/How-to-Draw-Nemo-20.png',
    },
    {
      name: 'bugs bunny',
      species: 'lapin',
      price: 50,
      id: 3,
      isAvailable: false,
      imageUrl:
        'https://img.src.ca/2015/07/27/1250x703/150727_co2q2_aetd_bugs-bunny_sn1250.jpg',
    },
  ];
  private _selectedPetID: number | undefined = undefined;
  public isCreatingPet: boolean = false;

  public togglePetCreation(): void {
    this.isCreatingPet = !this.isCreatingPet;
  }

  public get petList(): IPet[] {
    return this._petList.map((pet) => {
      return { ...pet };
    });
  }

  public get selectedPet() {
    if (!this._petList.some((pet) => pet.id === this._selectedPetID))
      return undefined;
    return {
      ...this._petList.find((pet) => pet.id === this._selectedPetID),
    };
  }

  public selectPet(petID: number | undefined): void {
    this._selectedPetID = petID;
  }

  public createPet(
    name: string,
    species: Species,
    price: number,
    isAvailable: boolean,
    imageUrl: string
  ): void {
    this._petList.push({
      id: Math.max(...this._petList.map((pet) => pet.id)) + 1,
      name,
      species,
      price,
      isAvailable,
      imageUrl,
    });
    this.togglePetCreation();
  }
}
