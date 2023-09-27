const table = document.querySelector(".table-container");

window.addEventListener('mousemove',(e)=>{
    console.log(e);

    table.innerHTML = `
        <table>
            <tr>
                <th>ClientX</th>
                <th>ClentY</th>
                <th>ScreenX</th>
                <th>ScreenY</th>
            </tr>
        <tr>
            <td>${e.clientX}</td>
            <td>${e.clientY}</td>
            <td>${e.screenX}</td>
            <td>${e.screenY}</td>

        </tr>
    </table>`;
})

/* clientX and clientY are relative to the viewport.
screenX and screenY are relative to the screen or monitor.
movementX and movementY represent the change in position since the last event.
offsetX and offsetY are relative to the target element. */