---
title: 讓手機也能連線 Next.js Nx Monorepo 測試服務
date: '2025-05-08' 
description: 分享如何在 Windows 10 + WSL Ubuntu 環境中，透過 Windows portproxy 設定，讓同一 Wi‑Fi 下的手機直接訪問 Nx monorepo 的 Next.js 開發伺服器。
thumbnailUrl: /images/blog/mobile-accessible-nextjs-nx/banner.webp
tags: ['Next.js', 'Nx', 'WSL']
---

## 前言
### 讓手機也能連線 Next.js Nx Monorepo 測試服務
在 Windows 10 + WSL Ubuntu 的開發環境裡，我們的 Nx monorepo Next.js 專案預設只能在電腦本機瀏覽。但後來在測試行動版畫面時，才發現手機無法直接連到開發伺服器，只能透過電腦確認。為了省去額外的 VPN 或反向代理設定，我決定研究怎麼讓手機在同一 Wi‑Fi 下，也能打開開發站台。
起初，我以為只要在 `project.json` 的 serve 設定加上 `hostname: "0.0.0.0"`，甚至嘗試額外加 `host: "0.0.0.0"`，重啟後卻還是只能本機連線。後來試過學 npm 的命令列 `npm run dev --host 0.0.0.0`，才發現 Nx CLI 根本不支援這參數。
轉折點出現在我跑去 WSL 裡使用 `ip addr show`，赫然發現 WSL 的 IP（如 172.28.162.62）和 Windows 主機的 IP（如 192.168.1.102）並不相同。打開 `http://172.28.162.62:4200` 確實能在電腦上瀏覽，但手機還是連不到。
我在網路上搜尋「WSL2 port forwarding Next.js」，並參考了幾篇 StackOverflow 的解答，才了解到 WSL2 預設有網路隔離，需要在 Windows 端設定 portproxy。以下就是我最終的解法：

## 具體操作步驟

1. **確認 project.json**（若已設定可跳過）

   ```jsonc
   {
     "serve": {
       "options": {
         "hostname": "0.0.0.0",
         "port": 4200,
         "dev": true
       }
     }
   }
   ```

2. **在 WSL 查詢 IP**

   ```bash
   ip addr show      # 取 eth0/eth1 的 inet 位址，如 172.28.162.62
   ```

3. **Windows PowerShell（以系統管理員）執行 portproxy**

   ```powershell
   # 刪除舊有的轉發（若無可跳過）
   netsh interface portproxy delete v4tov4 listenport=4200 listenaddress=0.0.0.0
   netsh interface portproxy delete v4tov4 listenport=4200 listenaddress=192.168.1.102

   # 新增轉發規則，將
   # 192.168.1.102:4200 轉向 WSL 的 172.28.162.62:4200
   netsh interface portproxy add v4tov4 listenport=4200 listenaddress=192.168.1.102 connectport=4200 connectaddress=172.28.162.62
   ```

4. **開放防火牆埠號**

   * 打開「Windows Defender 防火牆 進階安全性」
   * 新增「輸入規則」：

     * 類型：TCP
     * 本機連接埠：4200
     * 動作：允許連線
     * 適用檔案：網域、私人、公用
     * 規則名稱：Next.js Development Server

5. **重啟開發伺服器（WSL）**

   ```bash
   export HOST=0.0.0.0 PORT=4200
   pnpm dev
   ```

完成後，只要手機輸入 `http://192.168.1.102:4200`（Windows 主機 IP），即可直接開啟開發站台。

---

## IP 變更時怎麼辦？

有時候重開機或切換網路後，Windows 主機的 IP 可能會變。遇到新 IP，只要：

1. **查詢新 IP**（在 Windows PowerShell 或命令提示字元）：

   ```powershell
   ipconfig       # 找到 Ethernet 或 Wi-Fi 的 IPv4 位址，例如 192.168.1.110
   ```
2. **更新 portproxy 轉發**：先移除舊設定，再新增新的監聽位址：

   ```powershell
   # 刪掉舊的規則（把 192.168.1.102 換成原本的 IP）
   netsh interface portproxy delete v4tov4 listenport=4200 listenaddress=192.168.1.102

   # 加回新 IP 的轉發規則
   netsh interface portproxy add v4tov4 listenport=4200 listenaddress=192.168.1.110 connectport=4200 connectaddress=172.28.162.62

   # 確認目前所有 portproxy 規則
   netsh interface portproxy show all
   ```
3. **測試手機連線**：用新 IP 重新打開 `http://新IP:4200`，應該就能正常訪問。

## 結論

這套設定其實就是讓 Windows 監聽局域網 4200 埠，並把流量轉給 WSL 的 Next.js 服務，相比 npm 開發可以直接下 --host 就能讓手機連線，在 wsl 環境下又多了段轉發的設定，不過不需要額外搭建代理或改動其他埠號。對開發測試的影響非常小，只帶來一點點網路轉發延遲；而且規則會留存到系統重啟，若要還原只要刪除 portproxy 即可。

這樣一來，同一 Wi‑Fi 下的手機、平板就能直接打開開發版，隨時檢查行動端效果，省時又方便。
