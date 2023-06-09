import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ChildrenService } from '../../services/children.service';
import { EditChildDialogComponent } from '../edit-child-dialog/edit-child-dialog/edit-child-dialog.component';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.css'],
})
export class EditChildComponent {
  public form: FormGroup = new FormGroup({});
  data?: any;
  id: number = 0;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private childrenService: ChildrenService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.fillData();
  }

  fillData() {
    this.form = this.formBuilder.group({
      name: [''],
      surname: [''],
      uid: [''],
      dateOfBirth: [''],
      motherName: [''],
      fatherName: [''],
      motherPhoneNumber: [''],
      fatherPhoneNumber: [''],
      city: [''],
      street: [''],
      number: [''],
      height: [''],
      weight: [''],
      description: [''],
      group: ['']
    });
    this.childrenService
      .getChild(this.id)
      .subscribe((response: HttpResponse<any>) => {
        this.data = response.body;
        if(response.body.idGroup == 0) {
          this.form.get('group')?.setValue("Nije dodjeljeno ni u jednu grupu");
        } else {
          this.childrenService.getGroup(response.body.idGroup).subscribe((response: any) => {
            if(response.status == 200) {
              this.form.get('group')?.setValue(response.body.name);
            }
          });
        }
        this.form.patchValue(this.data);
        this.form.patchValue(this.data.address);
        this.form.patchValue(this.data.note);
      });
  }

  getErrorMessage(errosMsg: any) {
    const control = this.form.get(errosMsg);
    if (control?.hasError('required')) {
      return 'Obavezno';
    }
    return '';
  }

  enableEdit() {
    this.dialog
      .open(EditChildDialogComponent, {
        width: '500px',
        data: this.id,
      })
      .afterClosed()
      .subscribe(() => {
        this.fillData();
      });
  }

  openFile() {
    this.childrenService.getFile(this.id).subscribe((response: ArrayBuffer) => {
      this.regenerateFile(response);
    });
  }

  regenerateFile(byteArray: ArrayBuffer): void {
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    const fileUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = this.data.name + '_ljekarsko.pdf';
    link.click();
  }
}
