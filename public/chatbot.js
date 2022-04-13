window.addEventListener('dfMessengerLoaded',function (event){
        console.log("Chatbot cargado"+event);

        const dfMessenger = document.querySelector('df-messenger');
        dfMessenger.renderCustomText('Do you need help?');

        
//dfMessenger.addEventListener('df-list-element-clicked', function (event) {
  //console.log("df-list-element-clicked" + event.detail.element.title);
  //alert("has pulsado la opcion"+event.detail.element.title);
//  agent.add("mmmm");
//});
});