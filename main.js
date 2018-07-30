const second=1000;

const state={
  current:0,
}

function increment(){
  state.current++
}

function reset(){
  state.current=0
}

function render(){
  var screen=document.getElementById('screen');
  screen.innerText=state.current;
}

document.getElementById('incrementButton').addEventListener('click',function(){
  increment();
  render();
})

document.getElementById('resetButton').addEventListener('click',function(){
  reset();
  render();
})

// setInterval(increment,second);
// setInterval(reset,second*10);
// setInterval(render,second);
