import { _fakeStaticPlayers } from './fake-players-storage';
import { _fakeTextDescription_1 } from './fake-text-storage';
import { _fakeEmployees } from './fake-employee-storage';

export const _fakeYouthTeams = [
  {
    id: 101,
    name: 'Слуцк-2003',
    coach: 101
  },
  {
    id: 102,
    name: 'Слуцк-2004',
    coach: 102
  },
  {
    id: 103,
    name: 'Слуцк-2005',
    coach: 101
  },
  {
    id: 2093,
    name: 'Слуцк-2006',
    coach: 101,
    staticModel: {
      img: '/assets/img/_tmp/img-slide-1.png',
      description: _fakeTextDescription_1,
      players: [
        _fakeStaticPlayers[0],
        _fakeStaticPlayers[1],
        _fakeStaticPlayers[2],
        _fakeStaticPlayers[3],
        _fakeStaticPlayers[4],
        _fakeStaticPlayers[5],
        _fakeStaticPlayers[6],
        _fakeStaticPlayers[7],
        _fakeStaticPlayers[8],
        _fakeStaticPlayers[9],
        _fakeStaticPlayers[10],
        _fakeStaticPlayers[11]
      ],
      coaches: [
        _fakeEmployees[0],
        _fakeEmployees[1]
      ]
    }
  },
  {
    id: 2091,
    name: 'Слуцк-2007',
    coach: 102,
    staticModel: {
      img: '/assets/img/_tmp/img-slide-2.png',
      description: _fakeTextDescription_1,
      players: [
        _fakeStaticPlayers[3],
        _fakeStaticPlayers[0],
        _fakeStaticPlayers[2],
        _fakeStaticPlayers[1],
        _fakeStaticPlayers[4],
        _fakeStaticPlayers[5],
        _fakeStaticPlayers[6],
        _fakeStaticPlayers[7],
        _fakeStaticPlayers[8],
        _fakeStaticPlayers[9],
        _fakeStaticPlayers[10],
        _fakeStaticPlayers[11]
      ],
      coaches: [
        _fakeEmployees[1]
      ]
    }
  },
  {
    id: 2090,
    name: 'Слуцк-2008',
    coach: 104
  }
];
