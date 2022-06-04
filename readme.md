# Avocado Project - Avocard

#### This is 3rd project with Node.js

### New Features 
* FrontEnd (SPA) & BackEnd
* Local Stoage
* Session Storage 
* CSRF block Middleware (IP white list)
* Rate limit Middleware

### Features
* MVC pattern
* FrontEnd and BackEnd validation check

## Summary
---
1. How to set up
2. Project Plan

---
### 1. How to set up
#### 1-1. File list to set up
* init.js
* avocard.sql
* manifest.json
 
#### 1-2. Process to set up
##### ①. "npm install" to install modules into node_modules
##### ②. Use SQL in "avocard.sql" to set up database structure and insert example data into database
##### ③. Fill in the "init.js" file
##### Example : 
    connect:{
        hostname:'localhost',       // IP address or Domain Name
        port:'8080'                 // Port number
    },
    db:{
        host:'127.0.0.1',           // DB IP address
        user:'root',                // DB username
        password:'******',          // DB password
        database:'avocado'          // DB table name
    },
    CSRF:{
        hostURL : 'localhost:8080'  // Host Domain Name
    }
##### ④. modify "start_url" and "scope" in "manifest.json"
##### Example : 
    "start_url": "http://localhost:8080/",  // IP address or Domain Name
    "scope": "http://localhost:8080/",      // IP address or Domain Name
##### ⑤. start "node server.js"

#### 1-3. Login information (default)
|  |  |  |
|--|--|--|
|Role|Username|Password|
|Admin|admin|1|
|User|user|2|


---
### 2. Project Plan
#### 2-1. Service Definition
* App that archive people's business card information
* Users can create their own digital business card
* Users can add other's business card in their pocket
* Users can see a list of other's business card in their pocket
* Anonymous users can add other's business card in their pocket
* Anonymous users can see list of other's business card in their pocket

#### 2-2. Functional Feature for user
* Sign up
* Login/authentication
* Guest login
* CRUD pocket (list of card)
* CRUD business card
* Update and Delete user
* Theme
* Notice page
* Admin page

#### 2- . Functional Feature in this system
* password hashing
* validation check in both (client and server) side(Form input validation check and input sanitizing before insert into the database)
* localStorage and sessionStorage
* alert error message if users try unexpected action
* rate limit service to one request per second per user session
* CSRF block using http referer and IP address
* allow ip address in whitelist for admin page
* Log system tracking every request
* redirect to front page when users try to go to wrong url


#### 2-3. Minimum Visual Product 
* Front
* Sign up
* Login
* Pocket
* MyCard
* Theme (More)
* Info (More)
* Notice (More)
* Deletion (More)
* Admin (More)
* Logout (More)

#### 2-4. Technology and Modules
HTML, CSS, JavaScript, NodeJS, Express, MySql

express-session, bcrypt, validator, express-fileupload, express-rate-limit

#### 2-5. Project Detail Design (Page, Server, Database)
* Front Page List
    - Index(front)
    - Sign up
    - Pocket
    - Card
    - Mycard
    - Edit
    - More
    - Notice
    - Theme
    - Info

* Server Function
    - Sign up
    - Log in
    - Log out
    - Validation (input sanitize)
    - CRUD (Pocket, Card)
    - Theme change
    - Info change

* Database
    - User
    - Pocket
    - Card
    - Setting
    - Notice
    - Log


#### 2-6. API (Model, View, Control)
* View

        / [get]             : request "front" page
        /sign-up [get]      : request "sign up" page
        /pocket [get]       : request "pocket" page
        /card/:code [get]   : request card with code
        /mycard [get]       : request "mycard" page
        /edit/:code [get]   : request "edit" page with code
        /more [get]         : request "more" page
        /notice [get]       : request "notice" page
        /theme [get]        : request "theme" page
        /info [get]         : request "info" page

