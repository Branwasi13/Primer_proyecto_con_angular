import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.inteface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input()
  task: ITask | undefined;

  @Output()
  detele: EventEmitter<ITask> = new EventEmitter <ITask>();

  constructor(){}
  ngOnInit(): void {
    
  }

  deleteTask(){
    this.detele.emit(this.task) //Notificamos al componente superior la tarea a eliminar
  }
}
