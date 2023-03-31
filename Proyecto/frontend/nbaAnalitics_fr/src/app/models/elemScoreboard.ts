export class ElemScoreboard{
  id:number;
  team_id:number;
  league_id:number;
  season_id:number;
  standingsdate:string;
  conference:string;
  team:string;
  played:number;
  won:number;
  lost:number;
  won_pct:number;
  home_record:string;
  road_record:string;


  constructor(id:number,
    team_id:number,
    league_id:number,
    season_id:number,
    standingsdate:string,
    conference:string,
    team:string,
    played:number,
    won:number,
    lost:number,
    won_pct:number,
    home_record:string,
    road_record:string){
    this.id = id;
    this.team_id = team_id;
    this.league_id = league_id;
    this.season_id = season_id;
    this.standingsdate = standingsdate;
    this.conference = conference;
    this.team = team;
    this.played = played;
    this.won = won;
    this.lost = lost;
    this.won_pct = won_pct;
    this.home_record = home_record;
    this.road_record = road_record;
  }

}
