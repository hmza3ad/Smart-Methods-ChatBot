<script>
  window.watsonAssistantChatOptions = {
      integrationID: "6c32c74c-5fa2-43eb-aeb2-7bdfec44881a", // The ID of this integration.
      region: "eu-de", // The region your integration is hosted in.
      serviceInstanceID: "7519eef0-3e5e-4dad-afcd-817407208842", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js"
    document.head.appendChild(t);
  });
</script>