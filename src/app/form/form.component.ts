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

    baseUrl = "https://simoni-hacks.herokuapp.com/bot";

    loading = `<p>Your bot is being built</p>`;
    contents = `<h1>Your bot is created</h1>`;

    unsubmitted = true;
    success = false;

    constructor(private http: Http) {}

    submit() {
        let headers = new Headers();
        this.unsubmitted = false;
        headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
        let body = new URLSearchParams();
        body.set('Name', this.botForm.value.Name);
        body.set('Description', this.botForm.value.Description);
        body.set('Voice', this.botForm.value.Voice);
        body.set('ClarificationPrompt', "Could you say that again?");
        body.set('Url', this.botForm.value.Url); 
        
        return this.http.post(this.baseUrl, body, { headers: headers })
            .map((response: Response) => {
                console.log(response);
                this.success = true;
            })
            .catch(this.handleError)
            .subscribe();
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
          let errorMessage = '';
          try {
            errorMessage = error.json().error;
          } catch(err) {
            errorMessage = error.statusText;
          }
          return Observable.throw(errorMessage);
        }
        return Observable.throw(error || 'Node.js server error');
      }
}