* Control

        /api/guest/login [post]     : guest login process

        /api/user/:code [get]       : show user with code
        /api/user/sign [post]       : create new user
        /api/user/update [post]     : update user
        /api/user/delete [post]     : delete user
        /api/user/login [post]      : login process
        /api/user/logout [post]     : logout process

        /api/pocket/:list [get]     : show card in pocket
        /api/pocket/add    [post]   : add new card into pocket 
        /api/pocket/update   [post] : update pocket
        /api/pocket/remove [post]   : remove a card from pocket

        /api/card [get]             : show mycard
        /api/card/:code [get]       : show card with code
        /api/card/create [post]     : create new card
        /api/card/update [post]     : update card
        /api/card/remove [post]     : remove a card

        /api/setting/update [post]  : update setting
        /api/setting/initialize [post] : initialize setting

        /api/notice [get]           : show notice title and date
        /api/notice/:code [get]     : show notice content with code
        /api/notice/create [post]   : create notice
        /api/notice/update [post]   : update notice 
        /api/notice/delete [post]   : delete notice

        /api/log [get]              : show log

* Model [
    userModel: uM, 
    pocketModel: pM, 
    cardModel: cM, 
    settingModel: sM, 
    noticeModel: nM, 
    logModel: lM
    ]

        uM.createUser           : request create user
        uM.getUserByUserCode    : get user with usercode
        uM.getUserByUsername    : get user with username
        uM.updateUser           : request update user
        uM.deleteUser           : request delete user
        
        pM.createPocket         : request create pocket
        pM.getCardByPocket      : get pocket with usercode
        pM.updatePocket         : request update pocket
        pM.deletePocket         : request delete pocket

        cM.createCard           : request create card
        cM.getCardByUserCode    : get card(list) with usercode
        cM.getCardByCardCode    : get card with cardcode
        cM.updateCard           : request update card
        cM.deleteCard           : request delete card

        sM.createSetting        : request create setting
        sM.getSettingByUserCode : get setting with usercode
        sM.updateSetting        : request update setting
        sM.initializeSetting    : request initialize setting

        nM.createNotice         : request create notice
        nM.getNotice            : get notice(list)
        nM.updateNotice         : request update notice
        nM.deleteNotice         : request delete notice

        lM.createLog            : request create log
        

#### 2-7. Database Tables
|User|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| P |User Code      |userCode     |INT         |N.N  |A.I|
|   |User Name      |userName     |Varchar(30) |N.N  |   |
|   |Password       |password     |Varchar(255)|N.N  |   |
|   |Email          |email        |Varchar(255)|N.N  |   |
|   |User Type      |userType     |Varchar(30) |N.N  |default user|
|   |Delete Flag    |deleteFlag   |TinyInt(1)  |N.N  |default 0|

|Pocket|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| F |User Code      |userCode     |INT         |N.N  |A.I|
|   |Card List      |cardList     |JSON        |NULL |List of encrypted Card Code|

|Card|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| P |Card Code      |cardCode     |Varchar(10) |N.N  |A.I|
| F |User Code      |userCode     |INT         |N.N  |A.I|
|   |Card Detail    |cardDetail   |JSON        |NULL |   |
|   |Delete Flag    |deleteFlag   |TinyInt(1)  |N.N  |default 0|

|Setting|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| F |User Code      |userCode     |INT         |N.N  |A.I|
|   |Setting        |setting      |JSON        |NULL |   |

|Notice|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
|PK |Notice Code    |noticeCode   |INT         |N.N  |A.I|
|   |Notice Date    |noticeDate   |Datetime    |N.N  |   |
|   |Notice Title   |noticeTitle  |Varchar(100)|N.N  |   |
|   |Notice Content |noticeContent|Text        |N.N  |   |

|Log|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
|PK |Log Code       |logCode      |INT         |N.N  |A.I|
|   |Log IP         |logIp        |VARCHAR(15) |N.N  |   |
|   |Session        |session      |JSON        |N.N  |   |
|   |User Name      |userName     |Varchar(30) |N.N  |   |
|   |User Type      |userType     |Varchar(30) |N.N  |   |
|   |Log Time       |logTime      |Datetime    |N.N  |   |
|   |Action         |action       |JSON        |N.N  |   |

#### 2-8. API Access Right (Guest, User)
* Guest
    -  / [get]
* User
    - /api/users

#### 2-8. Development Process
