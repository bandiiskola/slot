var t = [{
        sorrend: [0, 0, 0, 0]
    },
    {
        sorrend: [0, 0, 0, 0]
    },
    {
        sorrend: [0, 0, 0, 0]
    }
]

function Berak() {
    for (let i = 0; i < t.length; i++) {
        for (var j = 0; j < t[i].sorrend.length; j++) {
            t[i].sorrend[j] = Math.floor(Math.random() * 7) + 1
        }
    }
    Rajzol()
}

function Rajzol() {
    for (let i = 0; i < t.length; i++) {
        var szorzo=1
        for (y of t[i].sorrend) {
            document.getElementById("s"+(i+1)).innerHTML+="<img class='kiskep' src='assets/images/"+y+".png' style='top: "+(160*szorzo)+"px'>"
            szorzo++
        }
    }
}

Berak()

function porget() {
    document.getElementById("forgat").disabled=true

    var k = getElementsByClassName("kiskep")

    for (let x of k)
    {
        x.style.mar
    }


    //document.getElementById("forgat").disabled=false
}