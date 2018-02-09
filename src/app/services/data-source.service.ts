import { Injectable } from '@angular/core';

@Injectable()
export class DataSourceService {

  constructor() { }

  public getLatestPublications(count: Number) {
    return null;
  }
}

export class FakeDataSourceService extends DataSourceService {

  public getLatestPublications(count: number) {
    return publications.slice(0, count);
  }
}


const publications = [
  {
    title: 'Первый заголовок статьи 1',
    header: 'Второй заголовок статьи 1',
    img: '/assets/img/_tmp/img-slide-1.png',
    lead: 'Бывший капитан "Интера" Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер", чтобы добиться успеха в предстоящем матче против "Наполи.'
  },
  {
    title: 'Первый заголовок статьи 2',
    header: 'Второй заголовок статьи 2',
    img: '/assets/img/_tmp/img-slide-2.png',
    lead: 'Бывший капитан "Интера" Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер", чтобы добиться успеха в предстоящем матче против "Наполи.'
  },
  {
    title: 'Первый заголовок статьи 3',
    header: 'Второй заголовок статьи 3',
    img: '/assets/img/_tmp/img-slide-1.png',
    lead: 'Бывший капитан "Интера" Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер", чтобы добиться успеха в предстоящем матче против "Наполи.'
  },
  {
    title: 'Первый заголовок статьи 4',
    header: 'Второй заголовок статьи 4',
    img: '/assets/img/_tmp/img-slide-2.png',
    lead: 'Бывший капитан "Интера" Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер", чтобы добиться успеха в предстоящем матче против "Наполи.'
  }
];

