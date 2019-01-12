# Dream Team

### To setup this 

``` cp .env-example .env // and setup database environment ```

``` npm install ```

``` npm start ```

To Clean Data for ML please run ./autoTrigger.sh

# Task Server Programming

## Server IP 202.139.192.76

## You can access on http://tesatopgun.thitgorn.com

## Day 1

`1. สร้าง API ตามตารางต่อไปนี้ โดยแสดงผล API ทุก request ผ่าน POSTMAN (7 คะแนน)`

| No. | API             | Method | Post Body   | Task                                                    | Points | Status |
| --- | --------------- | ------ | ----------- | ------------------------------------------------------- | ------ | ------ |
| 1   | /listUsers      | GET    | Empty       | แสดง Users ทั้งหมด                                      | 1      | Done   |
| 2   | /showbyID/:id   | GET    | Empty       | แสดงผล User ตาม id                                      | 2      | Done   |
| 3   | /addUser        | POST   | JSON String | เพิ่ม User 1 คน                                         | 1      | Done   |
| 4   | /addMultiUser   | POST   | JSON String | เพิ่ม User กี่คนก็ได้ ซึ่ง id จะต้องรันต่อ กันไปเรื่อยๆ | 2      | Done   |
| 5   | /deleteUser/:id | DELETE | Empty       | ลบ User ตาม id                                          | 1      | Done   |

`2. นำ code ที่ทำเสร็จแล้วขึ้นไปบน GIT บน repo ที่ตั้งเป็นชื่อทีมได้ (1 คะแนน)`

`3. นำ code ที่ทำเสร็จแล้วขึ้นไปรันบน server ของ CAT ตาม account ของทีมได้ (2 คะแนน)`

## Day 2

`1. ทำการสร้าง Database เพื่อบันทึกข้อมูลที่ได้รับมา โดยมีข้อกำหนดดังต่อไปนี้ ( 1 คะแนน )`

`2. ทำการสร้าง REST API ต่างๆตามตารางดังต่อไปนี้ หมายเหตุ Code ต้องอยู่บน CAT Server`

| No. | API                 | Method | Post Body   | Task                                                                           | Points | Status |
| --- | ------------------- | ------ | ----------- | ------------------------------------------------------------------------------ | ------ | ------ |
| 1   | /receiveData        | POST   | JSON Object | รับค่าจาก Hardware ผ่าน Cayenne แล้วนำไปทำการแปลงค่า จากนั้นบันทึก ลง Database | 3      | Done   |
| 2   | /showData           | GET    | Empty       | แสดงผลข้อมูลทั้งหมดที่อยู่ใน Collection: temperature                           | 1      | Done   |
| 3   | /showData           | POST   | JSON String | เพิ่ม Data ซึ่งประกอบด้วย teamID และ temp 1 ชุด                                | 1      | Done   |
| 4   | /editData/:teamID   | PUT    | JSON String | แก้ไข Temp ตาม teamID                                                          | 3      | Done   |
| 5   | /deleteData/:teamID | DELETE | Empty       | ลบ Document ตาม teamID∏                                                        | 1      | Done   |

## Day 3

``` ใน folder materials ```
