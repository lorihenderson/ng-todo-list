import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
  }

  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Wash the Dishes"),
    new Task("Go to the gym"),
    new Task("Buy groceries"),
    new Task("Walk the dog"),
    new Task("Schedule a dentist appointment")
   ]
 
   // method
   add(newTask: string) {
     this.tasks.push(new Task(newTask));
   }
 
   remove(existingTask: Task) {
     var userConfirmed = confirm(`Are you sure you want to remove the following task? \n "${existingTask.title}"`)
 
     if (userConfirmed) {
       this.tasks = this.tasks.filter(task => task != existingTask);
     }
   }
 }
 
 class Task {
   constructor(public title: string) { }
 
   toggleIsDone() { // method
     this.isDone = !this.isDone;
   }
 
   public isDone = false;
 }
 
