/* بدي استعمل الجافا سكريبت حتى اقدر ارفع الصورة الي بدي اياها من خلاله
    و بدي استعمل الجافا سكريبت حتى اقدر اخلي الفلاتر تعدل على الصورة
    و بدي استعمل الجافا سكريبت حتى اقدر انزل الصورة بعد التعديل او اقدر ارجعها للديفولت */

// بدك تعمل متغيرات يكون محتواها الملف الي فيه الاي دي تبع الفلاتر

let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

// بدك تعمل متغيرات للكبسات الثلاث الي عندك (التحميل و التنزيل و الضبط)

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let reset = document.getElementById("reset"); // اذا كان عندك بدون اي دي بامكانك تكتبه بالشكل الي رح تشوفه هسا

/* let reset = document.querySelector('span') */

// بدك تعمل متغير عشان الصورة

let img = document.getElementById("img");

// رح احتاج كمان انه اعمل متغير احط فيه الصندوق او الديف تبع الصورة
// اذا بدك تنادي على عنصر او تاغ او كلاس بتستعمل querySelector 
// الكلاس بستعمل معها النقطة وقت تنادي عليها زي لما تعملها في السي اس اس

let imgBox = document.querySelector('.img-box');

/* حاليا انا بدي اول ما يتم تحميل الصفحة ما يظهر عندي الصندوق تبع الصورة
    لانه اصلا ما حملت صورة لسا , وما بدي كبسات الداونلود و الريسيت يظهروا
    لانه برضو ما عندي صورة حتى انزلها او اشيل التعديلات تبعتها */

window.onload = function() {
    download.style.display = 'none'
    reset.style.display = 'none'
    imgBox.style.display = 'none'
}

/* بدي اخلي حاليا لما احمل صورة ترجع هاي الكبسات تظهر , عشان هيك لازم احكيله 
    لما احمل الصورة بدي ترجعلي اياها */

// رح نستخدم هون ال(onchange) - بدل من ما استخدم ال (onclick)
// لانه انا بدي لما تتغير الحالة بالرفع تظهر الكبسات مش بمجرد ما اكبس لانه بجوز ما اختار اشي    


// شرح الكانفاس و السي تي اكس اخر البرنامج , روح شوفه عشان تفهم الي بصير

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext('2d');

// انزل للسطر رقم 148 عشان تعرف شو الهدف من الدالة الجاية ( هادا الكود بأثر رجعي )

function resetValue(){
    ctx.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
    ctx.drawImage(img, 0 , 0 , canvas.width , canvas.height);
}



upload.onchange = function(){
    resetValue(); // بشغل الدالة هون عشان لما تتغير الصورة يرجعلي القيم للديفولت
    download.style.display = 'block'
    reset.style.display = 'block'
    imgBox.style.display = 'block'
    /* حاليا بدي اخلي الصورة تظهر بس فيه اشي لازم تفهمه , انه الملفات الي بنحملها
        بقرأها الجافا سكريبت على اساس انها مصفوفة و بكون الملف تبعنا بالانديكس 0
        و فيه داخل اللغة نفسها كلاس بسمح انك تقرأ الملفات مثل الي كنا نعمل فيه
        التاريخ ايام الكورس , ولاحظ انه اسم المصفوفة تبعت الملفات هو فايل(ز) مش فايل*/
    let file = new FileReader(); // كلاس قراءة الملفات
    file.readAsDataURL(upload.files[0]); 
    // دالة لقراءة الملفات المتحملة و الابلوود هو المتغير تبعنا الي موجود فوق و جنبه اسم المصفوفة و الانديكس تبعها    
    /* ما بتقدر تحط الامر هادا مباشرة لانه ممكن تصير مشكلة وهو انه يتنفذ قبل ما يحمل الصورة
    img.src = file.result;
    عشان هيك لازم استعمل الايفينت تبع onload */
    file.onload = function() {
        img.src = file.result;

        // هادا الكود انضاف اخر البرنامج فعليا ومش وقت كتابة الامر الي فوق
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = 'none';
    }
    
}

/* هاي الطريقة الي رح اكتب فيها هسا اذا طبقتها رح تواجه مشكلة و هي انه بامكانك 
    اتطبق على فيلتر واحد بس و اذا غيرت فيلتر ثاني بصير الفيلتر الاول ولا زي كأنك 
    : مستعمله , عشان هيك لا يفضل استخدامها و بتنكتب زي هيك

saturate.addEventListener("input" , function(){
    img.style.filter = ` saturate(${saturate.value}%) `
})    
    لو اجيت حاليا تحرك المؤشر تبع الفيلتر رح يشتغل معك بشكل ممتاز و لكن بتظهر
    المشكلة لما تيجي بدك تحرك المؤشر تبع الفيلتر الثاني لانه وقتها رح يرجع الصورة
    للاصل تبعها و كانك مش عامل ولا محرك مؤشر الفيلتر الاول, جرب ضيف الدالة للمؤشر
    : الثاني و جرب و شوف النتيجة

contrast.addEventListener("input" , function(){
    img.style.filter = ` contrast(${contrast.value}%) `
})  
*/

/* حتى اتفادى المشكلة الي صارت بالطريقة الي قبل لازم احط كل الفلاتر بمتغير واحد */

// بستعمل هاي الطريقة عشان اختار كل التاجز مع بعض , لو كانت بس الانبووت بختار بدون اوول
// let filters = document.querySelectorAll("ul li input");

