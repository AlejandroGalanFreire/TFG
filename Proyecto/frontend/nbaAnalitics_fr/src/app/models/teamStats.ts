export class TeamStats{
  id:number;
  team_name:string;
  min:number;
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


  constructor(idTeamsStats:number,
    team_name:string,
    min:number,
    FGM:number,
    FGA:number,
    FG_PCT:number,
    FG3M:number,
    FG3A:number,
    FG3_PCT:number,
    FTM:number,
    FTA:number,
    FT_PCT:number,
    OREB:number,
    DREB:number,
    REB:number,
    AST:number,
    TOV:number,
    STL:number,
    BLK:number,
    BLKA:number,
    PF:number,
    PTS:number){
    this.id = idTeamsStats;
    this.team_name = team_name;
    this.min = min;
    this.fgm = FGM;
    this.fga = FGA;
    this.fg_PCT = FG_PCT;
    this.fg3M = FG3M;
    this.fg3A = FG3A;
    this.fg3_PCT = FG3_PCT;
    this.ftm = FTM;
    this.fta = FTA;
    this.ft_PCT = FT_PCT;
    this.oreb = OREB;
    this.dreb = DREB;
    this.reb = REB;
    this.ast = AST;
    this.tov = TOV;
    this.stl = STL;
    this.blk = BLK;
    this.blka = BLKA;
    this.pf = PF;
    this.pts = PTS;
  }

}
