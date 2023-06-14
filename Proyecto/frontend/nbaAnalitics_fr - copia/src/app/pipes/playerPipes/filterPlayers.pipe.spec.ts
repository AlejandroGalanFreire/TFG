import { TestBed } from '@angular/core/testing';
import { FilterPlayersPipe } from './filterPlayers.pipe';

describe('FilterPlayersPipe', () => {

  let pipe: FilterPlayersPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterPlayersPipe]
    });
    pipe = TestBed.inject(FilterPlayersPipe);
  });

  it('create an instance', () => {
    const pipe = new FilterPlayersPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter players by name or team abbreviation', () => {
    const players = [
      { playerName: 'Lebron James', teamAbbrev: 'LAK' },
      { playerName: 'Trae Young', teamAbbrev: 'ATL' },
      { playerName: 'Anthony Davis', teamAbbrev: 'LAK' },
    ];
    const searchTerm = 'LAK';

    const result = pipe.transform(players, searchTerm);

    expect(result).toEqual([
      { playerName: 'Lebron James', teamAbbrev: 'LAK' },
      { playerName: 'Anthony Davis', teamAbbrev: 'LAK' },
    ]);
  });

});
