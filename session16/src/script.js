const btn = document.getElementById('btnClick');
const btnReject = document.getElementById('btnClickReject');

let prom = new Promise((resolve, reject) => {
    btn.addEventListener('click', () => {
        resolve('hi')
    })
    btnReject.addEventListener('click', () => {
        reject()
    })
})

prom.then(p => console.log(p))

