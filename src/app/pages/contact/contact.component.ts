import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm!: FormGroup;

  date = new Date();

  showToastrSuccess: boolean = false;
  showToastrError: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(contactForm = this.contactForm) {
    if (contactForm.valid) {
      const { name, email, message } = contactForm.value;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
      this.http
        .post(
          'https://formspree.io/f/moqgpkle',
          { name, replyto: email, message },
          { headers: headers }
        )
        .subscribe((response: any) => {
          if (response.ok) {
            this.showToastr('success');
          } else {
            this.showToastr('error');
          }

          this.contactForm.reset();
        });
    }
  }

  formatarEValidarNumeroCelular(elemet: HTMLInputElement) {
    const { value: numb } = elemet;

    const cleanNumb: string = numb.replace(' ', '');
    let formatNumb = '';

    const pattern: RegExp = /^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})$/;

    const [fullnumber, ddd, prefixo, firstStep, secondStep]: RegExpExecArray = <
      RegExpExecArray
    >pattern.exec(numb);

    if (!!ddd) formatNumb += `(${ddd}`;
    if (!!prefixo) formatNumb += `) ${prefixo}`;
    if (!!firstStep) formatNumb += ` ${firstStep}`;
    if (!!secondStep) formatNumb += `-${secondStep}`;

    elemet.innerText = formatNumb;
  }

  showToastr(status: 'success' | 'error') {
    if (status == 'success') this.showToastrSuccess = true;
    if (status == 'error') this.showToastrError = true;

    setTimeout(() => {
      if (status == 'success') this.showToastrSuccess = false;
      if (status == 'error') this.showToastrError = false;
    }, 3000);
  }
}
