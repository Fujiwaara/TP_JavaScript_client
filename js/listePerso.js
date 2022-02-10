let personnages = recupListePersos();
console.log(personnages);

for (let i = 0; i < personnages.length; i++) {
    const element = personnages[i];
    createTable(element, i)
}


function createTable(item, i) {
    const tableContainer = document.querySelector('#container_table');

    let tbody = document.createElement('tbody');

    let trTbody = document.createElement('tr');
 
    let thScopeRow = document.createElement('th');
    thScopeRow.setAttribute("scope", "row");
    thScopeRow.innerHTML = i+1;

    let td1ScopeRow = document.createElement('td');
    if (item.nom[1]) {
        td1ScopeRow.innerHTML = item.nom[0] + " " + item.nom[1];
    } else {
        td1ScopeRow.innerHTML = item.nom[0];
    }
    
    let td2ScopeRow = document.createElement('td');
    td2ScopeRow.innerHTML = item.classe;

    let td3ScopeRow = document.createElement('td');
    td3ScopeRow.innerHTML = item.arme;

    tableContainer.appendChild(trTbody);
    trTbody.appendChild(thScopeRow);
    trTbody.appendChild(td1ScopeRow);
    trTbody.appendChild(td2ScopeRow);
    trTbody.appendChild(td3ScopeRow);
}