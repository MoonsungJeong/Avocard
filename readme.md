# Avocado Project - Avocard

#### This is 3rd project with Node.js

### New Features 
* Rate limit
* 2

## Summary
---
1. How to set up
2. Project Plan

---
### 1. How to set up



---
### 2. Project Plan
#### 2-1. Service Definition
* App that archive people's business card information
* Users can create their own digital business card
* Users can add other's business card in their pocket
* Users can see list of other's business card in their pocket
* Anonymous users can add other's business card in their pocket
* Anonymous users can see list of other's business card in their pocket

#### 2-2. Functional Feature
* Login/authentication
* Password hashing
* Displaying cards information existing in the database
* Admin page
* CRUD business card
* CRUD pocket (list of card)
* Validation check in both (client and server) side(Form input validation check and input sanitizing before insert into the database)
* Log system tracking every request
* rate limit service to one request per second per user session

#### 2-3. Minimum Visual Product
* Register
* Login
* Pocket
* MyCard
* Notice (More)
* Theme (More)
* Info (More)

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
        /card/:Code [get]   : request card with code
        /mycard [get]       : request "mycard" page
        /edit/:Code [get]   : request "edit" page with code
        /more [get]         : request "more" page
        /notice [get]       : request "notice" page
        /theme [get]        : request "theme" page
        /info [get]         : request "info" page

* Control

        /api/guest/login [post]     : guest login process

        /api/user/:Code [get]       : show user with Code
        /api/user/sign [post]       : create new user
        /api/user/update [post]     : update user
        /api/user/delete [post]     : delete user
        /api/user/login [post]      : login process
        /api/user/logout [post]     : logout process

        /api/pocket [get]           : show pocket
        /api/pocket/add    [post]   : add new card into pocket 
        /api/pocket/update   [post] : update pocket
        /api/pocket/remove [post]   : remove a card from pocket

        /api/card [get]             : show mycard
        /api/card/:Code [get]       : show card with code
        /api/card/create [post]     : create new card
        /api/card/update [post]     : update card
        /api/card/remove [post]     : remove a card

        /api/setting/update [get]   : update setting
        /api/setting/initialize [get] : initialize setting

        /api/notice [get]           : show notice
        /api/notice/:Code [get]     : show notice with code
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
        pM.getPocketByUserCode  : get pocket with usercode
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
