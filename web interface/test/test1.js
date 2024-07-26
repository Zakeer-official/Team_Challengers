var fruitRef = database.ref().child('fruit');
fruitRef.on('child_added', function (snapshot) {
    console.log('[child_added] key:' + snapshot.key);
    console.log('[child_added] val:' + JSON.stringify(snapshot.val()));
})
fruitRef.on('child_changed', function (snapshot) {
    console.log('[child_changed] key:' + snapshot.key);
    console.log('[child_changed] val:' + JSON.stringify(snapshot.val()));
})
fruitRef.on('child_removed', function (snapshot) {
    console.log('[child_removed] key:' + snapshot.key);
    console.log('[child_removed] val:' + JSON.stringify(snapshot.val()));
})
