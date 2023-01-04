const title = document.getElementById('title');
const text = document.getElementById('text');

const getAdvice = async() => {

    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();

    title.innerHTML = `ADVICE #${data.slip.id}`;
    text.innerHTML = `"${data.slip.advice}"`
}

getAdvice();