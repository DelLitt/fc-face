import { Injectable } from '@angular/core';
import { Publication } from '../model/publication';
import { Entity } from '../model/entity';
import { PublicationVisibility } from '../model/publication-visibility';
import { PersonRoleGroup } from '../model/person-role-group';
import { _fakeEmployees } from './_fake/fake-employee-storage';
import { _fakeYouthTeams } from './_fake/fake-youth-team-storage';
import { _fakeStandings } from './_fake/fake-standing-storage';

@Injectable()
export class DataSourceService {

  constructor() { }

  public getEntity(id: number, entityType: string): Promise<object> {
    return null;
  }

  public getEntities(
    count: number,
    skip: number,
    entityType: string,
    visibility: PublicationVisibility[]
  ): Promise<object[]> {
    return null;
  }

  public getEntitiesCount(
    entityType: string,
    visibility: PublicationVisibility[]
  ): Promise<number> {
    return null;
  }

  public getPersons(count: number, skip: number, personRoleGroup: PersonRoleGroup): Promise<object[]> {
    return null;
  }

  public getTeam(id: number): Promise<object> {
    return null;
  }

  public getCoachTeams(coachIds: number[]): Promise<object[]> {
    return null;
  }

  public getStandings(tourneyId: number): Promise<object[]> {
    return null;
  }

  public search(text: string, count: number, skip: number = 0): Promise<any> {
    return null;
  }
}

export class FakeDataSourceService extends DataSourceService {

  public getEntity(id: number, entityType: string): Promise<object> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const entity: object = db[entityType].find(p => p.id === id);
        resolve(entity);
      }, 1000);
    });
  }

  public getEntities(count: number, skip: number, entityType: string, visibility: PublicationVisibility[]): Promise<object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const entities: Array<object> = db[entityType].filter(e => visibility.includes(e.visibility)).slice(skip, skip + count);
        resolve(entities);
      }, 1000);
    });
  }

  public getEntitiesCount(entityType: string, visibility: PublicationVisibility[]): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(db[entityType].filter(e => visibility.includes(e.visibility)).length);
    });
  }

  public getPersons(count: number, skip: number, personRoleGroup: PersonRoleGroup): Promise<object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const persons: Array<object> = _fakeEmployees.slice(skip, skip + count);
        resolve(persons);
      }, 1000);
    });
  }

  public getTeam(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const team: object = _fakeYouthTeams.find(t => t.id === id);
        resolve(team);
      }, 1000);
    });
  }

  public getCoachTeams(coachIds: number[]): Promise<object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const teams: Array<object> =
          _fakeYouthTeams.filter(t => coachIds.includes(t.coach));
        resolve(teams);
      }, 1000);
    });
  }

  public getStandings(tourneyId: number): Promise<object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const standings: Array<object> =
          _fakeStandings.filter(s => s.tourneyId === tourneyId);
        resolve(standings);
      }, 1000);
    });
  }

  public search(text: string, count: number, skip: number = 0): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = {
          items: [],
          totalCount: 0
        };

        const publicationsData: any = this.doSearch(db['publications'], text);
        this.setClassification(publicationsData.items, 'publications');
        const galleriesData: any = this.doSearch(db['galleries'], text);
        this.setClassification(galleriesData.items, 'galleries');
        const videosData: any = this.doSearch(db['videos'], text);
        this.setClassification(videosData.items, 'videos');

        const allItems = [];

        publicationsData.items.forEach(element => {
          allItems.push(element);
        });
        galleriesData.items.forEach(element => {
          allItems.push(element);
        });
        videosData.items.forEach(element => {
          allItems.push(element);
        });

        result.items = allItems.slice(skip, skip + count);
        result.totalCount = publicationsData.totalCount
          + galleriesData.totalCount
          + videosData.totalCount;

        resolve(result);
      }, 1000);
    });
  }

  private doSearch(source: any[], text: string): object {
    const items = source.filter(entity => {
      // const searchExpression = `/${text}/gi`;
      return this.isPropertyContainsText(entity, 'title', text)
        || this.isPropertyContainsText(entity, 'header', text)
        || this.isPropertyContainsText(entity, 'lead', text)
        || this.isPropertyContainsText(entity, 'content', text);
    });

    return {
      items: items,
      totalCount: items.length
    };
  }

  private isPropertyContainsText(target: object, propertyName: string, searchText: string): boolean {
    return target[propertyName]
      && target[propertyName].search instanceof Function
      && target[propertyName].search(searchText) > -1;
  }

  private setClassification(source: any[], classification: string) {
    source.forEach(element => {
      element.classification = classification;
    });
  }
}


