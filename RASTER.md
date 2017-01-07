# Dades Raster

# Ombrejat i pendents - Model d'elevacions digital (ICGC)
Les dades per creat les imatges d'obmgrjat de les muntanyes i els pendents
provenen del model d'elevacions digital de [l'ICGC](http://www.icc.cat/vissir3/)
d'on cal descarregar-ne els fulls manualment. Actualment aquestes dades són ja
dades obertes de la Generalitat de Catalunya.

Els fulls representen les elevacions amb una graella de 2x2m en format Arc/Info
ASCII Grid **AAIGrid** que es poden processar amb eines SIG estàndard. Les dades
utilitsen el sistema de referència ETRS89/UTM31N que es correspon al codi
EPSG:25831

## Eines
1. [GDAL](http://www.gdal.org/) Eina de processament de dades geogràfiques

## Conversió
Suposem que hem creat una estructura de fitxers com la següent:
```
.
+-- elevacions-2m
|   +-- txt
|   +-- zip
```
### Unió
En primer lloc cal unit els diferents fulls de les elevacions en un únic fitxers
lògic. D'aquesta manera ens podem evitar fàcilment les imperfeccions que poden
sorgir amb les imatges quan es canvien els sistemes de referència. Ens situem
en el directori elevacions-2m i creem un fitxer virtual

```sh
$ gdalbuildvrt mde.vrt ./txt/*.txt
```

### Ombrejat
Per ombrejar les muntanyes s'executa el procediment `hillshade` de gdal

```sh
$ gdaldem hillshade mde.vrt hillshade.tif
```

### Pendents
Amb els pendents fem una operació similar que amb l'ombrejat. Els pendents
s'utilitzen per emfatitzar i complementar l'ombrejat. Cal disposar d'un fitxer
que defineixi el color utilitzar per a cada pendent que anomenarem
`slope-ramp.txt`:

```
90       0   0   0
0      255 255 255
```

Executem les següents comandes:

```sh
$ gdaldem slope mde.vrt slope.tif
$ gdaldem color-relief slope.tif slope-ramp.txt slope-shade.tif
```

# Us del sòl
Les dades d'ús del sòl (mapa de cobertures del terreny) prové de les dades de
[SIGPAC](http://dadesobertes.gencat.cat/ca/cercador/cerca-cataleg?q=sigpac)
que provenen de les dades obertes de la Generalitat de Catalunya.

Aquestes dades estan en format Shapefile i per tant  no cal fer-ne cap
processament, es poden incloure al mapa i definir-ne les regles de color sense
cap més procediment.

S'utilitza SIGPAC per la seva simplicitat. En versions més elaborades
preferiríem usar el [Mapa de cobertes del sòl de Catalunya](http://www.creaf.uab.es/mcsc/)
que manté el [CREAF](http://www.creaf.cat/) que és molt més acurat però a la
vegada més complexes.
