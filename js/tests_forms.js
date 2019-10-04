document.getElementById("form1").onsubmit = function (e) {
    e.preventDefault();

    let result = 0;
    for (let i = 1; i <= 20; i++) {
      let questionId;
      
      if (i < 10) questionId = "oe1_0" + i;
      else questionId = "oe1_" + i;

      if (document.querySelector('input[name =' + questionId + ']:checked') !== null) {
        const points = parseInt(document.querySelector('input[name = ' + questionId + ']:checked').value);
        result += points;
      }
    }
    document.getElementById("gradeoe1").innerHTML = result;

    return false; 
}

document.getElementById("form2").onsubmit = function (e) {

    e.preventDefault();

    let result = 0;
    for (let i = 1; i <= 20; i++) {
      let questionId;

      if (i < 10) questionId = "oe2_0" + i;
      else questionId = "oe2_" + i;

      if (document.querySelector('input[name =' + questionId + ']:checked') !== null) {
        const points = parseInt(document.querySelector('input[name = ' + questionId + ']:checked').value);
        result += points;
      }
    }
    document.getElementById("gradeoe2").innerHTML = result;

    return false; 
}

document.getElementById("form3").onsubmit = function (e) {
    e.preventDefault();

    let result = 0;
    for (let i = 1; i <= 20; i++) {
      let questionId;

      if (i < 10) questionId = "oe3_0" + i;
      else questionId = "oe3_" + i;

      if (document.querySelector('input[name =' + questionId + ']:checked') !== null) {
        const points = parseInt(document.querySelector('input[name = ' + questionId + ']:checked').value);
        result += points;
      }
    }
    document.getElementById("gradeoe3").innerHTML = result;

    return false; 
}

document.getElementById("form4").onsubmit = function (e) {
    e.preventDefault();

    let result = 0;
    for (let i = 1; i <= 20; i++) {
      let questionId;

      if (i < 10) questionId = "oe4_0" + i;
      else questionId = "oe4_" + i;

      if (document.querySelector('input[name =' + questionId + ']:checked') !== null) {
        const points = parseInt(document.querySelector('input[name = ' + questionId + ']:checked').value);
        result += points;
      }
    }
    document.getElementById("gradeoe4").innerHTML = result;

    return false; 
}

document.getElementById("form5").onsubmit = function (e) {
    e.preventDefault();

    let result = 0;
    for (let i = 1; i <= 20; i++) {
      let questionId;

      if (i < 10) questionId = "oe5_0" + i;
      else questionId = "oe5_" + i;

      if (document.querySelector('input[name =' + questionId + ']:checked') !== null) {
        const points = parseInt(document.querySelector('input[name = ' + questionId + ']:checked').value);
        result += points;
      }
    }
    document.getElementById("gradeoe5").innerHTML = result;

    return false; 
}

document.getElementById("form6").onsubmit = function (e) {
    e.preventDefault();

    let result = 0;
    for (let i = 1; i <= 20; i++) {
      let questionId;

      if (i < 10) questionId = "oe6_0" + i;
      else questionId = "oe6_" + i;

      if (document.querySelector('input[name =' + questionId + ']:checked') !== null) {
        const points = parseInt(document.querySelector('input[name = ' + questionId + ']:checked').value);
        result += points;
      }
    }
    document.getElementById("gradeoe6").innerHTML = result;

    return false; 
}