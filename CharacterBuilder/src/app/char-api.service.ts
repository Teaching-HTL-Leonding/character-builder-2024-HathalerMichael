import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';



export type Character = {
  "eye": string,
  "hasHammer": boolean,
  "mouth": string,
  "rightHand": string,
  "hasTail": boolean
};

export type BuildResponse = {
  "url" : string
};

@Injectable({
  providedIn: 'root'
})

export class CharApiService {
  private httpClient = inject(HttpClient);

  async buildChar(eye : string, hasHammer : boolean, mouth : string, rightHand : string, hasTail : boolean) {

    return firstValueFrom(this.httpClient.post<BuildResponse>
    ('http://localhost:5110/build-image-url',{
      "eye": eye,
      "hasHammer": hasHammer,
      "mouth": mouth,
      "rightHand": rightHand,
      "hasTail": hasTail})
    );
}}
