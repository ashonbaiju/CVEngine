function generatePreview() {
  const template = localStorage.getItem("selectedTemplate") || "minimalist";

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const extra = document.getElementById("extra").value;

  let html = "";

  if (template === "minimalist") {
    html = `
      <div class="template-minimalist">
        <h1>${name}</h1>
        <h2>${title}</h2>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>
        <h3>ABOUT ME</h3><p>${summary}</p>
        <h3>EDUCATION</h3><p>${education}</p>
        <h3>WORK EXPERIENCE</h3><p>${experience}</p>
        <h3>SKILLS</h3><p>${skills}</p>
      </div>
    `;
  } else if (template === "tech") {
    html = `
      <div class="template-tech">
        <h1>${name}</h1>
        <h2>${title}</h2>
        <p>${address} | ${email} | ${phone}</p>
        <hr>
        <h3>PROFESSIONAL SUMMARY</h3><p>${summary}</p>
        <h3>EDUCATION</h3><p>${education}</p>
        <h3>EXPERIENCE</h3><p>${experience}</p>
        <h3>SKILLS</h3><p>${skills}</p>
        <h3>CERTIFICATIONS / AWARDS / LANGUAGES</h3><p>${extra}</p>
      </div>
    `;
  }

  const preview = document.getElementById("previewArea");
  preview.innerHTML = html;
  preview.style.display = "block";
}

function downloadPDF() {
  const element = document.getElementById('previewArea');

  // Wait briefly before generating PDF to ensure render
  setTimeout(() => {
    html2pdf()
      .set({
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .from(element)
      .save();
  }, 300);
      }