/* بدي استخدم حاليا دالة اسمها forEach 
    وظيفتها تقريبا زي وظيفة اللووب\الحلقات ولكن لمرة وحدة و هي انه بتدخل كل قيم 
    المصفوفة على الدالة يعني لو كتبت
let array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element)); 
    فالناتج رح يكون هو طباعة كل عنصر في المصفوفة
*/
let filters = document.querySelectorAll("ul li input");
filters.forEach ( filter => {
    filter.addEventListener('input',function(){
        ctx.filter = ` 
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px) 
            hue-rotate(${hueRotate.value}deg) ` // percentage , without unit , pixels , degree
            
        ctx.drawImage(img, 0 , 0 , canvas.width , canvas.height);
    })
})

// من المشكلات الي واجهتني هي انه لما كتبت كومنتات بين المتغير و استخدامه ما رضي يشغله
/* وحدة من المشاكل هي انه لو تيجي تحمل صورة جديدة رح يخلي قيم الفلاتر
     مثل ما هي فلازم يرجعوا لحالهم عند تحميل صورة جديدة و ترجع القيلم للديفولت
*/
// بدي اعمل دالة جديدة و بدي اياها تتنفذ لما لما يتم تغيير الصورة
// زي ما اتفقنا انه الملفات عبارة عن مصفوفات و الانديكس تبعها صفر

/* بامكانك تضيف الدالة تبعت الرييسيت في السبان من الاتش تي ام ال 
    و بتكتبها زي هيك 
    <span onclink = "resetValue()"> .....
    او بتعملها هون
*/
    
reset.onclick = function(){
    resetValue();
}

// حاليا بدي اعمل الدالة تبعت التنزيل 
/* بدك اول اشي تجيب الاسم الي انت حاطه بملف الاتش تي ام ال جنب كلمة داونلود و طبعا
    انت بتسميه الي بدك اياه و يفضل يكون اشي بدل على الي بدك تنزله, في المثال
    فالاسم الي محطوط هو pic
*/

/* حاليا فيه طريقة فيها مشاكل او بالاحرى ما بتحقق الهدف الي انا بدي اياه من الموقع
    لانه هاي الطريقة بتنزل الصورة مثل ما هي بدون فلاتر

download.onclick = function(){
    download.href = img.src;
}    
    فعليا انت مش مسموحلك تحمل الصورة بالفلاتر و حتى لو فتحت الصورة بتبويب لحال
    او جربت تعمل عليها حفظ رح يحفظها بدون فلاتر لانه اللغة ما بتسمح بهادا الاشي
*/

/* بدك تعمل عندك تاغ اسمه كانفاس , هادا التاج عبارة عن لوحة فاضية بدك تحط فيه
    الصورة تبعتك و بعدين تحط في الاضافات بالتاغ الخاص فيه الي هو Context
   

let canvas = document.getElementById("canvas");

    هون انا بضيف كونتيكست للكانفاس تبعي و بختار نوع الرسمة 2دي
let ctx = canvas.getContext("2d")

    هسا الحكي الجاي انا بدي اياه يصير لما اعمل الدالة تبعت الصورة onchange
    ولكن اكيد تعريف المتغيرات قبل زي ما هو موجود في البرنامج
    عندك الدالة تبعت (الدرو ايماج) بستخدمها عشان ارسم الصورة تبعتي داخل الكانفاس
    وبتوخذ اكثر من متغير وهم : الاشي الي بدك ترسمه و الازاحات تبعون الصورة او
    المركز تبع الاكس و الوااي و بتوخذ كمان ابعاد الصورة نفسها وهدول بدي اعررفهم
            img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0 , 0 , canvas.width , canvas.height);
            }
    بهاي الحالة انا صار عندي الصورة و فوقيها او تحتيها الكانفاس بشكل مطابق تماما
    عشان هيك بامكانك تخفي الصورة داخل دالة ال onchange
            img.style.display = 'none'        
    ملاااااااااااااحظة : ما تنسى تضيف الكانفاس على تعديلات السي اس اس , بس حط جنب
    خيارات الصورة ( فاصلة و كانفاس)
    
    لو حاليا اجيت تعمل اي فيلتر رح تلاقيه مش شغال لانك ببساطة عامل التاثير على الصورة
    وانت خفيتها و خليت الكانفاس , عشان هيك بدي اكتب حاليا الكود الي يخلينا انقل
    التاثيرات من الصورة للكانفاس
    روووح على الدالة تبعت الفلاتر و شيل الدالة 
    img.style.filter

    هادا شكل الكود قبل التعديل و اضافة الكانفاس

    let filters = document.querySelectorAll("ul li input");
        filters.forEach ( filter => {
            filter.addEventListener('input',function(){
             img.style.filter = `

    و حط بدالها
    ctx.filter = ` ....
                `
    ctx.drawImage(img, 0 , 0 , canvas.width , canvas.height)
    
    الامر الي حطيته بالاخر هو عشان ينقل التغيرات الي انت عملتها للوحة الي بتنقل عليها
    يعني كل ما تعمل فيلتر فهو قاعد بغير على اللوحة
*/ 
// بين القوسين بتحدد امتداد الصورة image/jpeg .
// الديفولت تبع الصورة هو png


download.onclick = function(){
    download.href = canvas.toDataURL();
}    