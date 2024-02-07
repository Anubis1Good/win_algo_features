function startScript(someFunc){
    chrome.tabs.query({ active: true }, (tabs) => {
        const tab = tabs[0]
        chrome.scripting.executeScript(
            {
                target:{
                    tabId: tab.id,
                    allFrames: true
                },
                func: someFunc
            }
        )
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


function openLessons(){
    const btns = document.getElementsByClassName('btn-xs')
    if (btns){
        for (let btn of btns){
            btn.disabled = false
            
        }

    }
}

function forgiveCheckbox(){
    const check_btn = document.querySelector('.dHsxLw')
    const restart_btn = document.querySelector('.jMZWwi')
    if (check_btn && restart_btn){
        check_btn.classList.remove('dHsxLw')
        check_btn.classList.add('gchTFx')
        restart_btn.classList.remove('jMZWwi')
        restart_btn.classList.add('boGcTb')

    }
    const tasks = document.querySelector('.iNogWr')
    if (tasks){
        tasks.classList.remove('iNogWr')
        tasks.classList.add('gBtcRu')

    }

}
function openQuiz(){
    const blockTask = document.querySelector('.ggYfwG')
    const blockOverlay = document.querySelector('.kdPPyv')
    if (blockTask && blockOverlay){
        blockTask.style.display = 'flex'
        blockOverlay.style.display = 'none'
        const btn_next = document.createElement('button')
        blockTask.appendChild(btn_next)
        btn_next.innerHTML = 'next➡'
        btn_next.onclick = ()=>{
            const adress = window.location.href
            const reg = /level=\w*&/
            const start = adress.search(reg)+6
            const end = adress.indexOf('&',start)
            const task = adress.slice(start,end)
            const newAdress = adress.slice(0,start) + (parseInt(task)+1) + adress.slice(end,adress.length)
            window.location.href = newAdress
            
        }
    }
}



