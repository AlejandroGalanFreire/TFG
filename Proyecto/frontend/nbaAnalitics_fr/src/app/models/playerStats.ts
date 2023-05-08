export class PlayerStats{
  id:number;
	player_id:number;
	player_name:string;
	nickname:string;
	team_id:number;
	team_abbrev:string;
	age:number;
	gp:number;
	won:number;
	lost:number;
	won_PCT:number;
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
	tov:number;
	stl:number;
	blk:number;
	blka:number;
	pf:number;
	pts:number;
  min:number;

  constructor(id:number = 0,
    player_id:number = 0,
    player_name:string = '',
    nickname:string = '',
    team_id:number = 0,
    team_abbrev:string = '',
    age:number = 0,
    gp:number = 0,
    won:number = 0,
    lost:number = 0,
    won_PCT:number = 0,
    fgm:number = 0,
    fga:number = 0,
    fg_PCT:number = 0,
    fg3M:number = 0,
    fg3A:number = 0,
    fg3_PCT:number = 0,
    ftm:number = 0,
    fta:number = 0,
    ft_PCT:number = 0,
    oreb:number = 0,
    dreb:number = 0,
    reb:number = 0,
    ast:number = 0,
    tov:number = 0,
    stl:number = 0,
    blk:number = 0,
    blka:number = 0,
    pf:number = 0,
    pts:number = 0,
    min:number = 0){
      this.id = id;
      this.player_id = player_id;
      this.player_name = player_name;
      this.nickname = nickname;
      this.team_id = team_id;
      this.team_abbrev = team_abbrev;
      this.age = age;
      this.gp = gp;
      this.won = won;
      this.lost = lost;
      this.won_PCT = won_PCT;
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
      this.blka = blka;
      this.pf = pf;
      this.pts = pts;
      this.min = min;
  }

}
