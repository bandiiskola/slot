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
        for (y of t[i].sorrend) {
            document.getElementById("s"+(i+1)).innerHTML+="<img class='kiskep' src='assets/images/"+y+".png'>"
        }
    }
}

Berak()

function porget() {
    document.getElementById("forgat").disabled=true

    mozdit()
}

function mozdit() {
    document.getElementById("s1").getElementsByClassName("kiskep")[0].style.marginTop="-160px"
    document.getElementById("s2").getElementsByClassName("kiskep")[0].style.marginTop="-160px"
    document.getElementById("s3").getElementsByClassName("kiskep")[0].style.marginTop="-160px"
    document.getElementById("s1").getElementsByClassName("kiskep")[0].remove
    document.getElementById("s2").getElementsByClassName("kiskep")[0].remove
    document.getElementById("s3").getElementsByClassName("kiskep")[0].remove

    for (var i=0;i<t.length;i++)
    {
        t[i].sorrend.shift()
        t[i].sorrend.push(Math.floor(Math.random()*7)+1)
        for (y of t[i].sorrend) {
            document.getElementById("s"+(i+1)).innerHTML+="<img class='kiskep' src='assets/images/"+y+".png'>"
        }
    }

    Rajzol()
    document.getElementById("forgat").disabled=false
}