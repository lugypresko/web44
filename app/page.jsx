"use client";

import React from "react";
import { Phone, Mail, Linkedin, Users, Target, Calendar, Check, Menu } from "lucide-react";

export default function Landing() {
  return (
    <div dir="rtl" className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-50 shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <a href="#hero" className="text-2xl font-bold text-blue-900">The Push</a>
          <nav className="hidden md:flex space-x-6 text-base">
            <a href="#about" className="hover:text-blue-900">למי זה מיועד?</a>
            <a href="#what" className="hover:text-blue-900">מה זה?</a>
            <a href="#process" className="hover:text-blue-900">התהליך</a>
            <a href="#benefits" className="hover:text-blue-900">מה יוצא לי?</a>
            <a href="#plans" className="hover:text-blue-900">מסלולים</a>
            <a href="#testimonials" className="hover:text-blue-900">המלצות</a>
            <a href="#contact" className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">צור קשר</a>
          </nav>
          <button className="md:hidden p-2 text-gray-600"><Menu /></button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="h-screen bg-gradient-to-r from-[#0e4377] to-[#213547] flex items-center justify-center text-center px-6">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-5xl font-extrabold">הגיע הזמן לשדרג</h1>
            <h2 className="text-3xl font-semibold">The Push</h2>
            <p className="text-lg">מערכת הפעלה חדשה למפתחים שרוצים להפסיק לקודד ולהתחיל להוביל</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition">התחל את המסלול שלך</a>
              <a href="#about" className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition">קרא עוד</a>
            </div>
          </div>
        </section>

        {/* Who Section */}
        <section id="about" className="py-20 bg-white px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">למי זה מיועד?</h2>
            <p className="text-xl font-semibold text-blue-900">Tech professional feeling stuck</p>
            <p>אתה מפתח אנדרואיד עם יותר מ-10 שנות ניסיון. חכם. מקצוען. כולם מתייעצים איתך — אבל אתה לא בתמונה כשיש החלטות.</p>
            <p>מרוויח יפה, אבל עמוק בפנים אתה יודע: אתה נהיה יקר יותר, זקן יותר — והקריירה שלך תקועה באותו מסלול.</p>
            <p className="font-bold mt-4">הגיע הזמן לעבור צד.</p>
            <p>לא למעלה — לא ניהול בכוח. אלא להוביל. מתוך שיטה, שפה, ותודעה ניהולית שלא תלויה באופי — אלא בפעולה.</p>
          </div>
        </section>

        {/* What Section */}
        <section id="what" className="py-20 bg-gray-50 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-bold">מה זה The Push?</h2>
            <p>תהליך ליווי אישי למפתח שרוצה להפוך למנהל שלא רק מגיב — אלא בונה מערכת שמובילה אותו קדימה.</p>
            <p>לא קואוצ'ינג כללי. לא תיאוריה. זו התקנת מערכת הפעלה חדשה להתנהלות ניהולית.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <li className="flex items-start gap-2"><Users className="text-blue-900"/> ליווי שבועי 1:1 (60 דקות)</li>
              <li className="flex items-start gap-2"><Calendar className="text-blue-900"/> גישה תומכת בווטסאפ לאורך כל התקופה</li>
              <li className="flex items-start gap-2"><Target className="text-blue-900"/> סימולציות ותירגולים במצבים אמתיים</li>
              <li className="flex items-start gap-2"><Users className="text-blue-900"/> ליווי 6-8 שבועות מותאם אישית</li>
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-white px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-bold">מה נבנה בתהליך?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[{
                icon: <Users className="w-6 h-6 text-yellow-400" />,
                title: 'הגדרת גרסת המנהל שאתה רוצה להיות',
                desc: 'בנייה של זהות ניהולית קריאטיבית ואותנטית'
              },{
                icon: <Target className="w-6 h-6 text-yellow-400" />,
                title: 'מיתוג פנימי בארגון',
                desc: 'יצירת נראות והערכה כשאתה נכנס לחדר החלטות'
              },{
                icon: <Check className="w-6 h-6 text-yellow-400" />,
                title: 'חיבור לשפה עסקית',
                desc: 'למד איך לדבר תוצאות, לא רק טכנולוגיה'
              },{
                icon: <Calendar className="w-6 h-6 text-yellow-400" />,
                title: 'מפת דרכים לתפקיד הבא שלך',
                desc: 'מסלול קידום אישי ריאלי ל-3–6 חודשים'
              }].map((item,i)=> (
                <div key={i} className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-md transition">
                  {item.icon}
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">מה יוצא לי מזה?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-right">
              <p><Check className="inline w-5 h-5 text-green-500"/> שיטה אישית לניהול צוות</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> נראות גבוהה מול הנהלה</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> שפה ניהולית אפקטיבית</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> ביטחון בשיחות מורכבות</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> מסלול קידום אישי ריאלי</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> חיבור עבודה-חיים מאוזן</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> שקט נפשי ויותר שליטה</p>
              <p><Check className="inline w-5 h-5 text-green-500"/> הובלה אמיתית — לא רק ניהול</p>
            </div>
          </div>
        </section>

        {/* Plans Section (unchanged from before) */}
        <section id="plans" className="py-20 bg-white px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">המסלולים שלנו</h2>
            <p className="mt-2">תכנית אישית המותאמת לצרכים שלך</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 px-5">
            {/* plan cards here, same as before */}
          </div>
        </section>

        {/* Testimonials Section (same as before) */}
        <section id="testimonials" className="py-20 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">מה אומרים המשתתפים</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {/* testimonials cards same as before */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#213547] text-white text-center px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">מה השלב הבא?</h2>
            <p className="text-lg">אם מה שדיברנו איתגר אותך — והבנת שזה הזמן לזוז, אני כאן כדי לקחת אותך כל הדרך קדימה.</p>
            <div className="flex flex-col items-center gap-2">
              <p className="flex items-center gap-2"><Phone size={20}/> 054-4731214</p>
              <p className="flex items-center gap-2"><Mail size={20}/> itayf32@gmail.com</p>
              <p className="flex items-center gap-2"><Linkedin size={20}/> איתי פוירשטיין</p>
            </div>
            <p className="mt-6 text-sm opacity-70">© 2025 איתי פוירשטיין. כל הזכויות שמורות.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
