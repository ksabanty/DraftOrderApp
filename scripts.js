function assignGolfer() {
    var btn = document.getElementById("assign");
    btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            var numGolfers = data.leaderboard.players.length;
            var ol = document.querySelector('ol');
            var golfers = [];

            for (var i = 0; i < 26; i++){
                golfers.push(data.leaderboard.players[i].player_bio.last_name);
            }
            for (var i = 0; i < ol.children.length; i++){
                var index = getRandom(golfers.length);
                ol.children[i].innerHTML = ol.children[i].innerHTML + ", " + golfers[index];
                golfers.splice(index, 1);     
            }
        }
    }

        var url = "https://statdata.pgatour.com/r/033/leaderboard-v2mini.json";
        XHR.open("GET", url);
        XHR.send();
    })
}

function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function addMember() {
    var person = document.getElementById('leagueMember').value;
    var entry = document.createElement("li");
    var textEntry = document.createTextNode(person);
    entry.appendChild(textEntry);
    document.getElementById("draftList").appendChild(entry);
    document.getElementById("leagueMember").value = '';
    document.getElementById("leagueMember").focus();
}

function randomizeOrder() {
    var ol = document.querySelector('ol');
    for (var i = ol.children.length; i >= 0; i--) {
        ol.appendChild(ol.children[Math.random() * i | 0]);
    }
}