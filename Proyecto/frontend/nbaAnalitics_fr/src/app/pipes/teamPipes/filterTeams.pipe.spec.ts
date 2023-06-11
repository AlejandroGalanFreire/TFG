import { TestBed } from '@angular/core/testing';
import { FilterTeamsPipe } from './filterTeams.pipe';

describe('FilterTeamsPipe', () => {

  let pipe: FilterTeamsPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTeamsPipe]
    });
    pipe = TestBed.inject(FilterTeamsPipe);
  });

  it('create an instance', () => {
    const pipe = new FilterTeamsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter teams by team name', () => {
    const teams = [
      { teamName: 'Team 1' },
      { teamName: 'Team 2' },
      { teamName: 'Team 3' },
    ];
    const searchTerm = 'team 1';

    const result = pipe.transform(teams, searchTerm);

    expect(result).toEqual([{ teamName: 'Team 1' }]);
  });

});
