# LiteBallNet project page

这是一个可直接部署到 GitHub Pages 的纯静态项目页。当前公开页面以 `liteballnet_icassp2027.tex` 四页论文为主依据；附录分析已注释隐藏，待未来 journal 扩展版再恢复。

## 已纳入网页的论文内容

- 论文标题、作者、单位、通讯作者和资助信息
- 论文摘要与三项主要贡献
- Figure 1 网络结构图及其矢量 PDF
- Figure 2 精度–延迟图及其矢量 PDF
- 完整跨运动主结果表与组件消融表
- 45,644 parameters、1.876 GMAC、RTX 3060 Laptop 86.30 FPS，以及 RK3588 NPU 37.0 ms / 约 30 FPS
- Badminton / Table Tennis / Tennis 的 F1：0.9361 / 0.9859 / 0.9517
- 三段真实跟踪演示、三段 RK3588 NPU 基准部署视频，以及一段跨运动实拍端侧原型视频与对应封面
- Coordinate Attention、hard-negative mask、帧级消融、置信度案例、局部 HN 对比和时序响应图的源码与资产仍然保留，但在 ICASSP 公开版中已注释隐藏

## GitHub 仓库地址（录用后启用）

当前公开版在顶部导航、首屏和 Resources 中显示不可点击的 `Code · after acceptance` 入口。仓库地址已经预设为 private 仓库；论文录用且仓库转为 public 后，解除 `index.html` 中 Code 链接的禁用属性即可。

修改 `script.js` 第一行：

```javascript
const REPOSITORY_URL = "https://github.com/TUSZ-AGDR/LiteBallNet";
```

这一处会同步更新导航栏、论文按钮区和 Resources 区的所有代码入口。

## 发布到 GitHub Pages

1. 将本目录中的全部内容上传到 GitHub 仓库根目录。
2. 打开仓库 `Settings → Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/ (root)`，然后保存。
5. 发布后地址通常为 `https://YOUR-USERNAME.github.io/LiteBallNet/`。

所有资源都使用相对路径。若修改后仍看到旧页面，先确认新的 `index.html`、`styles.css` 和 `script.js` 已上传，再强制刷新浏览器；当前样式缓存版本号为 `v=7`。

## 本地预览

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 文件结构

```text
LiteBallNet-main/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── README.md
├── CONTENT_CHECKLIST.md
└── assets/
    ├── favicon.svg
    ├── figures/       # 论文和附录图：PNG 网页预览 + PDF 原稿
    ├── posters/       # 跟踪输出与 RK3588 部署视频封面
    └── videos/        # H.264 MP4 补充视频；edge/ 存放端侧部署演示
```

## 公开范围

当前页面不提供尚未确认公开时间的论文 PDF，也不公开短版论文之外的 appendix 分析。Code 入口保持可见但不可点击；论文录用并正式公开后，可解除 Code 链接禁用，并把 Paper 按钮和 Resources 中的 Paper 项替换为 arXiv、IEEE Xplore 或正式 PDF 链接。
