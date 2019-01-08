# Task Server Programming

## Day 1

```1. สร้าง API ตามตารางต่อไปนี้ โดยแสดงผล API ทุก request ผ่าน POSTMAN (7 คะแนน)```

| No.  | API | Method | Post Body | Task | Points |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | /listUsers | GET | Empty | แสดง Users ทั้งหมด | 1 | 
| 2 | /showbyID/:id | GET | Empty | แสดงผล User ตาม id | 2 | 
| 3 | /addUser | POST | JSON String | เพิ่ม User 1 คน | 1 | 
| 4 | /addMultiUser | POST | JSON String | เพิ่ม User กี่คนก็ได้ ซึ่ง id จะต้องรันต่อ กันไปเรื่อยๆ | 2 | 
| 5 | /deleteUser/:id | DELETE | Empty | ลบ User ตาม id | 1 | 

```2. นำ code ที่ทำเสร็จแล้วขึ้นไปบน GIT บน repo ที่ตั้งเป็นชื่อทีมได้ (1 คะแนน)```

```3. นำ code ที่ทำเสร็จแล้วขึ้นไปรันบน server ของ CAT ตาม account ของทีมได้ (2 คะแนน)```