document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let idNumber = document.getElementById("idNumber").value;
    let degree = document.getElementById("degree").value;
    let supervisor = document.getElementById("supervisor").value;


  
    // Create a student block element
    let studentContainer = document.getElementById("studentContainer");

    let studentBlock = document.createElement("div");
    studentBlock.className = "student-block";

    let deleteBtn = document.createElement("div");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
      studentContainer.removeChild(studentBlock);
    });
    let content = document.createElement("p");
    content.innerHTML =
      "<strong>Name:</strong> " + firstName + " " + lastName + "<br>" +
      "<strong>ID Number:</strong> " + idNumber + "<br>" +
      "<strong>Degree:</strong> " + degree + "<br>" +
      "<strong>Supervisor:</strong> " + supervisor;
  
    studentBlock.appendChild(content);
    studentBlock.appendChild(deleteBtn);
    studentContainer.prepend(studentBlock);
  
    // Clear form values
    document.getElementById("studentForm").reset();
  });
  