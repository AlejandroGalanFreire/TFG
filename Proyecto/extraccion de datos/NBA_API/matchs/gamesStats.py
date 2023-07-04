# -*- coding: utf-8 -*-
"""
Created on Fri Apr 14 16:19:16 2023

@author: Alejandro Galán Freire
"""

from nba_api.stats.endpoints._base import Endpoint
from nba_api.stats.library.http import NBAStatsHTTP
from nba_api.live.nba.library.http import NBALiveHTTP
from nba_api.stats.library.parameters import SeasonTypeAllStar, Season, PlayerOrTeamAbbreviation, ConferenceNullable, DivisionSimpleNullable, LocationNullable, OutcomeNullable, SeasonNullable, SeasonSegmentNullable, StarterBenchNullable, DivisionNullable
import json
import pandas as pd

class LeagueGameFinder(Endpoint):
    endpoint = 'leaguegamefinder'
    expected_data = {'LeagueGameFinderResults': ['SEASON_ID', 'TEAM_ID', 'TEAM_ABBREVIATION', 'TEAM_NAME', 'GAME_ID', 'GAME_DATE', 'MATCHUP', 'WL', 'MIN', 'PTS', 'FGM', 'FGA', 'FG_PCT', 'FG3M', 'FG3A', 'FG3_PCT', 'FTM', 'FTA', 'FT_PCT', 'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TOV', 'PF', 'PLUS_MINUS']}

    nba_response = None
    data_sets = None
    player_stats = None
    team_stats = None
    headers = None

    def __init__(self,
                 player_or_team_abbreviation=PlayerOrTeamAbbreviation.default,
                 conference_nullable=ConferenceNullable.default,
                 date_from_nullable='',
                 date_to_nullable='',
                 division_simple_nullable=DivisionSimpleNullable.default,
                 draft_number_nullable='',
                 draft_round_nullable='',
                 draft_team_id_nullable='',
                 draft_year_nullable='',
                 eq_ast_nullable='',
                 eq_blk_nullable='',
                 eq_dd_nullable='',
                 eq_dreb_nullable='',
                 eq_fg3a_nullable='',
                 eq_fg3m_nullable='',
                 eq_fg3_pct_nullable='',
                 eq_fga_nullable='',
                 eq_fgm_nullable='',
                 eq_fg_pct_nullable='',
                 eq_fta_nullable='',
                 eq_ftm_nullable='',
                 eq_ft_pct_nullable='',
                 eq_minutes_nullable='',
                 eq_oreb_nullable='',
                 eq_pf_nullable='',
                 eq_pts_nullable='',
                 eq_reb_nullable='',
                 eq_stl_nullable='',
                 eq_td_nullable='',
                 eq_tov_nullable='',
                 game_id_nullable='',
                 gt_ast_nullable='',
                 gt_blk_nullable='',
                 gt_dd_nullable='',
                 gt_dreb_nullable='',
                 gt_fg3a_nullable='',
                 gt_fg3m_nullable='',
                 gt_fg3_pct_nullable='',
                 gt_fga_nullable='',
                 gt_fgm_nullable='',
                 gt_fg_pct_nullable='',
                 gt_fta_nullable='',
                 gt_ftm_nullable='',
                 gt_ft_pct_nullable='',
                 gt_minutes_nullable='',
                 gt_oreb_nullable='',
                 gt_pf_nullable='',
                 gt_pts_nullable='',
                 gt_reb_nullable='',
                 gt_stl_nullable='',
                 gt_td_nullable='',
                 gt_tov_nullable='',
                 league_id_nullable='00',
                 location_nullable=LocationNullable.default,
                 lt_ast_nullable='',
                 lt_blk_nullable='',
                 lt_dd_nullable='',
                 lt_dreb_nullable='',
                 lt_fg3a_nullable='',
                 lt_fg3m_nullable='',
                 lt_fg3_pct_nullable='',
                 lt_fga_nullable='',
                 lt_fgm_nullable='',
                 lt_fg_pct_nullable='',
                 lt_fta_nullable='',
                 lt_ftm_nullable='',
                 lt_ft_pct_nullable='',
                 lt_minutes_nullable='',
                 lt_oreb_nullable='',
                 lt_pf_nullable='',
                 lt_pts_nullable='',
                 lt_reb_nullable='',
                 lt_stl_nullable='',
                 lt_td_nullable='',
                 lt_tov_nullable='',
                 outcome_nullable=OutcomeNullable.default,
                 po_round_nullable='',
                 player_id_nullable='',
                 rookie_year_nullable=SeasonNullable.default,
                 season_nullable=Season.default,
                 season_segment_nullable=SeasonSegmentNullable.default,
                 season_type_nullable=SeasonTypeAllStar.default,
                 starter_bench_nullable=StarterBenchNullable.default,
                 team_id_nullable='',
                 vs_conference_nullable=ConferenceNullable.default,
                 vs_division_nullable=DivisionNullable.default,
                 vs_team_id_nullable='',
                 years_experience_nullable='',
                 proxy=None,
                 headers=None,
                 timeout=30,
                 get_request=True):
        self.proxy = proxy
        if headers is not None:
            self.headers = headers
        self.timeout = timeout
        self.parameters = {
                'PlayerOrTeam': player_or_team_abbreviation,
                'Conference': conference_nullable,
                'DateFrom': date_from_nullable,
                'DateTo': date_to_nullable,
                'Division': division_simple_nullable,
                'DraftNumber': draft_number_nullable,
                'DraftRound': draft_round_nullable,
                'DraftTeamID': draft_team_id_nullable,
                'DraftYear': draft_year_nullable,
                'EqAST': eq_ast_nullable,
                'EqBLK': eq_blk_nullable,
                'EqDD': eq_dd_nullable,
                'EqDREB': eq_dreb_nullable,
                'EqFG3A': eq_fg3a_nullable,
                'EqFG3M': eq_fg3m_nullable,
                'EqFG3_PCT': eq_fg3_pct_nullable,
                'EqFGA': eq_fga_nullable,
                'EqFGM': eq_fgm_nullable,
                'EqFG_PCT': eq_fg_pct_nullable,
                'EqFTA': eq_fta_nullable,
                'EqFTM': eq_ftm_nullable,
                'EqFT_PCT': eq_ft_pct_nullable,
                'EqMINUTES': eq_minutes_nullable,
                'EqOREB': eq_oreb_nullable,
                'EqPF': eq_pf_nullable,
                'EqPTS': eq_pts_nullable,
                'EqREB': eq_reb_nullable,
                'EqSTL': eq_stl_nullable,
                'EqTD': eq_td_nullable,
                'EqTOV': eq_tov_nullable,
                'GameID': game_id_nullable,
                'GtAST': gt_ast_nullable,
                'GtBLK': gt_blk_nullable,
                'GtDD': gt_dd_nullable,
                'GtDREB': gt_dreb_nullable,
                'GtFG3A': gt_fg3a_nullable,
                'GtFG3M': gt_fg3m_nullable,
                'GtFG3_PCT': gt_fg3_pct_nullable,
                'GtFGA': gt_fga_nullable,
                'GtFGM': gt_fgm_nullable,
                'GtFG_PCT': gt_fg_pct_nullable,
                'GtFTA': gt_fta_nullable,
                'GtFTM': gt_ftm_nullable,
                'GtFT_PCT': gt_ft_pct_nullable,
                'GtMINUTES': gt_minutes_nullable,
                'GtOREB': gt_oreb_nullable,
                'GtPF': gt_pf_nullable,
                'GtPTS': gt_pts_nullable,
                'GtREB': gt_reb_nullable,
                'GtSTL': gt_stl_nullable,
                'GtTD': gt_td_nullable,
                'GtTOV': gt_tov_nullable,
                'LeagueID': league_id_nullable,
                'Location': location_nullable,
                'LtAST': lt_ast_nullable,
                'LtBLK': lt_blk_nullable,
                'LtDD': lt_dd_nullable,
                'LtDREB': lt_dreb_nullable,
                'LtFG3A': lt_fg3a_nullable,
                'LtFG3M': lt_fg3m_nullable,
                'LtFG3_PCT': lt_fg3_pct_nullable,
                'LtFGA': lt_fga_nullable,
                'LtFGM': lt_fgm_nullable,
                'LtFG_PCT': lt_fg_pct_nullable,
                'LtFTA': lt_fta_nullable,
                'LtFTM': lt_ftm_nullable,
                'LtFT_PCT': lt_ft_pct_nullable,
                'LtMINUTES': lt_minutes_nullable,
                'LtOREB': lt_oreb_nullable,
                'LtPF': lt_pf_nullable,
                'LtPTS': lt_pts_nullable,
                'LtREB': lt_reb_nullable,
                'LtSTL': lt_stl_nullable,
                'LtTD': lt_td_nullable,
                'LtTOV': lt_tov_nullable,
                'Outcome': outcome_nullable,
                'PORound': po_round_nullable,
                'PlayerID': player_id_nullable,
                'RookieYear': rookie_year_nullable,
                'Season': season_nullable,
                'SeasonSegment': season_segment_nullable,
                'SeasonType': season_type_nullable,
                'StarterBench': starter_bench_nullable,
                'TeamID': team_id_nullable,
                'VsConference': vs_conference_nullable,
                'VsDivision': vs_division_nullable,
                'VsTeamID': vs_team_id_nullable,
                'YearsExperience': years_experience_nullable
        }
        if get_request:
            self.get_request()
    
    def get_request(self):
        self.nba_response = NBAStatsHTTP().send_api_request(
            endpoint=self.endpoint,
            parameters=self.parameters,
            proxy=self.proxy,
            headers=self.headers,
            timeout=self.timeout,
        )
        self.load_response()
        
    def load_response(self):
        data_sets = self.nba_response.get_data_sets()
        self.data_sets = [Endpoint.DataSet(data=data_set) for data_set_name, data_set in data_sets.items()]
        self.league_game_finder_results = Endpoint.DataSet(data=data_sets['LeagueGameFinderResults'])
        
