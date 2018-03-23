import { _fakeTourneys } from './fake-tourneys-storage';

export const _fakeTeams = [
    { id: 1001, name: 'Слуцк (дубль)', img: '/assets/img/_tmp/logo_team_1.png' },
    { id: 1002, name: 'БАТЭ (дубль)', img: '/assets/img/_tmp/logo_team_2.png' },
    { id: 1003, name: 'Торпедо-БелАЗ (дубль)', img: '/assets/img/_tmp/logo_team_3.png' },
    { id: 1004, name: 'Динамо-Брест (дубль)', img: '/assets/img/_tmp/logo_team_4.png' }
];

export const _fakeRounds = [
    { id: 1001, name: '1', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1002, name: '2', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1003, name: '3', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1004, name: '1/4', i18nKey: 'FINALS', tourney: _fakeTourneys[1] },
    { id: 1005, name: '4', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1006, name: '5', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1007, name: '1', i18nKey: 'TOUR', tourney: _fakeTourneys[2] },
    { id: 1008, name: '1/2', i18nKey: 'FINALS', tourney: _fakeTourneys[1] },
    { id: 1009, name: '6', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1010, name: '2', i18nKey: 'TOUR', tourney: _fakeTourneys[0] },
    { id: 1011, name: '7', i18nKey: 'TOUR', tourney: _fakeTourneys[2] },
    { id: 1012, name: '', i18nKey: 'FINAL', tourney: _fakeTourneys[1] }
];

export const _fakeGames = [
    {
        id: 1001, date: new Date(2017, 3, 5, 14, 30, 25), round: _fakeRounds[0], home: _fakeTeams[0], away: _fakeTeams[1],
        scoreHome: 2, scoreAway: 0, scoreAddHome: null, scoreAddAway: null, penaltiesHome: null, penaltiesAway: null, played: true
    },
    {
        id: 1002, date: new Date(2017, 3, 5, 18, 0, 10), round: _fakeRounds[0], home: _fakeTeams[2], away: _fakeTeams[3],
         scoreAddHome: null, scoreAddAway: null, penaltiesHome: null, penaltiesAway: null, played: false
    },
    {
        id: 1003, date: new Date(2017, 3, 6, 19, 0, 0), round: _fakeRounds[0], home: _fakeTeams[3], away: _fakeTeams[0],
        scoreHome: 1, scoreAway: 3, scoreAddHome: null, scoreAddAway: null, penaltiesHome: null, penaltiesAway: null, played: true
    },
    {
        id: 1004, date: new Date(2017, 3, 11, 19, 0, 0), round: _fakeRounds[1], home: _fakeTeams[3], away: _fakeTeams[0],
        scoreHome: 1, scoreAway: 3, scoreAddHome: null, scoreAddAway: null, penaltiesHome: null, penaltiesAway: null, played: false
    },
    {
        id: 1005, date: new Date(2017, 3, 14, 17, 0, 0), round: _fakeRounds[2], home: _fakeTeams[1], away: _fakeTeams[2],
        scoreHome: 0, scoreAway: 0, scoreAddHome: null, scoreAddAway: null, penaltiesHome: null, penaltiesAway: null, played: true
    },
    {
        id: 1006, date: new Date(2017, 3, 14, 14, 0, 0), round: _fakeRounds[3], home: _fakeTeams[3], away: _fakeTeams[2],
        scoreHome: 2, scoreAway: 2, scoreAddHome: 0, scoreAddAway: 0, penaltiesHome: 3, penaltiesAway: 4, played: false
    },
    {
        id: 1007, date: new Date(2017, 3, 16, 15, 0, 0), round: _fakeRounds[4], home: _fakeTeams[0], away: _fakeTeams[2],
        scoreHome: 1, scoreAway: 3, scoreAddHome: null, scoreAddAway: null, penaltiesHome: null, penaltiesAway: null, played: true
    },
    {
        id: 1008, date: new Date(2017, 3, 17, 19, 0, 0), round: _fakeRounds[4], home: _fakeTeams[1], away: _fakeTeams[3],
        scoreHome: 0, scoreAway: 0, scoreAddHome: 3, scoreAddAway: 2, penaltiesHome: null, penaltiesAway: null, played: true
    }
];

export const _fakeGamesDays = [
    { date: new Date(2017, 3, 5, 14, 30, 25), games: [_fakeGames[0], _fakeGames[1], _fakeGames[6]] },
    { date: new Date(2017, 3, 6, 19, 0, 0), games: [_fakeGames[2]] },
    { date: new Date(2017, 3, 11, 19, 0, 0), games: [_fakeGames[3]] },
    { date: new Date(2017, 3, 14, 17, 0, 0), games: [_fakeGames[4], _fakeGames[6]] },
    { date: new Date(2017, 3, 14, 17, 0, 0), games: [_fakeGames[5]] },
    { date: new Date(2017, 3, 16, 15, 0, 0), games: [_fakeGames[6]] },
    { date: new Date(2017, 3, 17, 15, 0, 0), games: [_fakeGames[7]] }
];

export const _fakeRoundsSolid = [
    {
        round: _fakeRounds[0],
        dateBreak: new Date(2017, 3, 6, 19, 0, 0),
        gamesDays: [_fakeGamesDays[0], _fakeGamesDays[1]]
    },
    {
        round: _fakeRounds[1],
        dateBreak: new Date(2017, 3, 11, 19, 0, 0),
        gamesDays: [_fakeGamesDays[2]]
    },
    {
        round: _fakeRounds[2],
        dateBreak: new Date(2017, 3, 14, 17, 0, 0),
        gamesDays: [_fakeGamesDays[3]]
    },
    {
        round: _fakeRounds[3],
        dateBreak: new Date(2017, 3, 14, 17, 0, 0),
        gamesDays: [_fakeGamesDays[4]]
    }
    ,
    {
        round: _fakeRounds[4],
        dateBreak: new Date(2017, 3, 17, 19, 0, 0),
        gamesDays: [_fakeGamesDays[5], _fakeGamesDays[6]]
    }
];
