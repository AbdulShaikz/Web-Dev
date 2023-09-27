const tableContainer = document.querySelector('.table-container');

console.log(window);

window.addEventListener('keydown',(e)=>{
    tableContainer.innerHTML = `
        <table>
            <tr>
                <th>Key</th>
                <th>Code</th>
                <th>KeyCode</th>
                <th>AlternateKey</th>
            </tr>
        <tr>
            <td>${e.key==' '?"Space":e.key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
            <td>${e.altKey}</td>

        </tr>
    </table>`;
    console.log(tableContainer);
})