import { Injectable } from '@angular/core';
import { Publication } from '../model/publication';

@Injectable()
export class DataSourceService {

  constructor() { }

  public getPublication(id: number): Promise<object> {
    return null;
  }

  public getLatestPublications(count: Number): Promise<object[]> {
    return null;
  }

  public getGallery(id: number): Promise<object> {
    return null;
  }

  public getVideo(id: number): Promise<object> {
    return null;
  }
}

export class FakeDataSourceService extends DataSourceService {

  public getPublication(id: number): Promise<object> {

   return new Promise((resolve, reject) => {
      setTimeout(() => {
        const publication = publications.find(p => p.id === id);
        resolve(publication);
      }, 2000);
    });
  }

  public getLatestPublications(count: number): Promise<object[]> {
    return new Promise((resolve, reject) => {
      let result: object[];
      setTimeout(() => {
        result = publications.slice(0, count);
        resolve(result);
      }, 2000);
    });
  }

  public getGallery(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const gallery = galleries.find(g => g.id === id);
        resolve(gallery);
      }, 2000);
    });
  }

  public getVideo(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const video = videos.find(v => v.id === id);
        resolve(video);
      }, 2000);
    });
  }
}


const publications = [
  {
    id: 1,
    title: 'Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер"',
    header: 'Бывший капитан "Интера"',
    galleryId: 201,
    hasVideo: true,
    showImageInContent: false,
    img: '/assets/img/_tmp/img-slide-1.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    // tslint:disable-next-line:max-line-length
    lead: 'Бывший капитан "Интера" Джузеппе Бергоми посоветовал "Ювентусу" "играть как "Интер", чтобы добиться успеха в предстоящем матче против "Наполи.',
    content: `Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
    
    Также смотрите метод findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения. Если вам нужно найти позицию элемента или наличие элемента в массиве, используйте Array.prototype.indexOf() или Array.prototype.includes() соответсвенно.`
  },
  {
    id: 2,
    title: 'Актуальные цены могут изменяться',
    hasVideo: true,
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-2.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    // tslint:disable-next-line:max-line-length
    lead: 'Экономия приведена из расчета за три года использования зарезервированного экземпляра D4_v2 в регионе "Западная часть США 2" и подписки Software Assurance (уровень A) для лицензии на Windows Server Standard (четыре 2-ядерные лицензии). Актуальные цены могут изменяться в зависимости от региона, типа экземпляра, использования или от платы за лицензию Windows Server конкретного пользователя. Цены указаны по состоянию на ноябрь 2017 г.',
    // tslint:disable-next-line:max-line-length
    content: `Четыре минуты Жордан Вереру стоял у мяча, ожидая отмашки от арбитра. В этот момент никто не понимал по какой причине на поле ничего не происходит. Как оказалось, за пределами поля судейская бригада разбирала на экране эпизод и готовила вердикт о правомерности назначения пенальти. Гуида так и не просигнализировал о том, что эпизод разбирается на видео повторе. Известно это стало только в тот момент, когда решение было принято.
    
    Рассматривалось четыре момента: коснулся ли Кьеллини мяча рукой (да, попал)?`
  },
  {
    id: 3,
    title: 'В этом году я видел много матчей "Тоттенхэма"',
    header: 'Они очень сильны, в команде сильная оборона и очень хорошая полузащита',
    galleryId: 203,
    hasVideo: false,
    showImageInContent: true,
    img: '/assets/img/_tmp/img-slide-3.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
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
    hasGallery: 204,
    hasVideo: false,
    img: '/assets/img/_tmp/img-slide-4.png',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 13:34:12 GMT').toISOString(),
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Подумаю об этом в середине следующего года. ',
    // tslint:disable-next-line:max-line-length
    content: `Президент "Кальяри" Томмазо Гвилини сомневается, что Николо Барелла может стать игроком "Ювентуса", в случае его продажи из текущего клуба. Напомним, что итальянская пресса неоднократно сообщала об интересе "Старой синьоры" к молодому полузащитнику, однако договориться о переходе игрока в январское трансферное окно так и не удалось. 
    
    "Нет, он не игрок "Ювентуса",69 - говорит Гвилини в интервью для местного издания l’Unione Sarda. - Барелла - игрок "Кальяри" и на следующий сезон, и я действительно не думаю, что он может перейти в "Ювентус", даже если будет принято решение сменить команду".
    
    Гвилини стал президентом "Кальяри" в 2014 году, сменив на этом посту Массимо Челлино.`
  }
];

const galleries = [
  {
    id: 201,
    title: 'Фотогалерея номер 1',
    header: 'Первая галерея',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Кстати, я начал ходить на тренерские курсы. Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
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
  }
];

const videos = [
  {
    id: 301,
    title: 'Видео номер 1',
    header: 'Первая видео',
    img: '/assets/img/_tmp/img-slide-1.png',
    // tslint:disable-next-line:max-line-length
    lead: 'Мне нравится, хотя предстоит научиться самому сложному: доносить свои знания до других. Хочу начать с юниоров. Но пока я игрок, так это в будущем. Кстати, я начал ходить на тренерские курсы.',
    author: 'Пресс-служба СФК "Слуцк"',
    displayDate: new Date('Thu, 08 Jan 2017 15:34:12 GMT').toISOString(),
    sortDate: new Date('Thu, 08 Jan 2017 15:31:12 GMT').toISOString(),
    htmlCode: '<iframe width="640" height="360" src="https://www.youtube.com/embed/ifiI4bXxXFA" allowfullscreen></iframe>'
  }
];
