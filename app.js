/* ========================================
   Placement Management System — Core JS
   ======================================== */

// ==========================================
// DUMMY DATA INITIALIZATION
// ==========================================
const DUMMY_JOBS = [
  {
    id: 1,
    company: "Infosys",
    title: "Software Developer",
    package: "6.5 LPA",
    eligibility: "B.Tech (CS/IT) with minimum 7.0 CGPA, no active backlogs",
    deadline: "2026-04-15",
    location: "Bangalore",
    type: "Full-Time",
    description: "Join our team as a Software Developer working on enterprise applications using Java and Python. Excellent growth opportunities.",
    posted: "2026-03-10"
  },
  {
    id: 2,
    company: "TCS",
    title: "System Engineer",
    package: "4.5 LPA",
    eligibility: "B.Tech (All Branches) with minimum 6.0 CGPA",
    deadline: "2026-04-20",
    location: "Multiple Locations",
    type: "Full-Time",
    description: "As a System Engineer, you will work on technology solutions for global clients across various domains.",
    posted: "2026-03-08"
  },
  {
    id: 3,
    company: "Wipro",
    title: "Project Engineer",
    package: "5.0 LPA",
    eligibility: "B.Tech (CS/IT/ECE) with minimum 6.5 CGPA",
    deadline: "2026-04-25",
    location: "Hyderabad",
    type: "Full-Time",
    description: "Work on cutting-edge projects in cloud computing and digital transformation initiatives.",
    posted: "2026-03-12"
  },
  {
    id: 4,
    company: "Google",
    title: "Software Engineering Intern",
    package: "80,000/month",
    eligibility: "B.Tech (CS/IT) with minimum 8.5 CGPA, strong DSA skills",
    deadline: "2026-05-01",
    location: "Bangalore",
    type: "Internship",
    description: "Summer internship program working on Google's core products. Mentorship from senior engineers.",
    posted: "2026-03-14"
  },
  {
    id: 5,
    company: "Microsoft",
    title: "Associate SDE",
    package: "18 LPA",
    eligibility: "B.Tech (CS/IT) with minimum 8.0 CGPA, no backlogs",
    deadline: "2026-04-30",
    location: "Noida",
    type: "Full-Time",
    description: "Build the next generation of Microsoft products. Work with world-class engineers on cloud and AI technologies.",
    posted: "2026-03-11"
  },
  {
    id: 6,
    company: "Amazon",
    title: "SDE-I",
    package: "22 LPA",
    eligibility: "B.Tech (CS/IT) with minimum 8.0 CGPA, excellent coding skills",
    deadline: "2026-05-10",
    location: "Hyderabad",
    type: "Full-Time",
    description: "Solve complex engineering challenges at Amazon scale. Work in e-commerce, AWS, or Alexa teams.",
    posted: "2026-03-15"
  }
];

const DUMMY_STUDENTS = [
  { id: 1, name: "Arjun Sharma", email: "arjun@university.ac.in", phone: "9876543210", department: "Computer Science", cgpa: 8.2, skills: "Java, Python, Machine Learning", status: "active" },
  { id: 2, name: "Priya Patel", email: "priya@university.ac.in", phone: "9876543211", department: "Information Technology", cgpa: 7.8, skills: "Web Development, React, Node.js", status: "active" },
  { id: 3, name: "Rahul Gupta", email: "rahul@university.ac.in", phone: "9876543212", department: "Computer Science", cgpa: 7.5, skills: "C++, Data Structures, Algorithms", status: "active" },
  { id: 4, name: "Sneha Verma", email: "sneha@university.ac.in", phone: "9876543213", department: "ECE", cgpa: 8.5, skills: "Embedded Systems, IoT, Python", status: "active" },
  { id: 5, name: "Vikram Singh", email: "vikram@university.ac.in", phone: "9876543214", department: "Computer Science", cgpa: 6.9, skills: "Android, Kotlin, Firebase", status: "active" },
  { id: 6, name: "Ananya Reddy", email: "ananya@university.ac.in", phone: "9876543215", department: "Information Technology", cgpa: 9.0, skills: "AI, Deep Learning, TensorFlow", status: "active" }
];

const DUMMY_APPLICATIONS = [
  { id: 1, studentId: 1, studentName: "Arjun Sharma", jobId: 1, company: "Infosys", title: "Software Developer", status: "shortlisted", appliedDate: "2026-03-12" },
  { id: 2, studentId: 2, studentName: "Priya Patel", jobId: 2, company: "TCS", title: "System Engineer", status: "applied", appliedDate: "2026-03-13" },
  { id: 3, studentId: 1, studentName: "Arjun Sharma", jobId: 5, company: "Microsoft", title: "Associate SDE", status: "applied", appliedDate: "2026-03-14" },
  { id: 4, studentId: 3, studentName: "Rahul Gupta", jobId: 3, company: "Wipro", title: "Project Engineer", status: "selected", appliedDate: "2026-03-11" },
  { id: 5, studentId: 4, studentName: "Sneha Verma", jobId: 4, company: "Google", title: "Software Engineering Intern", status: "shortlisted", appliedDate: "2026-03-15" },
  { id: 6, studentId: 6, studentName: "Ananya Reddy", jobId: 6, company: "Amazon", title: "SDE-I", status: "applied", appliedDate: "2026-03-16" },
  { id: 7, studentId: 5, studentName: "Vikram Singh", jobId: 1, company: "Infosys", title: "Software Developer", status: "rejected", appliedDate: "2026-03-10" }
];

