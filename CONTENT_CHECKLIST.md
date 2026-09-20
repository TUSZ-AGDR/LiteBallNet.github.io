# LiteBallNet 项目网页内容清单

网页内容以 `liteballnet_icassp2027.tex` 为主依据，`LiteBallNet_appendix.tex` 只用于补充可视化与解释。

## 一、来自四页 ICASSP 论文，已经加入

| 内容 | 网页位置 | 状态 |
|---|---|---|
| 标题、作者、School of Artificial Intelligence、通讯作者 | 首屏 | 已核对 |
| SZTU 资助信息 GDRC202411 | 首屏 | 已加入 |
| 完整摘要 | Abstract | 已按源码更新 |
| 三项贡献 | Abstract | 已转为三张简洁卡片 |
| Figure 1 网络结构 | Method | 已加入 PNG 与矢量 PDF |
| 三帧输入、DS U-Net、CA、HN | Method | 已按正文归纳 |
| 4-pixel evaluation protocol | Method | 已明确 |
| Figure 2 精度–延迟图 | Results | 已加入 PNG 与矢量 PDF |
| 完整跨运动对比表 | Results | 已加入全部方法和指标 |
| 完整 CA/HN 消融表 | Results | 已加入 |
| Badminton / Table Tennis / Tennis F1 | Demos、Results | 0.9361 / 0.9859 / 0.9517 |
| 45,644 parameters、1.876 GMAC | 首屏、Deployment | 已加入 |
| 86.30 FPS、RK3588 16.7 ms | 首屏、Results、Deployment | 已加入 |

## 二、来自附录，已经作为补充材料加入

| 内容 | 网页位置 | 公开作用 |
|---|---|---|
| Tennis / Badminton / Table Tennis 视频 | Demos | 展示真实连续跟踪输出 |
| 三个视频封面 | Demos | 视频加载前显示代表帧 |
| Coordinate Attention internals | Supplementary analysis | 解释方向门控如何重加权特征 |
| Hard-negative construction | Supplementary analysis | 解释训练期结构化干扰掩码 |
| Frame-matched component ablation | Supplementary analysis | 展示 CA 与 HN 的不同作用和残余失败 |
| Confidence-conditioned cases | Supplementary analysis | 说明 peak probability 不能单独代表定位可靠性 |
| Local HN comparison | Supplementary analysis | 展示目标峰与竞争峰的相对排序变化 |
| Temporal response evolution | Supplementary analysis | 展示三帧协议下的响应连续性与不可见帧问题 |

## 三、现阶段仍不公开或仍需补充

| 优先级 | 内容 | 处理建议 |
|---:|---|---|
| 1 | 正式论文 PDF / arXiv / IEEE Xplore | 确认公开时间后启用 Paper 按钮 |
| 1 | 完整代码、权重和 RKNN 模型 | 仓库整理完成后发布，并检查匿名或隐私信息 |
| 2 | 可复现环境与推理命令 | 加入 GitHub README |
| 2 | 数据集与视频许可说明 | 在仓库和项目页明确来源与许可 |
| 2 | RK3588 真实设备演示 | 若公开，明确模型推理与端到端延迟的区别 |
| 3 | BibTeX | 论文公开后增加复制按钮或文本块 |

## 四、发布前核对

- [ ] 论文公开时间已经确认，Paper 链接不会提前泄露投稿材料。
- [ ] GitHub 仓库在无登录浏览器中可访问。
- [ ] 三段视频来源允许网页展示与再分发。
- [ ] 表格数字与最终 `liteballnet_icassp2027.tex` 保持一致。
- [ ] 明确同一网络架构分别训练三个 checkpoint，而不是同一 checkpoint 同时处理三种运动。
- [ ] HN 始终标为 training-only。
- [ ] RK3588 数值只描述模型推理，不冒充完整端到端延迟。
- [ ] 桌面端和手机端均检查图片、视频、表格与折叠内容。
