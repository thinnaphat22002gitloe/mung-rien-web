const translations = {
    th: {
        // General & Navbar
        "nav_home": "หน้าแรก",
        "nav_jobs": "งานสอน (สำหรับติวเตอร์)",
        "nav_student": "สำหรับนักเรียน",
        "nav_register": "สมัครติวเตอร์",
        "nav_webboard": "Webboard",
        "nav_admin": "ADMIN",
        "topbar_login": "✆ ลงชื่อเข้าใช้",
        "topbar_contact": "✆ ติดต่อทีมงาน",
        "logo_tag": "เรียนรู้ เข้าใจ พัฒนาไปด้วยกัน",
        
        // Login Page
        "auth_login_title": "เข้าสู่ระบบ",
        "auth_login_sub": "สำหรับติวเตอร์และผู้ดูแลระบบ",
        "label_role": "ประเภทผู้ใช้งาน",
        "role_tutor": "ติวเตอร์ (Tutor)",
        "role_admin": "ผู้ดูแลระบบ (Admin)",
        "label_email": "อีเมล (E-Mail)",
        "ph_email": "your@email.com",
        "label_pass": "รหัสผ่าน (Password)",
        "ph_pass": "********",
        "label_remember": "จดจำการเข้าสู่ระบบ",
        "link_forgot": "ลืมรหัสผ่าน?",
        "link_register_new": "สมัครติวเตอร์ใหม่",
        "btn_login_submit": "เข้าสู่ระบบ",
        "social_login_text": "หรือเข้าสู่ระบบด้วย",
        
        // Register Page
        "reg_title_part1": "สมัคร",
        "reg_title_span": "ติวเตอร์",
        "reg_sub": "กรอกแบบฟอร์มสมัครติวเตอร์ให้ครบถ้วน ทีมงานจะติดต่อกลับภายใน 1-2 วันทำการ",
        "reg_sec_login": "ข้อมูลเข้าสู่ระบบ (Login)",
        "reg_sec_personal": "ข้อมูลส่วนตัว (Personal Information)",
        "reg_sec_edu": "ข้อมูลการศึกษา (Education)",
        "reg_sec_teaching": "ประสบการณ์และวิชาที่สอน (Teaching Info)",
        "reg_sec_docs": "เอกสารประกอบ (Additional Documents)",
        "reg_confirm": "ข้าพเจ้ายืนยันว่าข้อมูลที่กรอกข้างต้นเป็นความจริงทุกประการ และยอมรับเงื่อนไขการสมัคร",
        "btn_clear": "ล้างข้อมูล",
        "btn_submit_reg": "สมัครติวเตอร์",
        "have_account": "มีบัญชีอยู่แล้ว?",
        
        // Jobs Page
        "jobs_page_sub": "เลือกดูรายการงานสอนตามหมวด แล้วสมัครเลยผ่านปุ่ม รายละเอียด",
        "ph_search_jobs": "ค้นหาวิชา, สถานที่, Job ID...",
        "btn_search": "🔍 ค้นหา",
        "btn_refresh": "🔄 รีเฟรช",
        "filter_all": "ทุกหมวด",
        "filter_math_sci": "งานสอนวิทย์-คณิต",
        "filter_lang_soc": "งานสอนภาษา-สังคม",
        "filter_music": "งานสอนดนตรี",
        "filter_sport": "งานสอนกีฬา",
        "btn_prev": "« ก่อนหน้า",
        "btn_next": "ถัดไป »",
        
        // Student Page
        "std_title_part1": "ขั้นตอน",
        "std_title_span": "การหาติวเตอร์",
        "std_sub": "ทำตามขั้นตอนง่ายๆ ด้านล่าง เพื่อขอหาติวเตอร์สอนพิเศษที่ตรงกับความต้องการของคุณ",
        "std_step1": "ติดต่อทีมงาน มุ่งเรียน โดยตรง",
        "std_step1_desc": "คุณสามารถติดต่อทีมงานเพื่อปรึกษาหรือขอติวเตอร์ผ่านทาง Line ID หรือ Facebook ได้ทันทีเพื่อความรวดเร็วสูงสุด",
        "std_scan_qr": "สแกน Line QR Code เพื่อเพิ่มเพื่อน",
        "std_step2": "2. กรอกแบบฟอร์มขอติวเตอร์ (สถาบันจะติดต่อกลับภายใน 12 ชั่วโมง)",
        "label_fullname": "ชื่อ-นามสกุล",
        "ph_fullname": "เช่น นางสาวสมศรี สวยดี",
        "label_status": "สถานะผู้ติดต่อ",
        "label_subject_req": "วิชาที่ต้องการหาติวเตอร์",
        "label_tutor_gender": "เพศติวเตอร์",
        "label_std_level": "ระดับชั้นของนักเรียน",
        "label_location_req": "สถานที่สอน",
        "ph_location": "เช่น บ้าน, คาเฟ่, สาธารณะ, Online",
        "label_loc_detail": "ตำแหน่งสถานที่สอน (ใกล้ BTS/MRT/ถนน)",
        "ph_loc_detail": "เช่น ใกล้ BTS อารีย์, ถนนสุขุมวิท",
        "label_time_req": "วัน-เวลา ที่สะดวกเรียน",
        "ph_time_req": "เช่น เสาร์ 13.00-15.00 น., จันทร์-พุธ 17.00-19.00 น.",
        "label_budget": "งบประมาณค่าสอน/ชั่วโมง",
        "ph_budget": "เช่น 200-300 บาท/ชั่วโมง",
        "label_more_detail": "รายละเอียดเพิ่มเติม",
        "ph_more_detail": "เช่น ติวสอบเข้า, ติวเนื้อหาโรงเรียน, สนใจผลงานติวเตอร์เป็นต้น",
        "btn_submit_find": "ส่งข้อมูลหาติวเตอร์",
        
        // Webboard Page
        "wb_title": "💬 Webboard <span>กระดานสนทนา</span>",
        "wb_sub": "สำหรับติวเตอร์และนักเรียน แชร์ประสบการณ์ แลกเปลี่ยนความรู้ และพบปะสังสรรค์กันครับ",
        "wb_filter_all": "📋 ทุกหมวด",
        "wb_filter_tips": "💡 แนะนำการสอน",
        "wb_filter_find_tutor": "🔍 หาติวเตอร์",
        "wb_filter_find_job": "📌 หางานสอน",
        "wb_filter_qna": "❓ ปัญหา/สอบถาม",
        "ph_search_wb": "ค้นหากระทู้...",
        "btn_search_wb": "🔍 ค้นหา",
        "btn_new_post": "✏️ สร้างกระทู้ใหม่",
        "wb_stat_view": "เข้าชม",
        "wb_stat_comment": "คอมเมนต์",
        
        // Forgot Password Page
        "forgot_back_login": "✆ กลับไปหน้าเข้าสู่ระบบ",
        "forgot_title": "ลืมรหัสผ่าน",
        "forgot_sub": "กรอกอีเมลหรือเบอร์โทรศัพท์ที่สมัครไว้ ระบบจะส่งลิงก์รีเซ็ตรหัสผ่านให้",
        "label_email_reg": "อีเมลที่สมัครไว้",
        "btn_send_link": "ส่งลิงก์รีเซ็ตรหัสผ่าน",
        "text_or": "หรือ",
        "label_phone_reg": "เบอร์โทรศัพท์ (LINE / SMS)",
        "btn_send_otp": "ส่งรหัส OTP ไปยังไลน์/SMS",
        "forgot_step2_msg": "✅ เราได้ส่งรหัส OTP / ลิงก์รีเซ็ตไปยังช่องทางของคุณแล้ว กรุณาตรวจสอบภายใน 15 นาที",
        "label_otp": "รหัสยืนยัน OTP (6 หลัก)",
        "ph_otp": "XXXXXX",
        "link_resend_otp": "ส่งรหัสใหม่ (00:59)",
        "btn_verify_otp": "ยืนยันรหัส OTP",
        "label_new_pass": "รหัสผ่านใหม่",
        "ph_new_pass": "รหัสผ่านใหม่ อย่างน้อย 8 ตัว",
        "label_confirm_pass": "ยืนยันรหัสผ่านใหม่",
        "ph_confirm_pass": "กรอกรหัสผ่านอีกครั้ง",
        "pass_req1": "ความยาวอย่างน้อย 8 ตัวอักษร",
        "pass_req2": "ประกอบด้วยตัวอักษร a-z, A-Z และตัวเลข 0-9",
        "btn_save_pass": "บันทึกรหัสผ่านใหม่",
        "link_back_login": "« กลับไปหน้าเข้าสู่ระบบ",
        
        // Admin
        "admin_menu_title": "ระบบจัดการ",
        "admin_menu_dashboard": "Dashboard",
        "admin_menu_tutors": "จัดการติวเตอร์",
        "admin_menu_jobs": "จัดการงานสอน",
        "admin_menu_users": "จัดการผู้ใช้งาน/นักเรียน",
        "admin_menu_categories": "จัดการหมวดหมู่",
        "admin_menu_webboard": "จัดการ Webboard",
        "admin_menu_notif": "แจ้งเตือน LINE",
        "admin_menu_settings": "ตั้งค่าระบบ",
        "admin_greet": "แอดมิน",
        "admin_logout": "ออกจากระบบ",
        
        // Buttons
        "btn_register_tutor": "ลงทะเบียนสมัครเป็นผู้สอน",
        "btn_check_jobs": "ตรวจสอบรายการงานสอนทั้งหมด",
        "btn_req_tutor": "ยื่นความประสงค์ขอรับผู้สอน",
        "btn_req_steps": "ขั้นตอนและหลักเกณฑ์การจัดหา",
        "btn_check_latest_jobs": "ตรวจสอบรายการงานสอนล่าสุด",
        "btn_webboard": "เข้าสู่เว็บบอร์ดเพื่อแลกเปลี่ยนข้อมูล",
        "btn_details": "รายละเอียด",
        "btn_see_all_jobs": "ดูงานสอนทั้งหมด",
        
        // Index Hero
        "hero1_badge": "📢 ประชาสัมพันธ์การรับสมัครผู้สอน",
        "hero1_title_part1": "เปิดรับสมัคร ",
        "hero1_title_span": "\"ติวเตอร์และผู้สอนอิสระ\"",
        "hero1_title_part2": " ร่วมทีมจำนวนมาก",
        "hero1_desc": "สำหรับผู้มีความรู้ความสามารถ มุ่งมั่นในการถ่ายทอดวิชาการ พร้อมโอกาสสร้างรายได้ที่มั่นคงและเลือกเวลาปฏิบัติการสอนได้อย่างอิสระ",
        
        "hero2_badge": "⭐ บริการจัดหาติวเตอร์ส่วนตัว สำหรับนักเรียนและผู้ปกครอง",
        "hero2_title_part1": "จัดหา ",
        "hero2_title_span": "\"ผู้สอนระดับมืออาชีพ\"",
        "hero2_title_part2": " แบบตัวต่อตัว",
        "hero2_desc": "ยกระดับผลการเรียนและเตรียมความพร้อมสู่การสอบแข่งขันระดับประเทศ โดยผู้ทรงคุณวุฒิที่ผ่านการคัดสรรจากสถาบันชั้นนำ",

        "hero3_badge": "🆕 ข้อมูลประชาสัมพันธ์และงานสอนรายสัปดาห์",
        "hero3_title_part1": "อัปเดตประกาศงานสอน ",
        "hero3_title_span": "\"คณิตศาสตร์-วิทยาศาสตร์-ภาษา\"",
        "hero3_title_part2": " ล่าสุด",
        "hero3_desc": "มีตำแหน่งงานสอนเปิดใหม่มากกว่า 100 อัตรา ครอบคลุมพื้นที่กรุงเทพมหานคร ปริมณฑล และการเรียนการสอนรูปแบบออนไลน์",

        // Steps section
        "steps_title_part1": "ขั้นตอน",
        "steps_title_span": "การรับงานสอน",
        "steps_title_part2": " (สำหรับติวเตอร์)",
        "steps_sub": "ทำตามขั้นตอนง่ายๆ ทั้ง 7 ข้อนี้ เพื่อเริ่มต้นรับงานสอนพิเศษกับสถาบันของเรา",
        
        "step1_title": "กรอกข้อมูลสมัคร",
        "step1_desc": "กรอกข้อมูลสมัครติวเตอร์ผ่านทาง หน้าสมัครติวเตอร์ บนเว็บไซต์",
        "step2_title": "หางานสอนที่ต้องการ",
        "step2_desc": "หางานสอน ที่ต้องการ โดยตรวจสอบวัน เวลา สถานที่ ให้เรียบร้อยก่อนจองงานผ่านหน้า งานสอน",
        "step3_title": "แจ้ง Job ID ที่สนใจ",
        "step3_desc": "แจ้ง Job ID ที่ต้องการผ่านทาง Line@ หรือ Facebook ของสถาบัน",
        "step4_title": "รอการพิจารณา",
        "step4_desc": "รอการพิจารณา ตรวจสอบ จากทางสถาบันหลังส่งรหัสงาน",
        "step5_title": "ชำระค่าประกันงาน",
        "step5_desc": "ชำระค่าประกันงานสอนและแจ้งโอนเงินเพื่อคอนเฟิร์มรับงานสอน",
        "step6_title": "เตรียมเนื้อหาการสอน",
        "step6_desc": "เตรียมเนื้อหาและหลักสูตรสำหรับการสอนล่วงหน้าให้เรียบร้อย",
        "step7_title": "รับเงินค่าสอน",
        "step7_desc": "รับเงินจากผู้ปกครองหรือนักเรียนโดยตรงหลังการสอนเสร็จสิ้น",

        // Jobs Section
        "jobs_title_part1": "หา",
        "jobs_title_span": "งานสอน",
        "jobs_title_part2": " สำหรับติวเตอร์",
        "jobs_sub": "เลือกหมวดงานสอนที่คุณสนใจ แล้วคลิกรายละเอียดเพื่อสมัครเลย",
        "tab_math_sci": "งานสอนวิทย์-คณิต",
        "tab_lang_soc": "งานสอนภาษา-สังคม",
        "tab_music": "งานสอนดนตรี",
        "tab_sport": "งานสอนกีฬา",
        "th_subject": "วิชา",
        "th_location": "สถานที่เรียน",
        "th_time": "วันเวลาเรียน",
        "th_jobid": "Job ID",
        
        // Stats Section
        "stats_title_part1": "ทำไมถึงเลือก ",
        "stats_title_span": "มุ่งเรียน",
        "stats_title_part2": "",
        "stat1_label": "ติวเตอร์ที่ผ่านการคัดเลือก",
        "stat2_label": "งานสอนที่เปิดรับสมัคร",
        "stat3_label": "คอร์สที่จบสำเร็จ",
        "stat4_label": "คะแนนความพึงพอใจ",

        // Footer
        "footer_col1_title": "มุ่งเรียน",
        "footer_col1_li1": "🎓 ศูนย์รวมงานสอนพิเศษอันดับ 1",
        "footer_col1_li2": "📍 ทำเลศักยภาพ: ",
        
        "footer_col2_title": "สำหรับนักเรียน/ผู้ปกครอง",
        "footer_col2_li1": "ขอหาติวเตอร์สอนพิเศษ",
        "footer_col2_li2": "คอร์สสอนยอดนิยม",
        "footer_col2_li3": "Webboard / ความรู้",

        "footer_col3_title": "สำหรับติวเตอร์",
        "footer_col3_li1": "สมัครเป็นติวเตอร์",
        "footer_col3_li2": "ดูรายการงานสอน",
        "footer_col3_li3": "สิ่งที่ติวเตอร์ควรรู้",

        "footer_col4_title": "ติดต่อเรา",
        "footer_copy": "© 2026 มุ่งเรียน. All rights reserved.",
        "chat_label": "สอบถามโปรโมชั่น คลิก"
    },
    en: {
        // General & Navbar
        "nav_home": "Home",
        "nav_jobs": "Jobs (Tutors)",
        "nav_student": "For Students",
        "nav_register": "Register Tutor",
        "nav_webboard": "Webboard",
        "nav_admin": "ADMIN",
        "topbar_login": "✆ Login",
        "topbar_contact": "✆ Contact Us",
        "logo_tag": "Learn, Understand, Grow Together",
        
        // Login Page
        "auth_login_title": "Login",
        "auth_login_sub": "For Tutors and Administrators",
        "label_role": "User Role",
        "role_tutor": "Tutor",
        "role_admin": "Administrator",
        "label_email": "E-Mail Address",
        "ph_email": "your@email.com",
        "label_pass": "Password",
        "ph_pass": "********",
        "label_remember": "Remember Me",
        "link_forgot": "Forgot Password?",
        "link_register_new": "Register New Tutor",
        "btn_login_submit": "Login",
        "social_login_text": "Or login with",
        
        // Register Page
        "reg_title_part1": "Register as ",
        "reg_title_span": "Tutor",
        "reg_sub": "Please complete the tutor registration form. Our team will contact you within 1-2 business days.",
        "reg_sec_login": "Login Information",
        "reg_sec_personal": "Personal Information",
        "reg_sec_edu": "Education",
        "reg_sec_teaching": "Teaching Info",
        "reg_sec_docs": "Additional Documents",
        "reg_confirm": "I confirm that the information provided is true and accept the registration terms.",
        "btn_clear": "Clear",
        "btn_submit_reg": "Register",
        "have_account": "Already have an account?",
        
        // Jobs Page
        "jobs_page_sub": "Browse teaching jobs by category and apply by clicking Details.",
        "ph_search_jobs": "Search Subject, Location, Job ID...",
        "btn_search": "🔍 Search",
        "btn_refresh": "🔄 Refresh",
        "filter_all": "All Categories",
        "filter_math_sci": "Math/Science",
        "filter_lang_soc": "Language/Social",
        "filter_music": "Music",
        "filter_sport": "Sports",
        "btn_prev": "« Previous",
        "btn_next": "Next »",
        
        // Student Page
        "std_title_part1": "How to ",
        "std_title_span": "Find a Tutor",
        "std_sub": "Follow the simple steps below to request a tutor that meets your needs.",
        "std_step1": "Contact Our Team Directly",
        "std_step1_desc": "You can contact our team to consult or request a tutor via Line ID or Facebook for the fastest response.",
        "std_scan_qr": "Scan Line QR Code to add friend",
        "std_step2": "2. Fill out the request form (We will contact you within 12 hours)",
        "label_fullname": "Full Name",
        "ph_fullname": "e.g. Somsri Suaydee",
        "label_status": "Contact Status",
        "label_subject_req": "Subject to Learn",
        "label_tutor_gender": "Tutor Gender",
        "label_std_level": "Student Level",
        "label_location_req": "Teaching Location",
        "ph_location": "e.g. Home, Cafe, Public, Online",
        "label_loc_detail": "Location Details (Near BTS/MRT/Road)",
        "ph_loc_detail": "e.g. Near BTS Ari, Sukhumvit Road",
        "label_time_req": "Convenient Date & Time",
        "ph_time_req": "e.g. Sat 13.00-15.00, Mon-Wed 17.00-19.00",
        "label_budget": "Budget / Hour",
        "ph_budget": "e.g. 200-300 THB/Hour",
        "label_more_detail": "More Details",
        "ph_more_detail": "e.g. Exam prep, School subjects, Interested in tutor's portfolio, etc.",
        "btn_submit_find": "Submit Request",
        
        // Webboard Page
        "wb_title": "💬 Webboard <span>Discussion</span>",
        "wb_sub": "For tutors and students to share experiences, exchange knowledge, and socialize.",
        "wb_filter_all": "📋 All Categories",
        "wb_filter_tips": "💡 Teaching Tips",
        "wb_filter_find_tutor": "🔍 Find Tutor",
        "wb_filter_find_job": "📌 Find Job",
        "wb_filter_qna": "❓ Q&A",
        "ph_search_wb": "Search topics...",
        "btn_search_wb": "🔍 Search",
        "btn_new_post": "✏️ New Post",
        "wb_stat_view": "Views",
        "wb_stat_comment": "Comments",
        
        // Forgot Password Page
        "forgot_back_login": "✆ Back to Login",
        "forgot_title": "Forgot Password",
        "forgot_sub": "Enter your registered email or phone number to receive a reset link.",
        "label_email_reg": "Registered Email",
        "btn_send_link": "Send Reset Link",
        "text_or": "OR",
        "label_phone_reg": "Phone Number (LINE / SMS)",
        "btn_send_otp": "Send OTP via LINE/SMS",
        "forgot_step2_msg": "✅ We have sent the OTP / Reset link. Please check within 15 minutes.",
        "label_otp": "OTP Verification (6 digits)",
        "ph_otp": "XXXXXX",
        "link_resend_otp": "Resend Code (00:59)",
        "btn_verify_otp": "Verify OTP",
        "label_new_pass": "New Password",
        "ph_new_pass": "At least 8 characters",
        "label_confirm_pass": "Confirm New Password",
        "ph_confirm_pass": "Re-enter password",
        "pass_req1": "At least 8 characters long",
        "pass_req2": "Must contain a-z, A-Z, and 0-9",
        "btn_save_pass": "Save New Password",
        "link_back_login": "« Back to Login",
        
        // Admin
        "admin_menu_title": "Management System",
        "admin_menu_dashboard": "Dashboard",
        "admin_menu_tutors": "Manage Tutors",
        "admin_menu_jobs": "Manage Jobs",
        "admin_menu_users": "Manage Users/Students",
        "admin_menu_categories": "Manage Categories",
        "admin_menu_webboard": "Manage Webboard",
        "admin_menu_notif": "LINE Notifications",
        "admin_menu_settings": "System Settings",
        "admin_greet": "Admin",
        "admin_logout": "Logout",
        
        // Buttons
        "btn_register_tutor": "Register as Tutor",
        "btn_check_jobs": "View All Teaching Jobs",
        "btn_req_tutor": "Request a Private Tutor",
        "btn_req_steps": "Process & Guidelines",
        "btn_check_latest_jobs": "Check Latest Jobs",
        "btn_webboard": "Enter Webboard",
        "btn_details": "Details",
        "btn_see_all_jobs": "See All Jobs",
        
        // Index Hero
        "hero1_badge": "📢 Tutor Recruitment Announcement",
        "hero1_title_part1": "Hiring ",
        "hero1_title_span": "\"Tutors & Freelance Teachers\"",
        "hero1_title_part2": " to join our team",
        "hero1_desc": "For knowledgeable individuals committed to academic excellence. Enjoy stable income and flexible teaching schedules.",
        
        "hero2_badge": "⭐ Private Tutor Matching Service",
        "hero2_title_part1": "Find ",
        "hero2_title_span": "\"Professional Tutors\"",
        "hero2_title_part2": " for 1-on-1 sessions",
        "hero2_desc": "Elevate your grades and prepare for national exams with highly qualified instructors from top institutions.",

        "hero3_badge": "🆕 Weekly Jobs & Announcements",
        "hero3_title_part1": "Latest ",
        "hero3_title_span": "\"Math-Science-Language\"",
        "hero3_title_part2": " Jobs",
        "hero3_desc": "Over 100 new teaching positions available across Bangkok, Metropolitan region, and online platforms.",

        // Steps section
        "steps_title_part1": "Steps",
        "steps_title_span": " to Accept Jobs",
        "steps_title_part2": " (For Tutors)",
        "steps_sub": "Follow these 7 simple steps to start teaching with us.",
        
        "step1_title": "Fill Registration Form",
        "step1_desc": "Complete the tutor registration form via the website's registration page.",
        "step2_title": "Find Desired Jobs",
        "step2_desc": "Search for jobs and check the date, time, and location before booking on the Jobs page.",
        "step3_title": "Send Job ID",
        "step3_desc": "Inform us of the Job ID you're interested in via Line@ or our Facebook page.",
        "step4_title": "Wait for Approval",
        "step4_desc": "Wait for the institute to review and approve your request after sending the Job ID.",
        "step5_title": "Pay Deposit",
        "step5_desc": "Pay the job deposit and notify us of the transfer to confirm the job.",
        "step6_title": "Prepare Materials",
        "step6_desc": "Prepare your teaching content and curriculum in advance.",
        "step7_title": "Receive Payment",
        "step7_desc": "Receive payment directly from parents or students after completing the session.",

        // Jobs Section
        "jobs_title_part1": "Find ",
        "jobs_title_span": "Jobs",
        "jobs_title_part2": " for Tutors",
        "jobs_sub": "Select a job category and click details to apply.",
        "tab_math_sci": "Math & Science",
        "tab_lang_soc": "Language & Social",
        "tab_music": "Music",
        "tab_sport": "Sports",
        "th_subject": "Subject",
        "th_location": "Location",
        "th_time": "Time",
        "th_jobid": "Job ID",
        
        // Stats Section
        "stats_title_part1": "Why Choose ",
        "stats_title_span": "MoongRian",
        "stats_title_part2": "?",
        "stat1_label": "Verified Tutors",
        "stat2_label": "Available Jobs",
        "stat3_label": "Completed Courses",
        "stat4_label": "Satisfaction Rate",

        // Footer
        "footer_col1_title": "MoongRian",
        "footer_col1_li1": "🎓 #1 Tutoring Center",
        "footer_col1_li2": "📍 Location: ",
        
        "footer_col2_title": "For Students/Parents",
        "footer_col2_li1": "Request a Tutor",
        "footer_col2_li2": "Popular Courses",
        "footer_col2_li3": "Webboard / Knowledge",

        "footer_col3_title": "For Tutors",
        "footer_col3_li1": "Register as Tutor",
        "footer_col3_li2": "View Teaching Jobs",
        "footer_col3_li3": "Tutor Guidelines",

        "footer_col4_title": "Contact Us",
        "footer_copy": "© 2026 MoongRian. All rights reserved.",
        "chat_label": "Inquire Promos Click"
    }
};

