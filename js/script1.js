function AddRow(obj) {
    let table = document.querySelector("table");
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    // td.innerHTML = id.toString();
    // tr.appendChild(td);
    // td = document.createElement('td');
    td.innerHTML = obj.day;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = obj.eo;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = obj.sub;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = obj.time;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = obj.type;
    tr.appendChild(td);
    table.appendChild(tr);
}
// window.localStorage.clear()
let id = 0
window.addEventListener('load', function (e) {
    let locstor = window.localStorage;
    let i = 0;
    let next;
    while ((next = locstor.getItem(i.toString())) != null) {
        let mblast = JSON.parse(next);
        AddRow(mblast);
        i++;
        id++;
    }
    document.querySelector('#send').onclick = function (event) {
        event.preventDefault();
        let day = document.querySelector("#day").value;
        let eo = document.querySelector("#eo").value;
        let sub = document.querySelector("#sub").value;
        let time = document.querySelector("#time").value;
        let type = document.querySelector("#type").value;
        let locstor = window.localStorage;
        locstor.setItem(id.toString(), JSON.stringify({day: day, eo: eo, sub: sub, time: time, type: type}));
        AddRow({day: day, eo: eo, sub: sub, time: time, type: type});
        id++;
    }
    document.querySelector('#delall').onclick = function (event) {
        event.preventDefault();
        let table = document.querySelector("table");
        for (let j = 0; j < id; j++){
            table.deleteRow(id - j);
        }
        window.localStorage.clear();
        id = 0;
    }
    document.querySelector('#delast').onclick = function (event) {
        event.preventDefault();
        let table = document.querySelector("table");
        if(window.localStorage.length > 0) {
            table.deleteRow(id);
            window.localStorage.removeItem((id - 1).toString());
            id--;
        }
    }
}, false)