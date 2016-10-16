# alkfejl-2016bead
##<b>Alkalmazások fejlesztése 2016/2017 beadandó</b>

<b>Feladat</b> <br>
Tanulmányi rendszer készítés, minimális funkciókkal. Vendégek számára nincsen semmilyen funkció, az adatok nem publikusak a kívülállok számára. Belépés után meg kell különböztetni a tanár és diák szerepkört. A tanároknak lehetőségük van új tantárgyat felvenni a rendszerbe és a sajátjaikon módosítani, törölni. A diákok pedig felvehetik ezeket a tárgyakat, majd tetszés szerint le is adhatják őket.

<b>Funkciónális követelmények</b>
-	Vendég funkciók nincsenek az oldalon
-	Felhasználóként (tanár és diák) szeretnénk tudni bejeletkezni
-	Felhasználóként szeretnénk módosítani a személyes adatokat
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
-	felhasználó: személyes adatok módosítás, tantárgyak kilistázása
  -	tanár: új tárgy felvétele, modosítása, törlése
  -	diák: tárgyfelvétel, lejelentkezés

<b>Használati esetek</b>
![hasznalati_esetek](https://cloud.githubusercontent.com/assets/14218102/19416852/036f60a6-939c-11e6-99bf-93b50e40b346.png)

<b>Oldaltérkép</b><br>
Publikus:
-	Főoldal
-	Belépés

Felhasználó:
-	Kilépés
-	Személyes adatok
  -	Adatok szerkesztése
  
Tanár:
-	Tárgy kihirdetés
  -	Módosítás
  -	Törlés
  
Diák:
-	Tárgyfelvétel
-	Lejeletkezés

<b>Végpontok</b>
-	GET /: főoldal
-	GET /login: bejelentkezés
-	POST /login: bejelentkezési adatok felküldése
-	GET /profile: személyes adatok
-	POST /profile: személyes adatok felküldése
-	GET /allSubject: tárgyak kilistázása
-	GET /mySubject: felvett/hozzá tartozó tárgyak kilistázása, módosítása
-	GET /addSubject: új tantárgy felvétel
-	POST /addSubject: új tantárgy felvétel adatok felküldése

<b>Oldalvázlatok</b>
<br>Főoldal<br>
![untitled_page](https://cloud.githubusercontent.com/assets/14218102/19416857/1ad63102-939c-11e6-8493-9938f34c8cf7.jpg)
<br>Tartalommal rendelkező oldal
![untitled_page_2](https://cloud.githubusercontent.com/assets/14218102/19416859/20c0e1d4-939c-11e6-920a-56fc51c57559.jpg)

<b>Adatmodell</b><br>
![adatmodell](https://cloud.githubusercontent.com/assets/14218102/19416854/11166632-939c-11e6-96df-775d438c4869.png)
