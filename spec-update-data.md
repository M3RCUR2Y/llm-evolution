# LLM 数据更新 — 2025-2026 补充

## 需要新增的模型

### xAI (新公司)
需在 companies.json 中新增: { "color": "#1d9bf0", "logo": "xA", "origin": "us" }

1. Grok-1 - xAI - 2024-03 - 314B - 开源 true - text - 旗舰
   "xAI 首个开源大模型，基于 Transformer，训练数据来自 X 平台。"
2. Grok-2 - xAI - 2024-08 - 未公开 - 闭源 false - text,image
   "改进版，推理能力提升，集成 X 平台实时信息。"
3. Grok-3 - xAI - 2025-02 - 未公开 - 闭源 false - text,image,audio - 旗舰
   "xAI 旗舰模型，在多项基准超越 GPT-4o，支持多模态和语音。"

### Microsoft (新公司)
需在 companies.json 中新增: { "color": "#00a4ef", "logo": "Ms", "origin": "us" }

4. Phi-3 - Microsoft - 2024-04 - 14B - 开源 true - text
   "小模型标杆，3.8B/7B/14B 三档，性能超越同尺寸竞品。"
5. Phi-4 - Microsoft - 2024-12 - 14B - 开源 true - text - 旗舰
   "合成数据训练，推理和数学能力大幅提升，小模型新标杆。"
6. Phi-4-reasoning - Microsoft - 2025-04 - 14B - 开源 true - text
   "推理增强版，用更小模型实现接近 o1 级别的推理能力。"

### OpenAI (补充)
7. GPT-4.5 - OpenAI - 2025-02 - 未公开 - 闭源 false - text,image - 旗舰
   "最大非推理模型，世界知识和创意写作能力突出。"
8. o3-mini - OpenAI - 2025-01 - 未公开 - 闭源 false - text
   "轻量推理模型，性价比高，编程和数学推理能力强。"
9. GPT-4o-mini - OpenAI - 2024-07 - 未公开 - 闭源 false - text,image
   "GPT-4o 的轻量版，性能优于 GPT-3.5 Turbo，价格极低。"

### Google (补充)
10. Gemini 2.0 Flash - Google - 2024-12 - 未公开 - 闭源 false - text,image,audio
    "轻量快速版，支持原生工具调用，适合高并发场景。"
11. Gemini 2.5 Flash - Google - 2025-04 - 未公开 - 闭源 false - text,image - 旗舰
    "思考模型轻量版，性价比极高，推理能力接近 Pro。"

### Anthropic (补充)
12. Claude 3.5 Haiku - Anthropic - 2024-10 - 未公开 - 闭源 false - text,image
    "轻量高速模型，编码能力超越 Claude 3 Opus，价格低廉。"
13. Claude 3.7 Sonnet - Anthropic - 2025-02 - 未公开 - 闭源 false - text,image
    "混合推理模型，支持扩展思考，编程能力大幅提升。"

### Amazon (新公司)
需在 companies.json 中新增: { "color": "#ff9900", "logo": "Az", "origin": "us" }

14. Amazon Nova Pro - Amazon - 2024-12 - 未公开 - 闭源 false - text,image,video - 旗舰
    "AWS 自研多模态旗舰，支持文本/图像/视频理解。"
15. Amazon Nova Lite - Amazon - 2024-12 - 未公开 - 闭源 false - text,image,video
    "轻量版，低成本低延迟，适合大规模部署。"

### Cohere (新公司)
需在 companies.json 中新增: { "color": "#39594D", "logo": "Co", "origin": "us" }

16. Command R+ - Cohere - 2024-04 - 104B - 开源 true - text - 旗舰
    "企业级 RAG 优化模型，支持多语言，工具调用能力强。"

### Meta (补充)
17. LLaMA 3.1 - Meta - 2024-07 - 405B - 开源 true - text
    "LLaMA 3 升级版，支持 128K 上下文，8B/70B/405B 三档。"
18. LLaMA 3.2 - Meta - 2024-09 - 90B - 开源 true - text,image
    "新增多模态能力，支持图像理解，含轻量 1B/3B 版本。"
19. LLaMA 3.3 - Meta - 2024-12 - 70B - 开源 true - text
    "70B 性能追平 LLaMA 3.1 405B，效率大幅提升。"

### DeepSeek (补充)
20. DeepSeek-V2.5 - DeepSeek - 2024-09 - 236B - 开源 true - text
    "V2 升级版，融合通用对话和编程能力。"
21. DeepSeek Janus-Pro - DeepSeek - 2025-01 - 7B - 开源 true - text,image
    "多模态视觉理解模型，开源且性能优异。"

### 百川智能 (新公司)
需在 companies.json 中新增: { "color": "#6366f1", "logo": "百", "origin": "cn" }

22. Baichuan 4 - 百川智能 - 2024-10 - 未公开 - 闭源 false - text - 旗舰
    "百川最强模型，中文理解和生成能力领先。"

### 面壁智能 (新公司)
需在 companies.json 中新增: { "color": "#10b981", "logo": "面", "origin": "cn" }

23. MiniCPM-o 2.6 - 面壁智能 - 2025-01 - 8B - 开源 true - text,image,audio,video
    "端侧多模态小模型，支持全模态理解，手机可运行。"

### 智谱AI (补充)
24. GLM-4-Plus - 智谱AI - 2024-10 - 未公开 - 闭源 false - text,image
    "GLM-4 升级版，综合能力对标 GPT-4o。"

### 零一万物 (补充)
25. Yi-Lightning - 零一万物 - 2024-10 - 未公开 - 闭源 false - text
    "速度极快的推理模型，响应速度业界领先。"

### 月之暗面 (补充)
26. Kimi k1.5 - 月之暗面 - 2025-01 - 未公开 - 闭源 false - text
    "推理模型，长思考链推理能力突出。"

### 字节跳动 (补充)
27. 豆包1.5 Pro - 字节跳动 - 2025-01 - 未公开 - 闭源 false - text - 旗舰
    "推理增强版，思考能力大幅提升。"
28. SeedDream - 字节跳动 - 2025-03 - 未公开 - 闭源 false - text,image
    "图像生成模型，视频生成能力突出。"
