import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listData:any;
  allData:any;
  registrationForm: any;
  public person='';
  searchValue: any;
  TableForm:any;
  user: any;
  text:any;
  count=0;
  index:any;
  sample:any;
  

  constructor(private fb: FormBuilder, private _router:Router){
   this.listData=[];
   this.allData=this.listData;

    
    this.registrationForm= this.fb.group(
    { Name:['',[Validators.required,Validators.minLength(3)]],
      UserId:['',Validators.required],
      Role:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Mobile:['',[Validators.required,Validators.pattern]]
    }
  )}
 

  searchText:string='';
  term:any;
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
     console.log(this.searchText)
  }
 


  onSubmit(){
    this.listData.push(this.registrationForm.value);
    this.index=this.listData.UserId;
    this.text=this.listData.Name
    this.registrationForm.reset();
    this.count++;
  }
  goNew(i:number){
    for(let b=0;b<this.listData.length;b++)
    {
      if(i==this.listData[b].UserId){
        this.person=this.listData[b].Name;
        this.user=this.listData[b].UserId;
        this.sample="Welcome"
      }
    }

  }
  title = 'Assignment-3';
  roles=["Associate","Analyst","Team-Lead","Assoc Manager","Manager"];
}


