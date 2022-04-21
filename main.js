class Typer {
    constructor(elt) {
        this.elt = elt;
        this.text = elt.innerHTML;
        this.result = '';
        this.idx = 0;
    }
    
    type(rate, finished = function(){}) {
        this.t = setInterval(() => {
            this.result += this.text[this.idx];
            this.idx++;
            this.elt.innerHTML = this.result;
            if (this.result.length == this.text.length) {
                finished();
                clearInterval(this.t);
                document.getElementById('skip').style.display = 'none';
            }
        }, rate);
    }

    finish() {
        clearInterval(this.t);
        this.elt.innerHTML = this.text;
        showUpdates();
    }
}

window.onload = () => {
    const x = new Typer(document.getElementById('text'));
    x.type(20, showUpdates);

    document.getElementById('skip').onclick = function(){
        this.style.display = 'none';
        x.finish();
    }
}

function showUpdates(){
    document.getElementById('updates').style.display = 'block';
    const y = new Typer(document.getElementById('parttwo'));
    y.type(20);
}
