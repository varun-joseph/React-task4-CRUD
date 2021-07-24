const Users = [   
    {
       "id": 5302,
       "uid": "45cddc68-b21d-471c-9708-863f09d4029a",
       "username": "percy.kris",
       "email": "percy.kris@email.com",
       "employment": "Marketing Liaison",
       "address": "United States",
       "subscription": "Gold" 
    },  
    {
       "id": 3309,
       "uid": "0f2e6695-2a4a-45d7-bf0a-938337fd3bc0",
       "username": "terrance.nolan",
       "email": "terrance.nolan@email.com",
       "employment": "Future Facilitator",
       "address": "United States",
       "subscription":  "Diamond"
    },   
    {
       "id": 1818,
       "uid": "d4f96eeb-0189-44c4-be04-50ae4898f304",
       "username": "wilmer.armstrong",
       "email": "wilmer.armstrong@email.com",
       "employment": "Future Community-Services Planner",
       "address": "United States",
       "subscription": "Essential"
    },   
    {
       "id": 2155,
       "uid": "971bd3b0-531b-4eab-bfe1-8ee27e2a6cee",
       "username": "dane.paucek",
       "email": "dane.paucek@email.com",
       "employment": "National Developer",
       "address": "United States",
       "subscription": "Platinum"
    },   
    {
       "id": 5799,
       "uid": "f6e3855a-8932-4ea6-b875-09931fe0c94f",
       "username": "violeta.howe",
       "email": "violeta.howe@email.com",
       "employment": "Internal Hospitality Developer",
       "address": "United States",
       "subscription": "Premium"
    },   
    {
       "id": 919,
       "uid": "1a7d4fe7-de7e-44e0-aa91-d60aef684853",
       "username": "wilson.torphy",
       "email": "wilson.torphy@email.com",
       "employment": "Construction Specialist",
       "address": "United States",
       "subscription": "Starter"
    },   
    {
       "id": 1902,
       "uid": "77afbe2c-80f1-41a3-9881-b50f27be5e05",
       "username": "deon.feeney",
       "email": "deon.feeney@email.com",
       "employment": "Design Producer",
       "address": "United States",
       "subscription": "Gold"
    },   
    {
       "id": 1619,
       "uid": "10cb1800-fa22-4046-8c97-76c991fb717e",
       "username": "erick.langworth",
       "email": "erick.langworth@email.com",
       "employment": "Community-Services Representative",
       "address": "United States",
       "subscription": "Bronze"
    },   
    {
       "id": 7983,
       "uid": "d758fe74-8486-462c-ab09-7f80be713d32",
       "username": "mario.grady",
       "email": "mario.grady@email.com",
       "employment": "Technology Architect",
       "address": "United States",
       "subscription": "Professional"
    },   
    {
       "id": 7219,
       "uid": "ea1f0542-83f7-424d-acb0-854d38f40031",
       "username": "iesha.krajcik",
       "email": "iesha.krajcik@email.com",
       "employment": "Government Developer",
       "address": "United States",
       "subscription": "Business"
    }
 ]
let UserData = Users;
 if(!localStorage.getItem('users')){
    localStorage.setItem('users',JSON.stringify(Users))
 }
 else{
    UserData = JSON.parse(localStorage.getItem('users'));
 }

 export {UserData};