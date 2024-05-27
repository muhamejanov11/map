let container = document.querySelector(".container")

let arr = [99, 88, 77, 66, 55, 44, 33, 22, 11]

const ReadMapNumbers = () => {
    arr.map((v) => {
        let p = document.createElement('p')
        p.innerHTML = v
        container.appendChild(p)
        if (v % 2 === 0) {
            p.style.background = 'green'
        }

        else{
            p.style.background = 'red'
        }
    })
}

ReadMapNumbers()