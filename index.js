function btn() {
    class booking {
        constructor(name, Cin, Cout, room, adult, kid, email, phone) {
            this.myname = name;
            this.myCheckIn = Cin;
            this.myCheckOut = Cout;
            this.myRooms = room;
            this.adult = adult;
            this.kid = kid;
            this.email = email;
            this.phone = phone;

        }
        
        showName() {
            return this.myname;
        }

        showMyCheckIn() {
            return this.myCheckIn;
        }

        showMyCheckOut() {
            return this.myCheckOut;
        }

        showMyRoom() {
            return this.myRooms;
        }

        showAdult() {
            return this.adult;
        }

        showKids() {
            return this.kid;
        }

        showEmail() {
            return this.email
        }

        showPhone() {
            return this.phone;
        }
    }

    var nameInput = document.getElementById("name").value;
    var checkInInput = document.getElementById("chek-In").value;
    var checkOutInput = document.getElementById("chek-out").value;
    var rooms = document.getElementById("Rooms").value;
    var adults = document.getElementById("Adults").value;
    var kids = document.getElementById("kids").value;
    var email = document.getElementById("email").value;
    var phoneNnumber = document.getElementById("Phone").value;



    if (nameInput  == ""){
        alert("plaease Fill complete form");
        return false
    }

    if (rooms  == ""){
        alert("plaease Fill complete form");
        return false
    }

    if (adults  == ""){
        alert("plaease Fill complete form");
        return false
    }

    if (email  == ""){
        alert("plaease Fill complete form");
        return false
    }

    if (phoneNnumber  == ""){
        alert("plaease Fill complete form");
        return false
    }

    if (phoneNnumber.length!=10){
        alert("Please Enter Valid Phone number");
        return false
    }

    if(email.includes("@")==false){
        alert("Enter Valid Email");
    }

    if(rooms < 0 ){
        alert("invalid Input");
        return false
    }

    if(adults < 0 ){    
        alert("invalid Input");
        return false
    }

    if(kids < 0 ){
        alert("invalid Input");
        return false
    }


    var newBooking = new booking(nameInput, checkInInput, checkOutInput, rooms, adults, kids, email, phoneNnumber);

    document.getElementById("p1").innerHTML += newBooking.showName();
    document.getElementById("p2").innerHTML += newBooking.showMyCheckIn();
    document.getElementById("p3").innerHTML += newBooking.showMyCheckOut();
    document.getElementById("p4").innerHTML += newBooking.showMyRoom();
    document.getElementById("p5").innerHTML += newBooking.showAdult();
    document.getElementById("p6").innerHTML += newBooking.showKids();
    document.getElementById("p7").innerHTML += newBooking.showEmail();
    document.getElementById("p8").innerHTML += newBooking.showPhone();
    document.getElementById("ref").innerHTML = Math.floor(Math.random() * 1251468566855);




    document.getElementById("reciptbtn").disabled = false;

   var btn = document.getElementById("reciptbtn").disabled = false;
    

    if(btn = true){
        document.getElementById("Submit").disabled = true
    }


}
