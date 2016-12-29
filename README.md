# Alkalmazások fejlesztése
# Filmek alkalmazás
## Fischer Zsolt
## T9FGRX

## Program futtatása
1. Kód letöltése(clone/fork)
2. npm install
3. .env.example átírása .env-re
4. npm run dev
5. localhost:3333 megnyitása

Fejlesztő környezet: Visual Studio Code

## Adatbázis futtatása
1. npm install express-admin
2. node_modules\.bin\admin config/express-admin
3. localhost:4444 futtatása
 
## Funkcionális követelmények:

1. Vendégként  főoldalon kategóriánként kiemelt filmeket lehet látni.
2. Vendégként lehet a filmek között szabadon keresgélni
3. Vendégként meg lehet nézni egy film rövid leírását.
4. Vendégként lehet adott filmre keresni több szemppont alapján
5. Vendégként lehet regisztálni
6. Vendégként meglehet osztani a facebookon
7. Felhasználóként be lehet jelentkezni.
8. Felhasználóként lehet új filmet beküldeni.
9. Felhasználóként lehet szerkeszteni a saját filmek adatait.

## Nem funkcionális követelmények:

1. Felhasználóbarát, ergonomikus elrendezés és kinézet.
2. Gyors működés.
3. Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.
4. Jól áttekinthetőek a filmek (kategóriák szerint színezve).

## Szakterületi fogalmak:
1. Film: A film napjaink egyik legnépszerűbb információs, ismeretterjesztő, szórakoztatási és művészeti célú médiuma.
2. Akció film: Képtelen és komikus üldözéssorozatok váltják egymást. Az akciófilmekben hagyományosan megtalálhatók a robbantások, az ökölharcok, a lövöldözések, a lovas és az autós üldözések.
3. Horrorfilm: A horrorfilm olyan alkotás, amelyben a főhősöknek szembe kell nézniük a borzalmakkal, és gyakran áldozat lesz belőlük. A filmek végét általában nem zárja megnyugtató lezárás.
4. Vígjáték: A vígjáték olyan drámai műfaj, amelyben a világot komikusan ábrázolják, ezzel a nézőt nevetésre ösztönözve.
5. Dráma: A dráma az általa kínált művészi hatást úgy kívánja elérni, hogy konkrét, egyedi figurák cselekvéseit jelenidejű formában mutatja be, így mutatva fel azok általános érvényű jelentéstartalmait.
6. Krimi: Bűntények felderítésével, elkövetésük bemutatásával, illetve lélektani indítóokaik vizsgálatával, valamint a bűnözők, nyomozók („detektívek”) és bűnügyi rendőrök világával foglalkozik.
7. Fantasy:  Tartalma (történet/kép/hang) többnyire elképzelt, mitikus jellegű, valamilyen tekintetben mindig irreális.

## Szerepkörök:

1. Vendég: filmek keresése, böngészése és megtekintése.
2. Felhasználó: a vendég szerepkörét kibővítve a saját filmjeinek kezelésére képes(új, törlés, módosítás).

## Adatbázisterv:

**Lesz egy olyan tábla ami a felhasználókat fogja tartalmazni.**
* id
* username
* email
* pw titkosítva

**Lesz egy olyan tábla ami a fimeket fogja tartalmazni.**
* id
* name
* mainch(főszereplők)
* instructions
* user_id
* category_id
* IMDb
* released
* runningtime

**Lesz egy kategória tábla, ami a kategóriákat fogja tárolni.**
* id
* name
		
##Végpontok:

* GET /login: bejelentkező oldal 
* POST /login: bejelentkezési adatok felküldése
* GET /logout: kijelentkezés
* GET /register: regisztráció
* POST /register: regisztrált adatok felküldése

* GET /: főoldal
* GET /films: keresés
* GET /films/id: adott film megtekintése
* GET /films/id/delete: adott film törlése
* GET /films/id/edit: adott film szerkesztése
* Post /films/id/edit: adott film szerkesztésének felküldése
* GET /films/create: új film adatainak megadása
* POST /films/create: új film adatainak felküldése

