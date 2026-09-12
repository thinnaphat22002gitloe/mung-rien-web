/**
 * ระบบสลับภาษา TH | EN แบบ Custom Native Dictionary
 * กำหนดคำแปลภาษาไทยและภาษาอังกฤษแยกกันโดยตรงในระบบ (ไม่พึ่งพาเครื่องมือภายนอก)
 */

(function() {
  'use strict';

  // พจนานุกรมแปลข้อความ (Thai <-> English)
  var TEXT_DICT = {
    // Top bar & Header & Brand
    'เรียนรู้ เข้าใจ พัฒนาไปด้วยกัน': 'Learn, Understand, Grow Together',
    'ศูนย์บริหารจัดการสารสนเทศ (Admin Console)': 'Management Information Console (Admin)',
    'บัญชี': 'Account',
    'โปรไฟล์ของฉัน': 'My Profile',
    'หาติวเตอร์': 'Find Tutor',
    'สมัครเป็นติวเตอร์': 'Become a Tutor',
    'ระบบผู้ดูแล': 'Admin System',
    'ออกจากระบบ': 'Log Out',
    'เข้าสู่ระบบ': 'Log In',
    'สมัครสมาชิก (เริ่มเป็นนักเรียน)': 'Sign Up (Student)',
    'ผู้ดูแล:': 'Admin:',
    'แจ้งเตือน': 'Notifications',
    '🌐 ดูหน้าเว็บไซต์': '🌐 View Public Site',

    // Main Navbar
    'หน้าแรก': 'Home',
    'ประกาศงานสอน': 'Teaching Jobs',
    'สำหรับนักเรียน (หาติวเตอร์)': 'For Students (Find Tutor)',
    'ลงทะเบียนติวเตอร์': 'Tutor Registration',
    'พื้นที่วิชาการ (Webboard)': 'Academic Webboard',
    'ติดต่อเรา': 'Contact Us',
    'ติดต่อเรา (Contact Admin)': 'Contact Admin',
    'ศูนย์บริหาร (ADMIN)': 'Admin Console',
    'ข้อมูลโปรไฟล์': 'My Profile',

    // Contact Us & LINE QR Page
    'ติดต่อเจ้าหน้าที่ฝ่ายประสานงาน (Contact Admin)': 'Contact Academic Coordinators (Admin)',
    'ศูนย์บริการและประสานงานวิชาการ (Contact & Support)': 'Academic Coordination & Support Center',
    'สแกน QR Code เพื่อเริ่มแชทกับเจ้าหน้าที่ฝ่ายวิชาการได้ทันที': 'Scan QR code to chat with our academic coordinators directly.',
    '💬 เปิดแชท LINE ทันที (คลิกที่นี่)': '💬 Open LINE Chat Now (Click Here)',
    'เบอร์โทรติดต่อ': 'Phone Number',
    'อีเมลฝ่ายประสานงาน': 'Coordinator Email',
    'ฝากข้อความถึงแอดมิน (Message Admin)': 'Leave a Message to Admin',
    'กรอกข้อมูลด้านล่าง เจ้าหน้าที่จะติดต่อกลับผ่านเบอร์โทรหรือ LINE ที่ท่านระบุ': 'Fill in the form below, our staff will contact you via phone or LINE.',
    'ชื่อผู้ติดต่อ *': 'Your Name *',
    'เบอร์โทรศัพท์ หรือ LINE ID สำหรับติดต่อกลับ *': 'Phone Number or LINE ID *',
    'ข้อความที่ต้องการสอบถาม *': 'Your Message / Inquiry *',
    '🚀 ส่งข้อความถึงเจ้าหน้าที่ (Send Message)': '🚀 Send Message to Admin',
    '⚡ ช่องทางหลัก สะดวกและรวดเร็วที่สุด': '⚡ Primary Channel: Fastest & Most Convenient',

    // Hero & Home Slide 1 (Students)
    'แจ้งความประสงค์ขอรับติวเตอร์': 'Request a Tutor',
    'ขั้นตอนและวิธีการจัดหา': 'How It Works',
    'สำหรับนักเรียนและผู้ปกครอง': 'For Students & Parents',
    'ส่งคำขอระบุวิชา ระดับชั้น วันเวลา และสถานที่ที่สะดวก': 'Submit your request specifying subject, grade level, schedule and preferred location.',

    // Hero & Home Slide 2 (Tutors)
    'ลงทะเบียนสมัครเป็นติวเตอร์': 'Register as a Tutor',
    'ตรวจสอบรายการประกาศงานสอน': 'Browse Teaching Jobs',
    'สำหรับติวเตอร์ผู้สอน': 'For Tutors & Teachers',
    'เปิดรับสมัครติวเตอร์คุณภาพ ร่วมงานสอนทั้งรูปแบบ Online และ On-site ทั่วประเทศ': 'Welcoming qualified tutors for both online and on-site teaching assignments nationwide.',

    // Home Process Section
    'ขั้นตอนการดำเนินงาน': 'Operational Process',
    'กระบวนการจัดสรรติวเตอร์อย่างเป็นระบบ': 'Systematic Tutor Allocation Process',
    'กำกับดูแลและคัดกรองโดยทีมงานวิชาการ (Manual Matching) ปลอดภัยและได้มาตรฐาน': 'Supervised and screened by academic coordinators (Manual Matching) for quality & safety',
    '1. แจ้งความประสงค์และเป้าหมาย': '1. Submit Learning Request',
    'กรอกข้อมูลวิชาที่ต้องการเรียน ระดับชั้น วัน-เวลา สถานที่ หรือรูปแบบออนไลน์ พร้อมงบประมาณที่กำหนด': 'Specify desired subject, grade, schedule, mode (online/on-site), and allocated budget.',
    '2. คัดกรองและจับคู่ติวเตอร์': '2. Screening & Matching',
    'เจ้าหน้าที่วิชาการตรวจสอบประวัติ วุฒิการศึกษา และความเชี่ยวชาญของติวเตอร์ให้ตรงกับผู้เรียน': 'Academic coordinators verify credentials, education, and subject expertise.',
    '3. ยืนยันข้อมูลและเริ่มเรียน': '3. Confirm & Start Learning',
    'ส่งมอบประวัติติวเตอร์ให้พิจารณา นัดหมายวันเวลา และเริ่มการเรียนการสอนอย่างมั่นใจ': 'Review tutor profiles, coordinate class schedule, and begin lessons with confidence.',

    // Home Sections & Cards
    'งานสอนล่าสุดที่เปิดรับติวเตอร์': 'Latest Available Teaching Jobs',
    'งานสอนเปิดรับสมัคร': 'Open Teaching Jobs',
    'ดูประกาศงานทั้งหมด': 'View All Jobs',
    'ติวเตอร์แนะนำ': 'Featured Tutors',
    'ดูติวเตอร์ทั้งหมด': 'View All Tutors',
    'พื้นที่แบ่งปันความรู้และบทความวิชาการ': 'Academic Knowledge & Articles',
    'ดูหัวข้อทั้งหมด': 'View All Topics',
    'สอบถามแอดมิน คลิก': 'Contact Admin',
    'ส่งข้อความถึงแอดมิน': 'Message Admin',
    'ส่งข้อความ': 'Send Message',

    // Student Request Page (/request/)
    'แบบฟอร์มคำขอรับการจัดสรรติวเตอร์': 'Tutor Request Application Form',
    'แจ้งความประสงค์ขอรับการจัดสรรติวเตอร์': 'Request for Tutor Allocation',
    'กรุณากรอกข้อมูลและเป้าหมายการเรียนด้านล่าง เจ้าหน้าที่ฝ่ายประสานงานวิชาการจะคัดกรองติวเตอร์ที่มีคุณสมบัติตรงตามความต้องการ และติดต่อกลับเพื่อส่งมอบข้อมูลประวัติภายใน 24 ชั่วโมง': 'Please fill out your study goals below. Academic coordinators will screen tutors matching your needs and contact you within 24 hours.',
    'ไม่มีค่าใช้จ่ายในการยื่นคำขอ': 'No Upfront Request Fee',
    'ผู้เรียนและผู้ปกครองสามารถพิจารณาดูประวัติติวเตอร์ก่อนตัดสินใจเรียน': 'Students and parents can review tutor qualifications and credentials before confirmation.',
    'ประสานงานรวดเร็วผ่าน LINE': 'Fast Coordination via LINE',
    'เจ้าหน้าที่จะติดต่อกลับผ่านเบอร์โทรหรือ LINE ที่ท่านระบุ': 'Our staff will contact you via your phone or LINE provided.',
    'ข้อมูลหลักสูตรและวิชาที่ประสงค์เรียน': 'Course & Desired Subject Information',
    'เงื่อนไขเวลา งบประมาณ และสเปกติวเตอร์': 'Schedule, Budget & Tutor Preferences',
    'ข้อมูลการติดต่อสำหรับประสานงาน': 'Contact Information for Coordination',
    'วิชาที่ต้องการเรียน': 'Subject to Study',
    'ระดับชั้นของผู้เรียน': 'Student Grade Level',
    'รูปแบบ / สถานที่เรียนที่ต้องการ': 'Study Mode & Location',
    'พื้นที่ / ซอย / ใกล้ BTS หรือ MRT (กรณีเรียนนอกสถานที่)': 'Area / BTS / MRT (For On-site lessons)',
    'วันและช่วงเวลาที่สะดวกเรียน': 'Preferred Days & Times',
    'งบประมาณค่าสอนที่ตั้งไว้ (บาท/ชั่วโมง)': 'Target Budget (THB / Hour)',
    'เพศของติวเตอร์ที่ต้องการ': 'Preferred Tutor Gender',
    'เป้าหมายการเรียน หรือสไตล์ติวเตอร์ที่อยากได้': 'Learning Goals & Preferred Tutor Style',
    'ชื่อผู้เรียน หรือชื่อผู้ปกครอง': 'Student or Parent Name',
    'สถานะของผู้ติดต่อ': 'Contact Person Status',
    'เบอร์โทรศัพท์ติดต่อ': 'Contact Phone Number',
    'LINE ID (สำหรับส่งโปรไฟล์ติวเตอร์)': 'LINE ID (For Profile Delivery)',
    '🚀 ยืนยันการแจ้งความประสงค์ขอรับติวเตอร์': '🚀 Submit Tutor Request',
    '🔒 ข้อมูลของท่านจะถูกเก็บรักษาเป็นความลับตามนโยบายความเป็นส่วนตัว เพื่อใช้เฉพาะการจัดสรรติวเตอร์เท่านั้น': '🔒 Your information is kept strictly confidential under privacy policy, used solely for tutor allocation.',

    // Select Dropdowns
    '-- เลือกระดับชั้นของผู้เรียน --': '-- Select Student Grade Level --',
    '-- เลือกวิชา --': '-- Select Subject --',
    'อนุบาล (เตรียมความพร้อม / ปูพื้นฐาน)': 'Kindergarten (Prep / Foundations)',
    'ประถมศึกษา (ป.1 - ป.6)': 'Primary School (Grades 1 - 6)',
    'มัธยมศึกษาตอนต้น (ม.1 - ม.3)': 'Junior High (Grades 7 - 9)',
    'มัธยมศึกษาตอนปลาย (ม.4 - ม.6)': 'Senior High (Grades 10 - 12)',
    'มหาวิทยาลัย / ปริญญาตรี': 'University / Undergraduate',
    'บุคคลทั่วไป / วัยทำงาน': 'General Public / Working Adults',
    'ไม่จำกัดเพศ (ติวเตอร์ชายหรือหญิงก็ได้)': 'No Preference (Male or Female)',
    'ติวเตอร์ชาย': 'Male Tutor',
    'ติวเตอร์หญิง': 'Female Tutor',
    'ผู้ปกครอง (ติดต่อแทนบุตรหลาน)': 'Parent (Applying for Child)',
    'นักเรียน / ผู้เรียนเอง': 'Student / Learner',
    'อื่นๆ (ญาติ / ผู้ดูแล)': 'Other (Guardian / Representative)',

    // Hints
    'เลือกวิชาหลักที่ต้องการติว (สามารถระบุวิชาเพิ่มเติมในช่องเป้าหมายการเรียนได้)': 'Select the primary subject (additional subjects can be specified in learning goals).',
    'เลือกระดับชั้นเพื่อจัดสรรติวเตอร์ที่มีประสบการณ์ตรงสาย': 'Select grade level to match tutors with specialized teaching experience.',
    'ระบุว่าต้องการเรียนออนไลน์ หรือเรียนตัวต่อตัวนอกสถานที่ (On-site)': 'Specify whether you prefer Online lessons or in-person On-site tutoring.',
    'ระบุย่านคร่าวๆ เช่น สยามสแควร์, ใกล้ BTS อารีย์, เซ็นทรัลลาดพร้าว (ถ้าเรียนออนไลน์ พิมพ์ \'ออนไลน์\')': 'Specify general area e.g. Siam, near BTS Ari, Central Ladprao (or type \'Online\').',
    'ระบุวันและช่วงเวลา เช่น เสาร์-อาทิตย์ 10:00-12:00 น. หรือ วันธรรมดาหลัง 17:00 น.': 'Specify preferred days & times, e.g. Sat-Sun 10:00-12:00 or weekdays after 17:00.',
    'ระบุงบประมาณที่สะดวก เช่น 250 - 350 บาท/ชม. หรือ \'ตามมาตรฐานติวเตอร์\'': 'Specify budget range e.g. 250 - 350 THB/hr or \'Tutor standard rate\'.',
    'เลือกเพศติวเตอร์ที่ท่านสะดวกใจในการเรียนการสอน': 'Select preferred tutor gender for your convenience.',
    'เช่น เน้นปูพื้นฐานใหม่, ติวสอบเข้า ม.4 เตรียมอุดม, อยากได้ติวเตอร์ใจดี สอนเข้าใจง่าย เน้นพาทำโจทย์เยอะๆ': 'e.g. Focus on foundation building, exam prep for Triam Udom, looking for patient tutor with clear explanations and lots of exercises.',
    'ระบุชื่อเล่นหรือชื่อ-นามสกุล เช่น น้องน้ำฟ้า หรือ คุณแม่รัตนา': 'Provide nickname or full name e.g. Student Namfah or Parent Ratana.',
    'เลือกสถานะของผู้กรอกข้อมูล เพื่อให้เจ้าหน้าที่ประสานงานได้เหมาะสม': 'Select applicant relationship for appropriate communication.',
    'เบอร์โทรศัพท์ที่สะดวกรับสาย เพื่อให้เจ้าหน้าที่โทรยืนยันการจัดหาติวเตอร์': 'Phone number reachable for coordinator confirmation call.',
    'สำคัญมาก: เพื่อให้เจ้าหน้าที่ส่งภาพและประวัติติวเตอร์ให้ท่านเลือกดูทาง LINE': 'Important: Used by staff to send tutor profiles and credentials via LINE.',

    // Footer
    'สำหรับนักเรียน/ผู้ปกครอง': 'For Students / Parents',
    'ขอหาติวเตอร์สอนพิเศษ': 'Request a Private Tutor',
    'ดูประกาศงานสอน': 'Browse Teaching Jobs',
    'Webboard / ความรู้': 'Webboard / Knowledge',
    'สำหรับติวเตอร์': 'For Tutors',
    'สมัครเป็นติวเตอร์': 'Apply as a Tutor',
    'ดูรายการงานสอน': 'View Job Listings',
    'ติดต่อเรา': 'Contact Us',
    'ตั้งค่าช่องทางติดต่อได้ที่แผงแอดมิน': 'Configure contact info in admin panel',

    // Admin Sidebar & Navigation
    'ระบบสารสนเทศ': 'Information System',
    'ภาพรวมและรายงาน': 'Overview & Reports',
    'แดชบอร์ดสรุปผล': 'Dashboard Overview',
    'รายงานวิเคราะห์รายได้': 'Revenue Analysis',
    'การจัดสรรและธุรกรรม': 'Allocations & Transactions',
    'คำขอจัดสรรติวเตอร์': 'Tutor Requests',
    'คำขอรับการจัดสรรติวเตอร์': 'Tutor Requests',
    'ทะเบียนงานและสถานะ': 'Job Registry & Status',
    'บันทึกธุรกรรม': 'Transaction Records',
    'ตรวจสอบสลิปชำระเงิน': 'Payment Slips',
    'บุคลากรทางการศึกษา': 'Academic Personnel',
    'ทะเบียนประวัติติวเตอร์': 'Tutor Directory',
    'ประกาศงานสอนที่เปิดรับ': 'Open Teaching Positions',
    'การสื่อสารและสมาชิก': 'Communication & Members',
    'ทะเบียนบัญชีผู้ใช้': 'User Accounts',
    'ข้อความสอบถาม': 'Inquiries',
    'ระบบแจ้งเตือน LINE': 'LINE Notifications',
    'เนื้อหาและข้อมูลระบบ': 'Content & System Data',
    'ข้อความหน้าแรก & ข่าวสาร': 'Homepage & News Texts',
    'จัดการข่าวสาร/บทความทั้งหมด': 'Manage All News & Articles',
    'จัดการหมวดหมู่วิชา': 'Manage Subject Categories',
    'การจัดการระบบ': 'System Management',
    'ตั้งค่าระบบสารสนเทศ': 'System Settings',
    '📥 ส่งออก Excel ทั้งหมด': '📥 Export All to Excel',
    'ศูนย์บริหารจัดการสารสนเทศ (Admin Console)': 'Admin Information Console',
    'ผู้ดูแล:': 'Admin:',
    'แจ้งเตือน': 'Notifications',
    '🌐 ดูหน้าเว็บไซต์': '🌐 View Public Site',

    // Admin Common Table & Action Terms
    'รหัสงาน': 'Job ID',
    'วันที่': 'Date',
    'วันที่สร้าง': 'Date Created',
    'วันที่สมัคร': 'Registration Date',
    'ชื่อ-นามสกุล': 'Full Name',
    'ชื่อเล่น': 'Nickname',
    'เบอร์โทรศัพท์': 'Phone Number',
    'เบอร์โทร': 'Phone',
    'วิชา': 'Subject',
    'ระดับชั้น': 'Grade Level',
    'สถานที่': 'Location',
    'ค่าสอน': 'Rate',
    'สถานะ': 'Status',
    'การกระทำ': 'Actions',
    'จัดการ': 'Manage',
    'ดูรายละเอียด': 'View Details',
    'แก้ไข': 'Edit',
    'ลบ': 'Delete',
    'บันทึก': 'Save',
    'บันทึกข้อมูล': 'Save Changes',
    'บันทึกการตั้งค่า': 'Save Settings',
    'ยกเลิก': 'Cancel',
    'ย้อนกลับ': 'Back',
    'ค้นหา': 'Search',
    'กรองข้อมูล': 'Filter',
    'ทั้งหมด': 'All',
    'รอตรวจสอบ': 'Pending',
    'อนุมัติแล้ว': 'Approved',
    'ระงับการใช้งาน': 'Suspended',
    'สำเร็จ': 'Completed',
    'จับคู่สำเร็จ': 'Matched',
    'ยกเลิกแล้ว': 'Cancelled',
    'กำลังดำเนินการ': 'In Progress',
    'เปิดรับ': 'Open',
    'ปิดรับ': 'Closed',
    'เปิดใช้งาน': 'Active',
    'ปิดใช้งาน': 'Inactive',
    'ยอดรวม': 'Total',
    'จำนวนรายการ': 'Total Items',
    'คำขอใหม่': 'New Requests',
    'งานสอนทั้งหมด': 'All Teaching Jobs',
    'ติวเตอร์ในระบบ': 'Total Tutors',
    'รายได้รวม': 'Total Revenue',
    'เพิ่มข้อมูล': 'Add New',
    '+ เขียนข่าวใหม่': '+ Write New Article',
    '✏️ แก้ไขชื่อข่าว/เนื้อหา': '✏️ Edit Title/Content',
    'ลบข่าว': 'Delete Article',
    'ยังไม่มีรายการข้อมูล': 'No data available',
    'ส่งออก': 'Export',
    'นำเข้า': 'Import',

    // Login & Authentication System
    'เข้าสู่ระบบ': 'Log In',
    'สำหรับติวเตอร์และผู้ดูแลระบบ': 'For Tutors, Students & Administrators',
    'ชื่อผู้ใช้ (Username)': 'Username',
    'ชื่อผู้ใช้ อีเมล หรือเบอร์โทรศัพท์': 'Username, Email, or Phone Number',
    'ชื่อผู้ใช้ / อีเมล / เบอร์โทร': 'Username / Email / Phone',
    'รหัสผ่าน (Password)': 'Password',
    'รหัสผ่าน': 'Password',
    'จดจำการเข้าสู่ระบบ': 'Remember Me',
    'จดจำฉันในระบบ': 'Remember me on this device',
    'ลืมรหัสผ่าน?': 'Forgot Password?',
    'เข้าสู่ระบบ (ติวเตอร์/แอดมิน)': 'Log In (Tutor / Admin)',
    'ข้อมูลโปรไฟล์ติวเตอร์': 'Tutor Profile',
    'สำหรับติวเตอร์ผู้สอน: ยังไม่มีบัญชี?': "For Tutors: Don't have an account?",
    'สมัครเป็นติวเตอร์ที่นี่': 'Register as a Tutor here',
    'สำหรับนักเรียนและผู้ปกครอง:': 'For Students & Parents:',
    'ไม่ต้องสมัครสมาชิกหรือเข้าสู่ระบบ สามารถแจ้งข้อมูลเพื่อรับการคัดกรองติวเตอร์ได้ทันที': 'No account or login required. Submit your request for tutor screening directly.',
    'สมัครติวเตอร์ใหม่': 'Register as Tutor',
    'สมัครเป็นติวเตอร์': 'Become a Tutor',
    'กำลังตรวจสอบข้อมูล...': 'Verifying...',
    'กำลังเข้าสู่ระบบ...': 'Logging in...',
    'ส่องรหัสผ่าน': 'Show Password',
    'ซ่อนรหัสผ่าน': 'Hide Password',
    '⚠️ Caps Lock เปิดอยู่ — โปรดระวังตัวพิมพ์ใหญ่-เล็ก': '⚠️ Caps Lock is ON — Check uppercase/lowercase letters',
    'ยังไม่มีบัญชีใช่หรือไม่?': "Don't have an account?",
    'หรือ': 'or',
    'กลับสู่หน้าหลัก': 'Back to Home',
    'กรุณากรอกชื่อผู้ใช้ อีเมล หรือเบอร์โทรศัพท์': 'Please enter your username, email, or phone number',
    'กรุณากรอกรหัสผ่าน': 'Please enter your password',
    'ไม่พบบัญชีผู้ใช้ที่ตรงกับชื่อผู้ใช้ อีเมล หรือเบอร์โทรศัพท์นี้ กรุณาตรวจสอบอีกครั้ง': 'No account found matching this username, email, or phone. Please check again.',
    'บัญชีผู้ใช้นี้ถูกระงับหรือปิดการใช้งาน กรุณาติดต่อผู้ดูแลระบบเพื่อขอความช่วยเหลือ': 'This account is inactive or suspended. Please contact administrator.',
    'รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบตัวพิมพ์เล็ก-ใหญ่ (Caps Lock) และลองใหม่อีกครั้ง': 'Incorrect password. Please check Caps Lock and try again.'
  };

  // พจนานุกรมแปล Placeholder ช่องพิมพ์
  var PLACEHOLDER_DICT = {
    'ตัวอย่าง: น้องน้ำฟ้า (ม.3) หรือ คุณแม่รัตนา': 'e.g. Student Namfah (Gr.9) or Parent Ratana',
    'ตัวอย่าง: 081-234-5678': 'e.g. 081-234-5678',
    'ตัวอย่าง: namfah_line หรือเบอร์โทรที่ผูกไลน์': 'e.g. namfah_line or phone linked to LINE',
    'ตัวอย่าง: เรียนออนไลน์ผ่าน Zoom, ติวที่บ้าน, สยามสแควร์': 'e.g. Online via Zoom, at home, Siam Square',
    'ตัวอย่าง: ใกล้ BTS อารีย์, ถนนสุขุมวิท 101, คอนโดลุมพินี (ถ้าออนไลน์ พิมพ์ว่า \'ออนไลน์\')': 'e.g. Near BTS Ari, Sukhumvit 101, Lumpini Condo (or \'Online\')',
    'ตัวอย่าง: ทุกวันเสาร์ 10:00 - 12:00 น. หรือ วันธรรมดาหลัง 17:00 น. (สัปดาห์ละ 1-2 ครั้ง)': 'e.g. Every Saturday 10:00 - 12:00 or weekdays after 17:00 (1-2 sessions/week)',
    'ตัวอย่าง: 250 - 350 บาท/ชั่วโมง หรือ ตามเรทมาตรฐานติวเตอร์': 'e.g. 250 - 350 THB/hr or standard tutor rate',
    'ตัวอย่าง: ต้องการปูพื้นฐานวิชาคณิตศาสตร์และฟิสิกส์ใหม่ตั้งแต่ต้น เพื่อเตรียมสอบเข้า ม.4 โรงเรียนดัง, อยากได้ติวเตอร์ใจดี มีเทคนิคจำเป็นภาพ ไม่ดุและพาทำโจทย์เยอะๆ': 'e.g. Need foundation in Math and Physics for high school entrance exams, looking for patient and encouraging tutor with visual memory techniques.',
    'ข้อความที่ต้องการสอบถาม *': 'Message to admin *',
    'เช่น admin, tutor@email.com หรือ 0812345678': 'e.g. admin, tutor@email.com, or 0812345678',
    '••••••••': '••••••••'
  };

  // สร้างพจนานุกรมย้อนกลับ (English -> Thai)
  var REVERSE_TEXT_DICT = {};
  for (var thKey in TEXT_DICT) {
    if (TEXT_DICT.hasOwnProperty(thKey)) {
      REVERSE_TEXT_DICT[TEXT_DICT[thKey]] = thKey;
    }
  }

  var REVERSE_PLACEHOLDER_DICT = {};
  for (var phKey in PLACEHOLDER_DICT) {
    if (PLACEHOLDER_DICT.hasOwnProperty(phKey)) {
      REVERSE_PLACEHOLDER_DICT[PLACEHOLDER_DICT[phKey]] = phKey;
    }
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/;";
  }

  // อัปเดตสถานะปุ่มใน UI
  function updateButtons(lang) {
    var btns = document.querySelectorAll('.lang-btn');
    btns.forEach(function(btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    document.documentElement.lang = lang;
  }

  // แปลข้อความใน Text Node หรือ Element
  function translateDOM(targetLang) {
    var dict = (targetLang === 'en') ? TEXT_DICT : REVERSE_TEXT_DICT;
    var phDict = (targetLang === 'en') ? PLACEHOLDER_DICT : REVERSE_PLACEHOLDER_DICT;

    // 1. แปล Placeholder ใน Input และ Textarea
    var inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(function(el) {
      var currentPh = el.getAttribute('placeholder');
      if (currentPh && phDict[currentPh]) {
        el.setAttribute('placeholder', phDict[currentPh]);
      }
    });

    // 2. แปล Option ใน Select Dropdown
    var options = document.querySelectorAll('select option');
    options.forEach(function(opt) {
      var txt = opt.textContent.trim();
      if (dict[txt]) {
        opt.textContent = dict[txt];
      }
    });

    // 3. วนลูปแปลข้อความในองค์ประกอบหลักของหน้าเว็บ
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) {
            return NodeFilter.FILTER_REJECT;
          }
          var parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          var tag = parent.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'noscript' || tag === 'code') {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest('.lang-switch')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      },
      false
    );

    var textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach(function(node) {
      var raw = node.nodeValue;
      var trimmed = raw.trim();

      if (dict[trimmed]) {
        // คงช่องว่างด้านหน้า/ด้านหลังไว้
        var leadingSpace = raw.match(/^\s*/)[0];
        var trailingSpace = raw.match(/\s*$/)[0];
        node.nodeValue = leadingSpace + dict[trimmed] + trailingSpace;
      }
    });
  }

  // ฟังก์ชันหลักสำหรับสลับภาษา
  window.switchLanguage = function(targetLang) {
    var currentLang = localStorage.getItem('site_lang') || 'th';
    if (currentLang === targetLang) return;

    localStorage.setItem('site_lang', targetLang);
    setCookie('site_lang', targetLang, 30);
    setCookie('django_language', targetLang, 30);

    updateButtons(targetLang);
    translateDOM(targetLang);
  };

  // ทำงานเมื่อโหลดหน้าเว็บ
  document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('site_lang') || getCookie('site_lang') || 'th';
    updateButtons(savedLang);

    if (savedLang === 'en') {
      translateDOM('en');
    }
  });

})();
