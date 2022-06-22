const express  = require('express');
const app = express();
app.use(express.static(__dirname + "/public/"));
const dfff = require('dialogflow-fulfillment');
const { raw } = require('express');
const { platform } = require('os');
const axios = require("axios");
var emoji = require('node-emoji');
const { DateTime } = require('actions-on-google');
const { get, random } = require('node-emoji/lib/emoji');
const { TIMEOUT } = require('dns');
const { Agent } = require('http');
const { time } = require('console');

function Ramdom(){
  var number = Math.floor(Math.random() * ((11+1) - 1) + 1);
  var hoy = new Date();
  var minutes = hoy.getMinutes();
  var stringminutes = minutes.toString();
  var num = stringminutes.substr(1);
  var intnum = parseInt(num);
  console.log(stringminutes);
  console.log(intnum);
  var ram = 0;
  if(num=='0'){
    ram = 10;
  }else{
    ram = intnum;
  }
 
  return ram
 }

 function languageHandler(agent) {
    const language = agent.parameters.language;
    const programmingLanguage = agent.parameters['language-programming'];
    if (language) {
        agent.add(`From fulfillment: Wow! I didn't know you knew ${language}`);
    } else if (programmingLanguage) {
        agent.add(`From fulfillment: ${programmingLanguage} is cool`);
    } else {
        agent.add(`From fulfillment: What language do you know?`);
    }
}
app.post('/', express.json(), (req, res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });
    
    function listas(agent){

    agent.add( new dfff.Payload(agent.UNSPECIFIED, {sendAsMessage: true,rawPayload:true}))
    }


    function respondSlowly( agent, msg, ms ){
      return new Promise( resolve => {
        setTimeout( () => {
          agent.add( msg );
          resolve();
        }, ms );
      });
    }

    function Rfaces(){
      var payloadData4 = {
        "richContent": [
          [
            {
              "options": [
                {
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": "",
                  "text": "🙁"
                },
                {
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": "",
                  "text": "😐"
                },
                {
                  "link": "",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "text": "🙂"
                }
              ],
              "type": "chips"
            }
          ]
        ]
      }
      return payloadData4;
    }
    function RThumbs(){
      var payloadData4 = {
    
        "richContent": [
          [
            {
              "type": "chips",
              "options": [
                {
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": "",
                  "text": "👍"
                },
                {
                  "text": "👎",
                  "link": "",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  }
                }
              ]
            }
          ]
        ]
      }
      return payloadData4;
    }

    function Rresponse(){
      var payloadData4 = {

        "richContent": [
          [
            {
              "type": "chips",
              "options": [
                {
                  "link": "",
                  "text": "Easy",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  }
                },
                {
                  "link": "",
                  "text": "Neutral",
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  }
                },
                {
                  "image": {
                    "src": {
                      "rawUrl": ""
                    }
                  },
                  "link": "",
                  "text": "Difficult"
                }
              ]
            }
          ]
        ]
       }
      return payloadData4;
    }
    
    function Q112(){
      var ram = Math.floor(Math.random() * ((11+1) - 1) + 1);
      Message1 = "Don't go away yet, I am very interested in improving my performance.\n \n Would you help me answer the following question? 🙂\n\n";
      switch (Ramdom()) {
        case 1:
        var question1= "How satisfied are you with your chatbot experience?";
        agent.add(Message1+question1); 
        var paylo =Rfaces();
        break;
        case 2:
          var question1 = "How likely are you to recommend the chatbot?";
          agent.add(Message1+question1);  
        var paylo =Rfaces();
          break;
        case 3:
        var question1= "Was the chatbot helpful?";
        agent.add(Message1+question1);  
        var paylo =RThumbs();
        break;
        case 4:
        var question1= "Was the information provided complete?";
        agent.add(Message1+question1);  
        var paylo =RThumbs();
        break;
        case 5:
        var question1= "Would you use the chatbot again?";
        agent.add(Message1+question1);  
        var paylo =RThumbs();
        break;
        case 6:
        var question1= "Were the instructions provided easy to follow?";
        agent.add(Message1+question1);  
        var paylo =RThumbs();
        break;
        case 7:
        var question1= "Did you enjoy your experience?";
        agent.add(Message1+question1);  
        var paylo =RThumbs();
        break;
        case 8:
        var question1= "Were you able to solve your issue?";
        agent.add(Message1+question1);  
        var paylo =RThumbs();
        break;
        case 9:
        var question1= "How easy was it for you to navigate the  chatbot?";
        agent.add(Message1+question1);  
        var paylo =Rresponse();
        break;
        case 10:
        var question1= "How easy was it for you to solve your issue?";
        agent.add(Message1+question1);  
        var paylo =Rresponse();
        break;
        default:
          var question1= "How easy was it for you to understand the chatbot?";
          agent.add(Message1+question1);  
          var paylo =Rresponse();
        break;
      
      }
      agent.add( new dfff.Payload(agent.UNSPECIFIED,paylo, {sendAsMessage: true,rawPayload:true})) ;
      console.log(Ramdom()+".1")
    }

    function finish(){
      switch (Ramdom()) {
        case 1:
        var question1= "How satisfied are you with your chatbot experience?";
        break;
        case 2:
          var question1 = "How likely are you to recommend the chatbot?";
          break;
        case 3:
        var question1= "Was the chatbot helpful?";
        break;
        case 4:
        var question1= "Was the information provided complete?";
        break;
        case 5:
        var question1= "Would you use the chatbot again?";
        break;
        case 6:
        var question1= "Were the instructions provided easy to follow?";
        break;
        case 7:
        var question1= "Did you enjoy your experience?";
        break;
        case 8:
        var question1= "Were you able to solve your issue?";
        break;
        case 9:
        var question1= "How easy was it for you to navigate the  chatbot?";
        break;
        case 10:
        var question1= "How easy was it for you to solve your issue?";
        break;
        default:
          var question1= "How easy was it for you to understand the chatbot?";
        break;
      
      }
      console.log(Ramdom()+".2");
      let ID = Date.now();
      let question = question1;
      let Response = agent.parameters["RSurvey"];
      axios.post("https://sheet.best/api/sheets/ba13e8f1-ec4f-4230-b8ce-4d478448d52a",{ID,question,Response});
      agent.add("It was a pleasure to help you!!\n\nThank you for your time. Goodbye!! ✌😁");
   
    }

    function custompayload(agent){
        
        var payloadData = {
            "richContent": [
    [
        {
            "type": "image",
            "rawUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ria_Main_Logo_Descriptor_Color_RGB.png",
            "accessibilityText": "Dialogflow across platforms"
          },  
          {
            "type": "divider"
          },
          {
            "type": "description",
            "text": [
                "Hi there, I am Maya. "+emoji.get('😄') +" I am a Digital Representative. These are some of the things, that I can help you with: "
              ]
            
          },
          {
            "type": "divider"
          },
          {
            "type": "list",
            "title": "1.-Order status. "+emoji.get('✔️') ,
            "event": {
              "name": "Check_status",
              "languageCode": "js",
              "parameters": {}
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "list",
            "title": "2.-Password issues. "+emoji.get('🔐') ,
            "event": {
              "name": "password",
              "languageCode": "js",
              "parameters": {}
            }
          },
          {
            "type": "divider"
          },
            {
              "type": "list",
              "title": "3.-Setup a training "+emoji.get('💡'),
              "event": {
                "name": "appointment",
                "languageCode": "",
                "parameters": {}
              }
              },
              {
                "type": "divider"
              },
            {
              "type": "list",
              "title": "4.-Support. "+emoji.get('💻'),
              "event": {
                "name": "Tech",
                "languageCode": "",
                "parameters": {}
              }
          },
          {
            "type": "divider"
          },
          {
            "type": "list",
            "title": "5.-Contact information. "+emoji.get('📙'),
            "event": {
              "name": "Rates",
              "languageCode": "",
              "parameters": {}
            }
            }
    ]
  ]
          }
       
   console.log("run");
   console.log(Ramdom());
   agent.add( new dfff.Payload(agent.UNSPECIFIED,payloadData, {sendAsMessage: true,rawPayload:true}))
    agent.add("Tell me, how can I help you today?")
    }
        var intentMap = new Map();
        intentMap.set('Default Welcome Intent',custompayload)
        intentMap.set('Helpdesk_code2_Survey',listas)
        intentMap.set('Helpdesk_code1_Menu',custompayload)
        intentMap.set('Gratitude',finish)
        intentMap.set('Helpdesk_code2_Survey',Q112)
        intentMap.set('Pruebaa',languageHandler)
        agent.handleRequest(intentMap);
});

app.listen(3333,()=>console.log("server is live at port 3333"));
