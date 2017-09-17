import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'ob-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    botForm = new FormGroup ({
        Name: new FormControl(),
        Description: new FormControl(),
        Voice: new FormControl("Joanna"),
        Url: new FormControl
    })

    baseUrl = "https://simoni-hacks.herokuapp.com/myresource";

    constructor(private http: Http) {}

    submit() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');        
        return this.http.post(this.baseUrl, this.botForm.value, { headers: headers })
            .map((response: Response) => {
                console.log(response);
            }
        );
    }
}
