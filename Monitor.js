let i = 0
let c = 0
let currentDot = document.getElementById("firstDot")
for (let i = 0; i < 12000; i++) {
    setTimeout(update, 100)
    //const dot = document.createElement("span")
    //dot.className = "dot"
    //dot.style.marginBottom = `${c}px`
    //dot.id = `dot${i}`
//
    //if (i > 1000 && i < 1100) {
    //    c = c + 1
    //}
    //if (i > 1100 && i < 1300) {
    //    c = c - 1
    //}
    //if (i > 1300 && i < 1400) {
    //    c = c + 1
    //}
//
    //if (i > 2000 && i < 2100) {
    //    c = c + 1
    //}
    //if (i > 2100 && i < 2300) {
    //    c = c - 1
    //}
    //if (i > 2300 && i < 2400) {
    //    c = c + 1
    //}
//
    //if (i > 3000 && i < 3100) {
    //    c = c + 1
    //}
    //if (i > 3100 && i < 3300) {
    //    c = c - 1
    //}
    //if (i > 3300 && i < 3400) {
    //    c = c + 1
    //}
//
//
    //document.body.appendChild(dot)   
    //currentDot.after(dot)
    //currentDot = document.getElementById(`${dot.id}`)
}

function update() {
    const dot = document.createElement("span")
    dot.className = "dot"
    dot.style.marginBottom = `${c}px`
    dot.id = `dot${i}`

    if (i > 1000 && i < 1100) {
        c = c + 1
    }
    if (i > 1100 && i < 1300) {
        c = c - 1
    }
    if (i > 1300 && i < 1400) {
        c = c + 1
    }

    if (i > 2000 && i < 2100) {
        c = c + 1
    }
    if (i > 2100 && i < 2300) {
        c = c - 1
    }
    if (i > 2300 && i < 2400) {
        c = c + 1
    }

    if (i > 3000 && i < 3100) {
        c = c + 1
    }
    if (i > 3100 && i < 3300) {
        c = c - 1
    }
    if (i > 3300 && i < 3400) {
        c = c + 1
    }


    document.body.appendChild(dot)   
    currentDot.after(dot)
    currentDot = document.getElementById(`${dot.id}`)
    i++
}

function updateNew() {
    const dot = document.createElement("span")
    dot.className = "dot"
    dot.style.marginBottom = `${c}px`
    dot.id = `dot${i}`

    if (i > 1000 && i < 1100) {
        c = c + 1
    }
    if (i > 1100 && i < 1300) {
        c = c - 1
    }
    if (i > 1300 && i < 1400) {
        c = c + 1
    }

    if (i > 2000 && i < 2100) {
        c = c + 1
    }
    if (i > 2100 && i < 2300) {
        c = c - 1
    }
    if (i > 2300 && i < 2400) {
        c = c + 1
    }

    if (i > 3000 && i < 3100) {
        c = c + 1
    }
    if (i > 3100 && i < 3300) {
        c = c - 1
    }
    if (i > 3300 && i < 3400) {
        c = c + 1
    }


    document.body.appendChild(dot)   
    currentDot.after(dot)
    currentDot = document.getElementById(`${dot.id}`)
    i++
}
