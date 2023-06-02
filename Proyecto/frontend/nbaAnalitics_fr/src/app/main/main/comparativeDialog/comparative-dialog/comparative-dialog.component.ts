import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comparative-dialog',
  templateUrl: './comparative-dialog.component.html',
  styleUrls: ['./comparative-dialog.component.scss']
})
export class ComparativeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ComparativeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
