// function to display the input value

const display = (number) => {
  var result = document.getElementById('result');
  result.value += number;

  }


  // function to calculate the input value

  function calculate () {
  var result = document.getElementById('result').value;
  var y = eval(result);
  document.getElementById('result').value = y;
  }

  // function to clear the input value
  const clrs = () =>{
  document.getElementById('result').value = "";
  }

  // function to delete the input value

  const delet = () => {
  result.value = result.value.slice(0,-1);
  }

  window.addEventListener('error', (e) => {
  alert('Error : '+ e.message)
  })




