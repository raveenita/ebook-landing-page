import { Component } from '@angular/core';
import { Card } from './card/card';

@Component({
  selector: 'app-chapters',
  imports: [Card],
  templateUrl: './chapters.html',
  styleUrl: './chapters.sass'
})
export class Chapters {
  protected readonly chapters = [
    {
      icon: '📘',
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular, including components, modules, and services.'
    },
    {
      icon: '📗',
      title: 'Advanced Angular Concepts',
      description: 'Dive deeper into Angular with topics like dependency injection, routing, and state management.'
    },
    {
      icon: '📙',
      title: 'Building Real-World Applications',
      description: 'Apply your knowledge by building a complete Angular application from scratch.'
    },
    {
      icon: '📕',
      title: 'Testing and Deployment',
      description: 'Learn how to test your Angular applications and deploy them to production.'
    },
  ];
}
