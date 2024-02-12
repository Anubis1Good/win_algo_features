function startScript(someFunc) {
    chrome.tabs.query({ active: true }, (tabs) => {
        const tab = tabs[0]
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id,
                allFrames: true,
            },
            func: someFunc,
        })
    })
}
document.querySelector('.main__BO_btn').onclick = () => {
    startScript(openLessons)
}
document.querySelector('.main__checkbox_btn').onclick = () => {
    startScript(forgiveCheckbox)
}
document.querySelector('.main__openQuiz_btn').onclick = () => {
    startScript(openQuiz)
}
document.querySelector('.main__gotoStudent_btn').onclick = () => {
    startScript(gotoStudent)
}
document.querySelector('.main__saveClasses_btn').onclick = () => {
    startScript(saveClasses)
}

function openLessons() {
    const btns = document.getElementsByClassName('btn-xs')
    if (btns) {
        for (let btn of btns) {
            btn.disabled = false
        }
    }
}

function forgiveCheckbox() {
    const check_btn_cl = localStorage.getItem('check_btn_cl')
    const restart_btn_cl = localStorage.getItem('restart_btn_cl')
    if (check_btn_cl && restart_btn_cl) {
        const check_btn = document.querySelector('[type="done"]')
        const restart_btn = document.querySelector('[type="restart"]')
        if (check_btn && restart_btn) {
            check_btn.classList.add(check_btn_cl)
            restart_btn.classList.add(restart_btn_cl)
        }
        const block_task_cl = localStorage.getItem('block_task_cl')
        const tasks = document.querySelector('[type="done"]').parentNode.nextSibling
        
        if (block_task_cl && tasks){
            tasks.classList.remove(tasks.classList[1])
            tasks.classList.add(block_task_cl)
        }
    } else {
        alert('Классы не сохранены')
    }
}
function openQuiz() {

    const divs = document.getElementById('root').children[0].children
    const blockTask = divs[1]
    const blockOverlay = divs[2]

    if (blockTask && blockOverlay) {
        blockTask.style.display = 'flex'
        blockOverlay.style.display = 'none'
        const btn_next = document.createElement('button')
        blockTask.appendChild(btn_next)
        btn_next.innerHTML = 'next➡'
        btn_next.onclick = () => {
            const adress = window.location.href
            const reg = /level=\w*&/
            const start = adress.search(reg) + 6
            const end = adress.indexOf('&', start)
            const task = adress.slice(start, end)
            const newAdress =
                adress.slice(0, start) +
                (parseInt(task) + 1) +
                adress.slice(end, adress.length)
            window.location.href = newAdress
        }
    }
}

function gotoStudent() {
    console.log('TODO')
}

function saveClasses() {
    const check_btn_cl = document.querySelector('[type="done"]').classList[1]
    const restart_btn_cl =
        document.querySelector('[type="restart"]').classList[1]
    const block_task_cl = document.querySelector('[type="done"]').parentNode.nextSibling.classList[1]
    
    localStorage.setItem('check_btn_cl', check_btn_cl)
    localStorage.setItem('restart_btn_cl', restart_btn_cl)
    localStorage.setItem('block_task_cl',block_task_cl)
    alert('Классы сохранены')
}
