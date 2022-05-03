function setErr(id, er) {
    var elemet = document.getElementById(id);
    elemet.innerText = er;
  }
  function namevaidate(id) {
    var nameInput = document.getElementById(id);
    var nameInputData = nameInput.value;
    if (nameInput.value.length == 1) {
      setErr("fname-invalid", "!Length of name is too short");
    } else if (nameInputData.length > 60) {
      setErr("fname-invalid", "!Length of name is too long");
    } else {
      setErr("fname-invalid", "");
    }
  }