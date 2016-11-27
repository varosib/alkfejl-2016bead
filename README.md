# alkfejl-2016bead
##<b>Alkalmazások fejlesztése 2016/2017 beadandó</b>

<b>Feladat</b> <br>
Tanulmányi rendszer készítés, minimális funkciókkal. Vendégek számára nincsen semmilyen funkció, az adatok nem publikusak a kívülállok számára. Belépés után meg kell különböztetni a tanár és diák szerepkört. A tanároknak lehetőségük van új tantárgyat felvenni a rendszerbe és a sajátjaikon módosítani, törölni. A diákok pedig felvehetik ezeket a tárgyakat, majd tetszés szerint le is adhatják őket.

<b>Funkciónális követelmények</b>
-	Vendég funkciók nincsenek az oldalon
-	Felhasználóként (tanár és diák) szeretnénk tudni bejeletkezni
-	Tanárként szeretnénk új tárgyat felvenni
-	Tanárként szeretnénk tárgyat módosítani
-	Tanárként szeretnénk tárgyat törölöni
-	Diákként szeretnénk egy tárgyra fel- és lejelentkezni

<b>Nem funkcionális követelmények</b>
-	Felhasználóbarót környezet
-	Gyors működés
-	Biztonságos működés

<b>Szerepkörök</b>
-	vendég: nincs funkció
-	felhasználó: tantárgyak böngészése
  -	tanár: új tárgy felvétele, modosítása, törlése
  -	diák: tárgyfelvétel, lejelentkezés

<b>Használati esetek</b>
![uj_adatmodell](https://cloud.githubusercontent.com/assets/14218102/20648261/3dec0bb8-b4a2-11e6-9f11-6cb0ec9ddf3a.png)

<b>Oldaltérkép</b><br>
Publikus:
-	Főoldal
-	Belépés

Felhasználó:
- Tárgyak böngészése
-	Kilépés
  
Tanár:
-	Tárgy meghirdetés
  -	Módosítás
  -	Törlés
  
Diák:
-	Tárgyfelvétel
  -	Lejeletkezés

<b>Végpontok</b>
-	GET /: főoldal
- GET /subjects/mysubjects: felvett tárgyak
- POST /subjects/mysubjects: tárgy leadás
- POST /subjects/take: tárgy felvétel
- GET /subjects/create: új tárgy meghirdetés
- POST /subjects/create: új tárgy adatainak felküldése
- GET /subjects/:id/edit: tárgy szerkesztése
- POST /subjects/:id/edit: szerkesztett tárgy felküldése
- GET /subjects/:id/delete: tárgy törlése
- GET /subjects/:id: tárgy megtekintése
- GET /subjects: tárgyak közötti keresés
-	GET /login: bejelentkezés
-	POST /login: bejelentkezési adatok felküldése
- GET /logout: kijelentkezés

<b>Oldalvázlatok</b>
<br>Főoldal<br>
![untitled_page](https://cloud.githubusercontent.com/assets/14218102/19416857/1ad63102-939c-11e6-8493-9938f34c8cf7.jpg)
<br>Tartalommal rendelkező oldal
![untitled_page_2](https://cloud.githubusercontent.com/assets/14218102/19416859/20c0e1d4-939c-11e6-920a-56fc51c57559.jpg)

<b>Adatmodell</b><br>
![adatmodell](https://cloud.githubusercontent.com/assets/14218102/19416854/11166632-939c-11e6-96df-775d438c4869.png)
