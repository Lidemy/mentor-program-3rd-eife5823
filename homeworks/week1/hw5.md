## 請解釋後端與前端的差異。

1. 一個網頁，可以分成前端及後端。前端簡單來說就是使用者可以看到的東西都是前端，包括網頁的內容、選單列、圖片等等都是前端範疇。而後端就是網頁的後台，它會根據前端的要求來提供資料，而這些資料都被存在一台機器叫伺服器中，當然你在前端輸入的資料傳送後也會被保存在後端的伺服器裡面。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器會向 google 發出一個要搜尋 Javascript 的 request。
2. Google 的後端伺服器收到了我的 request，接著從其資料庫撈出相關的搜尋結果。
3. 將搜尋結果傳回前端，使我能看到搜尋結果。

## 請列舉出 5 個 command line 指令並且說明功用
`cd` 切換資料夾
`ls` 列出目前資料夾所有檔案
`mkdir` 創建新資料夾
`touch` 新增檔案或修改檔案開啟時間
`rm` 刪除檔案