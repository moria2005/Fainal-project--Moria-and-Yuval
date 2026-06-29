// 1. הגדרת המערכים
let radioGoals = ["grades", "balance", "career"];
let radioGoalImages = ["gradesImg", "balanceImg", "careerImg"];
let timeOptions = ["little", "medium", "lot"];
let timeImages = ["green", "yellow", "red"];
let checkboxes = ["stress", "timeManagement", "motivation", "procrastination", "linkedin", "notion", "canva", "ai"];
let checkboxImages = ["stressImg", "timeImg", "motivationImg", "delayImg", "linkedinImg", "notionImg", "canvaImg", "aiImg"];

const difficulties = [
    { id: "stress", text: "לחץ במבחנים - תרגלי מבחנים בתנאי זמן. טיפ: השתמשי בטכניקת פומודורו." },
    { id: "timeManagement", text: "ניהול זמן - השתמשי ביומן שבועי. טיפ: תכנני את השבוע במוצאי שבת." },
    { id: "motivation", text: "חוסר מוטיבציה - חלקי משימות גדולות למשימות קטנות. טיפ: פרגני לעצמך הפסקה כיפית אחרי כל משימה." },
    { id: "procrastination", text: "דחיינות - התחילי ממשימה אחת קטנה של 10 דקות. טיפ: אל תחשבי על הסוף, רק על ההתחלה." }
];

const tools = [
    { id: "linkedin", text: "LinkedIn - מומלץ להתחיל לבנות פרופיל מקצועי ולעדכן פרויקטים." },
    { id: "notion", text: "Notion - מומלץ לארגן משימות, קורסים ומטרות במקום אחד." },
    { id: "canva", text: "Canva - מומלץ ליצור מצגות ותוצרים מעוצבים לתיק העבודות." },
    { id: "ai", text: "AI - מומלץ להשתמש בכלי בינה מלאכותית לייעול הלמידה והיצירתיות." }
];

// 2. פונקציות עזר
function showImage(imagesList, selectedImageId) {
    for (let i = 0; i < imagesList.length; i++) {
        document.getElementById(imagesList[i]).className = "hidden";
    }
    document.getElementById(selectedImageId).className = "show";
}

function closeBox() {
    document.getElementById("summaryBox").style.display = "none";
}

// 3. פונקציית בדיקת תקינות
function checkFormCompletion() {
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("age").value;

    // בדיקה האם נבחרה מטרה (רדיו - מטרות)
    let goalSelected = false;
    for(let i = 0; i < radioGoals.length; i++) {
        if(document.getElementById(radioGoals[i]).checked) goalSelected = true;
    }

    // בדיקה האם נבחר זמן (רדיו - זמן פנוי)
    let timeSelected = false;
    for(let i = 0; i < timeOptions.length; i++) {
        if(document.getElementById(timeOptions[i]).checked) timeSelected = true;
    }

    let btn = document.getElementById("btnBuild");

    // הכפתור יהיה זמין רק אם שם, גיל, מטרה וזמן מלאו. צ'קבוקסים לא נדרשים.
    if (name !== "" && age !== "" && goalSelected && timeSelected) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// 4. פונקציית הסיכום (כאן נמצא כל התוכן!)
function BuildPlan() {
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("age").value;

    let text = "<h3>סיכום הבחירות שלך:</h3>";
    text += "<b>שם:</b> " + name + " | <b>גיל:</b> " + age + "<br><br>";

    // רדיו זמן
    text += "<b>זמן פנוי:</b> ";
    if (document.getElementById("little").checked) text += "מעט - המלצה: התחילי ממשימות קצרות.<br>";
    else if (document.getElementById("medium").checked) text += "בינוני - המלצה: קבעי 3-4 שעות שבועיות.<br>";
    else if (document.getElementById("lot").checked) text += "הרבה - המלצה: נצלי את הזמן לבניית תיק עבודות.<br>";

    // רדיו מטרה
    text += "<b>מטרה עיקרית:</b> ";
    if (document.getElementById("grades").checked) text += "ציונים גבוהים - המלצה: הכיני לוח זמנים למבחנים.<br>";
    else if (document.getElementById("balance").checked) text += "איזון - המלצה: שלבי זמן מנוחה קבוע.<br>";
    else if (document.getElementById("career").checked) text += "בניית קריירה - המלצה: התחילי לבנות פרופיל LinkedIn.<br>";

    // קשיים
    text += "<br><b>קשיים שסימנת:</b><br>";
    for (let i = 0; i < difficulties.length; i++) {
        if (document.getElementById(difficulties[i].id).checked) {
            text += "<div>• " + difficulties[i].text + "</div>";
        }
    }

    // כלים
    text += "<br><b>כלים שמעניינים אותך:</b><br>";
    for (let j = 0; j < tools.length; j++) {
        if (document.getElementById(tools[j].id).checked) {
            text += "<div>• " + tools[j].text + "</div>";
        }
    }

    text += "<button onclick='closeBox()' style='width:100%; margin-top:15px; cursor:pointer;'>סגור</button>";
    document.getElementById("summaryBox").innerHTML = text;
    document.getElementById("summaryBox").style.display = "block";
}

// 5. חיבור הכל
window.onload = function() {
    document.getElementById("btnBuild").onclick = BuildPlan;
    document.getElementById("btnBuild").disabled = true;

    document.getElementById("txtName").oninput = checkFormCompletion;
    document.getElementById("age").oninput = checkFormCompletion;

    for (let i = 0; i < radioGoals.length; i++) {
        document.getElementById(radioGoals[i]).onclick = function() {
            showImage(radioGoalImages, radioGoalImages[i]);
            checkFormCompletion();
        };
    }
    for (let i = 0; i < timeOptions.length; i++) {
        document.getElementById(timeOptions[i]).onclick = function() {
            showImage(timeImages, timeImages[i]);
            checkFormCompletion();
        };
    }
    for (let j = 0; j < checkboxes.length; j++) {
        document.getElementById(checkboxes[j]).onclick = function() {
            if (document.getElementById(checkboxes[j]).checked) document.getElementById(checkboxImages[j]).className = "show";
            else document.getElementById(checkboxImages[j]).className = "hidden";
        };
    }
};