const publications = [
  {
    id: 1,
    title: 'Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер"',
    header: 'Бывший капитан "Интера"',
    galleryId: 201,
    videoId: 301,
    showImageInContent: false,
    img: '/assets/img/_tmp/img-slide-1.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 2,
    // tslint:disable-next-line:max-line-length
    lead: 'Бывший капитан "Интера" Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер", чтобы добиться успеха в предстоящем матче против "Наполи.',
    content: `Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
    
    Также смотрите метод findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения. Если вам нужно найти позицию элемента или наличие элемента в массиве, используйте Array.prototype.indexOf() или Array.prototype.includes() соответсвенно.`
  },
  {
    id: 2,
    title: 'Актуальные цены могут изменяться',
    videoId: 302,
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-2.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 2,
    // tslint:disable-next-line:max-line-length
    lead: 'Экономия приведена из расчета за три года использования зарезервированного экземпляра D4_v2 в регионе "Западная часть США 2" и подписки Software Assurance (уровень A) для лицензии на Windows Server Standard (четыре 2-ядерные лицензии). Актуальные цены могут изменяться в зависимости от региона, типа экземпляра, использования или от платы за лицензию Windows Server конкретного пользователя. Цены указаны по состоянию на ноябрь 2017 г.',
    // tslint:disable-next-line:max-line-length
    content: `Четыре минуты Жордан Вереру стоял у мяча, ожидая отмашки от арбитра. В этот момент никто не понимал по какой причине на поле ничего не происходит. Как оказалось, за пределами поля судейская бригада разбирала на экране эпизод и готовила вердикт о правомерности назначения пенальти. Гуида так и не просигнализировал о том, что эпизод разбирается на видео повторе. Известно это стало только в тот момент, когда решение было принято.
    
    Рассматривалось четыре момента: коснулся ли Кьеллини мяча рукой (да, попал)?`
  },
  {
    id: 3,
    title: 'Дети. В этом году я видел много матчей "Тоттенхэма"',
    header: 'Они очень сильны, в команде сильная оборона и очень хорошая полузащита',
    galleryId: 203,
    videoId: 0,
    showImageInContent: true,
    // img: '/assets/img/_tmp/img-slide-3.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 8,
    // tslint:disable-next-line:max-line-length
    lead: 'В этом году я видел много матчей "Тоттенхэма", в том числе против "Ливерпуля" и "Арсенала", - рассказывает Хедира. - Они очень сильны, в команде сильная оборона и очень хорошая полузащита, а впереди выступает нападение мирового класса под предводительством действительно классного тренера. Команда молодая, может быть для нас это даже хорошо. Нам нужно будет быть супер-сконцентрированными, потому что, как по мне, мы говорим об одной из сильнейших команд Европы и Англии.',
    // tslint:disable-next-line:max-line-length
    content: `Помощник главного тренера "Ювентуса" Марко Ландуччи в своём официальном аккаунте социальной сети Instagram описал поездку во Флоренцию следующим образом:
    
    "Возвращаемся домой спокойно, на поезде, с тремя выигранными очками у великолепных флорентийцев, которых тренирует хороший тренер и мой большой друг! Очень жаль, что во Флоренции слишком много оскорблений и мата. Будучи ребёнком, в 10 лет я приехал сюда впервые и испытал огромный стресс".`
  },
  {
    id: 4,
    title: 'Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других',
    header: 'Хочу начать с юниоров',
    galleryId: 201,
    videoId: 304,
    img: '/assets/img/_tmp/img-slide-4.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 2,
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Подумаю об этом в середине следующего года. ',
    // tslint:disable-next-line:max-line-length
    content: `Президент "Кальяри" Томмазо Гвилини сомневается, что Николо Барелла может стать игроком "Ювентуса", в случае его продажи из текущего клуба. Напомним, что итальянская пресса неоднократно сообщала об интересе "Старой синьоры" к молодому полузащитнику, однако договориться о переходе игрока в январское трансферное окно так и не удалось. 
    
    "Нет, он не игрок "Ювентуса",69 - говорит Гвилини в интервью для местного издания l’Unione Sarda. - Барелла - игрок "Кальяри" и на следующий сезон, и я действительно не думаю, что он может перейти в "Ювентус", даже если будет принято решение сменить команду".
    
    Гвилини стал президентом "Кальяри" в 2014 году, сменив на этом посту Массимо Челлино.`
  },
  {
    id: 5,
    title: 'Дети. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других',
    header: 'Хочу начать с юниоров',
    galleryId: 205,
    videoId: 305,
    img: '',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 8,
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Подумаю об этом в середине следующего года. ',
    // tslint:disable-next-line:max-line-length
    content: `Президент "Кальяри" Томмазо Гвилини сомневается, что Николо Барелла может стать игроком "Ювентуса", в случае его продажи из текущего клуба. Напомним, что итальянская пресса неоднократно сообщала об интересе "Старой синьоры" к молодому полузащитнику, однако договориться о переходе игрока в январское трансферное окно так и не удалось. 
    
    "Нет, он не игрок "Ювентуса",69 - говорит Гвилини в интервью для местного издания l’Unione Sarda. - Барелла - игрок "Кальяри" и на следующий сезон, и я действительно не думаю, что он может перейти в "Ювентус", даже если будет принято решение сменить команду".
    
    Гвилини стал президентом "Кальяри" в 2014 году, сменив на этом посту Массимо Челлино.`
  },
  {
    id: 6,
    title: 'Дети. С днем рождения, Роберто!	поделиться:  ',
    header: 'Клуб принял решение наказать штрафом игрока',
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-4.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 8,
    // tslint:disable-next-line:max-line-length
    lead: 'После того, как футболисты "Ювентуса" вышли вперёд благодаря забитому мячу Якуповича, Леандро Фернандес вместе с остальными футболистами подбежал к трибунам и продемонстрировал в адрес фанатов "Торино" средний палец.',
    // tslint:disable-next-line:max-line-length
    content: `"Будет тяжёлая гонка за Скудетто до самого конца, но я уверен, что мы можем выиграть титул, - говорит защитник в интервью для La Stampa. - Люди относятся ко всему так, как будто это что-то само собой разумеющееся. "Наполи" сейчас показывает самый красивый футбол, но мы сильнее и увереннее. Мы доказали это через нашу победу на "Сан Паоло".
    
    Я не вникаю в споры вокруг "Ювентуса". Спустя шесть лет нашего успеха, многие надеются, что титул достанется кому-нибудь другому. Такое было с "Лионом" во Франции, когда они выиграли семь чемпионских титулов подряд, но правда в том, что остальные команды были на шаг позади, как и сейчас все позади "Юве".
    
    Стал ли для "Ювентуса" проблемой уход Бонуччи? Вы правда думаете, что руководители отпустят кого-то столь талантливого, если это создаст проблем для команды? Нужно время, чтобы перестроиться, но, после этого, нам удалось найти баланс в своей игре.`
  },
  {
    id: 7,
    title: 'Дети. Это публикация номер 7',
    header: 'Под номером 7',
    videoId: 301,
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-2.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 8,
    // tslint:disable-next-line:max-line-length
    lead: 'После того, как футболисты "Ювентуса" вышли вперёд благодаря забитому мячу Якуповича, Леандро Фернандес вместе с остальными футболистами подбежал к трибунам и продемонстрировал в адрес фанатов "Торино" средний палец.',
    // tslint:disable-next-line:max-line-length
    content: `"Будет тяжёлая гонка за Скудетто до самого конца, но я уверен, что мы можем выиграть титул, - говорит защитник в интервью для La Stampa. - Люди относятся ко всему так, как будто это что-то само собой разумеющееся. "Наполи" сейчас показывает самый красивый футбол, но мы сильнее и увереннее. Мы доказали это через нашу победу на "Сан Паоло".
    
    Я не вникаю в споры вокруг "Ювентуса". Спустя шесть лет нашего успеха, многие надеются, что титул достанется кому-нибудь другому. Такое было с "Лионом" во Франции, когда они выиграли семь чемпионских титулов подряд, но правда в том, что остальные команды были на шаг позади, как и сейчас все позади "Юве".
    
    Стал ли для "Ювентуса" проблемой уход Бонуччи? Вы правда думаете, что руководители отпустят кого-то столь талантливого, если это создаст проблем для команды? Нужно время, чтобы перестроиться, но, после этого, нам удалось найти баланс в своей игре.`
  },
  {
    id: 8,
    title: 'Это публикация номер 8',
    header: 'Под номером 8',
    galleryId: 201,
    videoId: 303,
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-3.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 2,
    // tslint:disable-next-line:max-line-length
    lead: 'После того, как футболисты "Ювентуса" вышли вперёд благодаря забитому мячу Якуповича, Леандро Фернандес вместе с остальными футболистами подбежал к трибунам и продемонстрировал в адрес фанатов "Торино" средний палец.',
    // tslint:disable-next-line:max-line-length
    content: `"Будет тяжёлая гонка за Скудетто до самого конца, но я уверен, что мы можем выиграть титул, - говорит защитник в интервью для La Stampa. - Люди относятся ко всему так, как будто это что-то само собой разумеющееся. "Наполи" сейчас показывает самый красивый футбол, но мы сильнее и увереннее. Мы доказали это через нашу победу на "Сан Паоло".
    
    Я не вникаю в споры вокруг "Ювентуса". Спустя шесть лет нашего успеха, многие надеются, что титул достанется кому-нибудь другому. Такое было с "Лионом" во Франции, когда они выиграли семь чемпионских титулов подряд, но правда в том, что остальные команды были на шаг позади, как и сейчас все позади "Юве".
    
    Стал ли для "Ювентуса" проблемой уход Бонуччи? Вы правда думаете, что руководители отпустят кого-то столь талантливого, если это создаст проблем для команды? Нужно время, чтобы перестроиться, но, после этого, нам удалось найти баланс в своей игре.`
  },
  {
    id: 9,
    title: 'Это публикация номер 9',
    header: 'Под номером 8',
    galleryId: 201,
    videoId: 301,
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-1.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    visibility: 8,
    // tslint:disable-next-line:max-line-length
    lead: 'После того, как футболисты "Ювентуса" вышли вперёд благодаря забитому мячу Якуповича, Леандро Фернандес вместе с остальными футболистами подбежал к трибунам и продемонстрировал в адрес фанатов "Торино" средний палец.',
    // tslint:disable-next-line:max-line-length
    content: `"Будет тяжёлая гонка за Скудетто до самого конца, но я уверен, что мы можем выиграть титул, - говорит защитник в интервью для La Stampa. - Люди относятся ко всему так, как будто это что-то само собой разумеющееся. "Наполи" сейчас показывает самый красивый футбол, но мы сильнее и увереннее. Мы доказали это через нашу победу на "Сан Паоло".
    
    Я не вникаю в споры вокруг "Ювентуса". Спустя шесть лет нашего успеха, многие надеются, что титул достанется кому-нибудь другому. Такое было с "Лионом" во Франции, когда они выиграли семь чемпионских титулов подряд, но правда в том, что остальные команды были на шаг позади, как и сейчас все позади "Юве".
    
    Стал ли для "Ювентуса" проблемой уход Бонуччи? Вы правда думаете, что руководители отпустят кого-то столь талантливого, если это создаст проблем для команды? Нужно время, чтобы перестроиться, но, после этого, нам удалось найти баланс в своей игре.`
  }
];

