# 使用 Node 18 官方映像
FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製 package.json 與 tsconfig.json
COPY package.json tsconfig.json ./

# 安裝依賴
RUN npm install

# 複製程式碼
COPY . .

# 編譯 TypeScript
RUN npm run build

# 運行機器人
CMD ["node", "dist/index.js"]
