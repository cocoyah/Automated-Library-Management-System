// =============================
// SAMPLE DATA (can be replaced with AJAX/DB)
// =============================
const stats = {
  totalBooks: 1612,
  borrowedBooks: 50,
  overdueBooks: 12
};

const recentActivity = [
  { borrower: "Juan Dela Cruz", accession: "000-123", status: "Borrowed", date: "06-24-25" },
  { borrower: "Jane Doe", accession: "000-456", status: "Returned", date: "06-25-25" },
  { borrower: "Alex Tan", accession: "000-789", status: "Borrowed", date: "06-25-25" },
  { borrower: "Maria Lopez", accession: "000-101", status: "Returned", date: "06-26-25" },
  { borrower: "Juan Dela Cruz", accession: "000-123", status: "Borrowed", date: "06-24-25" },
  { borrower: "Jane Doe", accession: "000-456", status: "Returned", date: "06-25-25" },
  { borrower: "Alex Tan", accession: "000-789", status: "Borrowed", date: "06-25-25" },
  { borrower: "Maria Lopez", accession: "000-101", status: "Returned", date: "06-26-25" },
];

const dueBooks = [
  { accession: "000-789", title: "Book Title 1", borrower: "Maria Santos", contact: "09123456789", dueDate: "06-24-25" },
  { accession: "000-101", title: "Book Title 2", borrower: "Pedro Reyes", contact: "09987654321", dueDate: "06-26-25" },
  { accession: "000-202", title: "Book Title 3", borrower: "Anna Cruz", contact: "09223334444", dueDate: "06-27-25" },
  { accession: "000-202", title: "Book Title 3", borrower: "Anna Cruz", contact: "09223334444", dueDate: "06-27-25" },
  { accession: "000-789", title: "Book Title 1", borrower: "Maria Santos", contact: "09123456789", dueDate: "06-24-25" },
  { accession: "000-101", title: "Book Title 2", borrower: "Pedro Reyes", contact: "09987654321", dueDate: "06-26-25" },
  { accession: "000-202", title: "Book Title 3", borrower: "Anna Cruz", contact: "09223334444", dueDate: "06-27-25" },
  { accession: "000-202", title: "Book Title 3", borrower: "Anna Cruz", contact: "09223334444", dueDate: "06-27-25" },
  
];

// =============================
// Populate Quick Stats
// =============================
document.getElementById("totalBooks").textContent = stats.totalBooks;
document.getElementById("booksBorrowed").textContent = stats.borrowedBooks;
document.getElementById("overdueBooks").textContent = stats.overdueBooks;

// =============================
// Populate Recent Activity Table
// =============================
const activityTable = document.querySelector("#recentActivityTable tbody");
if (recentActivity.length === 0) {
  activityTable.innerHTML = `<tr><td colspan="4" style="text-align:center;">No records found</td></tr>`;
} else {
  recentActivity.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.borrower}</td>
      <td>${item.accession}</td>
      <td class="status ${item.status.toLowerCase()}">${item.status}</td>
      <td>${item.date}</td>
    `;
    activityTable.appendChild(tr);
  });
}

// =============================
// Populate Due Books Table
// =============================
const dueTable = document.querySelector("#dueBooksTable tbody");
if (dueBooks.length === 0) {
  dueTable.innerHTML = `<tr><td colspan="5" style="text-align:center;">No records found</td></tr>`;
} else {
  dueBooks.forEach(book => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${book.accession}</td>
      <td>${book.title}</td>
      <td>${book.borrower}</td>
      <td>${book.contact}</td>
      <td>${book.dueDate}</td>
    `;
    dueTable.appendChild(tr);
  });
}

// =============================
// Charts
// =============================

// Bar Chart - Frequently Borrowed Books
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["000-123", "123-123", "456-123", "789-123", "321-123"],
    datasets: [{
      data: [12, 10, 8, 6, 4],
      backgroundColor: "#0b1e67",
      borderRadius: 5,
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Pie Chart - Borrowers per Program
new Chart(document.getElementById("pieChartProgram"), {
  type: "pie",
  data: {
    labels: ["Computer Studies", "Nursing", "Accountancy", "Criminal Justice"],
    datasets: [{
      data: [30, 25, 20, 25],
      backgroundColor: ["#0b1e67", "#28a745", "#ffc107", "#ff4d4d"]
    }]
  },
  options: { responsive: true }
});

// Pie Chart - Borrowers per Department
new Chart(document.getElementById("pieChartDepartment"), {
  type: "pie",
  data: {
    labels: ["Computer Studies", "Nursing", "Accountancy", "Criminal Justice"],
    datasets: [{
      data: [35, 20, 25, 20],
      backgroundColor: ["#0b1e67", "#28a745", "#ffc107", "#ff4d4d"]
    }]
  },
  options: { responsive: true }
});
