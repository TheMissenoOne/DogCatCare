import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AgendaService} from '../../../core/services/agenda.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(
    private agendaService: AgendaService,
    private dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit(): void {
  }

  submitPayment(): void {
    this.agendaService.createEvento(this.data.evento, this.data.evento.desc);
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
