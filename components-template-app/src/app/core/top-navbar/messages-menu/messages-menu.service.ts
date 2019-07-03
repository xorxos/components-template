import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class MessagesMenuService {
  baseUrl = '';

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.baseUrl = baseHref;
  }

  messages = [
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile1.jpeg',
      username: 'Olga Homestead',
      title: 'New Lead',
      text: 'Add this new lead to your list.',
      time: 'JUST NOW'
    },
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile4.jpeg',
      username: 'Hope Wakanda',
      title: 'Congrats! 100 users',
      text: 'You reached your monthly goal.',
      time: 'Yesterday'
    },
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile3.jpeg',
      username: 'Sara Smith',
      title: 'New message',
      text: 'Hi Parker, remember to add...',
      time: 'June 4'
    },
    {
      image: this.baseUrl + '/assets/imgs/profiles/profile2.jpeg',
      username: 'Bob Connors',
      title: 'Important message',
      text: 'Hello there',
      time: 'June 2'
    }
  ];

  getMessages(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve (this.messages), 1000);
    });
  }

}
