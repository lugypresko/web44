"use client";

import React from "react";
import { Phone, Mail, Linkedin, Star } from "lucide-react";

export default function Landing() {
  return (
    <div dir="rtl" className="font-sans">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-[#0e4377] to-[#213547] text-white flex items-center justify-center text-center px-5 pt-32">
        <div>
          <h1 className="text-5xl font-bold mb-4">הגיע הזמן לשדרג</h1>
          <h2 className="text-3xl mb-4">The Push</h2>
          <p className="text-xl mb-6">מערכת הפעלה חדשה למפתחים שרוצים להפסיק לקודד ולהתחיל להוביל</p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition">התחל את המסלול שלך</a>
            <a href="#about" className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition">קרא עוד</a>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="about" className="py-20 bg-white text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">למי זה מיועד?</h2>
          <p className="text-xl font-semibold mb-4">Tech professional feeling stuck</p>
          <p className="mb-2">אתה מפתח אנדרואיד עם יותר מ־10 שנות ניסיון. חכם. מקצוען. כולם מתייעצים איתך — אבל אתה לא בתמונה כשיש החלטות.</p>
          <p className="mb-2">מרוויח יפה, אבל עמוק בפנים אתה יודע: אתה נהיה יקר יותר, זקן יותר — והקריירה שלך תקועה באותו מסלול.</p>
          <p className="text-lg font-bold mt-4">הגיע הזמן לעבור צד.</p>
          <p>לא למעלה — לא ניהול בכוח. אלא להוביל. מתוך שיטה, שפה, ותודעה ניהולית שלא תלויה באופי — אלא בפעולה.</p>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gray-50 px-5">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">המסלולים שלנו</h2>
          <p className="mt-2">תכנית אישית המותאמת לצרכים שלך</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 px-5">
          {/* Short Plan */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">מסלול קצר</h3>
            <p className="text-xl font-bold text-yellow-400 mb-4">₪6,000</p>
            <ul className="text-right space-y-2 mb-6">
              <li>6 שבועות</li>
              <li>6 פגישות שבועיות</li>
              <li>מיקוד באתגר אחד</li>
              <li>הכרות עם הגישה</li>
              <li>בניית תשתית ראשונית</li>
            </ul>
            <a href="#contact" className="block bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">בחר מסלול</a>
          </div>
          {/* Full Plan */}
          <div className="bg-white rounded-xl shadow-xl border-2 border-yellow-400 p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">מסלול מלא</h3>
            <p className="text-xl font-bold text-yellow-400 mb-4">₪10,000</p>
            <ul className="text-right space-y-2 mb-6">
              <li>10 שבועות</li>
              <li>10 פגישות שבועיות</li>
              <li>תהליך מלא</li>
              <li>בניית מערכת אישית</li>
              <li>תרגול מעשי</li>
              <li>Roadmap לקידום</li>
            </ul>
            <a href="#contact" className="block bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition">בחר מסלול</a>
          </div>
          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">מסלול פרימיום</h3>
            <p className="text-xl font-bold text-yellow-400 mb-4">₪15,000</p>
            <ul className="text-right space-y-2 mb-6">
              <li>16 שבועות</li>
              <li>ליווי מותאם אישית</li>
              <li>עבודה לפי קצב אישי</li>
              <li>תמיכה יומיומית</li>
              <li>בניית מסלול אסטרטגי מדויק</li>
            </ul>
            <a href="#contact" className="block bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">בחר מסלול</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white px-5">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">מה אומרים המשתתפים</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "דניאל לוי",
              role: "מנהל צוות, גוגל",
              quote: "הליווי של The Push שינה את הקריירה שלי. היום אני מוביל צוות שמשפיע על כיוון המוצר.",
            },
            {
              name: "נועה כהן",
              role: "ארכיטקטית תוכנה, מיקרוסופט",
              quote: "למדתי להוביל מתוך חוזקותיי. הנראות שלי בארגון השתפרה פלאים.",
            },
            {
              name: "עמית גולן",
              role: "ראש צוות פיתוח, פייסבוק",
              quote: "בתוך חצי שנה קיבלתי קידום עם העלאת שכר משמעותית.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="flex mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="italic mb-4">“{t.quote}”</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#213547] text-white text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">מה השלב הבא?</h2>
          <p className="text-lg mb-6">אם מה שדיברנו איתגר אותך — והבנת שזה הזמן לזוז, אני כאן כדי לקחת אותך כל הדרך קדימה.</p>
          <p className="mb-2">שלח לי הודעה ונבחר את המסלול שמתאים לך:</p>
          <div className="flex flex-col items-center gap-4 mt-6">
            <p className="flex items-center gap-2"><Phone size={20} /> 054-4731214</p>
            <p className="flex items-center gap-2"><Mail size={20} /> itayf32@gmail.com</p>
            <p className="flex items-center gap-2"><Linkedin size={20} /> איתי פוירשטיין</p>
          </div>
          <p className="mt-12 text-sm opacity-70">© 2025 איתי פוירשטיין. כל הזכויות שמורות.</p>
          <p className="text-base mt-2">You are too smart to play small. Time to lead.</p>
        </div>
      </section>
    </div>
  );
}
