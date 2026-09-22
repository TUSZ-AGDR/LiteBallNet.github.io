# LiteBallNet 项目网页内容清单

网页内容以 `liteballnet_icassp2027.tex` 为主依据。`LiteBallNet_appendix.tex` 中的分析素材仍保留在工程内，但 ICASSP 公开版已注释隐藏。

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
| RTX 3060 Laptop 86.30 FPS、RK3588 NPU 37.0 ms / 约 30 FPS | 首屏、Results、Deployment | 已按重新测试结果更新 |

## 二、演示视频与已隐藏的附录分析

| 内容 | 网页位置 | 公开作用 |
|---|---|---|
| Tennis / Badminton / Table Tennis 视频 | Demos | 展示真实连续跟踪输出 |
| 三个视频封面 | Demos | 视频加载前显示代表帧 |
| Badminton / Table Tennis / Tennis RK3588 端侧视频 | Deployment | 展示 RKNN/NPU 模型推理及画面内吞吐率 |
| 三个 RK3588 视频封面 | Deployment | 端侧视频加载前显示代表帧 |
| Coordinate Attention internals | Supplementary analysis | ICASSP 公开版已注释隐藏；journal 扩展版可恢复 |
| Hard-negative construction | Supplementary analysis | ICASSP 公开版已注释隐藏；journal 扩展版可恢复 |
| Frame-matched component ablation | Supplementary analysis | ICASSP 公开版已注释隐藏；journal 扩展版可恢复 |
| Confidence-conditioned cases | Supplementary analysis | ICASSP 公开版已注释隐藏；journal 扩展版可恢复 |
| Local HN comparison | Supplementary analysis | ICASSP 公开版已注释隐藏；journal 扩展版可恢复 |
| Temporal response evolution | Supplementary analysis | ICASSP 公开版已注释隐藏；journal 扩展版可恢复 |

## 三、现阶段仍不公开或仍需补充

| 优先级 | 内容 | 处理建议 |
|---:|---|---|
| 1 | 正式论文 PDF / arXiv / IEEE Xplore | 确认公开时间后启用 Paper 按钮 |
| 1 | 完整代码、权重和 RKNN 模型 | 录用后发布；当前所有 Code 入口已注释隐藏 |
| 2 | 可复现环境与推理命令 | 加入 GitHub README |
| 2 | 数据集与视频许可说明 | 在仓库和项目页明确来源与许可 |
| 2 | RK3588 端侧测试说明 | 已加入演示；后续公开代码时补充设备、线程和计时配置 |
| 3 | BibTeX | 论文公开后增加复制按钮或文本块 |

## 四、发布前核对

- [ ] 论文公开时间已经确认，Paper 链接不会提前泄露投稿材料。
- [ ] 录用后再将代码仓库转为 public，并恢复网页中的 Code 入口。
- [ ] 三段视频来源允许网页展示与再分发。
- [ ] 表格数字与最终 `liteballnet_icassp2027.tex` 保持一致。
- [ ] 明确同一网络架构分别训练三个 checkpoint，而不是同一 checkpoint 同时处理三种运动。
- [ ] HN 始终标为 training-only。
- [ ] RK3588 数值只描述模型推理，不冒充完整端到端延迟。
- [ ] 桌面端和手机端均检查图片、视频、表格与折叠内容。
