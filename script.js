function rollDice(){
    const num = document.getElementById("num").value;
    const diceresult = document.getElementById("diceresult");
    const diceimage = document.getElementById("diceimage");

    const values =[];
    const images =[];

    for(let i = 1; i<= num ; i++){
        const value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        images.push(`<img src="./image/${value}.png" alt="image gayab" height="100" width="100">`);
    }
    console.log(images);
    diceresult.textContent=`dice : ${values.join(', ')}`;
    diceimage.innerHTML = images.join(" ");
}