##Használati esetek
![asd](https://cloud.githubusercontent.com/assets/22147826/19419850/5d573b2c-93e0-11e6-8c3b-621e22cab748.png)

##Folyamatok meghatározása 
**Felhasználó**
* Új film 

![diagram](https://cloud.githubusercontent.com/assets/22147826/19419866/9b63ef3c-93e0-11e6-9d8a-d1a2efa005fd.png)

* Bejelentkezés

![bejelentkezes](https://cloud.githubusercontent.com/assets/22147826/19419877/c7faef6e-93e0-11e6-9658-45ba55906c0e.png)

**Vendég**
* Keresés egy filmre

![kereses](https://cloud.githubusercontent.com/assets/22147826/19419880/d94745e2-93e0-11e6-8e6d-b641de1ff7b7.png)

##Oldaltérkép

![oldalterkep](https://cloud.githubusercontent.com/assets/22147826/19419882/e26aabdc-93e0-11e6-9179-45b46223b1c2.png)

##Adatmodell

![adatmodell](https://cloud.githubusercontent.com/assets/22147826/19419886/ef52d4fa-93e0-11e6-98f3-99b6b07b8169.png)


##Oldalvázlatok
* Főoldal
![fooldal](https://cloud.githubusercontent.com/assets/22147826/20640865/83cfc8ca-b3eb-11e6-8077-217749269563.jpg)
* Bejelentkezés
![login](https://cloud.githubusercontent.com/assets/22147826/20640866/94475984-b3eb-11e6-86e5-9eaf32ee1d75.jpg)
* Regisztráció
![register](https://cloud.githubusercontent.com/assets/22147826/20640867/9447793c-b3eb-11e6-8e8b-ca0573c4a68b.jpg)
* Keresés
![kereses](https://cloud.githubusercontent.com/assets/22147826/20640868/94481a36-b3eb-11e6-9505-8589449c5ec2.jpg)
* Új film/Szerkesztés
![ujfilmszerkesztes](https://cloud.githubusercontent.com/assets/22147826/20640869/944cd33c-b3eb-11e6-8e00-5e5aadd34459.jpg)
* Film megtekintése
![show](https://cloud.githubusercontent.com/assets/22147826/20640961/8e8c68fc-b3ed-11e6-9908-4c3d6d08bf97.jpg)

##Végső megvalósítás kinézete
* Főoldal
![fooldal](https://cloud.githubusercontent.com/assets/22147826/20640930/c0aa75dc-b3ec-11e6-8307-58a8f9cc7fa8.png)
* Bejelentkezés
![login](https://cloud.githubusercontent.com/assets/22147826/20640929/c0a5c032-b3ec-11e6-866f-da74283f81c3.png)
* Regisztráció
![register](https://cloud.githubusercontent.com/assets/22147826/20640927/c0a1b2c6-b3ec-11e6-8b71-d81f4a551e84.png)
* Keresés
![search](https://cloud.githubusercontent.com/assets/22147826/20640928/c0a4d73a-b3ec-11e6-9398-60fded48e0cc.png)
* Új film/Szerkesztés
![editnew](https://cloud.githubusercontent.com/assets/22147826/20640926/c05f35fe-b3ec-11e6-927c-aa1f3625ecb4.png)
* Film megtekintése
![show](https://cloud.githubusercontent.com/assets/22147826/20640965/bf19e260-b3ed-11e6-9b19-b6bad5d5cc88.png)

##Implementáció
**Konyvtárszerkezet**
* app-> Controllers, Middleware, Model
* bootstrap
* config
* database
* node_modules
* providers
* public
* resources -> views


## A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével
**A funkcióban érintett fájlok mind kliens- és szerveroldalon**

* FilmController.js(ajaxDelete)
* UserController.js(ajaxLogin, ajaxLogout, ajaxRegister)
* routes.js(ajax group(delete,login,logout,register))
* public->scripts->delete.js, login.js, logout.js, register.js
* egyes view-k kódjába a scriptek beégetése egy script block-ba, illetve speciális id-k és validator hozzáadása a kódhoz

**Egyes események bemutatása**

* Film létrehozásánál illetve szereksztésénél a mezők kitöltése kötelező. Ez egy validator segítségével lett megoldva. A "required" mezők ha nincsenek kitöltve, abban az esetben a kitöltendő mező neve piros, amint kitöltik, zölddé színeződik. Amíg az összes kötelező mező ki nincs töltve, addig a "submit" gombra sem tudunk kattintani.

![create](https://cloud.githubusercontent.com/assets/22147826/21533252/e3bec78c-cd58-11e6-8464-7273ee2e99a7.png)

**Ajaxos funckiók**

* Film törlése: Ha egy film adatait megtekintjük és mi hoztuk létre azt a filmet, akkor azt törölni is tudjuk. A változtatás az előző verzióhoz képest az, hogy a program megkérdezi hogy tényleg szeretnénk-e törölni a filmet. A delete.js-en belüli ajaxDelete fv. végzi el a törlést, méghozzá a paraméterben megkapott url meghívásával, aminek tartlma a /ajax/films/:id/delete az adott film id-val. A my_confirm funkció a válaszunkat kezeli, hogy akarjuk e törölni vagy sem. Ezután ha az oldalon lévő btnDelete id-ú gomra kattintunk, akkor előugrik a rákérdező fül. Miután kitöröltük a filmet visszaérkezünk a főoldalra(location.assign('/')).

![delete](https://cloud.githubusercontent.com/assets/22147826/21533083/575ca26a-cd57-11e6-9ce9-b6281fb7f9da.png)

*Szekvenciadiagram*

![szekvencia](https://cloud.githubusercontent.com/assets/22147826/21543342/ab3c8d0a-cdc5-11e6-854d-283ba12daac1.png)

* Bejelentkezés: Bejelentkezéshez nem kell a login oldalt betölteni, egy felugró ablakon keresztül tudunk bejelentkezni. Van egy modal-unk, amibe betöltjük a jelenlegi login form-ot, a 'reset' gpmbra kattintva az ablak eltűnik. Helyes adatok megadása és 'submit' gomb megnyomása után meghívódik a /ajax/login, ami beléptet minket, ezután ha a belépés sikeres volt, akkor vissza kerülünk a főoldalra, ha nem volt sikeres, akkor pedig megkapjuk a hiba okát.

![login2](https://cloud.githubusercontent.com/assets/22147826/21533086/57650cd4-cd57-11e6-818b-a8c521621464.png)

* Kijelentkezés: Kijelentkezés(btnLogout) gombra kattintva egy ablak ugrik fel, ami megkérdezi, hogy biztosan ki szeretnénk e jelentkezni. Submit gombra kattintva meghívódik az /ajax/logout, ha ez sikeresen megtörtént, akkor visszakerülünk a főoldalra kijelentkezve. Reset gomb esetén az ablak eltűnik. Itt is van my_confirmation(str) fv, ami kezeli a válaszunkat. Paraméterben megadott string lesz a modal fejlécének szövege. btnLogout gomb megnyomása->my_confimation(válaszom)->ha igen, akkor ajaxLogout() meghívása, ami meghívja a /ajax/logout-ot->Kijelentkezünk->Visszairányítás a főoldalra

![logout](https://cloud.githubusercontent.com/assets/22147826/21533084/5762aef8-cd57-11e6-86a3-daaba7618ec5.png)

* Regisztráció: Regisztráláshoz sem kell a register oldalra mennünk, hanem egy felugró ablakon tudunk kényelmesen regisztrálni. Az oldalon lévő btnRegister id-ú gomb megnyomásakor felugrik egy modal(ablak), amibe betöltődik a register form-unk. Itt tudjuk megadni az adatainkat, melyeknek kitöltése kötelező. Ha a 'reset' gombra kattntunk, akkor az ablak eltűnik és nem történik semmi, azonban ha a 'submit' gombra kattintunk, meghívódik a /ajax/register, ami ha success: true-val tér vissza, akkor a regisztráció sikeres volt, ezután pedig visszatérünk a főoldalra a frissen regisztrált accounttal bejelentkezve. Hibás adatok esetén megkapjuk a hibákat és javítani tudjuk őket(pl: túl rövid jelszó, helytelen email formátum, létező felhasználó stb.)

![register2](https://cloud.githubusercontent.com/assets/22147826/21533085/576372c0-cd57-11e6-87a2-867983068424.png)



## Teszt esetek Selenium IDE használatával

* Funkcionális tesztelés: Teszteljük, hogy az oldalak megjelennek e a végpontokon, megfelelő tartalom jelenik e meg, jól működik e az oldal, megfelelő hibaüzenet, folyamat végigvihető e.

* Selenium IDE telepítése: Firefox alatt, kiegészítók között kikeresni->telepíten->Böngésző újraindítása->Tesztelés

![selenium_telepites](https://cloud.githubusercontent.com/assets/22147826/21543511/5d5f819e-cdc7-11e6-8333-3d2db242d355.png)

* Selenium IDE használata: Commandok hozzáadása->mikor milyen lépés következik, milyen oldalnak kell megjelennie, minek kell történnie.

### Saját tesztjeim
1. Felhasználó regisztrálása és kijelentkezése
2. Most regisztrált felhasználó bejelentkezése és kijelentkezése
3. Most regisztrált felhasználó bejelentkezése->film létrehozása->kijelentkezése
4. Most létrehozott film törlése(bejelentkezés->törlés->kijelentkezés)

![selenium_use](https://cloud.githubusercontent.com/assets/22147826/21543624/7fc29e64-cdc8-11e6-9af8-86b69098dcd4.png)

#####Tesztesetek
* Felhasználó
  * Felhasználó létrehozása
  * Bejelentkezés jó, és rossz jelszóval
  * Kijelentkezés
* Film
  * Főoldal láthatósága
  * Új film flétrehozás oldal láthatósága
  * Csak bejelentkezett felhasználó által látható oldalak láthatósága
  * Film sikeres törlése, szerkesztése
  * Sikeres szűrés a kereső oldalon

# 2. beadandó dokumentációjának kiegészítése

###3.	Implementáció

######Fejlesztőkörnyezet

Webes IDE: **Cloud9**

* Github account szükséges
* Belépés után új workspace létrehozása (node.js)
* Ezután elkezdhetjük a kód írását
* _git add <fajlnev>_ paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy _git add ._ paranccsal az összes fájlt kiválaszthatjuk
* _git commit -m "commit"_ paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a későbbiekben visszatérhetünk, különbségüket megtekinthetjük.
* _git push origin master_ paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.

######Könyvtárstruktúra, funkciók

* **Filmek**
  * **middleware**
    * kernel.js
    *routes.js
  * **controllers**
    * FilmController.js
    * UserController.js
  * **models**
    * Category.js
    * Film.js
    * Token.js
    * User.js
  * **scripts**
    * delete.js
    * login.js
    * logout.js
    * register.js
  * **views**:
    * createFilm.njk
    * editFilm.njk
    * layout.njk
    * login.njk
    * main.njk
    * master.njk
    * me.njk
    * register.njk
    * searchFilm.njk
    * showFilm.njk
    * showUser.njk
    * welcome.njk
  * .env
  * _package.json_
  * _server.js_
