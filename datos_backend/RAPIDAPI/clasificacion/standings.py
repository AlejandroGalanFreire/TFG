import http.client
import json
import pandas as pd

config = {
    'acbAPI': "api-basketball.p.rapidapi.com"
}

conn = http.client.HTTPSConnection(config.acbAPI)

headers = {
    'X-RapidAPI-Key': "6cfeab118amsh23940103f87656ap1bbd6ejsn972f0dc49053",
    'X-RapidAPI-Host': "api-basketball.p.rapidapi.com"
}

conn.request("GET", "/standings?league=117&season=2022-2023", headers=headers)

res = conn.getresponse()
data = res.read()

clasification_dictionary = json.loads(data.decode("utf-8"))

nameAPI = 'name'
    

listaACB = []
for i in range(18):
    teamName = clasification_dictionary['response'][0][i]['team'][nameAPI]
    partidosJugados = clasification_dictionary['response'][0][i]['games']['played']
    victorias = clasification_dictionary['response'][0][i]['games']['win']['total']
    victoriasPct = clasification_dictionary['response'][0][i]['games']['win']['percentage']
    derrotas = clasification_dictionary['response'][0][i]['games']['lose']['total']
    
    equipo = {
        'teamName': teamName,
        'partidosJugados': partidosJugados,
        'victorias': victorias,
        'victoriasPct': victoriasPct,
        'derrotas': derrotas
    }
    
    listaACB.append(equipo)
    
df = pd.DataFrame(listaACB)
df.to_csv('clasificacionACB.csv')
    

