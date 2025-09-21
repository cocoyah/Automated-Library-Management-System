const updateModal = document.getElementById("updateModal");
const deleteConfirm = document.getElementById("deleteConfirm");
let currentRow = null;

// Function to attach event listeners to update buttons
function attachUpdateListeners() {
  document.querySelectorAll(".update-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      currentRow = this.closest("tr");
      const cells = currentRow.querySelectorAll("td");

      // Fill modal fields with current row data
      const [fullName, year, program, dept, email, contact] = [...cells].map(c => c.textContent.trim());
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      document.getElementById("firstName").value = firstName;
      document.getElementById("lastName").value = lastName;
      document.getElementById("year").value = year;
      document.getElementById("program").value = program;
      document.getElementById("email").value = email;
      document.getElementById("contactNumber").value = contact;

      updateModal.style.display = "flex";
    });
  });
}

// Function to attach event listeners to delete buttons
function attachDeleteListeners() {
  document.querySelectorAll(".delete-btn").forEach(btn => {
    // Skip the delete button in the modal
    if (btn.id === "confirmDelete") return;
    
    btn.addEventListener("click", function () {
      rowToDelete = this.closest("tr");
      deleteConfirm.style.display = "flex";
    });
  });
}

// Initial attachment of event listeners
attachUpdateListeners();
attachDeleteListeners();

// Save Updates
document.getElementById("updateForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (currentRow) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const fullName = `${firstName} ${lastName}`.trim();
    
    currentRow.cells[0].textContent = fullName;
    currentRow.cells[1].textContent = document.getElementById("year").value;
    currentRow.cells[2].textContent = document.getElementById("program").value;
    currentRow.cells[4].textContent = document.getElementById("email").value;
    currentRow.cells[5].textContent = document.getElementById("contactNumber").value;
  }
  updateModal.style.display = "none";
});

// Cancel Update
document.querySelector("#updateModal .cancel-btn").addEventListener("click", () => {
  updateModal.style.display = "none";
});

// Close modal when clicking outside
updateModal.addEventListener("click", function(e) {
  if (e.target === updateModal) {
    updateModal.style.display = "none";
  }
});

deleteConfirm.addEventListener("click", function(e) {
  if (e.target === deleteConfirm) {
    deleteConfirm.style.display = "none";
  }
});

// Delete Confirmation
let rowToDelete = null;

document.getElementById("confirmDelete").addEventListener("click", () => {
  if (rowToDelete) {
    rowToDelete.remove();
    // Re-attach event listeners after removing a row
    attachUpdateListeners();
    attachDeleteListeners();
  }
  deleteConfirm.style.display = "none";
});

document.getElementById("cancelDelete").addEventListener("click", () => {
  deleteConfirm.style.display = "none";
});

// Search functionality
document.getElementById("search").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const rows = document.querySelectorAll("#borrowersTable tbody tr");
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Filter button (placeholder functionality)
document.getElementById("filter-btn").addEventListener("click", function() {
  console.log("Filter button clicked");
  // Add filter functionality here
});