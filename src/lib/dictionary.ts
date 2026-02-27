export const dictionary = {
  id: {
    navbar: { experience: "Pengalaman", projects: "Studi Kasus", tech: "Keahlian", archive: "Arsip", contact: "Hubungi Saya" },
    hero: {
        status: "Siap bekerja",
        role1: "UI/UX Designer",
        role2: "Frontend Enthusiast",
        description: "Lulusan Teknik Informatika 2026 Universitas Muhammadiyah Surakarta. Berpengalaman 3th+ dalam merancang pengalaman pengguna dan membangun antarmuka dalam proyek perkuliahan hingga pelatihan.",
        btnPrimary: "Lihat Studi Kasus",
        btnSecondary: "Lihat Resume"
        },
    experience: {
      title: "Pengalaman & Kepemimpinan",
      subtitle: "Rekam jejak akademis, manajerial, dan kontribusi komunitas.",
      items: [
        { title: "Ketua Umum FOSTI", organization: "Universitas Muhammadiyah Surakarta", period: "Periode Jabatan", description: "Memimpin organisasi dan mengorkestrasi eksekusi lebih dari 20 program kerja skala lokal hingga nasional, berfokus pada pengembangan teknologi dan open source." },
        { title: "Asisten Dosen & Biro Skripsi", organization: "Universitas Muhammadiyah Surakarta", period: "Periode Jabatan", description: "Membimbing mahasiswa dalam fundamental Praktikum Pemrograman Web, membantu proses administrasi alur tugas akhir, dan terlibat aktif dalam proyek pengabdian masyarakat." },
        { title: "Duta Kampus UMS", organization: "Universitas Muhammadiyah Surakarta", period: "Periode Jabatan", description: "Menjadi representasi resmi universitas dan bertindak sebagai pembicara pada berbagai forum internal kampus untuk memotivasi dan mengedukasi mahasiswa." },
        { title: "S1 Teknik Informatika", organization: "Universitas Muhammadiyah Surakarta", period: "Lulusan 2026", description: "Berfokus pada penyelesaian masalah melalui antarmuka digital dan rekayasa perangkat lunak. Mengerjakan tugas akhir mengenai sistem aduan desa terintegrasi (AdsaWonokerso)." }
      ]
    },
    projects: {
      title: "Studi Kasus Proyek",
      subtitle: "Kompilasi karya pilihan yang menunjukkan rentang keahlian dari perancangan antarmuka visual hingga arsitektur sistem backend.",
      items: [
        { title: "AdsaWonokerso", category: "Full Stack Development • Skripsi", description: "Digitalisasi sistem pengaduan desa menjadi platform terintegrasi. Dibangun dari nol dengan arsitektur end-to-end dan implementasi Firebase Cloud Messaging (FCM) untuk notifikasi real-time.", tech: ["Laravel", "Firebase FCM", "MySQL"] },
        { title: "Posturely", category: "AI Integration • YISF Int. Competition", description: "Sistem analisis postur tubuh untuk anak-anak. Mengintegrasikan model AI Mediapipe ke dalam ekosistem React dan Laravel untuk deteksi presisi.", tech: ["React", "Laravel", "Python", "Mediapipe"] },
        { title: "SheSafe & Signargi", category: "UI/UX Design • Social Impact", description: "Merancang antarmuka untuk aplikasi perlindungan perempuan dalam kondisi bahaya dan aplikasi konversi bahasa isyarat. Berfokus pada aksesibilitas.", tech: ["Figma", "User Research", "Prototyping"] },
        { title: "Platipus & SDIT Financial", category: "UI/UX Design • Platform Ecosystem", description: "Perancangan UI komprehensif untuk marketplace sponsorship acara dan modernisasi sistem manajemen keuangan sekolah.", tech: ["Figma", "Design System", "Wireframing"] }
      ]
    },
    techStack: {
      title: "Senjata Utama",
      subtitle: "Teknologi dan perangkat yang saya gunakan untuk mewujudkan solusi digital.",
      categories: [
        { title: "UI/UX & Prototyping", skills: ["Figma", "Design Systems", "User Research", "Wireframing", "High-Fidelity Prototyping"] },
        { title: "Frontend Ecosystem", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Aceternity"] },
        // Menghapus RESTful APIs
        { title: "Backend & Database", skills: ["PHP", "Laravel", "Node.js", "MySQL", "Firebase (FCM)"] },
        // Mengubah Mediapipe dan menghapus Sastrawi
        { title: "Tools & Lainnya", skills: ["Git", "VPS Deployment", "Python", "Mediapipe"] }
      ]
    },
    archive: {
      title: "Arsip Proyek",
      subtitle: "Daftar lengkap proyek, eksplorasi desain, dan kompetisi lainnya.",
      headers: { year: "Tahun", project: "Proyek", role: "Peran", category: "Kategori" },
      items: [
        { year: "2025", project: "Satern (Aplikasi Riset Sawit)", role: "UI Designer", category: "Kompetisi Nasional" },
        { year: "2025", project: "EcoAction", role: "UI Designer", category: "Platform Donasi Lingkungan" },
        { year: "2024", project: "Girantra", role: "UI Designer", category: "Dinacom Nasional" },
        { year: "2024", project: "Toko Bu Hartono", role: "UI Designer", category: "Magang (Landing Page & Sistem)" },
        { year: "2024", project: "Parky (Sistem Parkir UMS)", role: "UI Designer", category: "Tugas Akhir Mata Kuliah" },
        { year: "2024", project: "Quran Qolbu", role: "UI Designer", category: "Aplikasi Religi" },
        { year: "2023", project: "MyPresensi UMS", role: "UI/UX Designer", category: "Redesign Konseptual" },
        { year: "2023", project: "Capcut App", role: "UI/UX Designer", category: "Redesign Konseptual" },
        { year: "2023", project: "Overcontent", role: "Visual Designer", category: "Desain Konten Instagram" },
        { year: "2023", project: "Dewave", role: "Visual Designer", category: "Identitas Visual (ID Card)" }
      ]
    },
    footer: { description: "Merancang dan membangun pengalaman digital berkualitas.", copyright: "Hak Cipta Dilindungi.", builtWith: "Dibuat dengan Next.js, Tailwind CSS & Framer Motion" }
  },
  en: {
    navbar: { experience: "Experience", projects: "Case Studies", tech: "Tech Stack", archive: "Archive", contact: "Contact Me" },
    hero: {
      status: "Open to Work",
      role1: "UI/UX Designer",
      role2: "Frontend Enthusiast",
      description: "2026 Computer Science graduate from Muhammadiyah University Surakarta. 3+ years of experience in designing user experiences and building interfaces in academic projects and training programs.",
      btnPrimary: "View Case Studies",
      btnSecondary: "Download Resume"
    },
    experience: {
      title: "Experience & Leadership",
      subtitle: "Academic track record, managerial roles, and community contributions.",
      items: [
        { title: "President of FOSTI", organization: "Muhammadiyah University of Surakarta", period: "Tenure Period", description: "Led the organization and orchestrated the execution of over 20 local to national scale work programs, focusing on technology development and open source." },
        { title: "Teaching Assistant & Thesis Bureau", organization: "Muhammadiyah University of Surakarta", period: "Tenure Period", description: "Mentored students in the fundamentals of Web Programming Practicum, assisted in the administration process of final projects, and actively participated in community service projects." },
        { title: "University Ambassador (Duta Kampus)", organization: "Muhammadiyah University of Surakarta", period: "Tenure Period", description: "Served as the official representation of the university and acted as a speaker in various internal campus forums to motivate and educate students." },
        { title: "B.Sc. in Informatics Engineering", organization: "Muhammadiyah University of Surakarta", period: "Class of 2026", description: "Focused on problem-solving through digital interfaces and software engineering. Currently working on a final year project regarding an integrated village complaint system (AdsaWonokerso)." }
      ]
    },
    projects: {
      title: "Project Case Studies",
      subtitle: "A compilation of selected works demonstrating a range of expertise from visual interface design to backend system architecture.",
      items: [
        { title: "AdsaWonokerso", category: "Full Stack Development • Thesis", description: "Digitalization of the village complaint system into an integrated platform. Built from scratch with end-to-end architecture and implementation of Firebase Cloud Messaging (FCM) for real-time notifications.", tech: ["Laravel", "Firebase FCM", "MySQL"] },
        { title: "Posturely", category: "AI Integration • YISF Int. Competition", description: "Body posture analysis system for children. Integrated Mediapipe AI model into React and Laravel ecosystems for precise detection.", tech: ["React", "Laravel", "Python", "Mediapipe"] },
        { title: "SheSafe & Signargi", category: "UI/UX Design • Social Impact", description: "Designed interfaces for a women's protection app in dangerous situations and a sign language conversion app. Focused on accessibility.", tech: ["Figma", "User Research", "Prototyping"] },
        { title: "Platipus & SDIT Financial", category: "UI/UX Design • Platform Ecosystem", description: "Comprehensive UI design for an event sponsorship marketplace and modernization of a school financial management system.", tech: ["Figma", "Design System", "Wireframing"] }
      ]
    },
    techStack: {
      title: "Primary Arsenal",
      subtitle: "Technologies and tools I use to bring digital solutions to life.",
      categories: [
        { title: "UI/UX & Prototyping", skills: ["Figma", "Design Systems", "User Research", "Wireframing", "High-Fidelity Prototyping"] },
        { title: "Frontend Ecosystem", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Aceternity"] },
        // Menghapus RESTful APIs
        { title: "Backend & Database", skills: ["PHP", "Laravel", "Node.js", "MySQL", "Firebase (FCM)"] },
        // Mengubah Mediapipe dan menghapus Sastrawi
        { title: "Tools & Others", skills: ["Git", "VPS Deployment", "Python", "Mediapipe"] }
      ]
    },
    archive: {
      title: "Project Archive",
      subtitle: "A complete list of projects, design explorations, and other competitions.",
      headers: { year: "Year", project: "Project", role: "Role", category: "Category" },
      items: [
        { year: "2025", project: "Satern (Palm Oil Research App)", role: "UI Designer", category: "National Competition" },
        { year: "2025", project: "EcoAction", role: "UI Designer", category: "Environmental Donation Platform" },
        { year: "2024", project: "Girantra", role: "UI Designer", category: "Dinacom National" },
        { year: "2024", project: "Toko Bu Hartono", role: "UI Designer", category: "Internship (Landing Page & System)" },
        { year: "2024", project: "Parky (UMS Parking System)", role: "UI Designer", category: "Final Course Project" },
        { year: "2024", project: "Quran Qolbu", role: "UI Designer", category: "Religious App" },
        { year: "2023", project: "MyPresensi UMS", role: "UI/UX Designer", category: "Conceptual Redesign" },
        { year: "2023", project: "Capcut App", role: "UI/UX Designer", category: "Conceptual Redesign" },
        { year: "2023", project: "Overcontent", role: "Visual Designer", category: "Instagram Content Design" },
        { year: "2023", project: "Dewave", role: "Visual Designer", category: "Visual Identity (ID Card)" }
      ]
    },
    footer: { description: "Designing and building high-quality digital experiences.", copyright: "All Rights Reserved.", builtWith: "Built with Next.js, Tailwind CSS & Framer Motion" }
  }
};

export type Language = "id" | "en";