var db = firebase.firestore();
var docRef = db.collection("Items").doc("1uAmuamSTf2DxrCvZAcJ");

docRef.get().then(function(doc) {
    if (doc.exists) {
        alert("Hello");
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});