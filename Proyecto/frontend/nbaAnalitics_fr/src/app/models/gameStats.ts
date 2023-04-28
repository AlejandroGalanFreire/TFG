export class GameStats{
  id:number;
	season_id:number;
	team_id:number;
	team_abbreviation:string;
	team_name:string;
	game_id:string;
	game_date:string;
	matchup:string;
	WL:string;
	min:number;
	pts:number;
	fgm:number;
	fga:number;
	fg_PCT:number;
	fg3M:number;
	fg3A:number;
	fg3_PCT:number;
	ftm:number;
	fta:number;
	ft_PCT:number;
	oreb:number;
	dreb:number;
	reb:number;
	ast:number;
	stl:number;
	blk:number;
	tov:number;
	pf:number;
	plus_minus:number;
  period1Score:number;
  period2Score:number;
  period3Score:number;
  period4Score:number;

  constructor(id:number,
    season_id:number,
    team_id:number,
    team_abbreviation:string,
    team_name:string,
    game_id:string,
    game_date:string,
    matchup:string,
    WL:string,
    min:number,
    pts:number,
    fgm:number,
    fga:number,
    fg_PCT:number,
    fg3M:number,
    fg3A:number,
    fg3_PCT:number,
    ftm:number,
    fta:number,
    ft_PCT:number,
    oreb:number,
    dreb:number,
    reb:number,
    ast:number,
    tov:number,
    stl:number,
    blk:number,
    pf:number,
    plus_minus:number,
    period1Score:number,
    period2Score:number,
    period3Score:number,
    period4Score:number){
      this.id = id;
      this.season_id = season_id;
      this.team_id = team_id;
      this.team_abbreviation = team_abbreviation;
      this.team_name = team_name;
      this.game_id = game_id;
      this.game_date = game_date;
      this.matchup = matchup;
      this.WL = WL;
      this.min = min;
      this.fgm = fgm;
      this.fga = fga;
      this.fg_PCT = fg_PCT;
      this.fg3M = fg3M;
      this.fg3A = fg3A;
      this.fg3_PCT = fg3_PCT;
      this.ftm = ftm;
      this.fta = fta;
      this.ft_PCT = ft_PCT;
      this.oreb = oreb;
      this.dreb = dreb;
      this.reb = reb;
      this.ast = ast;
      this.tov = tov;
      this.stl = stl;
      this.blk = blk;
      this.plus_minus = plus_minus;
      this.pf = pf;
      this.pts = pts;
      this.period1Score = period1Score;
      this.period2Score = period2Score;
      this.period3Score = period3Score;
      this.period4Score = period4Score;
  }

}
