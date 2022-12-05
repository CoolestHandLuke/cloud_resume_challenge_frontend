const countEl = document.getElementById('count');

updateViewCount();

function updateViewCount() {
    fetch('https://8n83x3ebm0.execute-api.us-east-1.amazonaws.com/default/incrementViewcount')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}