// Initialize language from localStorage or default to 'th'
let currentLang = localStorage.getItem('appLang') || 'th';

function switchLanguage(lang) {
    if (lang !== 'th' && lang !== 'en') return;
    
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    applyTranslations();
    updateSwitcherUI();
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            // Check if element is an input with a placeholder
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder') && !el.textContent) {
                el.setAttribute('placeholder', translations[currentLang][key]);
            } else {
                 el.textContent = translations[currentLang][key];
            }
        }
    });
}

function updateSwitcherUI() {
    const thBtn = document.getElementById('lang-th');
    const enBtn = document.getElementById('lang-en');
    
    if (thBtn && enBtn) {
        if (currentLang === 'th') {
            thBtn.style.fontWeight = 'bold';
            thBtn.style.color = 'var(--primary)';
            enBtn.style.fontWeight = 'normal';
            enBtn.style.color = 'var(--text)';
        } else {
            enBtn.style.fontWeight = 'bold';
            enBtn.style.color = 'var(--primary)';
            thBtn.style.fontWeight = 'normal';
            thBtn.style.color = 'var(--text)';
        }
    }
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateSwitcherUI();
    
    // Add event listeners to switcher buttons if they exist
    const thBtn = document.getElementById('lang-th');
    const enBtn = document.getElementById('lang-en');
    
    if (thBtn) thBtn.addEventListener('click', (e) => { e.preventDefault(); switchLanguage('th'); });
    if (enBtn) enBtn.addEventListener('click', (e) => { e.preventDefault(); switchLanguage('en'); });
});
