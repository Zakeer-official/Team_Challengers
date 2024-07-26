(function () {
    var config = {
        apiKey: "AIzaSyB68WUlPyIDFfs5KHq0a_dbaSROGZF_o8A",
        authDomain: "team-challengers-37568.firebaseapp.com",
        databaseURL: "https://team-challengers-37568-default-rtdb.firebaseio.com",
        projectId: "team-challengers-37568",
        storageBucket: "team-challengers-37568.appspot.com",
        messagingSenderId: "847627362842"
    };
    firebase.initializeApp(config);

    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');
    
    const dbRefObject = firebase.database().ref().child('Unit/1');
    const dbRefList = dbRefObject.child('alert');
    
    dbRefList.on('child_added', snap => {
      const li = document.createElement('li');
        li.innerText = snap.val();
        li.id =snap.key;
        ulList.appendChild(li);
    });
}());