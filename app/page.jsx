"use client";

import React, { useState, useEffect } from "react";

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir="rtl" style={{ fontFamily: "sans-serif" }}>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          backgroundColor: isScrolled ? "white" : "transparent",
          boxShadow: isScrolled ? "0 2px 5px rgba(0,0,0,0.1)" : "none",
          padding: isScrolled ? "10px 20px" : "20px 20px",
          transition: "all 0.3s ease",
          zIndex: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "20px", color: "#0a66c2" }}>
            The Push
          </div>
          <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <a href="#about">מי אני</a>
            <a href="#process">התהליך</a>
            <a href="#contact">צור קשר</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #0e4377, #213547)",
          color: "white",
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>הגיע הזמן לשדרג</h1>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>The Push</h2>
          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            מערכת הפעלה חדשה למפתחים שרוצים להפסיק לקודד ולהתחיל להוביל
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <a
              href="#contact"
              style={{
                backgroundColor: "#f9a826",
                color: "black",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              התחל את המסלול שלך
            </a>
            <a
              href="#about"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              קרא עוד
            </a>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section
        id="about"
        style={{
          padding: "80px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>למי זה מיועד?</h2>
          <p style={{ fontSize: "20px", marginBottom: "10px" }}>Tech professional feeling stuck</p>
          <p>אתה מפתח אנדרואיד עם יותר מ־10 שנות ניסיון. חכם. מקצוען. כולם מתייעצים איתך — אבל אתה לא בתמונה כשיש החלטות.</p>
          <p>מרוויח יפה, אבל עמוק בפנים אתה יודע: אתה נהיה יקר יותר, זקן יותר — והקריירה שלך תקועה באותו מסלול.</p>
          <p style={{ fontWeight: "bold", marginTop: "20px" }}>הגיע הזמן לעבור צד.</p>
          <p>לא למעלה — לא ניהול בכוח. אלא להוביל. מתוך שיטה, שפה, ותודעה ניהולית שלא תלויה באופי — אלא בפעולה.</p>
        </div>
      </section>

      {/* Mentor Section */}
      <section
        id="mentor"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>מוביל התכנית: מי אני ולמה אפשר לסמוך עליי?</h2>
          <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>איתי פוירשטיין</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>מנטור ומוביל תכניות מנהיגות</p>
          <p>אני איתי פוירשטיין. ב־20 השנים האחרונות ליוויתי מנהלים טכנולוגיים, הובלתי צוותים, ניהלתי מוצרים ותהליכים בחברות מובילות — וראיתי שוב ושוב איך מפתח חכם שלא לומד להוביל — נתקע מאחור.</p>
          <p>אני לא יועץ תיאורטי. אני בא מהשטח. אני מבין את העולם שאתה חי בו — ומביא תהליך פרקטי, ממוקד, בלי סיפורים — אלא עם תוצאות שמדברות בשטח.</p>

          <h3 style={{ fontSize: "28px", marginTop: "40px", marginBottom: "20px" }}>מה מייחד את הגישה שלי?</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "18px", lineHeight: "1.8", textAlign: "right" }}>
            <li><strong>✔ ניסיון מוכח:</strong> 20 שנות ניסיון בעולם המוצר והניהול הטכנולוגי</li>
            <li><strong>✔ הכשרה מעשית:</strong> מנטורינג תכליתי מבוסס תוצאות בעולם האמיתי</li>
            <li><strong>✔ תוצאות מוכחות:</strong> בוגרי התכנית משתלבים בתפקידי ניהול והובלה</li>
          </ul>
        </div>
      </section>

      {/* What is The Push? */}
      <section
        id="what"
        style={{
          padding: "80px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>מה זה The Push?</h2>
          <p>תהליך ליווי אישי למפתח שרוצה להפוך למנהל שלא רק מגיב — אלא בונה מערכת שמובילה אותו קדימה.</p>
          <p>לא קואוצ'ינג כללי. לא תיאוריה. זו התקנת מערכת הפעלה חדשה להתנהלות ניהולית.</p>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>מה נבנה בתהליך?</h2>
          <ul style={{ textAlign: "right", lineHeight: "1.8", fontSize: "18px" }}>
            <li>הגדרת גרסת המנהל שאתה רוצה להיות</li>
            <li>מי אתה באמת — בלי תחפושות ניהול קלאסיות</li>
            <li>איך לבנות זהות שתואמת את מי שאתה ואת מה שהחברה שלך צריכה</li>
            <li>מיתוג פנימי בארגון</li>
            <li>חיבור לשפה עסקית</li>
            <li>מפת דרכים לתפקיד הבא שלך</li>
          </ul>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="results"
        style={{
          padding: "80px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>מה יוצא לי מזה?</h2>
          <ul style={{ textAlign: "right", lineHeight: "1.8", fontSize: "18px" }}>
            <li>שיטה אישית לניהול צוות</li>
            <li>נראות גבוהה יותר מול הנהלה</li>
            <li>שפה ניהולית אפקטיבית</li>
            <li>ביטחון להוביל שיחות מורכבות</li>
            <li>מסלול קידום אישי מוגדר ובר ביצוע</li>
            <li>חיבור טוב יותר בין העבודה לחיים האישיים</li>
            <li>שקט. פחות לחץ. יותר שליטה ומיקוד</li>
            <li>הובלה אמיתית — לא מנהל. מוביל.</li>
          </ul>
        </div>
      </section>

      {/* Plans Section */}
      <section
        id="plans"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}  
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>המסלולים שלנו</h2>
          <p>תכנית אישית המותאמת לצרכים שלך</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "40px" }}>
            <div>
              <h3>מסלול קצר – ₪6,000</h3>
              <p>למי שרוצה להתחיל בזהירות</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>6 שבועות</li>
                <li>6 פגישות שבועיות</li>
                <li>מיקוד באתגר אחד</li>
                <li>הכרות עם הגישה</li>
                <li>בניית תשתית ראשונית</li>
              </ul>
            </div>
            <div>
              <h3>מסלול מלא – ₪10,000</h3>
              <p>למי שבא לעבוד ולהתקדם</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>10 שבועות</li>
                <li>10 פגישות שבועיות</li>
                <li>תהליך מלא</li>
                <li>בניית מערכת אישית</li>
                <li>תרגול מעשי</li>
                <li>Roadmap לקידום</li>
              </ul>
            </div>
            <div>
              <h3>מסלול פרימיום – ₪15,000</h3>
              <p>למי שרוצה ליווי מלא ומותאם</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>16 שבועות</li>
                <li>ליווי מותאם אישית</li>
                <li>עבודה לפי קצב אישי</li>
                <li>תמיכה יומיומית</li>
                <li>בניית מסלול אסטרטגי מדויק</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: "40px" }}>
            רוב המנהלים שבוחרים להיכנס ל-The Push — הולכים על המסלול המלא. למה? כי הוא בנוי נכון. כי הוא מאפשר לך תהליך אמיתי בלי למהר — ובלי למתוח את זה לשנה.
          </p>
          <p>
            במקרים מסוימים אני ממליץ להתחיל במסלול קצר — כשזה באמת מתאים. אבל ברוב המקרים — המסלול המלא נותן תוצאה אמיתית בזמן נכון.
          </p>
        </div>
      </section>

      {/* Why Now Section */}
      <section
        id="why-now"
        style={{
          padding: "80px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>למה דווקא עכשיו?</h2>
          <p>אנשים חכמים דוחים החלטות. תמיד יש עוד פיצ'ר, עוד דדליין, עוד רבעון. אבל אם אתה מרגיש שאתה דורך במקום — זה לא ישתנה מעצמו.</p>
          <p>הקריירה שלך לא תעצור — עד שתחליט לעצור רגע ולכוון אותה.</p>
        </div>
      </section>

      {/* What You’ll Tell at Home */}
      <section
        id="home-talk"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>ומה תגיד בבית?</h2>
          <p>"זה לא עוד קורס ניהול. זה תהליך שיעזור לי להוביל במקום להיגרר. זה ייתן לי שקט, ביטחון, מיקוד — כדי שאוכל גם להתקדם, גם להשפיע, וגם להיות נוכח בבית."</p>
          <p style={{ fontWeight: "bold" }}>זה לא מתאים לכולם.</p>
          <p>אם אתה מחפש מישהו שייתן לך פתרונות קסם — זה לא בשבילך. אם אתה מוכן לעבוד, להשתנות, ולעלות רמה — בוא נדבר.</p>
        </div>
      </section>

      {/* Next Step Section */}
      <section
        id="next-step"
        style={{
          padding: "80px 20px",
          backgroundColor: "#213547",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>מה השלב הבא?</h2>
          <p>
            אם מה שדיברנו איתגר אותך — והבנת שזה הזמן לזוז,<br />
            אני כאן כדי לקחת אותך כל הדרך קדימה.
          </p>
          <p style={{ marginTop: "20px", fontSize: "18px" }}>שלח לי הודעה ונבחר את המסלול שמתאים לך</p>
          <p style={{ fontSize: "18px" }}>טלפון: 054-4731214</p>
          <p style={{ fontSize: "18px" }}>אימייל: itayf32@gmail.com</p>
          <p style={{ fontSize: "18px" }}>LinkedIn: איתי פוירשטיין</p>
          <p style={{ marginTop: "40px", fontSize: "14px", opacity: 0.7 }}>© 2025 איתי פוירשטיין. כל הזכויות שמורות.</p>
          <p style={{ fontSize: "16px", marginTop: "10px" }}>You are too smart to play small. Time to lead.</p>
        </div>
      </section>
    </div>
  );
}
