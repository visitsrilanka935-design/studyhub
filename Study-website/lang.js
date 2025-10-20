// lang.js
const translations = {
  en: {
    signin_title: "Welcome to StudyHub",
    signin_sub: "Learn smarter with your personalized dashboard.",
    signin_btn: "Sign In",
    signup_btn: "Sign Up",
    dashboard_title: "Dashboard",
    study_title: "Study Importance",
    profile_title: "Profile",
    logout_btn: "Logout",
    timer_title: "Study Timer",
    start_btn: "Start",
    pause_btn: "Pause",
    reset_btn: "Reset",
    welcome: "Welcome back,",
    stats_title: "Your Stats",
    importance_title: "The Importance of Studying",
    importance_desc:
      "Studying builds knowledge, confidence, and skills to shape your future.",
  },
  si: {
    signin_title: "StudyHub වෙත පිළිගනිමු",
    signin_sub: "ඔබේ අධ්‍යයන ක්‍රමයට ගැලපෙන පෞද්ගලික ඩැෂ්බෝඩ් එකක්.",
    signin_btn: "පිවිසෙන්න",
    signup_btn: "ලියාපදිංචි වන්න",
    dashboard_title: "ඩැෂ්බෝඩ්",
    study_title: "අධ්‍යයනයේ වැදගත්කම",
    profile_title: "පැතිකඩ",
    logout_btn: "නික්මෙන්න",
    timer_title: "අධ්‍යයන කාල ගණකය",
    start_btn: "ආරම්භ කරන්න",
    pause_btn: "විරාමය",
    reset_btn: "නැවත සකසන්න",
    welcome: "පිළිගනිමු,",
    stats_title: "ඔබේ සංඛ්‍යාත",
    importance_title: "අධ්‍යයනයේ වැදගත්කම",
    importance_desc:
      "අධ්‍යයනය දැනුම, විශ්වාසය සහ ඔබේ අනාගතය ගොඩනැගීමට අවශ්‍ය කුසලතා වර්ධනය කරයි.",
  },
};

// Detect or load saved language
let currentLang = localStorage.getItem("language") || "en";

// Switch language function
function switchLang() {
  currentLang = currentLang === "en" ? "si" : "en";
  localStorage.setItem("language", currentLang);
  applyLang();
}

// Apply translations to elements
function applyLang() {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Update button text
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "සිංහල" : "English";
}

// Call automatically
document.addEventListener("DOMContentLoaded", applyLang);
