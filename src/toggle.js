const toggle = () => {
    const text = document.getElementById('text');
    const currentState = text.style.visibility;
    if(currentState === 'visible') text.style.visibility = 'hidden';
    else text.style.visibility = 'visible';
};

export default toggle