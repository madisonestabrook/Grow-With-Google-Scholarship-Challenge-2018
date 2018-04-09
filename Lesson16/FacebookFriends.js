/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = { 
   name: "Madison Estabrook", 
   friends: 11, 
   messages: ["Hello, World!", "Just came back home from Denver!"], 
   postMessage: function(message) { 
        facebookProfile.messages.push(message);    
   }, 
   deleteMessage: function(index) { 
       facebookProfile.messages.splice(index,1); 
    },
    addFriend: function() { 
        facebookProfile.friends++; 
    }, 
    removeFriend: function() { 
       facebookProfile.friends--;  
    }, 
       
}; 
