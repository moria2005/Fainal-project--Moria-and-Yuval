function BuildPlan() {
    let text = "<h3>סיכום הבחירות שלך:</h3>";
    text += "שם: " + document.getElementById("txtName").value + "<br>";
    text += "גיל: " + document.getElementById("age").value + "<br><br>";

    if(document.getElementById("little").checked) {
        text += "זמן פנוי: מעט<br>";
        text += "המלצה: התחילי ממשימות קצרות של 20 דקות ביום.<br><br>";
    }

    if(document.getElementById("medium").checked) {
        text += "זמן פנוי: בינוני<br>";
        text += "המלצה: קבעי 3-4 שעות שבועיות ללמידה מסודרת.<br><br>";
    }

    if(document.getElementById("lot").checked) {
        text += "זמן פנוי: הרבה<br>";
        text += "המלצה: נצלי את הזמן גם לבניית תיק עבודות וכלים חדשים.<br><br>";
    }

    if(document.getElementById("grades").checked) {
        text += "מטרה: ציונים גבוהים<br>";
        text += "המלצה: הכיני לוח זמנים לקראת מבחנים.<br><br>";
    }

    if(document.getElementById("balance").checked) {
        text += "מטרה: איזון<br>";
        text += "המלצה: שלבי זמן מנוחה קבוע לצד הלימודים.<br><br>";
    }

    if(document.getElementById("career").checked) {
        text += "מטרה: בניית קריירה<br>";
        text += "המלצה: התחילי לבנות תיק עבודות ופרופיל LinkedIn.<br><br>";
    }

    text += "<b>קשיים שסימנת:</b><br>";

    if(document.getElementById("stress").checked) {
        text += "לחץ במבחנים - תרגלי מבחנים בתנאי זמן.<br>";
    }

    if(document.getElementById("timeManagement").checked) {
        text += "ניהול זמן - השתמשי ביומן שבועי.<br>";
    }

    if(document.getElementById("motivation").checked) {
        text += "חוסר מוטיבציה - חלקי משימות גדולות למשימות קטנות.<br>";
    }

    if(document.getElementById("procrastination").checked) {
        text += "דחיינות - התחילי ממשימה אחת קטנה של 10 דקות.<br>";
    }

    text += "<br><b>כלים שמעניינים אותך:</b><br>";

    if(document.getElementById("linkedin").checked) {
        text += "LinkedIn - מומלץ להתחיל לבנות פרופיל מקצועי ולעדכן פרויקטים.<br>";
    }

    if(document.getElementById("notion").checked) {
        text += "Notion - מומלץ לארגן משימות, קורסים ומטרות במקום אחד.<br>";
    }

    if(document.getElementById("canva").checked) {
        text += "Canva - מומלץ ליצור מצגות ותוצרים מעוצבים לתיק העבודות.<br>";
    }

    if(document.getElementById("ai").checked) {
        text += "AI - מומלץ להשתמש בכלי בינה מלאכותית לייעול הלמידה והיצירתיות.<br>";
    }

    document.getElementById("summaryBox").innerHTML = text;
}


function showSelectedImage(imagesList, selectedImage) {
    for(let i=0; i<imagesList.length; i++) {
        document.getElementById(imagesList[i]).className = "hidden";
    }
    document.getElementById(selectedImage).className = "show";
}


document.getElementById("little").addEventListener("click", function() {
    showSelectedImage(["green", "yellow", "red"], "green");
});

document.getElementById("medium").addEventListener("click", function() {
    showSelectedImage(["green", "yellow", "red"], "yellow");
});

document.getElementById("lot").addEventListener("click", function() {
    showSelectedImage(["green", "yellow", "red"], "red");
});


document.getElementById("grades").addEventListener("click", function() {
    showSelectedImage(["gradesImg", "balanceImg", "careerImg"], "gradesImg");
});

document.getElementById("balance").addEventListener("click", function() {
    showSelectedImage(["gradesImg", "balanceImg", "careerImg"], "balanceImg");
});

document.getElementById("career").addEventListener("click", function() {
    showSelectedImage(["gradesImg", "balanceImg", "careerImg"], "careerImg");
});



function showCheckboxImage(checkId, imageId) {
    let checkBox = document.getElementById(checkId);
    let img = document.getElementById(imageId);


    if (checkBox.checked) {
        img.className = "show";
    } else {
        img.className = "hidden";
    }
}

document.getElementById("stress").addEventListener("click", () => showCheckboxImage("stress", "stressImg"));
document.getElementById("timeManagement").addEventListener("click", () => showCheckboxImage("timeManagement", "timeImg"));
document.getElementById("motivation").addEventListener("click", () => showCheckboxImage("motivation", "motivationImg"));
document.getElementById("procrastination").addEventListener("click", () => showCheckboxImage("procrastination", "delayImg"));

document.getElementById("linkedin").addEventListener("click", () => showCheckboxImage("linkedin", "linkedinImg"));
document.getElementById("notion").addEventListener("click", () => showCheckboxImage("notion", "notionImg"));
document.getElementById("canva").addEventListener("click", () => showCheckboxImage("canva", "canvaImg"));
document.getElementById("ai").addEventListener("click", () => showCheckboxImage("ai", "aiImg"));