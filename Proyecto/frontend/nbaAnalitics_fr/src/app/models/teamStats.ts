export class TeamStats{
  id:number;
  team_name:string;
  min:number;
  FGM:number;
  FGA:number;
  FG_PCT:number;
  FG3M:number;
  FG3A:number;
  FG3_PCT:number;
  FTM:number;
  FTA:number;
  FT_PCT:number;
  OREB:number;
  DREB:number;
  REB:number;
  AST:number;
  TOV:number;
  STL:number;
  BLK:number;
  BLKA:number;
  PF:number;
  PTS:number;


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
    this.FGM = FGM;
    this.FGA = FGA;
    this.FG_PCT = FG_PCT;
    this.FG3M = FG3M;
    this.FG3A = FG3A;
    this.FG3_PCT = FG3_PCT;
    this.FTM = FTM;
    this.FTA = FTA;
    this.FT_PCT = FT_PCT;
    this.OREB = OREB;
    this.DREB = DREB;
    this.REB = REB;
    this.AST = AST;
    this.TOV = TOV;
    this.STL = STL;
    this.BLK = BLK;
    this.BLKA = BLKA;
    this.PF = PF;
    this.PTS = PTS;
  }

}
