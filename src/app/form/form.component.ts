import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ob-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    botForm = new FormGroup ({
        name: new FormControl(),
        voice: new FormControl("Joanna")
    })
}
