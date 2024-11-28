import { Component,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListOFTasksComponent } from "./list-oftasks/list-oftasks.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{gsap } from 'gsap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListOFTasksComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title: String = "todo"
  CheckId = 0
  List: any[] = []
taskobject: any = {
  "id" : "0",
  "task" : "",
  "completed" : ""
}


constructor(private http: HttpClient) {}

changUpdate(){
  this.taskobject.id = 0
}
Getdata(){
  debugger
  this.http.get('http://localhost:8080/tasks/').subscribe((resp:any) =>{
    debugger
    this.List = resp
  })
}
Savedata(){
  this.http.post('http://localhost:8080/tasks/',this.taskobject).subscribe((resp:any) =>
{console.log(resp)
  this.Getdata()
})
}

OnEdit(data:any){
  this.taskobject = data;
}

Update(){
  this.http.post('http://localhost:8080/tasks/',this.taskobject).subscribe((resp:any) =>
    {console.log(resp)
      this.Getdata()
    })
}


OnDelete(id: number){
 const IsDelete = confirm("Are You Sure you want to delete this Task")
  if (IsDelete){
    this.http.delete('http://localhost:8080/tasks/' +id).subscribe((resp:any) =>
      {alert("Deleted task no. "+id)
        this.Getdata()
      })
  }
}
Done(){
  debugger
  this.http.get('http://localhost:8080/tasks/completed').subscribe((resp:any) =>{
    debugger
    this.List = resp
  })
}

NotDone(){
  debugger
  this.http.get('http://localhost:8080/tasks/incomplete').subscribe((resp:any) =>{
    debugger
    this.List = resp
  })
}

deleteAll(){
  const IsDeleteAll = confirm("Are you sure you want to delete all tasks?");
  if (IsDeleteAll) {
    this.http.delete('http://localhost:8080/tasks/deleted').subscribe(
      (resp: any) => {
        alert("All tasks deleted successfully!")
        this.Getdata()
      })
  }
}

deletethatDone(){
  const IsDeleteAll = confirm("Are you sure you want to delete Done tasks?");
  if (IsDeleteAll) {
    this.http.delete('http://localhost:8080/tasks/completed').subscribe(
      (resp: any) => {
        alert("All tasks deleted successfully!")
        this.Getdata()
      })
  }
}

// GSAP ANIMATION SCRIPT //

Anima=gsap.timeline()
ngAfterViewInit(){
  this.Anima.to("#headlines",{
    duration: 0.4,
    y:20,
    opacity:1
  })
  this.Anima.to("#write",{
    duration: 0.4,
    opacity:1
  })
  this.Anima.to("#headlines1",{
    duration: 0.4,
    y:20,
    opacity:1
  })
  this.Anima.to("#button2",{
    duration: 0.4,
    opacity:1
  })
  this.Anima.to("#Tasks",{
    duration: 0.1,
    opacity:1
  })
  
  this.Anima.to("#Delete1,#Delete2",{
    duration: 0.1,
    opacity:1,
  })
}











}
