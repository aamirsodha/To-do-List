var txtinput = document.getElementById("txtinput")
var ulList = document.getElementById("txtul")
var taskC = document.getElementById("task_Com")
var taskP = document.getElementById("task_Pend")
var taskT = document.getElementById("task_T")

txtinput.addEventListener('keydown',function(event) {
    
    if(event.key === 'Enter')
        {
            addList()
        }
})

function addList(){
    if(txtinput.value === '')
        {
            alert("you must write something.....")
        }
        else
        {
            var li = document.createElement("li")
            
            var li_checkbox = document.createElement("input")
            li_checkbox.setAttribute('type','checkbox')
            li_checkbox.setAttribute('id','licheck')
            li_checkbox.setAttribute('onchange','checkChange(event)')

            li.appendChild(li_checkbox)
            
            var li_input = document.createElement("input")
            li_input.setAttribute('type','text')
            li_input.setAttribute('id','txtlistinput')
            li_input.setAttribute('value',txtinput.value)
            li_input.setAttribute('disabled','disabled')

            li.appendChild(li_input)
            
            var li_edit = document.createElement("button")
            li_edit.setAttribute('id','btnEdit')
            li_edit.setAttribute('onclick','editlist(event)')
            var li_edit_i = document.createElement("i")
            li_edit_i.setAttribute('class','fa fa-edit')
            li_edit.appendChild(li_edit_i)

            li.appendChild(li_edit)

            var li_del = document.createElement("button")
            li_del.setAttribute('id','btnDel')
            li_del.setAttribute('onclick','delList(event)')
            var li_del_i = document.createElement("i")
            li_del_i.setAttribute('class','fa fa-trash')
            li_del.appendChild(li_del_i)

            li.appendChild(li_del)

            ulList.appendChild(li)

            txtinput.value=''
            countTasks()

        }
}

function delList(event){
    event.target.parentElement.parentElement.remove();
    countTasks()
}
function checkChange(event){
    var elem = event.target.parentNode.children[1]
    // console.log(elem)
    if(event.target.checked)
    {
        elem.style.textDecoration = "line-through"
    }
    else
    {
        elem.style.textDecoration = "none"
    }
    countTasks()
    
}

function editlist(event){
    var elem = event.target.parentElement.parentElement.children[1]
    //console.log(elem)
    elem.removeAttribute("disabled")
    elem.focus();
    event.target.removeAttribute('class')
    event.target.parentElement.removeAttribute('onclick')
    event.target.setAttribute('class','fa fa-save')
    event.target.parentElement.setAttribute('onclick','savelist(event)')
}
function savelist(event){
    var elem = event.target.parentElement.parentElement.children[1]
    // console.log(elem)
    elem.setAttribute('disabled','disabled')
    event.target.removeAttribute('class')
    event.target.setAttribute('class','fa fa-edit')
    event.target.parentElement.removeAttribute('onclick')
    event.target.parentElement.setAttribute('onclick','editlist(event)')
}
countTasks()
function countTasks(){
    var checkboxes = document.querySelectorAll('#txtul #licheck')

    var totalTasks = Array.from(checkboxes).filter(checkbox => checkbox).length;
    var comTasks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    taskT.innerHTML = totalTasks
    taskC.innerHTML = comTasks
    taskP.innerHTML = totalTasks-comTasks
}