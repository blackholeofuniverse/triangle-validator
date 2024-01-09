function validateTriangle() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);
  
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        document.getElementById("result").textContent = "It's a valid triangle!";
    } else {
        document.getElementById("result").textContent = "It's not a valid triangle.";
    }
  }
  