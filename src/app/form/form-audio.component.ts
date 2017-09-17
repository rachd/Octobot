import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ob-form-audio',
  template: `<p class="form_label">Sample</p><audio class="form_field" controls src="{{file}}"></audio>`,
  styleUrls: ["./form.component.css"]
})
export class FormAudioComponent implements OnChanges {
    @Input() voice: String;

    file: String;

    ngOnChanges() {
        this.file = `../../assets/${this.voice}.mp3`;
    }
}
