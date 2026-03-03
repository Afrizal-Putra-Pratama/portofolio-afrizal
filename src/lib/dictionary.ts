export const dictionary = {
  id: {
    navbar: { 
      experience: "Pengalaman", 
      projects: "Studi Kasus", 
      tech: "Keahlian", 
      archive: "Arsip", 
      contact: "Hubungi Saya" 
    },
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
      tabs: {
        org: "Organisasi",
        academic: "Akademik"
      },
      organization: [
        { 
          title: "Ketua Umum FOSTI", 
          organization: "Universitas Muhammadiyah Surakarta", 
          period: "2023 - 2024", 
          description: "Memimpin organisasi dan mengorkestrasi eksekusi lebih dari 20 program kerja skala lokal hingga nasional, berfokus pada pengembangan teknologi dan open source." 
        },
        { 
          title: "Duta Kampus UMS", 
          organization: "Universitas Muhammadiyah Surakarta", 
          period: "2024 - Sekarang", 
          description: "Menjadi representasi resmi universitas dan bertugas sebagai protokoler (among tamu) untuk menyambut serta mendampingi tamu penting dalam berbagai acara besar kampus." 
        }
      ],
      academic: [
        { 
          title: "S1 Teknik Informatika", 
          organization: "Universitas Muhammadiyah Surakarta", 
          period: "Lulusan 2026", 
          description: "Berfokus pada penyelesaian masalah melalui antarmuka digital dan rekayasa perangkat lunak. Mengerjakan tugas akhir mengenai sistem aduan desa terintegrasi (AdsaWonokerso)." 
        },
        { 
          title: "Asisten Biro Skripsi & Tugas Akhir", 
          organization: "Universitas Muhammadiyah Surakarta", 
          period: "2026 - Sekarang", 
          description: "Membantu proses administrasi alur tugas akhir mahasiswa, validasi dokumen penelitian, dan terlibat aktif dalam layanan birokrasi akademik." 
        },
        { 
          title: "Asisten Laboratorium Pemrograman Web", 
          organization: "Universitas Muhammadiyah Surakarta", 
          period: "2024 - 2025", 
          description: "Membimbing mahasiswa dalam fundamental Praktikum Pemrograman Web, mencakup HTML, CSS, JavaScript, hingga integrasi database." 
        },
        { 
          title: "Matematika & Ilmu Pengetahuan Alam (MIPA)", 
          organization: "SMA Negeri 1 Bawang", 
          period: "Lulusan 2022", 
          description: "Menekuni bidang analitis dan sains. Aktif mengeksplorasi minat kreatif hingga berhasil menjuarai kompetisi video editing tingkat lokal." 
        }
      ]
    },
    projects: {
      title: "Studi Kasus Proyek",
      subtitle: "Kompilasi karya pilihan yang menunjukkan rentang keahlian dari perancangan antarmuka visual hingga arsitektur sistem backend.",
      items: [
        { title: "AdsaWonokerso", category: "Full Stack Development • Skripsi", description: "Digitalisasi sistem pengaduan desa menjadi platform terintegrasi. Dibangun dari nol dengan arsitektur end-to-end dan implementasi Firebase Cloud Messaging (FCM) untuk notifikasi real-time.", tech: ["Laravel", "Firebase FCM", "MySQL"] },
        { title: "Posturely", category: "AI Integration • YISF Int. Competition", description: "Sistem analisis postur tubuh untuk anak-anak. Mengintegrasikan model AI Mediapipe ke dalam ekosistem React dan Laravel untuk deteksi presisi.", tech: ["React", "Laravel", "Python", "Mediapipe"] },
        { title: "SheSafe", category: "UI/UX Design • Women Protection", description: "Merancang antarmuka untuk aplikasi perlindungan perempuan dalam kondisi bahaya. Berfokus pada aksesibilitas fitur darurat yang cepat, responsif, dan intuitif.", tech: ["Figma", "User Research", "Wireframing"] },
        { title: "SDIT Financial", category: "UI/UX Design • Dashboard", description: "Modernisasi antarmuka sistem manajemen keuangan untuk SDIT Muhammadiyah Al Kautsar, dirancang khusus untuk mempermudah pencatatan dan rekapitulasi data sekolah.", tech: ["Figma", "Wireframing", "UI Component"] }
      ]
    },
    techStack: {
      title: "Senjata Utama", 
      subtitle: "Teknologi dan perangkat yang saya gunakan untuk mewujudkan solusi digital.",
      categories: [
        { title: "UI/UX & Prototyping", skills: ["Figma", "Design Systems", "User Research", "Wireframing", "High-Fidelity Prototyping"] },
        { title: "Frontend Ecosystem", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Aceternity"] },
        { title: "Backend & Database", skills: ["PHP", "Laravel", "MySQL", "Firebase (FCM)"] },
        { title: "Tools & Lainnya", skills: ["Git", "Vercel", "VPS Deployment", "Postman", "Python", "Mediapipe"] }
      ]
    },
    archive: {
      title: "Arsip Eksplorasi",
      subtitle: "Daftar lengkap proyek pendukung, eksplorasi desain, dan partisipasi kompetisi.",
      headers: { project: "Proyek", role: "Peran", category: "Kategori", link: "Tautan" },
      items: [
        { project: "Signargi", role: "UI/UX Designer", category: "Aplikasi Aksesibilitas" },
        { project: "Platipus", role: "UI/UX Designer", category: "Platform Digital" },
        { project: "Satern (Aplikasi Riset Sawit)", role: "UI Designer", category: "Kompetisi Nasional" },
        { project: "EcoAction", role: "UI Designer", category: "Platform Donasi Lingkungan" },
        { project: "Girantra", role: "UI Designer", category: "Dinacom Nasional" },
        { project: "Toko Bu Hartono", role: "UI Designer", category: "Magang (Landing Page & Sistem)" },
        { project: "Parky (Sistem Parkir UMS)", role: "UI Designer", category: "Tugas Akhir Mata Kuliah" },
        { project: "Quran Qolbu", role: "UI Designer", category: "Aplikasi Religi" },
        { project: "MyPresensi UMS", role: "UI/UX Designer", category: "Redesign Konseptual" },
        { project: "Capcut App", role: "UI/UX Designer", category: "Redesign Konseptual" },
        { project: "Overcontent", role: "Visual Designer", category: "Desain Konten Instagram" },
        { project: "Dewave", role: "Visual Designer", category: "Identitas Visual (ID Card)" }
      ]
    },
    footer: { 
      description: "Merancang dan membangun pengalaman digital berkualitas.", 
      copyright: "Dirancang & dibangun dengan passion.", 
      builtWith: "" 
    }
  },
  en: {
    navbar: { 
      experience: "Experience", 
      projects: "Case Studies", 
      tech: "Tech Stack", 
      archive: "Archive", 
      contact: "Contact Me" 
    },
    hero: {
      status: "Open to Work",
      role1: "UI/UX Designer",
      role2: "Frontend Enthusiast",
      description: "2026 Computer Science graduate from Muhammadiyah University Surakarta. 3+ years of experience in designing user experiences and building interfaces in academic projects and training programs.",
      btnPrimary: "View Case Studies",
      btnSecondary: "View Resume"
    },
    experience: {
      title: "Experience & Leadership",
      subtitle: "Academic track record, managerial roles, and community contributions.",
      tabs: {
        org: "Organization",
        academic: "Academic"
      },
      organization: [
        { 
          title: "Chairman of FOSTI", 
          organization: "Muhammadiyah University of Surakarta", 
          period: "2023 - 2024", 
          description: "Led the organization and orchestrated the execution of over 20 local to national scale work programs, focusing on technology development and open source." 
        },
        { 
          title: "University Ambassador (Duta Kampus)", 
          organization: "Muhammadiyah University of Surakarta", 
          period: "2024 - Present", 
          description: "Served as the official representation of the university and acted as a protocoler/usher to welcome and accompany VIP guests at various major campus events." 
        }
      ],
      academic: [
        { 
          title: "B.Sc. in Informatics Engineering", 
          organization: "Muhammadiyah University of Surakarta", 
          period: "Class of 2026", 
          description: "Focused on problem-solving through digital interfaces and software engineering. Currently working on a final year project regarding an integrated village complaint system (AdsaWonokerso)." 
        },
        { 
          title: "Thesis Bureau & Final Project Assistant", 
          organization: "Muhammadiyah University of Surakarta", 
          period: "2026 - Present", 
          description: "Managed student final project administration, research document validation, and actively participated in academic bureaucracy services." 
        },
        { 
          title: "Web Programming Lab Assistant", 
          organization: "Muhammadiyah University of Surakarta", 
          period: "2024 - 2025", 
          description: "Mentored students in Web Programming fundamentals, covering HTML, CSS, JavaScript, and database integration." 
        },
        { 
          title: "Mathematics and Natural Sciences (MIPA)", 
          organization: "SMA Negeri 1 Bawang", 
          period: "Class of 2022", 
          description: "Focused on analytical and scientific studies. Actively engaged in creative activities and won a local video editing competition." 
        }
      ]
    },
    projects: {
      title: "Project Case Studies",
      subtitle: "A compilation of selected works demonstrating a range of expertise from visual interface design to backend system architecture.",
      items: [
        { title: "AdsaWonokerso", category: "Full Stack Development • Thesis", description: "Digitalization of the village complaint system into an integrated platform. Built from scratch with end-to-end architecture and implementation of Firebase Cloud Messaging (FCM) for real-time notifications.", tech: ["Laravel", "Firebase FCM", "MySQL"] },
        { title: "Posturely", category: "AI Integration • YISF Int. Competition", description: "Body posture analysis system for children. Integrated Mediapipe AI model into React and Laravel ecosystems for precise detection.", tech: ["React", "Laravel", "Python", "Mediapipe"] },
        { title: "SheSafe", category: "UI/UX Design • Women Protection", description: "Designed interfaces for a women's protection app in dangerous situations. Focused on quick, responsive, and intuitive emergency accessibility.", tech: ["Figma", "User Research", "Wireframing"] },
        { title: "SDIT Financial", category: "UI/UX Design • Dashboard", description: "Modernization of the financial management system interface for SDIT Muhammadiyah Al Kautsar, specifically designed to facilitate school data recording and recapitulation.", tech: ["Figma", "Wireframing", "UI Component"] }
      ]
    },
    techStack: {
      title: "Primary Arsenal",
      subtitle: "Technologies and tools I use to bring digital solutions to life.",
      categories: [
        { title: "UI/UX & Prototyping", skills: ["Figma", "Design Systems", "User Research", "Wireframing", "High-Fidelity Prototyping"] },
        { title: "Frontend Ecosystem", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Aceternity"] },
        { title: "Backend & Database", skills: ["PHP", "Laravel", "MySQL", "Firebase (FCM)"] },
        { title: "Tools & Lainnya", skills: ["Git", "Vercel", "VPS Deployment", "Postman", "Python", "Mediapipe"] }
      ]
    },
    archive: {
      title: "Project Archive",
      subtitle: "A complete list of projects, design explorations, and other competitions.",
      headers: { year: "Year", project: "Project", role: "Role", category: "Category" },
      items: [
        { project: "Signargi", role: "UI/UX Designer", category: "Accessibility App" },
        { project: "Platipus", role: "UI/UX Designer", category: "Digital Platform" },
        { project: "Satern (Palm Oil Research App)", role: "UI Designer", category: "National Competition" },
        { project: "EcoAction", role: "UI Designer", category: "Environmental Donation Platform" },
        { project: "Girantra", role: "UI Designer", category: "Dinacom National" },
        { project: "Toko Bu Hartono", role: "UI Designer", category: "Internship (Landing Page & System)" },
        { project: "Parky (UMS Parking System)", role: "UI Designer", category: "Final Course Project" },
        { project: "Quran Qolbu", role: "UI Designer", category: "Religious App" },
        { project: "MyPresensi UMS", role: "UI/UX Designer", category: "Conceptual Redesign" },
        { project: "Capcut App", role: "UI/UX Designer", category: "Conceptual Redesign" },
        { project: "Overcontent", role: "Visual Designer", category: "Instagram Content Design" },
        { project: "Dewave", role: "Visual Designer", category: "Visual Identity (ID Card)" }
      ]
    },
    footer: { 
      description: "Designing and building high-quality digital experiences.", 
      copyright: "Designed & built with passion.", 
      builtWith: "" 
    }
  }
};

export type Language = "id" | "en";