import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './../../layout/dialog.js';

const divStyle = {
  background: {
    width: 'inherit',
    height: 'inherit',
    backgroundImage: 'url(../../pictures/vancouver-green.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
    position: 'absolute',
  },
  container: {
    margin: '100px',
    zIndex: '1',
  },
  canvas: {
    position: 'absolute',
    width: '830px',
    height: '400px',
    padding: '0',
    margin: 'auto',
    display: 'block',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
  outro: {
    position: 'absolute',
    bottom: '0',
    right: '20%',
  },
};

export default class Home extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    var w = this.refs.canvas.width;
    var h = this.refs.canvas.height;
    ctx.fillRect(0,0, 300, 300);
    ctx.strokeStyle = 'rgba(135,206,250,.8)';
    ctx.lineWidth = .1;
    ctx.lineCap = 'round';

    var init = [];
    var maxParts = 500;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 3,
        xs: -4 + Math.random() * 2 + 2.3,
        ys: Math.random() * 4 + 3
      })
    }

    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 30);
  }
  render() {
    const dialog = {
      intro: "Hello! I'm Brandon Lam, a junior full stack web developer from beutiful British Columbia...",
      outro: "my goal is to be an intermediate full stack web developer by December 2017."
    }
    return (
      <div style={divStyle.background}>
        <canvas ref='canvas' style={divStyle.canvas}>
        </canvas>
        <div style={divStyle.container}>
          <div>
            <Dialog dialog={dialog.intro} />
          </div>
          <div style={divStyle.outro}>
            <Dialog dialog={dialog.outro} />
          </div>
        </div>
      </div>
    );
  }
}
