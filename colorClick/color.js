const changeColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    console.log(color)
    document.body.style.backgroundColor = color;
    document.getElementById("idColor").innerHTML = "rgb(" + x + "," + y + "," + z + ")";
}