const galleries = [
  {
    id: 201,
    title: 'Фотогалерея номер 1 пос',
    header: 'Первая галерея',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 2,
    items: [
      {
        title: 'Фотография номер 1',
        imgSrc: '/assets/img/_tmp/img-slide-1.png'
      },
      {
        title: 'Фотография номер 2',
        imgSrc: '/assets/img/_tmp/img-slide-2.png'
      },
      {
        title: 'Фотография номер 3',
        imgSrc: '/assets/img/_tmp/img-slide-3.png'
      },
      {
        title: 'Фотография номер 4',
        imgSrc: '/assets/img/_tmp/img-slide-4.png'
      }
    ]
  },
  {
    id: 201,
    title: 'Фотогалерея номер 1 пос',
    header: 'Первая галерея',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 2,
    items: [
      {
        title: 'Фотография номер 1',
        imgSrc: '/assets/img/_tmp/img-slide-1.png'
      },
      {
        title: 'Фотография номер 2',
        imgSrc: '/assets/img/_tmp/img-slide-2.png'
      },
      {
        title: 'Фотография номер 3',
        imgSrc: '/assets/img/_tmp/img-slide-3.png'
      },
      {
        title: 'Фотография номер 4',
        imgSrc: '/assets/img/_tmp/img-slide-4.png'
      }
    ]
  },
  {
    id: 201,
    title: 'Дети. Фотогалерея номер 1 пос',
    header: 'Первая галерея',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 8,
    items: [
      {
        title: 'Фотография номер 1',
        imgSrc: '/assets/img/_tmp/img-slide-1.png'
      },
      {
        title: 'Фотография номер 2',
        imgSrc: '/assets/img/_tmp/img-slide-2.png'
      },
      {
        title: 'Фотография номер 3',
        imgSrc: '/assets/img/_tmp/img-slide-3.png'
      },
      {
        title: 'Фотография номер 4',
        imgSrc: '/assets/img/_tmp/img-slide-4.png'
      }
    ]
  },
  {
    id: 202,
    title: 'Фотогалерея номер 2 пос',
    header: 'Первая галерея',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 2,
    items: [
      {
        title: 'Фотография номер 2',
        imgSrc: '/assets/img/_tmp/img-slide-2.png'
      },
      {
        title: 'Фотография номер 3',
        imgSrc: '/assets/img/_tmp/img-slide-3.png'
      },
      {
        title: 'Фотография номер 4',
        imgSrc: '/assets/img/_tmp/img-slide-4.png'
      },
      {
        title: 'Фотография номер 1',
        imgSrc: '/assets/img/_tmp/img-slide-4.png'
      }
    ]
  }
  ,
  {
    id: 203,
    title: 'Фотогалерея номер 3',
    header: 'Первая галерея',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 2,
    items: [
      {
        title: 'Фотография номер 3',
        imgSrc: '/assets/img/_tmp/img-slide-3.png'
      },
      {
        title: 'Фотография номер 2',
        imgSrc: '/assets/img/_tmp/img-slide-2.png'
      },
      {
        title: 'Фотография номер 1',
        imgSrc: '/assets/img/_tmp/img-slide-1.png'
      }
    ]
  }
];

