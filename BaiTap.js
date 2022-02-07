var numArray = [];

function addNumToArray() {
  var contentHTML = "";
  var numStr = document.getElementById("txtIntNumber").value;

  if (Number.isInteger(numStr * 1) && numStr.trim() !== "") {
    numArray.push(numStr * 1);
    for (var index = 0; index < numArray.length; index++) {
      contentHTML += `${numArray[index]}   `;
    }
    document.getElementById(
      "result"
    ).innerText = `Mãng hiện tại: [  ${contentHTML}]`;
  } else {
    alert("Vui lòng nhập vào số nguyên");
  }
}

function sumNum() {
  var total = 0;
  numArray.map(function (num) {
    if (num >= 0) {
      total += num;
    }
  });
  document.getElementById(
    "result1"
  ).innerText = `Tổng số nguyên dương trong mãng là: ${total}`;
}

function countNum() {
  var numCountArray = numArray.filter(function (num) {
    return num >= 0;
  });
  document.getElementById(
    "result2"
  ).innerText = `Có ${numCountArray.length} số nguyên dương trong mãng.`;
}

function minNum() {
  var minNumber;
  if (numArray.length > 0) {
    minNumber = numArray[0];
    for (var index = 1; index < numArray.length; index++) {
      if (minNumber > numArray[index]) {
        minNumber = numArray[index];
      }
    }
    document.getElementById(
      "result3"
    ).innerText = `Số nhỏ nhất trong mãng là: ${minNumber}`;
  } else {
    alert("Mãng không có phần tử nào");
  }
}

function minNumMoreThanZero() {
  var numCountArray = numArray.filter(function (num) {
    return num >= 0;
  });
  if (numCountArray.length <= 0) {
    alert("Mãng không có phần tử nào");
    return;
  }

  var minNumber = numCountArray[0];
  numCountArray.map(function (num) {
    if (minNumber > num) {
      minNumber = num;
    }
  });
  document.getElementById(
    "result4"
  ).innerText = `Số nguyên dương nhỏ nhất trong mãng là: ${minNumber}`;
}

function findEvenNum() {
  var evenArray = numArray.filter(function (num) {
    return num % 2 === 0;
  });
  if (evenArray.length <= 0) {
    document.getElementById("result5").innerText = `-1`;
    return;
  }
  document.getElementById(
    "result5"
  ).innerText = `Số chẵn cuối cùng trong mãng là: ${
    evenArray[evenArray.length - 1]
  }`;
}

function changePosition() {
  var contentHTML = "";
  var pos1Str = document.getElementById("txtIntPos1").value;
  var pos2Str = document.getElementById("txtIntPos2").value;
  var pos1Value = pos1Str * 1;
  var pos2Value = pos2Str * 1;
  var tempValue;

  if (
    Number.isInteger(pos1Value) &&
    pos1Str !== "" &&
    Number.isInteger(pos2Value) &&
    pos2Str !== "" &&
    pos1Value >= 0 &&
    pos2Value >= 0
  ) {
    if (pos1Value >= numArray.length || pos2Value >= numArray.length) {
      alert("Vị trí nhập vào nằm ngoài vùng của mãng");
      return;
    }
    if (pos1Value !== pos2Value) {
      tempValue = numArray[pos1Value];
      numArray[pos1Value] = numArray[pos2Value];
      numArray[pos2Value] = tempValue;
    }
    for (var index = 0; index < numArray.length; index++) {
      contentHTML += `${numArray[index]}   `;
    }
    document.getElementById(
      "result6"
    ).innerText = `Mãng hiện tại: [  ${contentHTML}]`;
  } else {
    alert("Vui lòng nhập vào số nguyên dương");
  }
}

function sortAscending() {
  if (numArray.length <= 0) {
    alert("Mãng không có phần tử nào");
    return;
  }
  var contentHTML = "";
  numArray.sort(function (a, b) {
    return a - b;
  });
  for (var index = 0; index < numArray.length; index++) {
    contentHTML += `${numArray[index]}   `;
  }
  document.getElementById(
    "result7"
  ).innerText = `Mãng hiện tại: [  ${contentHTML}]`;
}

function findSNT() {
  var arrSNT = numArray.filter(function (num) {
    if (num < 2) {
      return;
    }
    if (!kiemTraSoNguyenTo(num)) {
      return;
    }
    return num;
  });
  if (arrSNT.length > 0) {
    document.getElementById(
      "result8"
    ).innerText = `Số nguyên tố đầu tiên trong mãng là: ${arrSNT[0]}`;
  } else {
    document.getElementById(
      "result8"
    ).innerText = `Mãng không có số nguyên tố: -1`;
  }
}
function kiemTraSoNguyenTo(soI) {
  var j = 2;
  var checkSNT = true;
  while (j <= soI / 2) {
    if (soI % j === 0) {
      checkSNT = false;
    }
    j++;
  }
  return checkSNT;
}

var numFloatArray = [];

function addNumToArrayFloat() {
  var contentHTML = "";
  var numFloatStr = document.getElementById("txtFloatNumber").value;
  var numFloat = numFloatStr * 1;
  if (numFloatStr.trim() !== "") {
    if (Number(numFloat)) {
      numFloatArray.push(numFloat);
      for (var index = 0; index < numFloatArray.length; index++) {
        contentHTML += `${numFloatArray[index]}   `;
      }
      document.getElementById(
        "result9_1"
      ).innerText = `Mãng hiện tại: [  ${contentHTML}]`;
    } else {
      numFloatArray.push(numFloat);
      for (var index = 0; index < numFloatArray.length; index++) {
        contentHTML += `${numFloatArray[index]}   `;
      }
      document.getElementById(
        "result9_1"
      ).innerText = `Mãng hiện tại: [  ${contentHTML}]`;
    }
  } else {
    alert("Vui lòng nhập số để thêm vào mãng");
  }
}

function findSN() {
  if (numFloatArray.length <= 0) {
    alert("Vui lòng add vào mãng trước");
    return;
  }
  var countInt = 0;
  for (var index = 0; index < numFloatArray.length; index++) {
    if (isInt(numFloatArray[index])) {
      countInt++;
    }
  }

  document.getElementById(
    "result9_2"
  ).innerText = `Có ${countInt} số nguyên trong mãng`;
}
function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

// function isFloat(n) {
//   return Number(n) === n && n % 1 !== 0;
// }

function isPositive(n) {
  return Number(n) === n && n > 0;
}
function isNegative(n) {
  return Number(n) === n && n < 0;
}

function Compare() {
  var countPositive = 0;
  var countNegative = 0;
  if (numFloatArray.length <= 0) {
    alert("Vui lòng add vào mãng trước");
    return;
  }
  numFloatArray.map(function (num) {
    if (isPositive(num)) {
      countPositive++;
    }
    if (isNegative(num)) {
      countNegative++;
    }
  });
  if (countPositive > countNegative) {
    document.getElementById(
      "result10"
    ).innerText = `Số lượng số dương ${countPositive} lớn hơn số lượng số âm ${countNegative}`;
  } else if (countPositive == countNegative) {
    document.getElementById(
      "result10"
    ).innerText = `Số lượng số dương ${countPositive} bằng số lượng số âm ${countNegative}`;
  } else {
    document.getElementById(
      "result10"
    ).innerText = `Số lượng số dương ${countPositive} nhỏ hơn số lượng số âm ${countNegative}`;
  }
}
