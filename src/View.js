const View = {
    render({ minutes, seconds }) {
        document.body.innerHTML = `
        <p>Next post on... </p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View };