const videos = [
  {
    id: 301,
    title: 'Видео номер 1',
    header: 'Первая видео',
    img: '/assets/img/_tmp/img-slide-4.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Кстати, я начал ходить на тренерские курсы.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 2,
    htmlCode: '<iframe width="640" height="360" src="https://www.youtube.com/embed/ifiI4bXxXFA" allowfullscreen></iframe>'
  },
  {
    id: 302,
    title: 'Видео пос номер 2',
    header: 'Второе видео',
    img: '/assets/img/_tmp/img-slide-2.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Кстати, я начал ходить на тренерские курсы.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 2,
    htmlCode: '<iframe width="640" height="360" src="https://www.youtube.com/embed/ifiI4bXxXFA" allowfullscreen></iframe>'
  },
  {
    id: 303,
    title: 'Дети. Видео номер 3',
    header: 'Третье видео',
    img: '/assets/img/_tmp/img-slide-3.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Кстати, я начал ходить на тренерские курсы.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 8,
    htmlCode: '<iframe width="640" height="360" src="https://www.youtube.com/embed/ifiI4bXxXFA" allowfullscreen></iframe>'
  },
  {
    id: 304,
    title: 'Дети. Видео пос номер 2',
    header: 'Второе видео',
    img: '/assets/img/_tmp/img-slide-4.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Кстати, я начал ходить на тренерские курсы.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    visibility: 8,
    htmlCode: '<iframe width="640" height="360" src="https://www.youtube.com/embed/ifiI4bXxXFA" allowfullscreen></iframe>'
  }
];


const db = {
  publications,
  galleries,
  videos
};
