# 🗺️ Roadmap

> 这是 `llm-evolution` 的改进计划，按优先级排列。
> 欢迎认领任何任务并提交 PR！

## 🔴 高优先级

### 数据补充
- [ ] 添加 **xAI / Grok** 系列（Grok-1, Grok-2, Grok-3）
- [ ] 添加 **Microsoft Phi** 系列（Phi-3, Phi-4）
- [ ] 添加 **OpenAI GPT-4.5**（2025-02 发布）
- [ ] 添加 **Amazon Nova** 系列
- [ ] 添加 **Cohere Command R/R+** 系列
- [ ] 添加 **Apple** 端侧模型
- [ ] 添加 **百川智能 Baichuan** 系列
- [ ] 添加 **面壁智能 MiniCPM** 系列
- [ ] 添加 **Anthropic Claude 3.5 Haiku**

### UX 改进
- [ ] **搜索框** — 按模型名称模糊搜索
- [ ] **筛选后统计动态更新** — 当前 Stats Bar 在筛选后仍显示全局数值
- [ ] **URL 状态同步** — 筛选条件写入 URL hash (`#region=cn&company=DeepSeek`)
- [ ] **节点防重叠** — 同月多模型时垂直错开排列
- [ ] **页面 footer** — 添加 GitHub 仓库链接 + "最后更新日期"

## 🟡 中优先级

### 功能增强
- [ ] **表格/列表视图切换** — 除时间线外提供可排序表格
- [ ] **开源/闭源筛选** — 新增筛选维度（需为 models.json 添加 `open_source` 字段）
- [ ] **多模态/纯文本筛选** — 新增筛选维度（需添加 `modalities` 字段）
- [ ] **键盘导航** — ← → 滚时间线，Esc 清除筛选
- [ ] **模型谱系连线** — 显示模型演进关系（GPT-1→2→3→4→4o→o1）

### 数据结构增强
- [ ] 为 `models.json` 添加可选字段：
  - `open_source: boolean` — 是否开源
  - `modalities: string[]` — 模态列表 (text, image, audio, video)
  - `context_window: number` — 上下文窗口大小
  - `architecture: string` — 架构类型 (Dense, MoE)
  - `source_url: string` — 原始公告/论文链接
  - `related_to: string` — 前代模型 id（用于谱系连线）

## 🟢 低优先级

### 工程化
- [ ] **i18n** — 英文版本
- [ ] **深色/浅色模式切换**
- [ ] **移动端纵向布局** — 时间线在手机上改纵向
- [ ] **打印样式**
- [ ] **无障碍支持** — ARIA 标签、键盘 focus
- [ ] **性能优化** — `requestAnimationFrame` 增量渲染
- [ ] **Google Fonts** 国内 fallback

### 内容
- [ ] 为每个模型添加信息来源链接
- [ ] 添加关键基准测试分数（MMLU, HumanEval）
- [ ] 统一描述质量，减少 PR 话术

## 📐 架构注意

- 数据文件 (`data/models.json`, `data/companies.json`) 是唯一的 **数据源**。
- `index.html` 通过 `fetch()` 加载数据，渲染逻辑与数据分离。
- 添加模型只需编辑 JSON 文件，CI 会自动校验字段完整性。
