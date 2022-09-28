import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

function ChangeKep()
{
    let url = document.getElementById('url').value;
    document.getElementById('kep').src = url;
    document.getElementById('width').defaultValue = document.getElementById('kep').width;
}

function width()
{
    let width = document.getElementById('width').value;
    document.getElementById('kep').width = width;
}

function borderWidth()
{
    let border = document.getElementById('border').value;
    document.getElementById('kep').style.border = border + 'px solid black' ;
}

function borderColor()
{
    let color = document.getElementById('color').value;
    document.getElementById('kep').style.borderColor = color
}

function init()
{
    console.log("Loaded");
    document.getElementById('url').addEventListener('input',ChangeKep);
    document.getElementById('width').addEventListener('change',width);
    document.getElementById('border').addEventListener('change',borderWidth);
    document.getElementById('color').addEventListener('input',borderColor);

}

document.addEventListener('DOMContentLoaded', init)
