const express  = require('express');
const app = express();
app.use(express.static(__dirname + "/public/"));
const dfff = require('dialogflow-fulfillment');
const { raw } = require('express');
const { platform } = require('os');
var emoji = require('node-emoji');



app.get('/', (req, res)=>{
      res.send("im live")
});

app.post('/', express.json(), (req, res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });

    function demo(agent){
        var payload2 = {
            "richContent": [
                [
                  {
                    "type": "image",
                    "rawUrl": "https://918230.smushcdn.com/2283449/wp-content/uploads/2020/06/helados.jpg?lossy=1&strip=1&webp=1",
                    "accessibilityText": "Example logo"
                  }
                ]
              ]

        }
        agent.add( new dfff.Payload(agent.UNSPECIFIED,payload2, {sendAsMessage: true,rawPayload:true}))
    }


    function listas(agent){
     // var payload3 = 
    agent.add( new dfff.Payload(agent.UNSPECIFIED, {sendAsMessage: true,rawPayload:true}))
     // agent.add("Sure. Can you please share your transaction number? 😁\n\nThe transaction number is located on the right upper corner of your receipt and starts with 2 letters,that represent the country from where the money was sent, followed by a 10 digit number.");
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
                "Hi there, I am Maya. "+emoji.get('👋') +"I am a Digital Representative. These are some of the things, that I can help you with: "+emoji.get('😄')
              ]
            
          },
          {
            "type": "divider"
          },
          {
            "type": "list",
            "title": "1.-Check transaction status. "+emoji.get('✔️') ,
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
            "title": "2.-Find a Ria location to send or receive money. "+emoji.get('🧑‍🍳'),
            "event": {
              "name": "location_",
              "languageCode": "",
              "parameters": {}
            }
            },
            {
              "type": "divider"
            },
            {
              "type": "list",
              "title": "3.-Setup a training appointment. "+emoji.get('🧠'),
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
            "title": "4.-connect you with a Human Representative. "+emoji.get('🧑'),
            "event": {
              "name": "human_",
              "languageCode": "",
              "parameters": {}
            }
        },
        {
          "type": "divider"
        },
        {
          "type": "list",
          "title": "5.-if you need other, please type it on the chat. "+emoji.get('⌨️'),
          "event": {
            "name": "others_",
            "languageCode": "",
            "parameters": {}
          }
      }


            /*
      {
        "type": "description",
        //"actionLink": "https://www.riamoneytransfer.com/",
        "title": "Transactions",
        "image": {
          "src": {
            "rawUrl": ""
          }
        },
        "text": [
            "I can provide you with your transaction status.",
            "\nI can help you find a location to send or receive money."
          ]
        
      },
      {
        "type": "divider"
      },
    
      {
          
        "type": "description",
        //"actionLink": "https://www.riamoneytransfer.com/",
        "title": "Others",
        "image": {
          "src": {
            "rawUrl": ""
          }
        },
        "text": [
            "set an appointment for training.",
            "\nI can connect you with a Human Representative."
            
          ]
        
      },
     
      {
        "type": "chips",
        "options": [
          {
            "text": "Transactions",
            "image": {
              "src": {
                "rawUrl": "https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-personas-contacto-icono-personas.png"
              }
            },
            "link": ""
          },
          {
            "text": "Human",
            "image": {
              "src": {
                "rawUrl": "https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-personas-contacto-icono-personas.png"
              }
            },
            "link": ""
          }
          

        ]
      }
      */
    ]
  ]
          }

         
          console.log("demo")
   agent.add( new dfff.Payload(agent.UNSPECIFIED,payloadData, {sendAsMessage: true,rawPayload:true}))
    agent.add("Tell me, how can I help you today?")
    }


        var intentMap = new Map();
        intentMap.set('demo',demo)
        intentMap.set('Default Welcome Intent',custompayload)
        intentMap.set('Enter_order_status',listas)
        intentMap.set('check_order_status',listas)
        intentMap.set('Order_S',listas)
        intentMap.set('Order_N',listas)
        intentMap.set('check_Zipcode',listas)
        intentMap.set('Enter_ZipCode',listas)
        intentMap.set('ZIP_S',listas)
        intentMap.set('Survey',listas)
        agent.handleRequest(intentMap);
});

app.listen(3333,()=>console.log("server is live at port 3333"));
