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

<b>JavaScript funkciók</b><br>
Mindegyik funkció AJAX-os funkció lett. A javascriptek nélkül a program továbbra is működő képes.
- Bejelentkezés:
  - Funkció leírása: Bejelentkezéskor egy modális ablakba írjuk az adatainkat
  - Érintett fájlok: UserController.js, routes.js, popup_login.js, layout.njk, main.njk
  - Folyamat: A vendég az üdvözlő képernyőn a bejelentkezés gombra (btnLogin) kattint. A gomb a /login végpontot hívná meg, de ekkor a popup_login.js megakadályozza ezt a feladatot (e.preventDefault()). Ezután összeállít egy modális ablakot és feltölti a /login végpont form-jával, majd megjeleníti ($formContainer.load('/login form', function() { $modal.modal('show')...). Amikor az így elkészült modális ablak elküldené a submit hívást, a javascript ismét megakadályozza ezt és helyette a /ajax/login post végpontot hívja meg, ami egy választ ígér. A végpont a UserController ajaxLogin függvényét hívja meg, ami megpróbálja authentikálni a felhasználót a kapott adatokkal, majd ennek sikerességétől függően elküldi a választ, hogy sikeres volt-e a bejelentkezési kísérlet. Sikertelen válasz eseten a js feldob egy 'Hibás adatok!' üzenetet, ezzel jelezve hogy nem sikerült a bejelentkezés, sikeres esetben elrejti a modális ablakot és átnavigál a főoldalra az így bejelentkezett felhasználónak.
- Kijelentkezés:
  - Funkció leírása:  Kijelentkezés esetén egy modális ablak megkérdezi, biztosan kijelentkezünk-e
  - Érintett fájlok: UserController.js, routes.js, logout.js, layout.njk
  - Folyamat: A felhasználó a kijelentkezés gombra (btnLogout) kattint. A gomb a /logout végpontot hívná meg, de ekkor a logout.js megakadályozza ezt a feladatot (e.preventDefault()) és meghívja a logout_confirm functiont. Ez összeállít egy modális ablakot egy cancel és egy submit gombbal, amelyek a function válaszát (success: true | false) továbbítják. A submit (OK) gomb lenyomásával a function sikeres üzenetet ad tovább, ekkor a javascript meghívja a /ajax/logout végpontot, ami szintén egy választ ígér. A végpont a UserController ajaxLogout függvényét hívja meg, ami megpróbálja kijelentkeztetni a felhasználót, majd ennek sikerességétől függően elküldi a választ, hogy sikeres volt-e a kijelentkezési kísérlet. Sikeres esetben átnavigál az üdvözlő oldalra, sikertelen próbálkozást lekezeli.
- Új tárgy meghirdetés:
  - Funkció leírása: Új tárgy meghirdetése egy modális ablakban történik
  - Érintett fájlok: SubjectController.js, routes.js, popup_create.js, layout.njk
  - Folyamat: A tanár felhasználó az új tárgy meghirdetés gombra (btnCreate) kattint. A gomb a /subjects/create végpontot hívná meg, de ekkor a popup_create.js megakadályozza ezt a feladatot (e.preventDefault()). Ezután összeállít egy modális ablakot és feltölti a /subjects/create form-jával, majd megjeleníti ($formContainer.load('/subjects/create form', function() { $modal.modal('show')...). Amikor az így elkészült modális ablak elküldené a submit hívást, a javascript ismét megakadályozza ezt és helyette a /ajax/subjects/create post végpontot hívja meg, ami egy választ ígér. A végpont a SubjectController ajaxCreate függvényét hívja meg, ami validálja a beérkező adatokat majd megpróbálja rögzíteni az új tárgyat. Validációs hiba vagy mentési hiba esetén sikertelen választ küld, sikeres mentés esetén sikereset. Sikertelen válasz eseten a js feldob egy 'Hibás adatok!' üzenetet, ezzel jelezve hogy nem sikerült az új tárgy rögzítése, sikeres esetben elrejti a modális ablakot és átnavigál a főoldalra.
- Személyes adatok módosítás:
  - Funkció leírása: Személyes adatok módosítása egy modális ablakban történik
  - Érintett fájlok: UserController.js, routes.js, popup_profile.js, layout.njk
  - Folyamat: A bejelentkezett felhasználó az adataim gombra (btnProfile) kattint. A gomb a /profile végpontot hívná meg, de ekkor a popup_profile.js megakadályozza ezt a feladatot (e.preventDefault()). Ezután összeállít egy modális ablakot és feltölti a /profile form-jával, majd megjeleníti ($formContainer.load('/profile form', function() { $modal.modal('show')...). Amikor az így elkészült modális ablak elküldené a submit hívást, a javascript ismét megakadályozza ezt és helyette a /ajax/profile post végpontot hívja meg, ami egy választ ígér. A végpont a UserController ajaxProfile függvényét hívja meg, ami validálja a beérkező adatokat majd megpróbálja módosítani a felhasználó adatait. Validációs hiba vagy mentési hiba esetén sikertelen választ küld, sikeres mentés esetén sikereset. Sikertelen válasz eseten a js feldob egy 'Hibás adatok!' üzenetet, ezzel jelezve hogy nem sikerült az adatok módosítása, sikeres esetben elrejti a modális ablakot és átnavigál a főoldalra.
- Tárgy törlés:
  - Funkció leírása: Tárgy törlés esetén egy modális ablak megkérdezi, biztosan töröljük-e
  - Érintett fájlok: SubjectController.js, routes.js, delete.js, layout.njk, subjectShow.njk
  - Folyamat: A tanár felhasználó a tantárgy törlése gombra (btnDelete) kattint. A gomb a tantárgy törlés végpontot hívná meg, de ekkor a delete.js megakadályozza ezt a feladatot (e.preventDefault()) és meghívja a delete_confirm functiont. Ez megjeleníti a modális ablakot ami a subjectShow.njk került összeállításra, majd a submit gombra sikeres választ küld, ezzel léptetve tovább a folyamatot. Ekkor a javascript meghívja a /ajax/subjects/:id/delete végpontot, ami szintén egy választ ígér. A végpont a SubjectController ajaxDelete függvényét hívja meg, ami megpróbálja törölni az aktuális tárgyat. Amennyiben nem a tárgyat meghirdető felhasználó van bejelentkezve vagy a törlés nem sikerül, sikertelen üzenetet, ellenkező esetben sikeres üzenetet küld vissza. A javascript sikeres válasz esetén átnavigál a főoldalra, sikertelen próbálkozást lekezeli.

<b>Tesztelés</b><br>
Tesztelés Selenium IDE-vel történt meg. Telepítés: https://addons.mozilla.org/hu/firefox/addon/selenium-ide/
- 1_uj_targy: Bejelentkezik a tanar1 felhasználó, meghirdet egy tárgyat abc_teszt néven, majd kijelentkezik.
- 2_targy_szerkeszt: Bejelentkezik a tanar1 felhasználó, módosítja az abc_teszt tárgy adatait, majd kijelentkezik.
- 3_targy_felvetel: Bejelentkezik a hallgato1 felhasználó, felveszi az abc_teszt tárgyat, majd kijelentkezik.
- 4_targy_lead: Bejelentkezik a hallgato1 felhasználó, leadja az abc_teszt tárgyat, majd kijelentkezik.
- 5_targy_megszuntetes: Bejelentkezik a tanar1 felhasználó, törli az abc_teszt tárgyat, majd kijelentkezik.
- teljes_folyamat: test suit (test cases 1-5)
