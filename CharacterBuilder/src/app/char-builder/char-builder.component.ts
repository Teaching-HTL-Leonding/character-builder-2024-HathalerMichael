import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BuildResponse, Character, CharApiService} from '../char-api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-char-builder',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './char-builder.component.html',
  styleUrl: './char-builder.component.css'
})
export class CharBuilderComponent {
  private charApiService = inject(CharApiService);

  imageSrc = signal('');
  eye = signal('');
  hasHammer = signal(false);
  mouth = signal('');
  rightHand = signal('');
  hasTail = signal(false);

  async buildCharacter(){

    const url : BuildResponse = (await this.charApiService.buildChar(this.eye(), this.hasHammer(), this.mouth(), this.rightHand(), this.hasTail()));
    console.log(url);

    this.imageSrc.set(url.url);
  }


}
