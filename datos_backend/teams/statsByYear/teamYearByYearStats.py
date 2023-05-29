from nba_api.stats.endpoints._base import Endpoint
from nba_api.stats.library.http import NBAStatsHTTP
from nba_api.stats.library.parameters import LeagueID, PerModeSimple, SeasonTypeAllStar

import json
import pandas as pd

class TeamYearByYearStats(Endpoint):
    endpoint = 'teamyearbyyearstats'
    expected_data = {'TeamStats': ['TEAM_ID', 'TEAM_CITY', 'TEAM_NAME', 'YEAR', 'GP', 'WINS', 'LOSSES', 'WIN_PCT', 'CONF_RANK', 'DIV_RANK', 'PO_WINS', 'PO_LOSSES', 'CONF_COUNT', 'DIV_COUNT', 'NBA_FINALS_APPEARANCE', 'FGM', 'FGA', 'FG_PCT', 'FG3M', 'FG3A', 'FG3_PCT', 'FTM', 'FTA', 'FT_PCT', 'OREB', 'DREB', 'REB', 'AST', 'PF', 'STL', 'TOV', 'BLK', 'PTS', 'PTS_RANK']}

    nba_response = None
    data_sets = None
    player_stats = None
    team_stats = None
    headers = None

    def __init__(self,
                 team_id,
                 league_id=LeagueID.default,
                 per_mode_simple=PerModeSimple.default,
                 season_type_all_star=SeasonTypeAllStar.default,
                 proxy=None,
                 headers=None,
                 timeout=120,
                 get_request=True):
        self.proxy = proxy
        if headers is not None:
            self.headers = headers
        self.timeout = timeout
        self.parameters = {
                'TeamID': team_id,
                'LeagueID': league_id,
                'PerMode': per_mode_simple,
                'SeasonType': season_type_all_star
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
        print(self.endpoint)
        self.load_response()
        
    def load_response(self):
        data_sets = self.nba_response.get_data_sets()
        self.data_sets = [Endpoint.DataSet(data=data_set) for data_set_name, data_set in data_sets.items()]
        self.team_stats = Endpoint.DataSet(data=data_sets['TeamStats'])

# divimos todos los id en lotes para evitar el timeout
idsTeams1 = [
   1610612737,
   1610612738,
   1610612751,
   1610612766,
   1610612741
]
idsTeams2 = [
    1610612739,
    1610612742,
    1610612743,
    1610612765,
    1610612744
]
idsTeams3 = [
    1610612745,
    1610612754,
    1610612746,
    1610612747,
    1610612763
]
idsTeams4 = [
    1610612748,
    1610612749,
    1610612750,
    1610612740,
    1610612752
]
idsTeams5 = [
    1610612760,
    1610612753,
    1610612755,
    1610612756,
    1610612757
]
idsTeams6 = [
    1610612758,
    1610612759,
    1610612761,
    1610612762,
    1610612764
]

teamsStats_list = []  # Crear una lista vacía para almacenar los diccionarios

for idTeam in idsTeams1:
    objTeamsStats = TeamYearByYearStats(idTeam)
    teamsStats_string = objTeamsStats.get_response()
    teamsStats_dictionary = json.loads(teamsStats_string)
    teamsStats_data = teamsStats_dictionary['resultSets'][0]
    teamsStats_data.pop('name')
    teamsStats_data.pop('headers')
    for element in teamsStats_data['rowSet'][-5:]:
        teamsStats_list.append(element)
        
for idTeam in idsTeams2:
    objTeamsStats = TeamYearByYearStats(idTeam)
    teamsStats_string = objTeamsStats.get_response()
    teamsStats_dictionary = json.loads(teamsStats_string)
    teamsStats_data = teamsStats_dictionary['resultSets'][0]
    teamsStats_data.pop('name')
    teamsStats_data.pop('headers')
    for element in teamsStats_data['rowSet'][-5:]:
        teamsStats_list.append(element)
        
for idTeam in idsTeams3:
    objTeamsStats = TeamYearByYearStats(idTeam)
    teamsStats_string = objTeamsStats.get_response()
    teamsStats_dictionary = json.loads(teamsStats_string)
    teamsStats_data = teamsStats_dictionary['resultSets'][0]
    teamsStats_data.pop('name')
    print(teamsStats_data.pop('headers'))
    for element in teamsStats_data['rowSet'][-5:]:
        teamsStats_list.append(element)
        
for idTeam in idsTeams4:
    objTeamsStats = TeamYearByYearStats(idTeam)
    teamsStats_string = objTeamsStats.get_response()
    teamsStats_dictionary = json.loads(teamsStats_string)
    teamsStats_data = teamsStats_dictionary['resultSets'][0]
    teamsStats_data.pop('name')
    teamsStats_data.pop('headers')
    for element in teamsStats_data['rowSet'][-5:]:
        teamsStats_list.append(element)
        
for idTeam in idsTeams5:
    objTeamsStats = TeamYearByYearStats(idTeam)
    teamsStats_string = objTeamsStats.get_response()
    teamsStats_dictionary = json.loads(teamsStats_string)
    teamsStats_data = teamsStats_dictionary['resultSets'][0]
    teamsStats_data.pop('name')
    teamsStats_data.pop('headers')
    for element in teamsStats_data['rowSet'][-5:]:
        teamsStats_list.append(element)
        
for idTeam in idsTeams6:
    objTeamsStats = TeamYearByYearStats(idTeam)
    teamsStats_string = objTeamsStats.get_response()
    teamsStats_dictionary = json.loads(teamsStats_string)
    teamsStats_data = teamsStats_dictionary['resultSets'][0]
    teamsStats_data.pop('name')
    print(teamsStats_data.pop('headers'))
    for element in teamsStats_data['rowSet'][-5:]:
        teamsStats_list.append(element)
        
teamsStats_df = pd.DataFrame(teamsStats_list)
teamsStats_df.to_csv('teamsStatsYearByYear.csv')



