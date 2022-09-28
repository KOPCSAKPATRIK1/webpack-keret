import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

function ChangeKep()
{
    let url = document.getElementById('url').value;
    document.getElementById('width').defaultValue = document.getElementById('kep').width;
    let width = document.getElementById('width').value;
    let border = document.getElementById('width').value;
    let color = document.getElementById('width').value;
    document.getElementById('kep').src = url;
    document.getElementById('kep').width = width;
    document.getElementById('kep').style.border = border;



}

function init()
{
    console.log("Loaded");
    document.getElementById('url').addEventListener('input',ChangeKep);
    document.getElementById('width').addEventListener('change',ChangeKep);
    document.getElementById('border').addEventListener('input',ChangeKep);
    document.getElementById('color').addEventListener('input',ChangeKep);

}

document.addEventListener('DOMContentLoaded', init)
