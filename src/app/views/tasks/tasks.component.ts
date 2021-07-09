import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Tarefas',
      icon: 'task_alt',
      routeURL: '/tasks'
    }
   }

  ngOnInit(): void {
  }

  novaTaskPage = () => {
    this.router.navigate(['tasks/createTasks']);
  }

}
