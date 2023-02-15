# -*- coding: utf-8 -*-
"""
Obtain info of nba_api

"""
# librería para tratar dataframes
import pandas as pd

# API para extraer datos de la NBA
from nba_api.stats.static import players
from nba_api.stats.static import teams

# obtenemos los jugadores y los llevamos a un diccionario (requisito: lista de jugadores)
player_dictionary = players.get_players()
players_active = [player for player in player_dictionary if(player['is_active'] == True)]
players_df = pd.DataFrame(players_active)
players_df.to_csv('players_active.csv', index=False)

# obtenemos los equipos y los llevamos a un diccionario (requisito: Lista de equipos)
teams_dictionary = teams.get_teams()
teams_df = pd.DataFrame(teams_dictionary)
teams_df.to_csv('allTeams.csv', index=False)



