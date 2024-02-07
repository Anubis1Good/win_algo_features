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

function openLessons(){
    const btns = document.getElementsByClassName('btn-xs')
    for (let btn of btns){
        btn.disabled = false
        
    }
}

function forgiveCheckbox(){
    const check_btn = document.querySelector('.dHsxLw')
    const restart_btn = document.querySelector('.jMZWwi')
    check_btn.classList.remove('dHsxLw')
    check_btn.classList.add('gchTFx')
    restart_btn.classList.remove('jMZWwi')
    restart_btn.classList.add('boGcTb')

    const tasks = document.querySelector('.iNogWr')
    tasks.classList.remove('iNogWr')
    tasks.classList.add('gBtcRu')

}

