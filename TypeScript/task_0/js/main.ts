// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
  };
  
  // Store students in an array
  const studentsList: Student[] = [student1, student2];
  
  // Function to render a table with student data
  function renderTable(students: Student[]) {
    const table = document.createElement('table');
    
    // Create the table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headerFirstName = headerRow.insertCell(0);
    const headerLocation = headerRow.insertCell(1);
    headerFirstName.textContent = 'First Name';
    headerLocation.textContent = 'Location';
  
    // Create the table body and populate rows
    const tbody = table.createTBody();
    students.forEach(student => {
      const row = tbody.insertRow();
      const cellFirstName = row.insertCell(0);
      const cellLocation = row.insertCell(1);
      cellFirstName.textContent = student.firstName;
      cellLocation.textContent = student.location;
    });
  
    // Append the table to the document body
    document.body.appendChild(table);
  }
  
  // Call the function to render the table
  renderTable(studentsList);
  