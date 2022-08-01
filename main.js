let allUsersTbody = document.querySelector("tbody");
let searchField   = document.querySelector("[type='search']");
let searchError   = document.querySelector("#searchError");


searchField.addEventListener("input",filterUserTableDisplay);


createTable();

function filterUserTableDisplay() {
    let term = this.value;
    let currentDb = db.filter(user => {
        if(user.fullName.toLowerCase().indexOf(term) !== -1 || user.email.toLowerCase().indexOf(term) !== -1 || user.city.toLowerCase().indexOf(term) !== -1 || user.job.toLowerCase().indexOf(term) !== -1) {
            return user;
        }
    });
    createTable(currentDb);
    filterUserTable(currentDb);
}




function createTable() {
    let text = ``.trim();
    db.forEach(user => {
        text += `
        <tr>
            <td>${user.id}</td>
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.city}</td>
            <td>${user.job}</td>
        </tr>
        `.trim();
    });
    allUsersTbody.innerHTML = text;
}

function filterUserTable(currentDb) {
    let text = ``.trim();
    currentDb.forEach(user => {
        text += `
        <tr>
            <td>${user.id}</td>
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.city}</td>
            <td>${user.job}</td>
        </tr>
        `.trim();
    });
    allUsersTbody.innerHTML = text;
}




