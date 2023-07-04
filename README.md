# TFG
Repositorio utilizado para el control de versiones de los distintos apartados incluidos en el Trabajo de Fin de Grado, de Ingeniería Informática en la Universidad de Oviedo.
Este proyecto trata sobre la realización de un sistema de reporting y estadística avanzada en el baloncesto profesional, que tiene como objetivo lograr una aplicación 
atractiva y fácil de usar para el usuario, además de conseguir que el código sea escalable y mantenible.

Para ello, la aplicación se ha realizado a través del desarrollo de subsistemas distintos que se integran de manera que se consiga una modularidad del código adecuada,
dando lugar a una REST API independiente de cualquier fuente de datos que no sea la propia del sistema, y utilizable por cualquier frontend que la desee consumir.

Para que esto sea posible se hace una previa extracción de datos de distintas fuentes de información y se procesan los datos normalizándolos para el posterior almacenamiento
en nuestra Base de Datos.

Finalmente el frontend se limite a consumir dichos datos y definir la interfaz de usuario.

# Estructura del repositorio
Los datos almacenados en este repositorio son los siguientes:
- Proyecto: carpeta que contiene todo el codigo fuente, tanto del frontent, como del backend, además de los ficheros de extracción y normalización de los datos.
- base de datos: carpeta que contiene dos subdirectorios, uno llamado 'nbaanalitics_db' que es la propia base de datos, y otro llamado 'tablas' que son las tablas almacenadas en esta.
- documentacion subsistemas: carpeta que contiene la documentación generada del código para el backend y para el frontend
- PlanificacionInicial.mpp: fichero de Project con la planificación realizada al principio del proyecto.
- PlanificacionFinal.mpp: fichero de Project con la planificación final, ajustando la inicial a medida que el proyecto iba avanzando.
- Presupuesto.xlsx: fichero Excel con el proceso seguido para calcular el coste del proyecto.
