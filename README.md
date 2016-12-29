# alkfejl-2016bead
##<b>Alkalmazások fejlesztése 2016/2017 beadandó</b>

<b>Feladat</b> <br>
Tanulmányi rendszer készítés, minimális funkciókkal. Vendégek számára nincsen semmilyen funkció, az adatok nem publikusak a kívülállok számára. Belépés után meg kell különböztetni a tanár és diák szerepkört. A tanároknak lehetőségük van új tantárgyat felvenni a rendszerbe és a sajátjaikon módosítani, törölni. A diákok pedig felvehetik ezeket a tárgyakat, majd tetszés szerint le is adhatják őket.

<b>Funkciónális követelmények</b>
-	Vendég funkciók nincsenek az oldalon
-	Felhasználóként (tanár és diák) szeretnénk tudni bejeletkezni
- Felhasználóként meg lehet változtatni a személyes adatokat
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
-	felhasználó: tantárgyak böngészése, személyes adatok módosítás
  -	tanár: új tárgy felvétele, modosítása, törlése
  -	diák: tárgyfelvétel, lejelentkezés

<b>Használati esetek</b><br>
![hasznalati_esetek](https://cloud.githubusercontent.com/assets/14218102/19416852/036f60a6-939c-11e6-99bf-93b50e40b346.png)

<b>Oldaltérkép</b><br>
Publikus:
-	Főoldal
-	Belépés

Felhasználó:
- Tárgyak böngészése
- Adataim
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
- GET /subjects/:id/: tárgy megtekintése
- GET /subjects: tárgyak közötti keresés
- GET /profile: személyes adatok megtekintés
- POST /profile: szerkesztett személyes adatok felküldése
-	GET /login: bejelentkezés
-	POST /login: bejelentkezési adatok felküldése
- GET /logout: kijelentkezés

- POST /ajax/subjects/create: új tárgy hirdetés ajax funkció
- DELETE /ajax/subjects/:id/delete: tárgy törlés ajax funkció
- POST /ajax/profile: személyes adatok változtatása ajax funkció
- POST /ajax/login: bejelentkező ajax funkció
- GET /ajax/logout: kilépő ajax funkció

<b>Oldalvázlatok</b>
<br>Főoldal<br>
![untitled_page](https://cloud.githubusercontent.com/assets/14218102/19416857/1ad63102-939c-11e6-8493-9938f34c8cf7.jpg)
<br>Tartalommal rendelkező oldal
![untitled_page_2](https://cloud.githubusercontent.com/assets/14218102/19416859/20c0e1d4-939c-11e6-920a-56fc51c57559.jpg)

<b>Adatmodell</b><br>
![adatmodell](https://cloud.githubusercontent.com/assets/14218102/19416854/11166632-939c-11e6-96df-775d438c4869.png)

<b>Fejlesztői felhasználók</b>
- Tanár felhasználónevek: tanar1, tanar2
- Hallgató felhasználónevek: hallgato1, hallgato2
- Jelszó mindegyikhez: asd123

<b>Javítások a 2. beadandón</b>
- Felhasználók szerkeszthetik a személyes adatokat (email címet)
- Felhasználó fiókok adatainak feltüntetése a dokumentációban

<b>JavaScript funkciók</b>
Mindegyik funkció AJAX-os funkció lett. A javascriptek nélkül a program továbbra is működő képes.
- Bejelentkezés:
  - Funkció leírása: Bejelentkezéskor egy modális ablakba írjuk az adatainkat
  - Érintett fájlok: UserController.js, routes.js, popup_login.js, layout.njk, main.njk
  - Folyamat:
- Kijelentkezés:
  - Funkció leírása:  Kijelentkezés esetén egy modális ablak megkérdezi, biztosan kijelentkezünk-e
  - Érintett fájlok: UserController.js, routes.js, logout.js, layout.njk
  - Folyamat:
- Új tárgy meghirdetés:
  - Funkció leírása: Új tárgy meghirdetése egy modális ablakban történik
  - Érintett fájlok: SubjectController.js, routes.js, popup_create.js, layout.njk
  - Folyamat:
- Személyes adatok módosítás:
  - Funkció leírása: Személyes adatok módosítása egy modális ablakban történik
  - Érintett fájlok: UserController.js, routes.js, popup_profile.js, layout.njk
  - Folyamat:
- Tárgy törlés:
  - Funkció leírása: Tárgy törlés esetén egy modális ablak megkérdezi, biztosan töröljük-e
  - Érintett fájlok: SubjectController.js, routes.js, delete.js, layout.njk, subjectShow.njk
  - Folyamat:

<b>Tesztelés</b>
Tesztelés Selenium IDE-vel történt meg. Telepítés: https://addons.mozilla.org/hu/firefox/addon/selenium-ide/
- 1_uj_targy: Bejelentkezik a tanar1 felhasználó, meghirdet egy tárgyat abc_teszt néven, majd kijelentkezik.
- 2_targy_szerkeszt: Bejelentkezik a tanar1 felhasználó, módosítja az abc_teszt tárgy adatait, majd kijelentkezik.
- 3_targy_felvetel: Bejelentkezik a hallgato1 felhasználó, felveszi az abc_teszt tárgyat, majd kijelentkezik.
- 4_targy_lead: Bejelentkezik a hallgato1 felhasználó, leadja az abc_teszt tárgyat, majd kijelentkezik.
- 5_targy_megszuntetes: Bejelentkezik a tanar1 felhasználó, törli az abc_teszt tárgyat, majd kijelentkezik.
- teljes_folyamat: test suit (test cases 1-5)
