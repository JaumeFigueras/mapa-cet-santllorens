# Mapa del CET de Sant Loorenç de Munt i l'Obac
Fitxers i procediment per crear el mapa del CET de Sant Llorenç de Munt i l'Obac

## Eines
Per poder crear i modificar els estils del mapa cal tenir diferents eines
instal·lades a l'ordinador (assumim que s'utilitza linux, encara que tot es pot
fer amb OSX o Windows) amb totes les seves dependències:

1. [Mapnik](http://www.mapnik.org) Eina de renderització de mapes
2. [Kosmtik](https://github.com/kosmtik/kosmtik) Eina de pre-visualització de
renderitzat de mapaes
3. [PostgreSQL](https://www.postgresql.org/) Com a gestor de base de dades
4. [PostGIS](http://www.postgis.net/) Extensions geoespaials per a postgresql
5. [Osmosis](https://wiki.openstreetmap.org/wiki/Osmosis) Eina per a l'extracció
de dades d'Osm
6. [osm2pgsql](http://wiki.openstreetmap.org/wiki/Osm2pgsql) Eina per crear
la base de dades

## Definició de capes
Les capes d'informació amb la localització dels fitxers o les consultes a la
base de dades. La primera capa que es defineix és la primera que es dibuixa,
així s'estableix un ordre de prioritat en la sibologia que es dibuixa.

### Grup 1: Capes ràster
Les capes ràster són imatges creades a partir de la topografia (alçades
i pendents) i dels usos del sòl. L'origen i el processament de les dades està
explicat en el fitxer [RASTER.md](RASTER.md)

| Ordre | Origen | Tipus                             | Identificador  | Classe |
| ----- | ------ | --------------------------------- | -------------- | ------ |
| 1     | SIGPAC | Us del sòl Bages                  | sol_bages      | sol    |
| 2     | SIGPAC | Us del sòl Vallès Oriental        | sol_valles_or  | sol    |
| 3     | SIGPAC | Us del sòl Vallès Occidental      | sol_valles_oc  | sol    |
| 4     | ICGC   | Ombrejat de muntanyes             | hillshade      |        |
| 5     | ICGC   | Pendents                          | slope          |        |

### Grup 2: Límits administratius

| Ordre | Origen | Tipus                         | Identificador     | Classe |
| ----- | ------ | ----------------------------- | ----------------- | ------ |
| 1     | OSM    | Municipis                     | limits_municipals |        |
| 2     | OSM    | Límits Parc Natural           | limits_parc       |        |
