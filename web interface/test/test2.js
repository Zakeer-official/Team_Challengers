 //new Notification("");
 function notifyMe() {
     if (!("Notification" in window)) {
         alert("This browser does not support system notifications");
     } else if (Notification.permission === "granted") {
         //notify();
     } else if (Notification.permission !== 'denied') {
         Notification.requestPermission(function (permission) {
             if (permission === "granted") {
                 // notify();
             }
         });
     }

     function notify() {
         var notification = new Notification('Notification Test', {
             icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
             body: "Hey! Just Ignore this message",
         });

         notification.onclick = function () {
             window.open("http://carnes.cc");
         };
         setTimeout(notification.close.bind(notification), 7000);
     }
 }
 notifyMe();

 var database = firebase.database();
 var fruitRef = database.ref().child('alert');
 fruitRef.on('child_added', function (snapshot) {
     console.log('[child_added] key:' + snapshot.key);
     console.log('[child_added] val:' + JSON.stringify(snapshot.val()));

     function notifyMe() {
         if (!("Notification" in window)) {
             alert("This browser does not support system notifications");
         } else if (Notification.permission === "granted") {
             //notify();
         } else if (Notification.permission !== 'denied') {
             Notification.requestPermission(function (permission) {
                 if (permission === "granted") {
                     // notify();
                 }
             });
         }

         function notify() {
             var notification = new Notification('Notification Test', {
                 icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
                 body: JSON.stringify(snapshot.val()),
             });

             notification.onclick = function () {
                 window.open("http://carnes.cc");
             };
             setTimeout(notification.close.bind(notification), 7000);
         }
     }
     notifyMe();
 })
 fruitRef.on('child_changed', function (snapshot) {
     console.log('[child_changed] key:' + snapshot.key);
     console.log('[child_changed] val:' + JSON.stringify(snapshot.val()));
 })
 fruitRef.on('child_removed', function (snapshot) {
     console.log('[child_removed] key:' + snapshot.key);
     console.log('[child_removed] val:' + JSON.stringify(snapshot.val()));
 })