const DUMMY_NOTIFICATIONS = [
  { id: 1, title: "New Placement Drive", message: "Amazon hiring drive scheduled for April 2026. Prepare for coding rounds.", time: "2 hours ago", icon: "🏢" },
  { id: 2, title: "Shortlist Announced", message: "Infosys shortlist for Software Developer positions has been published.", time: "5 hours ago", icon: "📋" },
  { id: 3, title: "Profile Reminder", message: "Please update your profile with latest project details before placement season.", time: "1 day ago", icon: "👤" },
  { id: 4, title: "Workshop Alert", message: "Resume building workshop on March 20th. Register now.", time: "2 days ago", icon: "📝" },
  { id: 5, title: "Results Declared", message: "Wipro placement results have been declared. Check your status.", time: "3 days ago", icon: "🏆" }
];

const DEFAULT_ACCOUNTS = [
  // No default accounts — users must register via Create Account
];

// ==========================================
// DATA MANAGEMENT (localStorage)
// ==========================================
function initData() {
  if (!localStorage.getItem('pms_initialized')) {
    localStorage.setItem('pms_jobs', JSON.stringify(DUMMY_JOBS));
    localStorage.setItem('pms_students', JSON.stringify(DUMMY_STUDENTS));
    localStorage.setItem('pms_applications', JSON.stringify(DUMMY_APPLICATIONS));
    localStorage.setItem('pms_notifications', JSON.stringify(DUMMY_NOTIFICATIONS));
    localStorage.setItem('pms_accounts', JSON.stringify(DEFAULT_ACCOUNTS));
    localStorage.setItem('pms_initialized', 'true');
  }
  // Ensure accounts exist (for users who initialized before accounts were added)
  if (!localStorage.getItem('pms_accounts')) {
    localStorage.setItem('pms_accounts', JSON.stringify(DEFAULT_ACCOUNTS));
  }
}

function getData(key) {
  const data = localStorage.getItem('pms_' + key);
  return data ? JSON.parse(data) : [];
}

function setData(key, data) {
  localStorage.setItem('pms_' + key, JSON.stringify(data));
}

function getNextId(key) {
  const data = getData(key);
  return data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
}

// ==========================================
// AUTH MANAGEMENT
// ==========================================
function login(role, username, password) {
  const accounts = getData('accounts');
  const account = accounts.find(a => a.username === username && a.password === password && a.role === role);
  if (account) {
    const user = { role, username, loginTime: new Date().toISOString(), name: account.name };
    if (role === 'student') {
      user.studentId = account.studentId;
    }
    sessionStorage.setItem('pms_user', JSON.stringify(user));
    return true;
  }
  return false;
}

function loginByEmail(role, email, password) {
  const accounts = getData('accounts');
  const account = accounts.find(a => a.email === email && a.password === password && a.role === role);
  if (account) {
    const user = { role, email, loginTime: new Date().toISOString(), name: account.name };
    if (role === 'student') {
      user.studentId = account.studentId;
    }
    sessionStorage.setItem('pms_user', JSON.stringify(user));
    return true;
  }
  return false;
}

function registerAccount(username, password, role, name, studentId, email) {
  const accounts = getData('accounts');
  if (accounts.find(a => a.email === email)) {
    return 'email_taken'; // email already registered
  }
  if (accounts.find(a => a.username === username)) {
    return 'username_taken'; // username already taken
  }
  accounts.push({ username, password, role, name, studentId, email });
  setData('accounts', accounts);
  return 'success';
}

function getUser() {
  const user = sessionStorage.getItem('pms_user');
  return user ? JSON.parse(user) : null;
}

function logout() {
  sessionStorage.removeItem('pms_user');
  window.location.href = 'index.html';
}

function requireAuth(role) {
  const user = getUser();
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  if (role && user.role !== role) {
    window.location.href = 'index.html';
    return null;
  }
  return user;
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// SIDEBAR & MOBILE MENU
// ==========================================
function initSidebar() {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  // Mark active nav item
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add('active');
    }
  });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function getStatusBadge(status) {
  const classes = {
    'applied': 'badge-applied',
    'shortlisted': 'badge-shortlisted',
    'selected': 'badge-selected',
    'rejected': 'badge-rejected',
    'pending': 'badge-pending'
  };
  return `<span class="badge ${classes[status] || 'badge-pending'}">${status}</span>`;
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Initialize data on every page load
initData();
