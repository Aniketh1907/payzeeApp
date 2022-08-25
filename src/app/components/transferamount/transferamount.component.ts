import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { SenderService } from 'src/app/sender.service';
@Component({
  selector: 'app-transferamount',
  templateUrl: './transferamount.component.html',
  styleUrls: ['./transferamount.component.css']
})
export class TransferamountComponent implements OnInit {

  constructor(private dialog:MatDialog,private senderService:SenderService) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
     width:"60%"
    });}
    session:any;
    open: boolean = false;

    opendetails() {
      this.open = true;
    }
    saveData(){
      
      
      
localStorage.setItem('session',String(this.senders.customerId));
localStorage.setItem('session',String(this.senders.customerName));
localStorage.setItem('session',String(this.senders.balance));
    }
    senders:any;
    customerId!: number;
    customerName!: Text;
    balance!: number;
  // credential={
  //     id:number,
        
  //   }
    // credential={
    //     id:number,
    //   }
    // customerId!: number;
   // sender:Senderdetails=new Senderdetails();

      // private senderService:SenderService,
      // private route: ActivatedRoute
      public getCustomer(){
            let resp=this.senderService.getUser(this.customerId);
      resp.subscribe((data)=>{
        this.senders = data;
        console.log(data);
        if (data != null) {
          this.customerName = this.senders.account_Holder_Name;
          this.balance = this.senders.balance;
          console.log(data);
          this.saveData();
          this.opendetails();
        }});
       //console.log(resp);
      console.log();
     
          // console.log(this.senders.balance);
      
      }
  ngOnInit(): void {
  }

}
