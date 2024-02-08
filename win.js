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



function openLessons(){
    const btns = document.getElementsByClassName('btn-xs')
    if (btns){
        for (let btn of btns){
            btn.disabled = false
            
        }

    }
}





