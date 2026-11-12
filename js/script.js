const projects = [
  {
    id: "sistem-informasi-akademik",
    year: "2024",
    title: "Sistem Informasi Akademik SMK",
    description:
      "Pengembangan platform pengelolaan data nilai dan jadwal perkuliahan secara terintegrasi dan efisien.",
    image: null,
    imageAlt: "",
    publicationUrl: null,
    publicationLabel: "",
  },
  {
    id: "penelitian-pembelajaran-berbasis-data",
    year: "2025",
    title: "Penelitian Pembelajaran Berbasis Data",
    description:
      "Analisis data performa mahasiswa menggunakan metode pembelajaran mesin (machine learning) untuk pemetaan minat dan bakat.",
    image: null,
    imageAlt: "",
    publicationUrl: null,
    publicationLabel: "",
  },
  {
    id: "website-iku-feb-ubb",
    year: "2025",
    title: "Website Indikator Kinerja Utama FEB UBB",
    description:
      "Website ini membantu Fakultas Ekonomi dan Bisnis Universitas Bangka Belitung memantau capaian Indikator Kinerja Utama (IKU). Dashboard menyajikan perbandingan target dan realisasi IKU di tingkat fakultas dan program studi, ringkasan jumlah indikator yang tercapai, serta akses ke laporan dan panduan IKU.",
    image: "assets/img/iku-feb-ubb-dashboard.png",
    imageAlt:
      "Dashboard FEB Information System dengan grafik target dan realisasi IKU FEB UBB",
    publicationUrl: null,
    publicationLabel: "",
  },
];

const toggleBtn = document.getElementById("toggle-btn");

if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    toggleBtn.setAttribute("aria-checked", String(isDarkMode));
  });
}

const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const header = document.createElement("div");
    header.className = "project-header";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.className = "project-desc";
    description.textContent = project.description;

    const detailLink = document.createElement("a");
    detailLink.className = "btn btn-outline project-detail-link";
    detailLink.href = `project.html?id=${encodeURIComponent(project.id)}`;
    detailLink.textContent = "Lihat detail";
    detailLink.setAttribute("aria-label", `Lihat detail ${project.title}`);

    if (project.year) {
      const year = document.createElement("span");
      year.className = "project-year";
      year.textContent = project.year;
      header.append(year);
    }

    header.append(title);
    card.append(header, description, detailLink);
    projectsGrid.append(card);
  });
}

const projectDetail = document.getElementById("project-detail");

if (projectDetail) {
  const projectId = new URLSearchParams(window.location.search).get("id");
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    const message = document.createElement("div");
    message.className = "project-not-found";

    const heading = document.createElement("h1");
    heading.textContent = "Project tidak ditemukan";

    const backLink = document.createElement("a");
    backLink.className = "btn btn-primary";
    backLink.href = "index.html#project";
    backLink.textContent = "Kembali ke daftar project";

    message.append(heading, backLink);
    projectDetail.append(message);
  } else {
    document.title = `${project.title} - Portofolio Adi Widianto`;

    const article = document.createElement("article");
    article.className = "project-detail-card";

    const header = document.createElement("header");
    header.className = "project-detail-header";

    const title = document.createElement("h1");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.className = "project-detail-description";
    description.textContent = project.description;

    if (project.year) {
      const year = document.createElement("span");
      year.className = "project-year";
      year.textContent = project.year;
      header.append(year);
    }

    header.append(title);
    article.append(header);

    if (project.image) {
      const image = document.createElement("img");
      image.className = "project-detail-image";
      image.src = project.image;
      image.alt = project.imageAlt || project.title;
      article.append(image);
    }

    article.append(description);

    if (project.publicationUrl) {
      const publicationLink = document.createElement("a");
      publicationLink.className = "btn btn-primary";
      publicationLink.href = project.publicationUrl;
      publicationLink.target = "_blank";
      publicationLink.rel = "noopener noreferrer";
      publicationLink.textContent =
        project.publicationLabel || "Lihat publikasi";
      article.append(publicationLink);
    }

    const backLink = document.createElement("a");
    backLink.className = "btn btn-outline project-back-link";
    backLink.href = "index.html#project";
    backLink.textContent = "Kembali ke daftar project";
    article.append(backLink);
    projectDetail.append(article);
  }
}