import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { HttpResponse } from '@angular/common/http';
const moment = _moment;

@Component({
  selector: 'app-change-credentials',
  templateUrl: './change-credentials.component.html',
  styleUrls: ['./change-credentials.component.css'],
})
export class ChangeCredentialsComponent {
  public form: FormGroup = new FormGroup({});
  private _dateToFind?: string;

  data: any;
  birthday: Date = new Date();
  date = moment();
  today: Date = new Date();

  constructor(
    @Inject(MAT_DIALOG_DATA) private params: any,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ChangeCredentialsComponent>,
    private formBuilder: FormBuilder
  ) {}

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if (type === 'change') {
      this.date = moment(event.value);
      this._dateToFind =
        this.date.format('YYYY') +
        '-' +
        this.date.format('MM') +
        '-' +
        this.date.format('DD');
    }
  }

  ngOnInit() {
    this.fillData();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changeData() {
    const formData = this.form.value;
    const data = {
      name: formData.name,
      surname: formData.surname,
      uid: formData.uid,
      dateOfBirth: this._dateToFind? this._dateToFind: formData.dateOfBirth,
      city: formData.city,
      street: formData.street,
      number: formData.number,
    };
    console.log(data);

    this.userService
      .updateAdminData(data, this.params?.id)
      .subscribe((response: any) => {
        this.snackBar.open('Uspješno ste ažurirali podatke', undefined, {
          duration: 2000,
        });
        this.dialogRef.close();
        this.fillData();
      });
  }

  fillData() {
    this.form = this.formBuilder.group({
      name: [''],
      surname: [''],
      uid: [''],
      dateOfBirth: [''],
      city: [''],
      street: [''],
      number: [''],
    });

    this.userService
      .getAdminData(this.params.id)
      .subscribe((response: HttpResponse<any>) => {
        this.data = response.body;
        this.form.patchValue(this.data);
        this.form.patchValue(this.data.address);
      });
  }

  getErrorMessage(errorMsg: string) {
    const control = this.form.get(errorMsg);
    if (control?.hasError('required')) {
      return 'Obavezno polje';
    }
    return '';
  }
}
