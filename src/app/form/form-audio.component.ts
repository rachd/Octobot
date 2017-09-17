import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ob-form-audio',
  template: `<p>Listen to a sample</p><audio controls src="{{file}}"></audio>`
})
export class FormAudioComponent implements OnChanges {
    @Input() voice: String;

    file: String;

    ngOnChanges() {
        this.file = `../../assets/${this.voice}.mp3`;
    }
}
