/** @format */
var db = firebase.firestore();

db.collection("users").onSnapshot(function (snapshot) {
  snapshot.docChanges().forEach(function (change) {
    if (change.type === "added") {
      // console.log(change.doc.data());

      const card = `<div class="col mb-4">
        <div class="card h-100">
         
          <div class="card-body">
            <h5 class="card-title"><strong>${
              change.doc.data().name
            }</strong></h5>
            <h6 class="email">${change.doc.data().email}</h6>
            <p class="card-text address">${change.doc.data().address}</p>
            <p class="phone-number">${change.doc.data().phone}</p>
          </div>
        </div>
      </div>`;
      //console.log(card);
      document
        .getElementById("cards_container")
        .insertAdjacentHTML("beforeend", card);
    }
  });
});
