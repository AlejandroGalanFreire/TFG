import { TestBed } from '@angular/core/testing';
import { FilterTeamByYearPipe } from './filter-team-by-year.pipe';

describe('FilterTeamByYearPipe', () => {
  let pipe: FilterTeamByYearPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTeamByYearPipe]
    });
    pipe = TestBed.inject(FilterTeamByYearPipe);
  });

  it('create an instance', () => {
    const pipe = new FilterTeamByYearPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter teams by team name and year', () => {
    const teams = [
      { teamName: 'Team 1', year: '2022-23' },
      { teamName: 'Team 2', year: '2022-23' },
      { teamName: 'Team 3', year: '2021-22' },
    ];
    const searchTerm = 'team 1';

    const result = pipe.transform(teams, searchTerm);

    expect(result).toEqual([{ teamName: 'Team 1', year: '2022-23' }]);
  });

});