objGamesStats = LeagueGameFinder()
objGamesStats.load_response()
gamesStats_string = objGamesStats.get_response()
gamesStats_dictionary = json.loads(gamesStats_string)

gamesStats_data = gamesStats_dictionary['resultSets'][0]
gamesStats_data.pop('name')
header = gamesStats_data.pop('headers')
print(header)
gamesStats_df = pd.DataFrame(gamesStats_data)
gamesStats_df.to_csv('gamesStats.csv')

# almacenar todos los game_id en una lista sin repetidos
games_ids = []
games_ids_sin_repetidos = [];
for resultado in gamesStats_dictionary['resultSets'][0]['rowSet']:
    games_ids.append(resultado[4])

games_ids_sin_repetidos = list(set(games_ids));
print(len(games_ids_sin_repetidos))  
    
# añadir el código de boxScore con cada game_id
class BoxScore(Endpoint):
    endpoint_url = 'boxscore/boxscore_{game_id}.json'
    expected_data = {'meta': {'version': 1, 'code': 200, 'request': 'http://nba.cloud/games/0022000180/boxscore?Format=json', 'time': '2021-01-15 23:51:25.282704'}, 'game': {'gameId': '0022000180', 'gameTimeLocal': '2021-01-15T19:30:00-05:00', 'gameTimeUTC': '2021-01-16T00:30:00Z', 'gameTimeHome': '2021-01-15T19:30:00-05:00', 'gameTimeAway': '2021-01-15T19:30:00-05:00', 'gameEt': '2021-01-15T19:30:00-05:00', 'duration': 125, 'gameCode': '20210115/ORLBOS', 'gameStatusText': 'Final', 'gameStatus': 3, 'regulationPeriods': 4, 'period': 4, 'gameClock': 'PT00M00.00S', 'attendance': 0, 'sellout': '0', 'arena': {'arenaId': 17, 'arenaName': 'TD Garden', 'arenaCity': 'Boston', 'arenaState': 'MA', 'arenaCountry': 'US', 'arenaTimezone': 'America/New_York'}, 'officials': [{'personId': 201638, 'name': 'Brent Barnaky', 'nameI': 'B. Barnaky', 'firstName': 'Brent', 'familyName': 'Barnaky', 'jerseyNum': '36', 'assignment': 'OFFICIAL1'}], 'homeTeam': {'teamId': 1610612738, 'teamName': 'Celtics', 'teamCity': 'Boston', 'teamTricode': 'BOS', 'score': 124, 'inBonus': '1', 'timeoutsRemaining': 2, 'periods': [{'period': 1, 'periodType': 'REGULAR', 'score': 34}], 'players': [{'status': 'ACTIVE', 'order': 1, 'personId': 1627759, 'jerseyNum': '7', 'position': 'SF', 'starter': '1', 'oncourt': '0', 'played': '1', 'statistics': {'assists': 8, 'blocks': 0, 'blocksReceived': 0, 'fieldGoalsAttempted': 12, 'fieldGoalsMade': 6, 'fieldGoalsPercentage': 0.5, 'foulsOffensive': 0, 'foulsDrawn': 4, 'foulsPersonal': 1, 'foulsTechnical': 0, 'freeThrowsAttempted': 7, 'freeThrowsMade': 7, 'freeThrowsPercentage': 1.0, 'minus': 50.0, 'minutes': 'PT25M01.00S', 'minutesCalculated': 'PT25M', 'plus': 65.0, 'plusMinusPoints': 15.0, 'points': 21, 'pointsFastBreak': 0, 'pointsInThePaint': 6, 'pointsSecondChance': 0, 'reboundsDefensive': 2, 'reboundsOffensive': 0, 'reboundsTotal': 2, 'steals': 1, 'threePointersAttempted': 5, 'threePointersMade': 2, 'threePointersPercentage': 0.4, 'turnovers': 2, 'twoPointersAttempted': 7, 'twoPointersMade': 4, 'twoPointersPercentage': 0.5714285714285711}, 'name': 'Jaylen Brown', 'nameI': 'J. Brown', 'firstName': 'Jaylen', 'familyName': 'Brown'}], 'statistics': {'assists': 25, 'assistsTurnoverRatio': 2.27272727272727, 'benchPoints': 66, 'biggestLead': 29, 'biggestLeadScore': '72-101', 'biggestScoringRun': 13, 'biggestScoringRunScore': '72-101', 'blocks': 4, 'blocksReceived': 1, 'fastBreakPointsAttempted': 9, 'fastBreakPointsMade': 5, 'fastBreakPointsPercentage': 0.555555555555556, 'fieldGoalsAttempted': 88, 'fieldGoalsEffectiveAdjusted': 0.607954545454545, 'fieldGoalsMade': 45, 'fieldGoalsPercentage': 0.511363636363636, 'foulsOffensive': 0, 'foulsDrawn': 16, 'foulsPersonal': 18, 'foulsTeam': 18, 'foulsTechnical': 0, 'foulsTeamTechnical': 0, 'freeThrowsAttempted': 19, 'freeThrowsMade': 17, 'freeThrowsPercentage': 0.894736842105263, 'leadChanges': 4, 'minutes': 'PT240M00.00S', 'minutesCalculated': 'PT240M', 'points': 124, 'pointsAgainst': 97, 'pointsFastBreak': 13, 'pointsFromTurnovers': 16, 'pointsInThePaint': 48, 'pointsInThePaintAttempted': 36, 'pointsInThePaintMade': 24, 'pointsInThePaintPercentage': 0.666666666666666, 'pointsSecondChance': 11, 'reboundsDefensive': 39, 'reboundsOffensive': 6, 'reboundsPersonal': 45, 'reboundsTeam': 6, 'reboundsTeamDefensive': 2, 'reboundsTeamOffensive': 4, 'reboundsTotal': 51, 'secondChancePointsAttempted': 6, 'secondChancePointsMade': 4, 'secondChancePointsPercentage': 0.666666666666666, 'steals': 7, 'threePointersAttempted': 42, 'threePointersMade': 17, 'threePointersPercentage': 0.40476190476190504, 'timeLeading': 'PT47M16.00S', 'timesTied': 0, 'trueShootingAttempts': 96.36, 'trueShootingPercentage': 0.6434205064342051, 'turnovers': 10, 'turnoversTeam': 1, 'turnoversTotal': 11, 'twoPointersAttempted': 46, 'twoPointersMade': 28, 'twoPointersPercentage': 0.608695652173913}}, 'awayTeam': {'teamId': 1610612753, 'teamName': 'Magic', 'teamCity': 'Orlando', 'teamTricode': 'ORL', 'score': 97, 'inBonus': '1', 'timeoutsRemaining': 2, 'periods': [{'period': 1, 'periodType': 'REGULAR', 'score': 28}], 'players': [{'status': 'ACTIVE', 'order': 1, 'personId': 203516, 'jerseyNum': '11', 'position': 'SF', 'starter': '1', 'oncourt': '0', 'played': '1', 'statistics': {'assists': 0, 'blocks': 0, 'blocksReceived': 0, 'fieldGoalsAttempted': 4, 'fieldGoalsMade': 1, 'fieldGoalsPercentage': 0.25, 'foulsOffensive': 0, 'foulsDrawn': 0, 'foulsPersonal': 3, 'foulsTechnical': 0, 'freeThrowsAttempted': 0, 'freeThrowsMade': 0, 'freeThrowsPercentage': 0.0, 'minus': 41.0, 'minutes': 'PT14M34.00S', 'minutesCalculated': 'PT14M', 'plus': 36.0, 'plusMinusPoints': -5.0, 'points': 2, 'pointsFastBreak': 0, 'pointsInThePaint': 2, 'pointsSecondChance': 0, 'reboundsDefensive': 1, 'reboundsOffensive': 0, 'reboundsTotal': 1, 'steals': 0, 'threePointersAttempted': 2, 'threePointersMade': 0, 'threePointersPercentage': 0.0, 'turnovers': 0, 'twoPointersAttempted': 2, 'twoPointersMade': 1, 'twoPointersPercentage': 0.5}, 'name': 'James Ennis III', 'nameI': 'J. Ennis III', 'firstName': 'James', 'familyName': 'Ennis III'}], 'statistics': {'assists': 14, 'assistsTurnoverRatio': 1.07692307692308, 'benchPoints': 33, 'biggestLead': 1, 'biggestLeadScore': '4-3', 'biggestScoringRun': 13, 'biggestScoringRunScore': '72-101', 'blocks': 1, 'blocksReceived': 4, 'fastBreakPointsAttempted': 7, 'fastBreakPointsMade': 2, 'fastBreakPointsPercentage': 0.28571428571428603, 'fieldGoalsAttempted': 94, 'fieldGoalsEffectiveAdjusted': 0.441489361702128, 'fieldGoalsMade': 38, 'fieldGoalsPercentage': 0.404255319148936, 'foulsOffensive': 2, 'foulsDrawn': 18, 'foulsPersonal': 16, 'foulsTeam': 14, 'foulsTechnical': 1, 'foulsTeamTechnical': 0, 'freeThrowsAttempted': 22, 'freeThrowsMade': 14, 'freeThrowsPercentage': 0.636363636363636, 'leadChanges': 4, 'minutes': 'PT240M00.00S', 'minutesCalculated': 'PT240M', 'points': 97, 'pointsAgainst': 124, 'pointsFastBreak': 8, 'pointsFromTurnovers': 10, 'pointsInThePaint': 52, 'pointsInThePaintAttempted': 47, 'pointsInThePaintMade': 26, 'pointsInThePaintPercentage': 0.553191489361702, 'pointsSecondChance': 20, 'reboundsDefensive': 31, 'reboundsOffensive': 15, 'reboundsPersonal': 46, 'reboundsTeam': 12, 'reboundsTeamDefensive': 4, 'reboundsTeamOffensive': 8, 'reboundsTotal': 58, 'secondChancePointsAttempted': 16, 'secondChancePointsMade': 9, 'secondChancePointsPercentage': 0.5625, 'steals': 5, 'threePointersAttempted': 28, 'threePointersMade': 7, 'threePointersPercentage': 0.25, 'timeLeading': 'PT00M30.00S', 'timesTied': 0, 'trueShootingAttempts': 103.68, 'trueShootingPercentage': 0.46778549382716, 'turnovers': 11, 'turnoversTeam': 2, 'turnoversTotal': 13, 'twoPointersAttempted': 66, 'twoPointersMade': 31, 'twoPointersPercentage': 0.46969696969696995}}}}

    arena = None
    away_team = None
    away_team_player_stats = None
    away_team_stats = None
    data_sets = None
    headers = None
    home_team = None
    home_team_player_stats = None
    home_team_stats = None
    game = None
    game_details = None
    nba_response = None
    officials = None

    def __init__(self,
                 game_id,
                 proxy=None,
                 headers=None,
                 timeout=30,
                 get_request=True):
        self.game_id = game_id
        self.proxy = proxy
        if headers is not None:
            self.headers = headers
        self.timeout = timeout
        if get_request:
            self.get_request()

    def get_request(self):
        self.nba_response = NBALiveHTTP().send_api_request(
            endpoint=self.endpoint_url.format(game_id=self.game_id),
            parameters = {},
            proxy=self.proxy,
            headers=self.headers,
            timeout=self.timeout
        )
        self.load_response()
        
    def load_response(self):
        data_sets = self.nba_response.get_dict()
        if 'game' in data_sets:
            self.game = Endpoint.DataSet(data=data_sets['game'])
            self.game_details = self.game.get_dict().copy()
            if 'arena' in self.game.get_dict():
                self.arena = Endpoint.DataSet(data=data_sets['game']['arena'])
                self.game_details.pop('arena')
            if 'officials' in self.game.get_dict():
                self.officials = Endpoint.DataSet(data=data_sets['game']['officials'])
                self.game_details.pop('officials')
            if 'homeTeam' in self.game.get_dict():
                self.home_team = Endpoint.DataSet(data=data_sets['game']['homeTeam'])
            
                #Home Team Player Stats
                self.home_team_player_stats = Endpoint.DataSet(data=data_sets['game']['homeTeam']['players'])

                #Home Team Stats
                home_team_stats = self.home_team.get_dict().copy()
                home_team_stats.pop('players')
                self.home_team_stats = Endpoint.DataSet(data=home_team_stats)                       
            
                self.game_details.pop('homeTeam')
            if 'awayTeam' in self.game.get_dict():
                self.away_team = Endpoint.DataSet(data=data_sets['game']['awayTeam'])

                #Away Team Player Stats
                self.away_team_player_stats = Endpoint.DataSet(data=data_sets['game']['awayTeam']['players'])

                #Away Team Stats
                away_team_stats = self.away_team.get_dict().copy()
                away_team_stats.pop('players')
                self.away_team_stats = Endpoint.DataSet(data=away_team_stats)

                self.game_details.pop('awayTeam')
            self.game_details = Endpoint.DataSet(data=self.game_details)
            
