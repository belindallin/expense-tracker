# 老爸支出清單
這是一個紀錄支出明細的應用程式，此網站讓使用者在頁面上做新增、刪除、更新...等動作，同時可以透過篩選類別的方式在網頁上查看資料。

## Environment 環境
- Node.js
- Express
- Express-handlebars
- Mongoose
- Body-paerser
- Method-override

## Features 產品功能
- 列出所有支出清單 (可依喜好類別瀏覽頁面)
- 新增支出資訊
- 刪除支出資訊
- 更新支出資訊

## Install 安裝與執行步驟
### 以下指令請在終端機操作
1. Clone此專案至本機
```
git clone https://github.com/belindallin/expense-tracker.git
```
2. 進入存放專案的資料夾
```
cd expense-tracker
```
3. 安裝npm套件
```
npm install
```
4. 安裝nodemon
```
npm i -g nodemon
```
5. 開啟mongodb，將資料下載本機mongpdb
```
npm run seed
```
6. 啟動伺服器，執行app.js
```
npm run dev
```
7. 此時終端機出現以下字樣表示伺服器與資料庫已啟動並成功連結
```
The Express Tracker Web is running on http://localhost:3000
mongodb connected

```
8. 在瀏覽器輸入http://localhost:3000 即可開啟專案