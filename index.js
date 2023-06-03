let myleads = []
let inputEl=document.getElementById('input-btn')
let savebtn = document.getElementById("save-btn")
const ulEl=document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,  lastFocusedWindow: true},function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    }
)
})
function getValue(){
    const val=inputEl.value
    return val
}
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads = []
    render(myleads)
})
savebtn.addEventListener("click",function(){
    myleads.push(getValue())
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    // console.log(localStorage.getItem("myleads"))
})
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
if(leadsfromlocalstorage){
    myleads = leadsfromlocalstorage
    render(myleads)
}
function render(leads){
    let list_item = ""
    for(let i=0;i<leads.length;i++){
    list_item += `
    <li>
        <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
    </li>
    `
}
ulEl.innerHTML = list_item
}