periods = [] # Lista que almacena los puntos en cada cuarto de todos los equipos
             # en un partido en concreto
for game_id in games_ids_sin_repetidos:
    # Creamos la lista que almacene los cuartos de los equipos de esta iteración
    # Una para el homeTeam y otra para el awayTeam
    homeTeamData = []
    awayTeamData = []
    
    # creamos el boxScore con el game_id de la iteración para obtener sus datos
    boxScore = BoxScore(game_id)
    boxScore.load_response() # cargamos los datos
    # Pasamos los datos a un diccionario para poder acceder a ellos
    boxScore_string = boxScore.get_response()
    boxScore_dict = json.loads(boxScore_string)
    
    # HOME TEAM
    gameId = boxScore_dict['game']['gameId']
    homeTeamId = boxScore_dict['game']['homeTeam']['teamId']
    period1Score = boxScore_dict['game']['homeTeam']['periods'][0]['score']
    period2Score = boxScore_dict['game']['homeTeam']['periods'][1]['score']
    period3Score = boxScore_dict['game']['homeTeam']['periods'][2]['score']
    period4Score = boxScore_dict['game']['homeTeam']['periods'][3]['score']
    homeTeamData.append(gameId)
    homeTeamData.append(homeTeamId)
    homeTeamData.append(period1Score)
    homeTeamData.append(period2Score)
    homeTeamData.append(period3Score)
    homeTeamData.append(period4Score)
    # Añadimos a lista global
    periods.append(homeTeamData)
    
    # AWAY TEAM
    awayTeamId = boxScore_dict['game']['awayTeam']['teamId']
    period1Score = boxScore_dict['game']['awayTeam']['periods'][0]['score']
    period2Score = boxScore_dict['game']['awayTeam']['periods'][1]['score']
    period3Score = boxScore_dict['game']['awayTeam']['periods'][2]['score']
    period4Score = boxScore_dict['game']['awayTeam']['periods'][3]['score']
    awayTeamData.append(gameId)
    awayTeamData.append(awayTeamId)
    awayTeamData.append(period1Score)
    awayTeamData.append(period2Score)
    awayTeamData.append(period3Score)
    awayTeamData.append(period4Score)
    # Añadimos a lista global
    periods.append(awayTeamData)
    
periods_dict = dict()
periods_dict['rowSet'] = periods
periods_df = pd.DataFrame(periods_dict)
periods_df.to_csv('periods.csv')
    
















