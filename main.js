function play() {
    var forComputer = Math.floor(Math.random() * 3 + 1);

    var randomPalm = "images/palm" + forComputer + ".png";

    var image0 = document.querySelectorAll("img")[0];
    // animate
    image0.setAttribute("src", randomPalm);
    image0.style.transform = "rotate(180deg)";
    image0.classList.add("animate");

    if (document.getElementById("medaf").checked) {
        var medaf = Math.floor(Math.random() * 2 + 1);
        var selectHand = "images/palm" + medaf + ".png";
        var image1 = document.querySelectorAll("img")[1];
        image1.setAttribute("src", selectHand);
        whowin();
    } else if (document.getElementById("aybeluba").checked) {
        var aybeluba = 3;//Math.floor(Math.random() * 2 + 2);
        var selectHand = "images/palm" + aybeluba + ".png";

        var image1 = document.querySelectorAll("img")[1];
        image1.setAttribute("src", selectHand);
        whowin();
    } else {
        console.log("ww")
    }
    // var medaf = Math.floor(Math.random() * 3 + 1);
    // var selectHand = "images/palm" + medaf + ".png";
    // var image1 = document.querySelectorAll("img")[1];
    // image1.setAttribute("src", selectHand);
    // whowin();

    function whowin() {
        if ((randomPalm !== selectHand) && (document.getElementById("liyu").checked)) {
            document.getElementById("winner").textContent = "you win 😁😁😂😉😉";
            document.getElementById("winners").classList.add("forwinners");
            document.getElementById("winners").classList.remove("forlosers");

        } else if ((randomPalm === selectHand) && (document.getElementById("andaynet").checked)) {
            document.getElementById("winner").textContent = "you win andaynet executed 😁😁😂😉😉";
            document.getElementById("winners").classList.remove("forlosers");
            document.getElementById("winners").classList.add("forwinners");
        } else if (((randomPalm !== selectHand) && (document.getElementById("andaynet").checked)) ||
            ((randomPalm === selectHand) && (document.getElementById("liyu").checked))) {
            document.getElementById("winner").textContent = "you Lose 😥😥😥😪😪🥱🥱";
            document.getElementById("winners").classList.add("forlosers");
            document.getElementById("winners").classList.remove("forwinners");
        } else {
            console.log("IDK why?")
        }
    }
}