const sourceText = document.querySelector("#sourceText");
const examDate = document.querySelector("#examDate");
const studyMinutes = document.querySelector("#studyMinutes");
const analyzeBtn = document.querySelector("#analyzeBtn");
const sampleBtn = document.querySelector("#sampleBtn");
const shuffleQuiz = document.querySelector("#shuffleQuiz");
const subjectFilter = document.querySelector("#subjectFilter");
const termSearch = document.querySelector("#termSearch");
const textbookFilter = document.querySelector("#textbookFilter");
const chapterFilter = document.querySelector("#chapterFilter");
const domesticFilter = document.querySelector("#domesticFilter");
const courseFilter = document.querySelector("#courseFilter");
const proofSubjectFilter = document.querySelector("#proofSubjectFilter");
const proofChapterFilter = document.querySelector("#proofChapterFilter");
const examSubjectFilter = document.querySelector("#examSubjectFilter");
const examChapterFilter = document.querySelector("#examChapterFilter");
const examTypeFilter = document.querySelector("#examTypeFilter");
const functionInput = document.querySelector("#functionInput");
const xMinInput = document.querySelector("#xMinInput");
const xMaxInput = document.querySelector("#xMaxInput");
const tangentInput = document.querySelector("#tangentInput");
const integralInput = document.querySelector("#integralInput");
const showDerivative = document.querySelector("#showDerivative");
const showTangent = document.querySelector("#showTangent");
const showIntegral = document.querySelector("#showIntegral");
const showCritical = document.querySelector("#showCritical");
const plotBtn = document.querySelector("#plotBtn");
const plotExampleBtn = document.querySelector("#plotExampleBtn");

const wordCount = document.querySelector("#wordCount");
const riskBadge = document.querySelector("#riskBadge");
const examBadge = document.querySelector("#examBadge");
const readinessScore = document.querySelector("#readinessScore");
const topicCloud = document.querySelector("#topicCloud");
const summaryList = document.querySelector("#summaryList");
const weakList = document.querySelector("#weakList");
const riskMeter = document.querySelector("#riskMeter");
const riskCards = document.querySelector("#riskCards");
const coachPrompt = document.querySelector("#coachPrompt");
const termGrid = document.querySelector("#termGrid");
const courseMap = document.querySelector("#courseMap");
const bookNote = document.querySelector("#bookNote");
const formulaList = document.querySelector("#formulaList");
const theoremList = document.querySelector("#theoremList");
const domesticMap = document.querySelector("#domesticMap");
const courseGuide = document.querySelector("#courseGuide");
const proofTrainer = document.querySelector("#proofTrainer");
const examBank = document.querySelector("#examBank");
const functionCanvas = document.querySelector("#functionCanvas");
const graphReadout = document.querySelector("#graphReadout");
const planGrid = document.querySelector("#planGrid");
const quizList = document.querySelector("#quizList");

const sample = `微分積分学Iの試験範囲：数列の極限、関数の極限、連続性、導関数、合成関数の微分、テイラー展開、定積分、不定積分、部分積分、置換積分。

線形代数学Iの重点：行列、行列式、階数、連立一次方程式、ベクトル空間、一次独立、基底、線形写像、固有値、固有ベクトル、対角化。

課題：解答だけを写すのではなく、定義、定理の条件、計算手順を日本語で説明すること。`;

const glossary = [
  { subject: "calculus", jp: "微分積分学", kana: "びぶんせきぶんがく", cn: "微积分", domestic: "高等数学 / 数学分析基础", note: "日本理工科一年级常见基础课，通常分为 I、II。" },
  { subject: "calculus", jp: "極限", kana: "きょくげん", cn: "极限", domestic: "高等数学：函数与数列极限", note: "注意日语题里常写 lim、収束、発散。" },
  { subject: "calculus", jp: "収束", kana: "しゅうそく", cn: "收敛", domestic: "高等数学：极限与级数", note: "和発散相对，数列、函数、级数都会用。" },
  { subject: "calculus", jp: "発散", kana: "はっさん", cn: "发散", domestic: "高等数学：极限与级数", note: "表示不收敛，可能趋于无穷或振动。" },
  { subject: "calculus", jp: "連続性", kana: "れんぞくせい", cn: "连续性", domestic: "高等数学：连续函数", note: "常和中間値の定理、最大値最小値の定理一起考。" },
  { subject: "calculus", jp: "導関数", kana: "どうかんすう", cn: "导函数", domestic: "高等数学：导数与微分", note: "等同 derivative，比微分係数更偏函数整体。" },
  { subject: "calculus", jp: "微分係数", kana: "びぶんけいすう", cn: "导数值", domestic: "高等数学：一点处的导数", note: "强调某一点的斜率 f'(a)。" },
  { subject: "calculus", jp: "偏導関数", kana: "へんどうかんすう", cn: "偏导数", domestic: "高等数学：多元函数微分学", note: "多变量函数对某个变量求导。" },
  { subject: "calculus", jp: "全微分", kana: "ぜんびぶん", cn: "全微分", domestic: "高等数学：多元函数微分学", note: "要区分偏导数和线性近似。" },
  { subject: "calculus", jp: "テイラー展開", kana: "ていらーてんかい", cn: "泰勒展开", domestic: "高等数学：泰勒公式", note: "常用于近似、极限和误差估计。" },
  { subject: "calculus", jp: "不定積分", kana: "ふていせきぶん", cn: "不定积分", domestic: "高等数学：不定积分", note: "重点是原函数和积分技巧。" },
  { subject: "calculus", jp: "定積分", kana: "ていせきぶん", cn: "定积分", domestic: "高等数学：定积分", note: "注意区间、面积、微积分基本定理。" },
  { subject: "calculus", jp: "置換積分", kana: "ちかんせきぶん", cn: "换元积分", domestic: "高等数学：换元积分法", note: "换元后别忘了 dx 和上下限。" },
  { subject: "calculus", jp: "部分積分", kana: "ぶぶんせきぶん", cn: "分部积分", domestic: "高等数学：分部积分法", note: "对应公式 ∫u dv = uv - ∫v du。" },
  { subject: "linear", jp: "線形代数学", kana: "せんけいだいすうがく", cn: "线性代数", domestic: "线性代数", note: "日本大学通常分为 I、II，前半偏矩阵，后半偏抽象空间。" },
  { subject: "linear", jp: "行列", kana: "ぎょうれつ", cn: "矩阵", domestic: "线性代数：矩阵", note: "不是中文的排队，而是 matrix。" },
  { subject: "linear", jp: "行列式", kana: "ぎょうれつしき", cn: "行列式", domestic: "线性代数：行列式", note: "常用于可逆性、特征值、面积体积缩放。" },
  { subject: "linear", jp: "階数", kana: "かいすう", cn: "秩", domestic: "线性代数：矩阵的秩", note: "rank，和一次独立、方程组解的结构关系很紧。" },
  { subject: "linear", jp: "連立一次方程式", kana: "れんりついちじほうていしき", cn: "线性方程组", domestic: "线性代数：线性方程组", note: "常用ガウスの消去法，也就是高斯消元法。" },
  { subject: "linear", jp: "ベクトル空間", kana: "べくとるくうかん", cn: "向量空间", domestic: "线性代数：向量空间", note: "国内有的工科线代讲得较少，但日本课程常考定义。" },
  { subject: "linear", jp: "一次独立", kana: "いちじどくりつ", cn: "线性无关", domestic: "线性代数：线性相关与无关", note: "也可理解为没有非平凡线性组合等于零。" },
  { subject: "linear", jp: "一次従属", kana: "いちじじゅうぞく", cn: "线性相关", domestic: "线性代数：线性相关与无关", note: "至少一个向量可以由其他向量线性表示。" },
  { subject: "linear", jp: "基底", kana: "きてい", cn: "基", domestic: "线性代数：基与维数", note: "满足张成空间并线性无关。" },
  { subject: "linear", jp: "次元", kana: "じげん", cn: "维数", domestic: "线性代数：维数", note: "向量空间的一组基所含向量个数。" },
  { subject: "linear", jp: "線形写像", kana: "せんけいしゃぞう", cn: "线性映射", domestic: "线性代数：线性变换", note: "写像是日语里 map/function 的常见说法。" },
  { subject: "linear", jp: "核", kana: "かく", cn: "核 / 零空间", domestic: "线性代数：核空间", note: "kernel，满足 T(x)=0 的向量集合。" },
  { subject: "linear", jp: "像", kana: "ぞう", cn: "像 / 值域", domestic: "线性代数：像空间", note: "image，所有 T(x) 构成的集合。" },
  { subject: "linear", jp: "固有値", kana: "こゆうち", cn: "特征值", domestic: "线性代数：特征值", note: "eigenvalue，日语不用“特征值”这个词。" },
  { subject: "linear", jp: "固有ベクトル", kana: "こゆうべくとる", cn: "特征向量", domestic: "线性代数：特征向量", note: "满足 Ax = λx 的非零向量。" },
  { subject: "linear", jp: "対角化", kana: "たいかくか", cn: "对角化", domestic: "线性代数：矩阵对角化", note: "常和固有値、固有ベクトル、基底一起考。" }
];

const courseMappings = [
  { jp: "微分積分学I", cn: "高等数学上 / 数学分析 I", scope: "极限、连续、单变量微分、不定积分、定积分基础" },
  { jp: "微分積分学II", cn: "高等数学下 / 数学分析 II", scope: "多元函数、偏导、重积分、级数、微分方程入门" },
  { jp: "解析学I", cn: "数学分析 I", scope: "比工科微积分更重证明，强调极限、连续、微分的严密定义" },
  { jp: "解析学II", cn: "数学分析 II", scope: "积分、级数、多变量分析，证明要求通常更高" },
  { jp: "線形代数学I", cn: "线性代数", scope: "矩阵、行列式、线性方程组、秩、向量基础" },
  { jp: "線形代数学II", cn: "高等线性代数 / 线性代数后半", scope: "向量空间、线性映射、特征值、对角化、内积空间" },
  { jp: "基礎数学", cn: "大学数学基础 / 高等数学预备", scope: "集合、函数、三角函数、复数、证明入门，学校差异较大" }
];

function frac(top, bottom) {
  return `<span class="frac"><span>${top}</span><span>${bottom}</span></span>`;
}

function lim(sub) {
  return `<span class="op">lim<span class="under">${sub}</span></span>`;
}

function sum(sub, sup) {
  return `<span class="op">Σ<span class="over">${sup}</span><span class="under">${sub}</span></span>`;
}

function intg(sub = "", sup = "") {
  return `<span class="op integral">∫<span class="over">${sup}</span><span class="under">${sub}</span></span>`;
}

const textbooks = {
  calculus: {
    title: "微积分 第3版（学術図書出版社）",
    author: "按你提供的荒景正智著整理；公开书目信息中相近书名常见为荒井正治《理工系微分積分学》第3版。",
    chapters: [
      {
        id: "limits",
        name: "1. 極限・連続",
        formulas: [
          ["極限の四則", `${lim("x→a")} (f(x) ± g(x)) = ${lim("x→a")} f(x) ± ${lim("x→a")} g(x)`],
          ["連続の判定", `${lim("x→a")} f(x) = f(a)`],
          ["重要極限", `${lim("x→0")} ${frac("sin x", "x")} = 1　　${lim("x→0")} ${frac("e<sup>x</sup> - 1", "x")} = 1`]
        ],
        theorems: [
          ["はさみうちの定理", "夹逼定理。两边函数极限相同，中间函数也收敛到同一值。"],
          ["中間値の定理", "闭区间连续函数会取得介于 f(a) 与 f(b) 之间的值。"],
          ["最大値・最小値の定理", "闭区间连续函数一定取得最大值和最小值。"]
        ]
      },
      {
        id: "derivative",
        name: "2. 導関数・微分",
        formulas: [
          ["導関数", `f′(x) = ${lim("h→0")} ${frac("f(x+h) - f(x)", "h")}`],
          ["積の微分", `(fg)′ = f′g + fg′`],
          ["商の微分", `${frac("f", "g")}′ = ${frac("f′g - fg′", "g<sup>2</sup>")}`],
          ["合成関数の微分", `(f∘g)′(x) = f′(g(x))g′(x)`]
        ],
        theorems: [
          ["ロルの定理", "闭区间连续、开区间可微，且端点函数值相同，则存在 f'(c)=0。"],
          ["平均値の定理", "存在 c 使 f'(c)=(f(b)-f(a))/(b-a)。"],
          ["増減判定", "用导数符号判断函数单调性和极值候选点。"]
        ]
      },
      {
        id: "taylor",
        name: "3. テイラー展開",
        formulas: [
          ["Taylor 多项式", `f(x) = ${sum("k=0", "n")} ${frac("f<sup>(k)</sup>(a)", "k!")} (x-a)<sup>k</sup> + R<sub>n</sub>`],
          ["e^x", `e<sup>x</sup> = 1 + x + ${frac("x<sup>2</sup>", "2!")} + ${frac("x<sup>3</sup>", "3!")} + ...`],
          ["sin x / cos x", `sin x = x - ${frac("x<sup>3</sup>", "3!")} + ...　　cos x = 1 - ${frac("x<sup>2</sup>", "2!")} + ...`]
        ],
        theorems: [
          ["テイラーの定理", "用有限阶导数和余项表示函数局部近似。"],
          ["マクローリン展開", "a=0 时的 Taylor 展开，极限题和近似题常用。"],
          ["剰余項の評価", "考试常要求说明近似误差或展开可用范围。"]
        ]
      },
      {
        id: "integral",
        name: "4. 積分",
        formulas: [
          ["不定積分", `${intg()} f(x) dx = F(x)+C　　(F′=f)`],
          ["置換積分", `${intg()} f(g(x))g′(x) dx = ${intg()} f(u) du`],
          ["部分積分", `${intg()} u dv = uv - ${intg()} v du`],
          ["定積分", `${intg("a", "b")} f(x) dx = F(b)-F(a)`]
        ],
        theorems: [
          ["微分積分学の基本定理", "连续函数的积分函数可导，且导数回到原函数。"],
          ["面積との関係", "非负函数在区间上的定积分表示曲边梯形面积。"],
          ["広義積分の収束", "无穷区间或无界函数要先转成极限再判断收敛。"]
        ]
      },
      {
        id: "multivariable",
        name: "5. 多変数・偏微分",
        formulas: [
          ["偏導関数", `f<sub>x</sub> = ${frac("∂f", "∂x")}　　f<sub>y</sub> = ${frac("∂f", "∂y")}`],
          ["全微分", `df = f<sub>x</sub> dx + f<sub>y</sub> dy`],
          ["二変数 Taylor", `f(a+h,b+k) ≈ f(a,b) + f<sub>x</sub>h + f<sub>y</sub>k`]
        ],
        theorems: [
          ["連鎖律", "多变量复合函数求导要沿每个变量路径相加。"],
          ["極値判定", "用 Hessian 判别局部极大、极小或鞍点。"],
          ["陰関数の考え方", "条件方程能局部解出变量时，可用偏导描述变化率。"]
        ]
      }
    ]
  },
  linear: {
    title: "入門線形代数（三宅敏恒，培風館）",
    author: "按三宅敏恒《入門線形代数》常见大学一年级线代顺序整理。",
    chapters: [
      {
        id: "matrix",
        name: "1. 行列",
        formulas: [
          ["行列の積", `(AB)<sub>ij</sub> = ${sum("k", "")} a<sub>ik</sub>b<sub>kj</sub>`],
          ["転置行列", `(A<sup>T</sup>)<sub>ij</sub> = a<sub>ji</sub>`],
          ["逆行列", `AA<sup>-1</sup> = A<sup>-1</sup>A = I`]
        ],
        theorems: [
          ["行列積の結合法則", "(AB)C=A(BC)，但一般 AB≠BA。"],
          ["逆行列の一意性", "可逆矩阵的逆矩阵唯一。"],
          ["正則行列", "可逆矩阵也叫正则矩阵，日语常说正則行列。"]
        ]
      },
      {
        id: "determinant",
        name: "2. 行列式",
        formulas: [
          ["2次行列式", `<span class="det"><span>a　b</span><span>c　d</span></span> = ad - bc`],
          ["積の行列式", `det(AB) = det(A)det(B)`],
          ["逆行列と行列式", `A 可逆 ⇔ det A ≠ 0`]
        ],
        theorems: [
          ["余因子展開", "按一行或一列展开行列式。"],
          ["クラメルの公式", "det A≠0 时，线性方程组可用行列式表示解。"],
          ["行基本変形と行列式", "交换行变号，倍加不变，数乘行会数乘行列式。"]
        ]
      },
      {
        id: "linear-system",
        name: "3. 連立一次方程式・階数",
        formulas: [
          ["拡大係数行列", `Ax=b　→　[A｜b]`],
          ["階数", `rank A = 行阶梯形中非零行的个数`],
          ["解の条件", `Ax=b 有解 ⇔ rank A = rank[A｜b]`]
        ],
        theorems: [
          ["ガウスの消去法", "通过行基本变形求解线性方程组。"],
          ["解の自由度", "未知数 n，rank r 时，自由变量数通常为 n-r。"],
          ["同次方程式", "Ax=0 总有零解，非零解存在 ⇔ rank A < n。"]
        ]
      },
      {
        id: "vector-space",
        name: "4. ベクトル空間",
        formulas: [
          ["一次結合", `c<sub>1</sub>v<sub>1</sub> + c<sub>2</sub>v<sub>2</sub> + ... + c<sub>k</sub>v<sub>k</sub>`],
          ["一次独立", `c<sub>1</sub>v<sub>1</sub> + ... + c<sub>k</sub>v<sub>k</sub> = 0 ⇒ c<sub>1</sub>=...=c<sub>k</sub>=0`],
          ["次元", `dim V = 一组基底中向量的个数`]
        ],
        theorems: [
          ["基底の条件", "张成空间且线性无关，即为基底。"],
          ["基底の個数", "同一有限维向量空间的任意基底元素个数相同。"],
          ["部分空間の判定", "含零向量，并对加法和数乘封闭。"]
        ]
      },
      {
        id: "linear-map",
        name: "5. 線形写像",
        formulas: [
          ["線形性", `T(αx+βy)=αT(x)+βT(y)`],
          ["核", `Ker T = { x｜T(x)=0 }`],
          ["像", `Im T = { T(x)｜x∈V }`]
        ],
        theorems: [
          ["次元定理", "dim V = dim Ker T + dim Im T。"],
          ["行列表示", "选定基底后，线性映射可由矩阵表示。"],
          ["単射・全射", "核为零空间时单射；像等于目标空间时满射。"]
        ]
      },
      {
        id: "eigen",
        name: "6. 固有値・対角化",
        formulas: [
          ["固有値方程式", `det(A - λI) = 0`],
          ["固有ベクトル", `(A - λI)x = 0　　x ≠ 0`],
          ["対角化", `P<sup>-1</sup>AP = D`]
        ],
        theorems: [
          ["対角化可能条件", "n 个线性无关的特征向量存在时可对角化。"],
          ["相異なる固有値", "不同特征值对应的特征向量线性无关。"],
          ["固有空間", "同一特征值的特征向量加零向量构成子空间。"]
        ]
      }
    ]
  }
};

const domesticSectionMaps = {
  calculus: [
    {
      jp: "極限・連続",
      cnChapter: "同济高数 第1章 函数与极限",
      sections: [
        ["数列の極限", "数列的极限"],
        ["関数の極限", "函数的极限"],
        ["無限小・無限大", "无穷小与无穷大"],
        ["連続性", "函数的连续性"],
        ["中間値の定理", "连续函数的运算与初等函数的连续性"]
      ]
    },
    {
      jp: "導関数・微分",
      cnChapter: "同济高数 第2章 导数与微分",
      sections: [
        ["微分係数・導関数", "导数的概念"],
        ["微分法の公式", "函数的求导法则"],
        ["高階導関数", "高阶导数"],
        ["陰関数・媒介変数", "隐函数及由参数方程确定的函数的导数"],
        ["微分", "函数的微分"]
      ]
    },
    {
      jp: "テイラー展開",
      cnChapter: "同济高数 第3章 微分中值定理与导数的应用",
      sections: [
        ["平均値の定理", "微分中值定理"],
        ["ロピタルの定理", "洛必达法则"],
        ["Taylor の定理", "泰勒公式"],
        ["増減・凹凸", "函数的单调性与曲线的凹凸性"],
        ["極値", "函数的极值与最大值最小值"]
      ]
    },
    {
      jp: "不定積分・定積分",
      cnChapter: "同济高数 第4章 不定积分 / 第5章 定积分",
      sections: [
        ["原始関数", "原函数与不定积分"],
        ["置換積分", "换元积分法"],
        ["部分積分", "分部积分法"],
        ["有理関数の積分", "有理函数的积分"],
        ["定積分", "定积分的概念与性质"],
        ["微分積分学の基本定理", "微积分基本公式"],
        ["広義積分", "反常积分"]
      ]
    },
    {
      jp: "多変数・偏微分",
      cnChapter: "同济高数 下册 第8章 多元函数微分法及其应用",
      sections: [
        ["二変数関数", "多元函数的基本概念"],
        ["偏導関数", "偏导数"],
        ["全微分", "全微分"],
        ["連鎖律", "多元复合函数求导法"],
        ["陰関数", "隐函数的求导公式"],
        ["極値", "多元函数的极值及其求法"]
      ]
    }
  ],
  linear: [
    {
      jp: "行列",
      cnChapter: "同济线代 第2章 矩阵及其运算",
      sections: [
        ["行列の定義", "矩阵"],
        ["行列の積", "矩阵乘法"],
        ["転置行列", "转置矩阵"],
        ["逆行列", "逆矩阵"],
        ["分块行列", "分块矩阵"]
      ]
    },
    {
      jp: "行列式",
      cnChapter: "同济线代 第1章 行列式",
      sections: [
        ["2次・3次行列式", "二阶与三阶行列式"],
        ["n次行列式", "全排列及其逆序数 / n阶行列式定义"],
        ["行列式の性質", "行列式的性质"],
        ["余因子展開", "行列式按行（列）展开"],
        ["Cramer の公式", "克拉默法则"]
      ]
    },
    {
      jp: "連立一次方程式・階数",
      cnChapter: "同济线代 第3章 矩阵的初等变换与线性方程组",
      sections: [
        ["初等変換", "矩阵的初等变换"],
        ["階数", "矩阵的秩"],
        ["ガウスの消去法", "线性方程组的解"],
        ["同次方程式", "齐次线性方程组"],
        ["非同次方程式", "非齐次线性方程组"]
      ]
    },
    {
      jp: "ベクトル空間",
      cnChapter: "同济线代 第4章 向量组的线性相关性",
      sections: [
        ["一次結合", "向量组及其线性组合"],
        ["一次独立・一次従属", "向量组的线性相关性"],
        ["階数との関係", "向量组的秩"],
        ["基底・次元", "向量空间"],
        ["解空間", "线性方程组解的结构"]
      ]
    },
    {
      jp: "線形写像",
      cnChapter: "同济线代 第6章 线性空间与线性变换",
      sections: [
        ["線形空間", "线性空间的定义与性质"],
        ["基底・座標", "维数、基与坐标"],
        ["基変換", "基变换与坐标变换"],
        ["線形写像", "线性变换"],
        ["行列表示", "线性变换的矩阵表示"]
      ]
    },
    {
      jp: "固有値・対角化",
      cnChapter: "同济线代 第5章 相似矩阵及二次型",
      sections: [
        ["固有値", "特征值"],
        ["固有ベクトル", "特征向量"],
        ["相似行列", "相似矩阵"],
        ["対角化", "矩阵的对角化"],
        ["実対称行列", "实对称矩阵的对角化"],
        ["二次形式", "二次型及其标准形"]
      ]
    }
  ]
};

const onlineCourseGuides = {
  calculus: {
    title: "宋浩老师 微积分 / 高等数学 2.0",
    link: "https://search.bilibili.com/all?keyword=%E5%AE%8B%E6%B5%A9%20%E5%BE%AE%E7%A7%AF%E5%88%86%202.0%20%E5%90%8C%E6%B5%8E",
    why: "适合用中文把概念先听顺，尤其是极限、导数、积分、泰勒公式这些日本课本里术语密集的部分。",
    strategy: [
      ["课前 20 分钟", "先听对应同济章节的概念段，只记中文关键词和公式，不急着刷题。"],
      ["课后 45 分钟", "回到日本教材，把日语术语写到中文概念旁边，再做课本例题。"],
      ["考前 2 天", "只听错题对应章节的题型讲解，避免从头刷完整视频。"]
    ],
    map: [
      ["極限・連続", "听同济高数第1章：函数、极限、连续。重点补 lim、无穷小、连续函数性质。"],
      ["導関数・微分", "听同济高数第2章：导数与微分。重点补求导法则、隐函数、参数方程求导。"],
      ["テイラー展開", "听同济高数第3章：中值定理、洛必达、泰勒公式。日本考试常问条件。"],
      ["不定積分・定積分", "听同济高数第4-5章：不定积分、定积分、换元、分部、反常积分。"],
      ["多変数・偏微分", "听同济高数下册多元函数微分法。重点补偏导、全微分、链式法则、极值。"]
    ],
    cautions: [
      "宋浩课适合补理解，但日本考试要按老师讲义的符号和证明要求答题。",
      "同济版题量比日本入门课可能更大，不必全刷，优先刷与你讲义同名的小节。",
      "听课时把“導関数=导函数”“微分係数=一点处导数值”这类词写在同一页。"
    ]
  },
  linear: {
    title: "宋浩老师 线性代数 2.0",
    link: "https://search.bilibili.com/all?keyword=%E5%AE%8B%E6%B5%A9%20%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%202.0%20%E5%90%8C%E6%B5%8E",
    why: "适合补行列式、矩阵、秩、方程组、特征值和二次型。你学日本线代时，最容易卡在日语词和同济词的转换。",
    strategy: [
      ["课前 15 分钟", "先看同济版对应小节的定义，尤其是行列、階数、一次独立、固有値。"],
      ["课后 45 分钟", "用宋浩题型把计算步骤练顺，再回日本教材写日语解释。"],
      ["考前 2 天", "集中复习行列式性质、矩阵秩、线性方程组解、特征值对角化。"]
    ],
    map: [
      ["行列", "听同济线代第2章：矩阵及其运算。重点补矩阵乘法、逆矩阵、分块矩阵。"],
      ["行列式", "听同济线代第1章：行列式。重点补性质、余子式展开、克拉默法则。"],
      ["連立一次方程式・階数", "听同济线代第3章：初等变换与线性方程组。重点补秩和解的判定。"],
      ["ベクトル空間", "听同济线代第4章：向量组线性相关性。重点补线性组合、线性无关、秩。"],
      ["固有値・対角化", "听同济线代第5章：相似矩阵及二次型。重点补特征值、特征向量、对角化。"],
      ["線形写像", "听同济线代第6章：线性空间与线性变换。日本课本会更常用“写像”语言。"]
    ],
    cautions: [
      "日本教材里的「行列」是矩阵，不是行列式；「行列式」才是 determinant。",
      "同济版“相似矩阵及二次型”里有些内容，日本入门课未必全考，先对照讲义范围。",
      "每听完一节，至少写一遍日语术语、中文术语、公式、一个例题。"
    ]
  }
};

const proofBanks = {
  calculus: [
    {
      id: "limits",
      chapter: "極限・連続",
      domestic: "同济高数第1章 函数与极限",
      pattern: "先写定义或定理条件，再把目标式变成不等式、夹逼或连续函数代入。",
      proofSteps: [
        "确认题目要求证明的是极限、连续性，还是闭区间连续函数性质。",
        "如果是极限题，先写出 ε-N 或 ε-δ 的目标。",
        "把需要控制的式子拆成可以估计的部分。",
        "选择合适的 N、δ 或使用夹逼定理。",
        "最后回到定义，写明“故收敛/连续/结论成立”。"
      ],
      questions: [
        {
          title: "数列极限的唯一性",
          task: "证明：若数列 {an} 同时收敛到 α 和 β，则 α=β。",
          hint: "用 ε 定义，取 ε=|α-β|/3，推出矛盾。"
        },
        {
          title: "连续函数的和仍连续",
          task: "设 f, g 在 a 连续，证明 f+g 在 a 连续。",
          hint: "把 |(f+g)(x)-(f+g)(a)| 拆成两个绝对值。"
        },
        {
          title: "夹逼定理",
          task: "设 f(x)≤h(x)≤g(x)，且 f,g 在 a 处极限同为 L，证明 h 的极限也是 L。",
          hint: "用 ε-δ 定义分别控制 f 和 g。"
        }
      ]
    },
    {
      id: "derivative",
      chapter: "導関数・微分",
      domestic: "同济高数第2章 导数与微分",
      pattern: "从导数定义出发，不要一上来套公式；证明公式时要写差商并整理。",
      proofSteps: [
        "写出导数定义 f′(a)=lim[h→0](f(a+h)-f(a))/h。",
        "把题目中的函数代入差商。",
        "通过加减同一项或因式分解整理。",
        "使用已知极限或已知可导条件。",
        "得出导数公式或可导性结论。"
      ],
      questions: [
        {
          title: "积的求导法则",
          task: "设 f,g 在 a 可导，证明 fg 在 a 可导，且 (fg)'(a)=f'(a)g(a)+f(a)g'(a)。",
          hint: "差商中加减 f(a+h)g(a)，再分成两项。"
        },
        {
          title: "可导推出连续",
          task: "证明：若 f 在 a 可导，则 f 在 a 连续。",
          hint: "写 f(a+h)-f(a)=h·[(f(a+h)-f(a))/h]。"
        },
        {
          title: "链式法则的基础证明",
          task: "在适当可导条件下，说明为什么 (f∘g)'(a)=f'(g(a))g'(a)。",
          hint: "先写增量 Δy/Δx=(Δy/Δu)(Δu/Δx)，再取极限。"
        }
      ]
    },
    {
      id: "taylor",
      chapter: "テイラー展開",
      domestic: "同济高数第3章 微分中值定理与导数应用",
      pattern: "证明题常考中值定理条件、泰勒公式余项、函数不等式。",
      proofSteps: [
        "先确认函数在闭区间连续、开区间可导。",
        "构造辅助函数，常见是 F(x)=f(x)-线性函数或减去 Taylor 多项式。",
        "使用 Rolle 定理或 Lagrange 中值定理。",
        "把存在的点 c 或余项形式写清楚。",
        "如果证明不等式，最后用导数符号或余项符号判断。"
      ],
      questions: [
        {
          title: "Rolle 定理的应用",
          task: "设 f 在 [a,b] 连续，在 (a,b) 可导，且 f(a)=f(b)。证明存在 c∈(a,b)，使 f'(c)=0。",
          hint: "按最大值最小值讨论：极值在内部时导数为 0。"
        },
        {
          title: "Lagrange 中值定理",
          task: "用 Rolle 定理证明平均值定理。",
          hint: "构造 F(x)=f(x)-[(f(b)-f(a))/(b-a)](x-a)。"
        },
        {
          title: "Taylor 余项估计",
          task: "用 Taylor 公式证明 e^x=1+x+x²/2+o(x²)。",
          hint: "写到二阶 Taylor 展开，并说明余项阶数。"
        }
      ]
    },
    {
      id: "integral",
      chapter: "積分",
      domestic: "同济高数第4-5章 不定积分与定积分",
      pattern: "积分证明常围绕定义、变上限积分、换元和分部公式的条件。",
      proofSteps: [
        "先写出原函数、定积分或变上限函数的定义。",
        "如果证明公式，通常从微分验证或 Riemann 和出发。",
        "换元题要说明变量替换和区间变化。",
        "分部积分要明确 u、v 的可微条件。",
        "最后写明常数 C 或积分上下限。"
      ],
      questions: [
        {
          title: "微积分基本定理",
          task: "设 f 连续，F(x)=∫[a,x] f(t)dt，证明 F'(x)=f(x)。",
          hint: "写差商 [F(x+h)-F(x)]/h，转成区间平均值。"
        },
        {
          title: "分部积分公式",
          task: "证明 ∫u dv = uv - ∫v du。",
          hint: "从乘积求导公式 (uv)'=u'v+uv' 出发积分。"
        },
        {
          title: "定积分线性性质",
          task: "证明 ∫[a,b](αf+βg)=α∫[a,b]f+β∫[a,b]g。",
          hint: "用 Riemann 和的线性性或积分定义。"
        }
      ]
    },
    {
      id: "multivariable",
      chapter: "多変数・偏微分",
      domestic: "同济高数下册第8章 多元函数微分法",
      pattern: "多元证明题重在定义、路径反例、全微分和链式法则。",
      proofSteps: [
        "判断题目是证明极限存在、连续、偏导存在，还是可微。",
        "若证明不存在，选择两条路径得到不同极限。",
        "若证明可微，写出线性主部和高阶小量。",
        "链式法则题要画清变量依赖关系。",
        "极值题先求驻点，再用 Hessian 或定义判断。"
      ],
      questions: [
        {
          title: "二元极限不存在",
          task: "证明 f(x,y)=xy/(x²+y²) 在 (0,0) 处极限不存在。",
          hint: "取路径 y=x 和 y=-x，得到不同极限。"
        },
        {
          title: "可微推出连续",
          task: "证明二元函数在一点可微，则在该点连续。",
          hint: "用 Δz=AΔx+BΔy+o(ρ)，令 ρ→0。"
        },
        {
          title: "多元链式法则",
          task: "设 z=f(x,y)，x=x(t)，y=y(t)，写出并说明 dz/dt 的公式。",
          hint: "从全微分 dz=fx dx+fy dy 出发。"
        }
      ]
    }
  ],
  linear: [
    {
      id: "matrix",
      chapter: "行列",
      domestic: "同济线代第2章 矩阵及其运算",
      pattern: "矩阵证明要靠定义逐项验证，尤其是矩阵乘法、转置和逆矩阵。",
      proofSteps: [
        "先写目标矩阵等式的第 i,j 个元素。",
        "把矩阵乘法定义展开成求和。",
        "使用已知等式或指标替换整理。",
        "若证明逆矩阵，验证左右乘都等于单位矩阵。",
        "最后说明所有元素相等，所以矩阵相等。"
      ],
      questions: [
        {
          title: "转置的乘积公式",
          task: "证明 (AB)^T = B^T A^T。",
          hint: "比较两边第 i,j 个元素。"
        },
        {
          title: "逆矩阵唯一性",
          task: "证明：若 B 和 C 都是 A 的逆矩阵，则 B=C。",
          hint: "B=BI=B(AC)=(BA)C=IC=C。"
        },
        {
          title: "可逆矩阵乘积",
          task: "证明：若 A,B 可逆，则 AB 可逆，且 (AB)^-1=B^-1A^-1。",
          hint: "直接验证 (AB)(B^-1A^-1)=I。"
        }
      ]
    },
    {
      id: "determinant",
      chapter: "行列式",
      domestic: "同济线代第1章 行列式",
      pattern: "行列式证明常用性质：交换行变号、倍加不变、乘积定理。",
      proofSteps: [
        "先判断要证明的是性质、计算公式还是可逆条件。",
        "若涉及初等变换，逐条说明行列式如何变化。",
        "若证明 det(AB)，可引用乘积定理或从线性变换体积解释。",
        "可逆性题通常连接 det A≠0。",
        "最后把行列式结论转回矩阵或方程组结论。"
      ],
      questions: [
        {
          title: "行交换变号",
          task: "证明：交换行列式的两行，行列式变号。",
          hint: "从 n 阶行列式按排列定义观察逆序数变化。"
        },
        {
          title: "含相同行的行列式",
          task: "证明：若行列式有两行相同，则其值为 0。",
          hint: "交换这两行后行列式不变，但性质又说明变号。"
        },
        {
          title: "可逆与行列式",
          task: "证明：A 可逆当且仅当 det A≠0。",
          hint: "用 det(AA^-1)=det I 和伴随矩阵公式。"
        }
      ]
    },
    {
      id: "linear-system",
      chapter: "連立一次方程式・階数",
      domestic: "同济线代第3章 初等变换与线性方程组",
      pattern: "方程组证明题一般围绕秩、初等变换不改变解集、齐次解空间。",
      proofSteps: [
        "把方程组写成 Ax=b 或 Ax=0。",
        "说明行初等变换不改变方程组解集。",
        "把矩阵化成阶梯形，读出 rank。",
        "用 rank A 与 rank[A|b] 判断有无解。",
        "若求解空间结构，写成特解加齐次通解。"
      ],
      questions: [
        {
          title: "齐次方程非零解条件",
          task: "证明 n 元齐次线性方程组 Ax=0 有非零解当且仅当 rank A<n。",
          hint: "阶梯形中主元变量少于未知数时有自由变量。"
        },
        {
          title: "非齐次有解判定",
          task: "证明 Ax=b 有解当且仅当 rank A=rank[A|b]。",
          hint: "看增广矩阵阶梯形是否出现 0=非零。"
        },
        {
          title: "解集结构",
          task: "证明非齐次方程组的任意两个解之差是对应齐次方程组的解。",
          hint: "若 Ax1=b, Ax2=b，则 A(x1-x2)=0。"
        }
      ]
    },
    {
      id: "vector-space",
      chapter: "ベクトル空間",
      domestic: "同济线代第4章 向量组线性相关性",
      pattern: "向量空间证明题重定义：封闭性、线性组合、线性无关、基和维数。",
      proofSteps: [
        "先写清需要证明的对象：子空间、线性无关、生成空间或基。",
        "子空间题检查零向量、加法封闭、数乘封闭。",
        "线性无关题从线性组合等于零开始。",
        "基底题同时证明张成和线性无关。",
        "维数题通常借助基底元素个数。"
      ],
      questions: [
        {
          title: "子空间判定",
          task: "设 W={x∈R^n | Ax=0}，证明 W 是 R^n 的子空间。",
          hint: "检查 0∈W，且对加法和数乘封闭。"
        },
        {
          title: "基底判定",
          task: "证明一组向量若线性无关且能表示空间中任意向量，则它是基底。",
          hint: "这就是基底定义，要把两个条件分别写出。"
        },
        {
          title: "线性相关等价命题",
          task: "证明向量组线性相关当且仅当其中某个向量可由其余向量线性表示。",
          hint: "从非平凡线性组合为 0 出发，把某个系数非零的向量移项。"
        }
      ]
    },
    {
      id: "linear-map",
      chapter: "線形写像",
      domestic: "同济线代第6章 线性空间与线性变换",
      pattern: "线性映射证明要先验证线性性，再研究核、像和矩阵表示。",
      proofSteps: [
        "先写线性性：T(αx+βy)=αT(x)+βT(y)。",
        "核空间证明要检查它是子空间。",
        "像空间证明也检查加法和数乘封闭。",
        "维数定理题要找到核的基和像的基。",
        "矩阵表示题要说明基底下坐标如何变化。"
      ],
      questions: [
        {
          title: "核是子空间",
          task: "设 T:V→W 为线性映射，证明 Ker T 是 V 的子空间。",
          hint: "若 T(x)=0, T(y)=0，则 T(αx+βy)=0。"
        },
        {
          title: "像是子空间",
          task: "证明 Im T 是 W 的子空间。",
          hint: "像中元素写成 T(x)，再用线性性证明封闭。"
        },
        {
          title: "单射与核",
          task: "证明线性映射 T 单射当且仅当 Ker T={0}。",
          hint: "分别证明：T(x)=T(y) 推出 x-y∈Ker T。"
        }
      ]
    },
    {
      id: "eigen",
      chapter: "固有値・対角化",
      domestic: "同济线代第5章 相似矩阵及二次型",
      pattern: "特征值证明题抓住 Ax=λx、特征多项式和线性无关。",
      proofSteps: [
        "先写固有値定义：存在 x≠0，使 Ax=λx。",
        "转成 (A-λI)x=0。",
        "非零解存在等价于 det(A-λI)=0。",
        "对角化题要证明存在 n 个线性无关特征向量。",
        "不同特征值对应向量线性无关可用归纳或代入消去。"
      ],
      questions: [
        {
          title: "特征值方程",
          task: "证明 λ 是 A 的特征值当且仅当 det(A-λI)=0。",
          hint: "Ax=λx ⇔ (A-λI)x=0，并使用齐次方程非零解条件。"
        },
        {
          title: "不同特征值的特征向量",
          task: "证明属于不同特征值的特征向量线性无关。",
          hint: "先证两个的情形，再推广；对线性组合作用 A。"
        },
        {
          title: "对角化条件",
          task: "证明若 A 有 n 个线性无关特征向量，则 A 可对角化。",
          hint: "以特征向量作 P 的列，计算 AP=PD。"
        }
      ]
    }
  ]
};

const examProblems = {
  calculus: [
    {
      id: "limits",
      chapter: "極限・連続",
      problems: [
        {
          type: "计算题",
          title: "重要极限计算",
          stem: `求 ${lim("x→0")} ${frac("1 - cos x", "x<sup>2</sup>")}。`,
          hint: "把 1-cos x 改写成 2sin²(x/2)，再使用 sin u/u → 1。",
          answer: [
            `1 - cos x = 2sin<sup>2</sup>${frac("x", "2")}。`,
            `${frac("1 - cos x", "x<sup>2</sup>")} = ${frac("2sin<sup>2</sup>(x/2)", "x<sup>2</sup>")} = ${frac("1", "2")}·${frac("sin<sup>2</sup>(x/2)", "(x/2)<sup>2</sup>")}。`,
            `因为 ${lim("u→0")} ${frac("sin u", "u")} = 1，所以平方后极限也是 1。`,
            `答案：${frac("1", "2")}。`
          ]
        },
        {
          type: "证明题",
          title: "连续函数保持序列极限",
          stem: "设 f 在 a 连续，且 xn→a。证明 f(xn)→f(a)。",
          hint: "直接用连续性的 ε-δ 定义和数列极限定义连接。",
          answer: [
            "由 f 在 a 连续，对任意 ε>0，存在 δ>0，使 |x-a|<δ 时 |f(x)-f(a)|<ε。",
            "因为 xn→a，所以上述 δ 对应存在 N，使 n>N 时 |xn-a|<δ。",
            "于是 n>N 时 |f(xn)-f(a)|<ε。",
            "这正是 f(xn)→f(a) 的定义。"
          ]
        },
        {
          type: "综合题",
          title: "用连续性判断方程根",
          stem: "证明方程 x³+x-1=0 在 (0,1) 内至少有一个实根。",
          hint: "构造 f(x)=x³+x-1，在闭区间上用中间值定理。",
          answer: [
            "令 f(x)=x³+x-1。多项式函数在 [0,1] 上连续。",
            "计算 f(0)=-1<0，f(1)=1>0。",
            "由中间值定理，存在 c∈(0,1)，使 f(c)=0。",
            "因此 x³+x-1=0 在 (0,1) 内至少有一个实根。"
          ]
        }
      ]
    },
    {
      id: "derivative",
      chapter: "導関数・微分",
      problems: [
        {
          type: "计算题",
          title: "隐函数求导",
          stem: "设 x²+xy+y²=1，求 dy/dx。",
          hint: "把 y 看成 x 的函数，两边对 x 求导。",
          answer: [
            "对 x²+xy+y²=1 两边求导。",
            "得到 2x + (y + xy′) + 2yy′ = 0。",
            "把含 y′ 的项合并：(x+2y)y′ = -(2x+y)。",
            `所以 ${frac("dy", "dx")} = -${frac("2x+y", "x+2y")}。`
          ]
        },
        {
          type: "证明题",
          title: "可导必连续",
          stem: "证明：若 f 在 a 处可导，则 f 在 a 处连续。",
          hint: "把 f(a+h)-f(a) 写成 h 乘差商。",
          answer: [
            "因为 f 在 a 处可导，所以差商 [f(a+h)-f(a)]/h 在 h→0 时有有限极限 f′(a)。",
            `写成 f(a+h)-f(a)=h·${frac("f(a+h)-f(a)", "h")}。`,
            "当 h→0 时，h→0，差商趋于有限值，因此乘积趋于 0。",
            "所以 lim[h→0] f(a+h)=f(a)，即 f 在 a 连续。"
          ]
        },
        {
          type: "综合题",
          title: "切线方程",
          stem: "求曲线 y=e^x sin x 在 x=0 处的切线方程。",
          hint: "先求 y(0)，再用乘积求导求 y′(0)。",
          answer: [
            "函数值：y(0)=e⁰sin0=0。",
            "求导：y′=e^x sin x + e^x cos x = e^x(sin x+cos x)。",
            "斜率：y′(0)=1。",
            "切线方程：y-0=1(x-0)，即 y=x。"
          ]
        }
      ]
    },
    {
      id: "taylor",
      chapter: "テイラー展開",
      problems: [
        {
          type: "计算题",
          title: "Taylor 展开求极限",
          stem: `求 ${lim("x→0")} ${frac("e<sup>x</sup>-1-x", "x<sup>2</sup>")}。`,
          hint: "把 e^x 展开到二阶。",
          answer: [
            `e^x = 1+x+${frac("x<sup>2</sup>", "2")}+o(x<sup>2</sup>)。`,
            `所以 e^x-1-x = ${frac("x<sup>2</sup>", "2")}+o(x<sup>2</sup>)。`,
            `两边除以 x²，得到 ${frac("1", "2")}+o(1)。`,
            `答案：${frac("1", "2")}。`
          ]
        },
        {
          type: "证明题",
          title: "用中值定理证明单调性",
          stem: "设 f 在区间 I 上可导，且 f′(x)>0。证明 f 在 I 上严格递增。",
          hint: "取任意 x1<x2，对 [x1,x2] 用平均值定理。",
          answer: [
            "任取 x1,x2∈I，且 x1<x2。",
            "由平均值定理，存在 c∈(x1,x2)，使 f(x2)-f(x1)=f′(c)(x2-x1)。",
            "因为 f′(c)>0 且 x2-x1>0，所以 f(x2)-f(x1)>0。",
            "故 f(x2)>f(x1)，所以 f 严格递增。"
          ]
        },
        {
          type: "综合题",
          title: "证明常见不等式",
          stem: "证明：当 x>0 时，ln(1+x)<x。",
          hint: "设 F(x)=x-ln(1+x)，证明 F′(x)>0 且 F(0)=0。",
          answer: [
            "令 F(x)=x-ln(1+x)，定义在 x>-1。",
            `F′(x)=1-${frac("1", "1+x")}=${frac("x", "1+x")}。`,
            "当 x>0 时，F′(x)>0，所以 F 在 (0,+∞) 上递增。",
            "又 F(0)=0，因此 x>0 时 F(x)>0，即 ln(1+x)<x。"
          ]
        }
      ]
    },
    {
      id: "integral",
      chapter: "積分",
      problems: [
        {
          type: "计算题",
          title: "分部积分",
          stem: `计算 ${intg()} x e<sup>x</sup> dx。`,
          hint: "取 u=x，dv=e^x dx。",
          answer: [
            "取 u=x，则 du=dx；取 dv=e^x dx，则 v=e^x。",
            `由分部积分公式 ${intg()}u dv = uv - ${intg()}v du。`,
            `${intg()} x e^x dx = xe^x - ${intg()} e^x dx。`,
            "答案：xe^x-e^x+C = e^x(x-1)+C。"
          ]
        },
        {
          type: "证明题",
          title: "变上限积分求导",
          stem: `设 F(x)=${intg("a", "x")} f(t)dt，f 连续。证明 F′(x)=f(x)。`,
          hint: "写差商，把它看成小区间上的平均值。",
          answer: [
            `差商为 ${frac("F(x+h)-F(x)", "h")} = ${frac("1", "h")}${intg("x", "x+h")}f(t)dt。`,
            "因为 f 连续，在小区间 [x,x+h] 上接近 f(x)。",
            `可写成 ${frac("1", "h")}${intg("x", "x+h")}[f(t)-f(x)]dt + f(x)。`,
            "第一项随 h→0 趋于 0，所以极限为 f(x)。"
          ]
        },
        {
          type: "综合题",
          title: "面积计算",
          stem: "求 y=x 与 y=x² 在 [0,1] 围成的面积。",
          hint: "先判断上方函数，再积分差。",
          answer: [
            "在 0≤x≤1 上，有 x≥x²。",
            `面积 S=${intg("0", "1")}(x-x<sup>2</sup>)dx。`,
            `S=[${frac("x<sup>2</sup>", "2")}-${frac("x<sup>3</sup>", "3")}]<sub>0</sub><sup>1</sup>。`,
            `答案：${frac("1", "2")}-${frac("1", "3")}=${frac("1", "6")}。`
          ]
        }
      ]
    },
    {
      id: "multivariable",
      chapter: "多変数・偏微分",
      problems: [
        {
          type: "计算题",
          title: "偏导与驻点",
          stem: "求 f(x,y)=x²+xy+y²-3x-3y 的驻点。",
          hint: "分别令 fx=0, fy=0，解线性方程组。",
          answer: [
            "fx=2x+y-3，fy=x+2y-3。",
            "驻点满足 2x+y=3，x+2y=3。",
            "解得 x=1，y=1。",
            "驻点为 (1,1)。"
          ]
        },
        {
          type: "证明题",
          title: "路径证明极限不存在",
          stem: `证明 ${frac("xy", "x<sup>2</sup>+y<sup>2</sup>")} 在 (0,0) 处极限不存在。`,
          hint: "取 y=x 和 y=-x 两条路径。",
          answer: [
            "沿路径 y=x，函数值为 x²/(2x²)=1/2。",
            "沿路径 y=-x，函数值为 -x²/(2x²)=-1/2。",
            "两条路径趋向同一点 (0,0)，但函数极限值不同。",
            "因此二元极限不存在。"
          ]
        },
        {
          type: "综合题",
          title: "全微分近似",
          stem: "用全微分近似计算 f(x,y)=√(x²+y²) 在 (3,4) 附近，当 x=3.01,y=3.98 时的值。",
          hint: "先算 f(3,4)，再算 fx, fy。",
          answer: [
            "f(3,4)=5。",
            "fx=x/√(x²+y²)，fy=y/√(x²+y²)，所以 fx(3,4)=3/5，fy(3,4)=4/5。",
            "Δx=0.01，Δy=-0.02。",
            "近似值 f≈5+(3/5)(0.01)+(4/5)(-0.02)=5+0.006-0.016=4.99。"
          ]
        }
      ]
    }
  ],
  linear: [
    {
      id: "matrix",
      chapter: "行列",
      problems: [
        {
          type: "计算题",
          title: "矩阵乘法",
          stem: "设 A=[[1,2],[0,1]], B=[[3,1],[2,0]]，求 AB。",
          hint: "逐行乘逐列。",
          answer: [
            "AB 的第一行第一列：1·3+2·2=7。",
            "第一行第二列：1·1+2·0=1。",
            "第二行第一列：0·3+1·2=2；第二行第二列：0·1+1·0=0。",
            "所以 AB=[[7,1],[2,0]]。"
          ]
        },
        {
          type: "证明题",
          title: "逆矩阵乘积公式",
          stem: "证明若 A,B 可逆，则 AB 可逆，且 (AB)^-1=B^-1A^-1。",
          hint: "左右乘验证等于单位矩阵。",
          answer: [
            "考虑矩阵 B^-1A^-1。",
            "(AB)(B^-1A^-1)=A(BB^-1)A^-1=AIA^-1=I。",
            "(B^-1A^-1)(AB)=B^-1(A^-1A)B=B^-1IB=I。",
            "左右乘都为 I，所以 (AB)^-1=B^-1A^-1。"
          ]
        },
        {
          type: "综合题",
          title: "求逆矩阵",
          stem: "求 A=[[1,2],[3,4]] 的逆矩阵。",
          hint: "二阶逆矩阵公式，先算 det A。",
          answer: [
            "det A=1·4-2·3=-2≠0，所以 A 可逆。",
            `二阶公式：A^-1=${frac("1", "ad-bc")}[[d,-b],[-c,a]]。`,
            `A^-1=${frac("1", "-2")}[[4,-2],[-3,1]]。`,
            "所以 A^-1=[[-2,1],[3/2,-1/2]]。"
          ]
        }
      ]
    },
    {
      id: "determinant",
      chapter: "行列式",
      problems: [
        {
          type: "计算题",
          title: "三阶行列式",
          stem: "计算 det [[1,2,0],[0,1,3],[2,0,1]]。",
          hint: "按第一行展开。",
          answer: [
            "按第一行展开：det A = 1·det[[1,3],[0,1]] - 2·det[[0,3],[2,1]]。",
            "第一个二阶行列式为 1；第二个为 0·1-3·2=-6。",
            "所以 det A=1-2(-6)=13。",
            "答案：13。"
          ]
        },
        {
          type: "证明题",
          title: "相同行行列式为零",
          stem: "证明若行列式有两行相同，则行列式为 0。",
          hint: "交换这两行后，行列式既不变又变号。",
          answer: [
            "设行列式 D 有两行相同。",
            "交换这两行，由行列式性质，行列式变为 -D。",
            "但两行相同，交换后行列式本身没有变化，仍为 D。",
            "所以 D=-D，得 D=0。"
          ]
        },
        {
          type: "综合题",
          title: "用行列式判断可逆",
          stem: "判断 A=[[1,1,1],[1,2,3],[1,4,9]] 是否可逆。",
          hint: "这是 Vandermonde 型，也可以直接消元求 det。",
          answer: [
            "对行做变换：R2←R2-R1，R3←R3-R1，行列式不变。",
            "得到 [[1,1,1],[0,1,2],[0,3,8]]。",
            "det A=1·det[[1,2],[3,8]]=8-6=2。",
            "det A≠0，所以 A 可逆。"
          ]
        }
      ]
    },
    {
      id: "linear-system",
      chapter: "連立一次方程式・階数",
      problems: [
        {
          type: "计算题",
          title: "解线性方程组",
          stem: "解方程组 x+y+z=1，2x+y-z=0，x-y+2z=3。",
          hint: "用消元法。",
          answer: [
            "由第一式 x=1-y-z。",
            "代入第二式：2(1-y-z)+y-z=0，得 y+3z=2。",
            "代入第三式：(1-y-z)-y+2z=3，得 -2y+z=2。",
            "解 y+3z=2，-2y+z=2，得 z=6/7，y=-4/7，x=5/7。"
          ]
        },
        {
          type: "证明题",
          title: "齐次方程非零解条件",
          stem: "证明 n 元齐次方程 Ax=0 有非零解当且仅当 rank A<n。",
          hint: "把 A 化为阶梯形，比较主元变量和自由变量。",
          answer: [
            "行初等变换不改变齐次方程组的解集结构。",
            "若 rank A=r，则阶梯形中有 r 个主元变量。",
            "未知数有 n 个，自由变量数为 n-r。",
            "存在非零解当且仅当自由变量数 >0，即 n-r>0，也就是 rank A<n。"
          ]
        },
        {
          type: "综合题",
          title: "参数方程组讨论",
          stem: "讨论方程组 x+y=1，2x+2y=a 何时有解。",
          hint: "第二个方程左边是第一个的 2 倍。",
          answer: [
            "第一式乘 2 得 2x+2y=2。",
            "若第二式要与第一式相容，必须 a=2。",
            "当 a=2 时，两个方程等价，有无穷多解：令 y=t，则 x=1-t。",
            "当 a≠2 时，出现矛盾，无解。"
          ]
        }
      ]
    },
    {
      id: "vector-space",
      chapter: "ベクトル空間",
      problems: [
        {
          type: "计算题",
          title: "判断线性无关",
          stem: "判断 v1=(1,0,1), v2=(0,1,1), v3=(1,1,2) 是否线性无关。",
          hint: "观察 v3 是否等于 v1+v2。",
          answer: [
            "计算 v1+v2=(1,1,2)。",
            "这正好等于 v3。",
            "所以 v1+v2-v3=0 是非平凡线性关系。",
            "因此这三个向量线性相关，不线性无关。"
          ]
        },
        {
          type: "证明题",
          title: "零向量组必线性相关",
          stem: "证明包含零向量的向量组一定线性相关。",
          hint: "让零向量前面的系数取 1，其余取 0。",
          answer: [
            "设向量组中含有 0 向量。",
            "取该零向量的系数为 1，其余向量系数为 0。",
            "得到一个非平凡线性组合，其和仍为 0。",
            "根据线性相关定义，该向量组线性相关。"
          ]
        },
        {
          type: "综合题",
          title: "子空间判断",
          stem: "判断 W={(x,y,z) | x+y+z=0} 是否为 R³ 的子空间。",
          hint: "检查零向量、加法封闭、数乘封闭。",
          answer: [
            "零向量 (0,0,0) 满足 0+0+0=0，所以属于 W。",
            "若 u=(x1,y1,z1), v=(x2,y2,z2) 属于 W，则两组三个坐标和都为 0。",
            "u+v 的坐标和也是 0，所以加法封闭。",
            "对任意数 c，cu 的坐标和为 c(x1+y1+z1)=0，所以数乘封闭。因此 W 是子空间。"
          ]
        }
      ]
    },
    {
      id: "linear-map",
      chapter: "線形写像",
      problems: [
        {
          type: "计算题",
          title: "求核与像",
          stem: "设 T(x,y,z)=(x+y, y+z)。求 Ker T。",
          hint: "令 x+y=0，y+z=0。",
          answer: [
            "Ker T 满足 T(x,y,z)=(0,0)。",
            "所以 x+y=0，y+z=0。",
            "令 y=t，则 x=-t，z=-t。",
            "Ker T={t(-1,1,-1) | t∈R}。"
          ]
        },
        {
          type: "证明题",
          title: "核是子空间",
          stem: "证明线性映射 T:V→W 的核 Ker T 是 V 的子空间。",
          hint: "用线性性证明加法和数乘封闭。",
          answer: [
            "首先 T(0)=0，所以 0∈Ker T。",
            "若 u,v∈Ker T，则 T(u)=0，T(v)=0。",
            "对任意 α,β，有 T(αu+βv)=αT(u)+βT(v)=0。",
            "所以 αu+βv∈Ker T，故 Ker T 是子空间。"
          ]
        },
        {
          type: "综合题",
          title: "单射判定",
          stem: "设 T:V→W 为线性映射。证明 T 单射当且仅当 Ker T={0}。",
          hint: "用 T(x)=T(y) 等价于 T(x-y)=0。",
          answer: [
            "先设 T 单射。若 x∈Ker T，则 T(x)=0=T(0)，由单射得 x=0，所以 Ker T={0}。",
            "反过来设 Ker T={0}。",
            "若 T(x)=T(y)，则 T(x-y)=T(x)-T(y)=0。",
            "所以 x-y∈Ker T，只能 x-y=0，即 x=y。因此 T 单射。"
          ]
        }
      ]
    },
    {
      id: "eigen",
      chapter: "固有値・対角化",
      problems: [
        {
          type: "计算题",
          title: "求特征值",
          stem: "求 A=[[2,1],[0,3]] 的特征值。",
          hint: "解 det(A-λI)=0。",
          answer: [
            `A-λI=[[2-λ,1],[0,3-λ]]。`,
            "det(A-λI)=(2-λ)(3-λ)。",
            "令其为 0，得 λ=2 或 λ=3。",
            "特征值为 2, 3。"
          ]
        },
        {
          type: "证明题",
          title: "特征值方程",
          stem: "证明 λ 是 A 的特征值当且仅当 det(A-λI)=0。",
          hint: "把 Ax=λx 改写成齐次方程。",
          answer: [
            "λ 是 A 的特征值，定义是存在非零向量 x，使 Ax=λx。",
            "这等价于 (A-λI)x=0 有非零解。",
            "齐次方程有非零解当且仅当系数矩阵不可逆。",
            "A-λI 不可逆当且仅当 det(A-λI)=0。"
          ]
        },
        {
          type: "综合题",
          title: "判断可对角化",
          stem: "判断 A=[[2,0],[0,3]] 是否可对角化，并说明理由。",
          hint: "对角矩阵本身已经是对角形式。",
          answer: [
            "A 已经是对角矩阵。",
            "取 P=I，则 P^-1AP=A。",
            "因此 A 与对角矩阵相似。",
            "所以 A 可对角化。"
          ]
        }
      ]
    }
  ]
};

function addExamProblem(subject, chapterId, problem) {
  const chapter = examProblems[subject].find(item => item.id === chapterId);
  if (chapter) chapter.problems.push(problem);
}

function augmentExamProblems() {
  addExamProblem("calculus", "limits", {
    type: "综合题",
    title: "图像判断连续性",
    stem: `下图表示函数 f 在 x=a 附近的形状。判断 f 在 a 处是否连续，并说明理由。<div class="mini-plot"><svg viewBox="0 0 220 120" role="img" aria-label="piecewise graph"><line x1="10" y1="90" x2="210" y2="90"/><line x1="110" y1="15" x2="110" y2="105"/><path d="M20 80 C60 60, 80 45, 105 35" fill="none"/><path d="M115 65 C145 55, 170 45, 205 25" fill="none"/><circle cx="110" cy="35" r="5" fill="white"/><circle cx="110" cy="65" r="5"/></svg></div>`,
    hint: "看左极限、右极限、函数值三者是否相同。",
    answer: [
      "从图像看，x→a^- 时函数趋向空心点高度；x→a^+ 时函数趋向右侧曲线起点高度。",
      "两个高度不同，因此左右极限不相等。",
      "即使实心点给出了 f(a)，也无法弥补左右极限不同的问题。",
      "所以 f 在 a 处不连续。"
    ]
  });

  addExamProblem("calculus", "derivative", {
    type: "计算题",
    title: "参数方程求导",
    stem: "设 x=t²+1，y=t³-t。求 dy/dx，并计算 t=1 时的切线斜率。",
    hint: "先求 dy/dt 和 dx/dt，再相除。",
    answer: [
      "dx/dt=2t，dy/dt=3t²-1。",
      `当 dx/dt≠0 时，${frac("dy", "dx")}=${frac("dy/dt", "dx/dt")}=${frac("3t<sup>2</sup>-1", "2t")}。`,
      "t=1 时，dy/dx=(3-1)/2=1。",
      "所以切线斜率为 1。"
    ]
  });

  addExamProblem("calculus", "taylor", {
    type: "综合题",
    title: "用 Taylor 判断近似误差",
    stem: "用二阶 Taylor 展开近似 ln(1.1)，并说明误差大约是什么阶。",
    hint: "令 x=0.1，使用 ln(1+x)=x-x²/2+O(x³)。",
    answer: [
      "已知 ln(1+x)=x-x²/2+O(x³)。",
      "代入 x=0.1，得 ln(1.1)≈0.1-0.01/2=0.095。",
      "被忽略的项从 x³ 开始，因此误差量级是 O(0.1³)。",
      "考试中可写：误差约为三阶小量。"
    ]
  });

  addExamProblem("calculus", "integral", {
    type: "图表题",
    title: "由图像写定积分",
    stem: `下图阴影面积由 y=f(x) 与 x 轴围成。若 f(x)=x(2-x)，写出面积积分并计算。<div class="mini-plot"><svg viewBox="0 0 220 120" role="img" aria-label="area graph"><line x1="20" y1="95" x2="205" y2="95"/><line x1="35" y1="15" x2="35" y2="105"/><path d="M35 95 Q110 25 185 95" fill="rgba(24,115,107,.18)" stroke="currentColor"/><text x="32" y="112">0</text><text x="178" y="112">2</text></svg></div>`,
    hint: "面积就是 0 到 2 上 f(x) 的定积分。",
    answer: [
      `面积 S=${intg("0", "2")}x(2-x)dx。`,
      `展开为 ${intg("0", "2")}(2x-x<sup>2</sup>)dx。`,
      `原函数为 x<sup>2</sup>-${frac("x<sup>3</sup>", "3")}。`,
      `代入 0 到 2，S=4-${frac("8", "3")}=${frac("4", "3")}。`
    ]
  });

  addExamProblem("calculus", "multivariable", {
    type: "综合题",
    title: "约束极值",
    stem: "在约束 x+y=1 下，求 f(x,y)=x²+y² 的最小值。",
    hint: "代入 y=1-x，把二元问题变成一元。",
    answer: [
      "由约束 y=1-x。",
      "代入 f=x²+(1-x)²=2x²-2x+1。",
      "配方：f=2(x-1/2)²+1/2。",
      "最小值为 1/2，在 x=y=1/2 处取得。"
    ]
  });

  addExamProblem("linear", "matrix", {
    type: "数据题",
    title: "表格数据写成矩阵",
    stem: `某班两次小测成绩如下，行表示学生，列表示第1次、第2次。写出成绩矩阵，并求每名学生总分。<table class="mini-table"><tr><th></th><th>测验1</th><th>测验2</th></tr><tr><td>A</td><td>8</td><td>9</td></tr><tr><td>B</td><td>6</td><td>7</td></tr><tr><td>C</td><td>9</td><td>8</td></tr></table>`,
    hint: "成绩矩阵乘以列向量 [1,1]^T。",
    answer: [
      "成绩矩阵 M=[[8,9],[6,7],[9,8]]。",
      "总分向量等于 M·[1,1]^T。",
      "计算得 [17,13,17]^T。",
      "所以 A=17，B=13，C=17。"
    ]
  });

  addExamProblem("linear", "determinant", {
    type: "计算题",
    title: "含参数行列式",
    stem: "求 det [[a,1],[1,a]]，并判断何时矩阵不可逆。",
    hint: "二阶行列式 ad-bc。",
    answer: [
      "行列式为 a·a-1·1=a²-1。",
      "分解：a²-1=(a-1)(a+1)。",
      "矩阵不可逆当且仅当行列式为 0。",
      "所以 a=1 或 a=-1 时不可逆。"
    ]
  });

  addExamProblem("linear", "linear-system", {
    type: "综合题",
    title: "用秩判断解的个数",
    stem: "设 A 为 3×4 矩阵，rank A=3。讨论齐次方程 Ax=0 的解。",
    hint: "未知数个数 n=4，秩 r=3，自由变量数 n-r。",
    answer: [
      "齐次方程 Ax=0 的未知数有 4 个。",
      "rank A=3，说明主元变量有 3 个。",
      "自由变量数为 4-3=1。",
      "因此存在非零解，解空间维数为 1。"
    ]
  });

  addExamProblem("linear", "vector-space", {
    type: "证明题",
    title: "线性无关组的子组",
    stem: "证明：线性无关向量组的任意子组仍线性无关。",
    hint: "对子组的线性组合补上其余向量的 0 系数。",
    answer: [
      "设原向量组线性无关。",
      "取其中任意子组，若该子组有线性组合等于 0。",
      "把不在子组中的向量系数全部补为 0，就得到原向量组的线性组合等于 0。",
      "由于原组线性无关，所有系数都为 0，所以子组也线性无关。"
    ]
  });

  addExamProblem("linear", "linear-map", {
    type: "计算题",
    title: "线性变换矩阵表示",
    stem: "设 T(x,y)=(x+2y,3x-y)。求 T 在标准基下的矩阵。",
    hint: "矩阵的列是 T(e1), T(e2)。",
    answer: [
      "标准基 e1=(1,0)，e2=(0,1)。",
      "T(e1)=(1,3)，T(e2)=(2,-1)。",
      "把它们作为矩阵的列。",
      "矩阵为 [[1,2],[3,-1]]。"
    ]
  });

  addExamProblem("linear", "eigen", {
    type: "综合题",
    title: "对角化计算",
    stem: "设 A=[[1,0],[0,2]]。取 P=[[1,1],[0,1]]，计算 P^-1AP 是否为对角矩阵。",
    hint: "先求 P^-1，再按顺序乘。",
    answer: [
      "P 是上三角矩阵，P^-1=[[1,-1],[0,1]]。",
      "先算 AP=[[1,1],[0,2]]。",
      "再算 P^-1(AP)=[[1,-1],[0,1]][[1,1],[0,2]]=[[1,-1],[0,2]]。",
      "结果不是对角矩阵，因此这个 P 不能把 A 对角化。"
    ]
  });
}

augmentExamProblems();

const stopwords = new Set("の に を は が と で から まで こと ため する ある いる これ それ 的 了 和 是 在 与 及 或 一个 一种 进行 可以 需要 通过 说明 重点 课程 作业 要求".split(" "));
const sensitiveRules = [
  { name: "个人信息", pattern: /(\d{11}|身份证|住址|家庭地址|银行卡|手机号|電話番号|住所|学生番号)/g, level: "danger", text: "材料里可能包含个人隐私或学籍信息，交给外部 AI 前应删除或打码。" },
  { name: "直接代写", pattern: /(直接写|帮我写完|一键生成|不要被发现|代写|丸写し|コピペ|写すだけ|解答だけ)/g, level: "warn", text: "这类表达容易触发学术诚信风险，建议改成让 AI 检查推导、解释定理条件或出类似题。" },
  { name: "引用风险", pattern: /(レポート|論文|参考文献|引用|出处|報告書|課題)/g, level: "warn", text: "报告或课题类任务要核对来源，避免 AI 编造引用或替你完成核心论证。" },
  { name: "考试风险", pattern: /(試験中|持ち込み不可|カンニング|替考|考试中|作弊)/g, level: "danger", text: "考试相关材料要遵守大学规定，不要把工具用于实时答题或规避监考。" }
];

function setDefaultDate() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  examDate.value = formatLocalDate(date);
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getMatchedTerms(text) {
  return glossary
    .filter(term => [term.jp, term.cn, term.kana].some(value => text.includes(value)))
    .map(term => ({ name: `${term.jp} → ${term.cn}`, count: 1, term }));
}

function tokenize(text) {
  return Array.from(text.matchAll(/[\u4e00-\u9fa5ぁ-んァ-ヶー]{2,12}|[a-zA-Z][a-zA-Z0-9_-]{2,}/g))
    .map(match => match[0].toLowerCase())
    .filter(token => !stopwords.has(token) && token.length > 1);
}

function getTopics(text) {
  const matched = getMatchedTerms(text);
  const matchedNames = new Set(matched.map(item => item.term.jp));
  const counts = new Map();
  tokenize(text).forEach(token => {
    if ([...matchedNames].some(name => name.includes(token) || token.includes(name))) return;
    counts.set(token, (counts.get(token) || 0) + 1);
  });
  const inferred = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12 - matched.length)
    .map(([name, count]) => ({ name, count }));
  return [...matched.slice(0, 12), ...inferred].slice(0, 12);
}

function splitSentences(text) {
  return text
    .split(/[。！？!?；;\n]+/)
    .map(line => line.trim())
    .filter(line => line.length > 8);
}

function analyzeRisk(text) {
  const cards = [];
  let score = 8;
  sensitiveRules.forEach(rule => {
    if (!text.match(rule.pattern)) return;
    score += rule.level === "danger" ? 34 : 18;
    cards.push({ title: rule.name, level: rule.level, body: rule.text });
  });

  if (text.length < 120) {
    score += 10;
    cards.push({ title: "材料过短", level: "warn", body: "大学数学题如果只贴结论，AI 容易漏掉定义域、定理条件和证明要求。" });
  }

  if (!cards.length) {
    cards.push({ title: "风险较低", level: "ok", body: "没有发现明显隐私、代写或考试风险。适合让 AI 做术语解释、推导检查和类似题训练。" });
  }

  return { score: Math.min(score, 100), cards };
}

function readiness(text, topics, riskScore) {
  const lengthScore = Math.min(text.length / 1000, 1) * 32;
  const topicScore = Math.min(topics.length / 10, 1) * 34;
  const mathSignal = /(定義|定理|証明|極限|導関数|積分|行列|固有値|基底|対角化|条件|证明|定理|矩阵|积分|导数)/.test(text) ? 24 : 8;
  const riskPenalty = riskScore > 70 ? 10 : riskScore > 40 ? 5 : 0;
  return Math.max(18, Math.round(lengthScore + topicScore + mathSignal - riskPenalty));
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function renderTopics(topics) {
  topicCloud.innerHTML = "";
  topicCloud.classList.toggle("empty", topics.length === 0);
  if (!topics.length) {
    topicCloud.textContent = "没有提取到稳定知识点";
    return;
  }
  topics.forEach(topic => {
    const span = document.createElement("span");
    span.className = "topic";
    span.textContent = topic.term ? topic.name : `${topic.name} x${topic.count}`;
    topicCloud.appendChild(span);
  });
}

function renderRisks(result) {
  riskCards.innerHTML = "";
  riskMeter.value = result.score;
  riskBadge.textContent = result.score > 70 ? "高风险" : result.score > 40 ? "中风险" : "低风险";
  result.cards.forEach(card => {
    const el = document.createElement("article");
    el.className = `risk-card ${card.level}`;
    el.innerHTML = `<h3>${card.title}</h3><p>${card.body}</p>`;
    riskCards.appendChild(el);
  });
}

function daysUntilExam() {
  const [year, month, day] = examDate.value.split("-").map(Number);
  const selected = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  selected.setHours(0, 0, 0, 0);
  const days = Math.ceil((selected - today) / 86400000);
  return Math.max(1, Math.min(days || 7, 14));
}

function renderPlan(topics) {
  const days = daysUntilExam();
  const minutes = Number(studyMinutes.value);
  examBadge.textContent = `${days} 天复习`;
  planGrid.innerHTML = "";
  const fallback = ["日语术语对照", "定义和定理条件", "计算例题", "证明题模板", "错题订正", "限时演算", "考前总复盘"];
  for (let i = 0; i < days; i += 1) {
    const topic = topics[i % Math.max(topics.length, 1)]?.term?.jp || topics[i % Math.max(topics.length, 1)]?.name || fallback[i % fallback.length];
    const card = document.createElement("article");
    card.className = "day-card";
    card.innerHTML = `<strong>第 ${i + 1} 天</strong><p>${minutes} 分钟：复习「${topic}」，写出日语术语、中文含义、一个例题和一个易错点。</p>`;
    planGrid.appendChild(card);
  }
}

function makeQuiz(topics) {
  const matchedTerms = topics.filter(topic => topic.term).map(topic => topic.term);
  const terms = matchedTerms.length ? matchedTerms : glossary.filter(term => term.subject === "calculus" || term.subject === "linear").slice(0, 5);
  return terms.slice(0, 5).map((term, index) => ({
    q: [
      `围绕「${term.jp}」写一道证明题，并列出第一步要写的定义。`,
      `如果考试要求证明「${term.jp}」相关性质，你会先检查哪些条件？`,
      `请用 4 行以内写出「${term.jp}」证明题的答案骨架。`,
      `围绕「${term.jp}」给出一个反例或说明为什么条件不能删。`,
      `把「${term.jp}」对应到同济章节，并写一道同济风格证明题。`
    ][index % 5],
    a: `提示：${term.jp} = ${term.cn}；先写定义，再写定理条件，最后写推导。国内通常对应「${term.domestic}」。`
  }));
}

function renderQuiz(topics) {
  quizList.innerHTML = "";
  makeQuiz([...topics].sort(() => Math.random() - 0.5)).forEach(item => {
    const card = document.createElement("article");
    card.className = "quiz-item";
    card.innerHTML = `<p>${item.q}</p><button type="button">看提示</button><div class="answer">${item.a}</div>`;
    card.querySelector("button").addEventListener("click", () => card.classList.toggle("open"));
    quizList.appendChild(card);
  });
}

function renderGlossary() {
  const subject = subjectFilter.value;
  const query = termSearch.value.trim().toLowerCase();
  const visible = glossary.filter(term => {
    const subjectOk = subject === "all" || term.subject === subject;
    const haystack = `${term.jp} ${term.kana} ${term.cn} ${term.domestic} ${term.note}`.toLowerCase();
    return subjectOk && (!query || haystack.includes(query));
  });

  termGrid.innerHTML = "";
  visible.forEach(term => {
    const card = document.createElement("article");
    card.className = "term-card";
    card.innerHTML = `
      <div class="term-title">
        <strong>${term.jp}</strong>
        <span>${term.kana}</span>
      </div>
      <p class="term-cn">${term.cn}</p>
      <p><b>国内对应：</b>${term.domestic}</p>
      <p>${term.note}</p>
    `;
    termGrid.appendChild(card);
  });

  if (!visible.length) {
    termGrid.innerHTML = `<p class="empty-note">没有找到匹配术语。可以试试日语、假名或中文关键词。</p>`;
  }
}

function renderCourseMap() {
  courseMap.innerHTML = "";
  courseMappings.forEach(item => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <strong>${item.jp}</strong>
      <span>${item.cn}</span>
      <p>${item.scope}</p>
    `;
    courseMap.appendChild(card);
  });
}

function renderChapterOptions() {
  const book = textbooks[textbookFilter.value];
  chapterFilter.innerHTML = "";
  book.chapters.forEach(chapter => {
    const option = document.createElement("option");
    option.value = chapter.id;
    option.textContent = chapter.name;
    chapterFilter.appendChild(option);
  });
  renderBookChapter();
}

function renderBookChapter() {
  const book = textbooks[textbookFilter.value];
  const chapter = book.chapters.find(item => item.id === chapterFilter.value) || book.chapters[0];
  bookNote.innerHTML = `<strong>${book.title}</strong><span>${book.author}</span>`;
  formulaList.innerHTML = "";
  theoremList.innerHTML = "";

  chapter.formulas.forEach(([title, body]) => {
    const card = document.createElement("div");
    card.className = "formula-card";
    card.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    formulaList.appendChild(card);
  });

  chapter.theorems.forEach(([title, body]) => {
    const card = document.createElement("div");
    card.className = "formula-card theorem-card";
    card.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    theoremList.appendChild(card);
  });
}

const graphExamples = [
  { expr: "x^3 - 3*x", range: [-4, 4], tangent: 1, integral: "-1,2" },
  { expr: "sin(x)", range: [-6.28, 6.28], tangent: 0.8, integral: "0,3.14" },
  { expr: "x^2", range: [-4, 4], tangent: 1.5, integral: "0,2" },
  { expr: "exp(-x^2)", range: [-3, 3], tangent: 1, integral: "-1,1" },
  { expr: "log(x)", range: [0.2, 5], tangent: 2, integral: "1,4" }
];
let graphExampleIndex = 0;

function compileExpression(expr) {
  const normalized = expr
    .replace(/\s+/g, "")
    .replace(/π/g, "pi")
    .replace(/\^/g, "**")
    .replace(/\b(sin|cos|tan|asin|acos|atan|sqrt|abs|log|ln|exp|pow|min|max|floor|ceil)\b/g, name => name === "ln" ? "Math.log" : `Math.${name}`)
    .replace(/\bpi\b/gi, "Math.PI")
    .replace(/\be\b/g, "Math.E");
  if (!/^[0-9xX+\-*/().,A-Za-z_]*$/.test(normalized)) throw new Error("表达式里有暂不支持的字符。");
  return new Function("x", `"use strict"; return ${normalized.replace(/\bX\b/g, "x")};`);
}

function numericalDerivative(fn, x) {
  const h = Math.max(1e-5, Math.abs(x) * 1e-5);
  return (fn(x + h) - fn(x - h)) / (2 * h);
}

function integrateSimpson(fn, a, b) {
  const n = 240;
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const h = (end - start) / n;
  let total = fn(start) + fn(end);
  for (let i = 1; i < n; i += 1) total += fn(start + i * h) * (i % 2 === 0 ? 2 : 4);
  const value = total * h / 3;
  return a <= b ? value : -value;
}

function sampleFunction(fn, xMin, xMax, count = 700) {
  const points = [];
  for (let i = 0; i <= count; i += 1) {
    const x = xMin + (xMax - xMin) * i / count;
    const y = fn(x);
    if (Number.isFinite(y)) points.push({ x, y });
  }
  return points;
}

function findGraphFeatures(fn, xMin, xMax) {
  const roots = [];
  const extrema = [];
  const samples = sampleFunction(fn, xMin, xMax, 260);
  for (let i = 1; i < samples.length; i += 1) {
    if (samples[i - 1].y * samples[i].y < 0) roots.push((samples[i - 1].x + samples[i].x) / 2);
  }
  for (let i = 2; i < samples.length - 2; i += 1) {
    const left = numericalDerivative(fn, samples[i - 1].x);
    const right = numericalDerivative(fn, samples[i + 1].x);
    if (Number.isFinite(left) && Number.isFinite(right) && left * right < 0) extrema.push(samples[i].x);
  }
  return {
    roots: roots.slice(0, 5),
    extrema: extrema.filter((x, index, arr) => index === 0 || Math.abs(x - arr[index - 1]) > (xMax - xMin) / 20).slice(0, 5)
  };
}

function drawPath(ctx, points, toScreen, color, width = 3, dash = []) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash(dash);
  ctx.beginPath();
  let started = false;
  points.forEach(point => {
    const p = toScreen(point.x, point.y);
    if (!started) {
      ctx.moveTo(p.sx, p.sy);
      started = true;
    } else {
      ctx.lineTo(p.sx, p.sy);
    }
  });
  ctx.stroke();
  ctx.restore();
}

function drawGraph() {
  const canvas = functionCanvas;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth || 900;
  const cssHeight = Math.max(340, Math.min(560, cssWidth * 0.58));
  canvas.style.height = `${cssHeight}px`;
  canvas.width = Math.floor(cssWidth * dpr);
  canvas.height = Math.floor(cssHeight * dpr);
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, cssWidth, cssHeight);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  let fn;
  try {
    fn = compileExpression(functionInput.value);
  } catch (error) {
    graphReadout.innerHTML = `<span class="danger-text">${error.message}</span>`;
    return;
  }

  let xMin = Number(xMinInput.value);
  let xMax = Number(xMaxInput.value);
  if (!Number.isFinite(xMin) || !Number.isFinite(xMax) || xMin >= xMax) {
    xMin = -4;
    xMax = 4;
  }
  const points = sampleFunction(fn, xMin, xMax);
  const derivativePoints = sampleFunction(x => numericalDerivative(fn, x), xMin, xMax);
  const allY = [...points, ...(showDerivative.checked ? derivativePoints : [])].map(point => point.y);
  let yMin = Math.min(...allY);
  let yMax = Math.max(...allY);
  if (!Number.isFinite(yMin) || !Number.isFinite(yMax) || yMin === yMax) {
    yMin = -5;
    yMax = 5;
  }
  const paddingY = (yMax - yMin) * 0.14 || 1;
  yMin -= paddingY;
  yMax += paddingY;

  const pad = { left: 46, right: 18, top: 18, bottom: 38 };
  const plotW = cssWidth - pad.left - pad.right;
  const plotH = cssHeight - pad.top - pad.bottom;
  const toScreen = (x, y) => ({
    sx: pad.left + (x - xMin) / (xMax - xMin) * plotW,
    sy: pad.top + (yMax - y) / (yMax - yMin) * plotH
  });

  ctx.strokeStyle = "#dfe5ee";
  ctx.lineWidth = 1;
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "#687184";
  for (let i = 0; i <= 6; i += 1) {
    const x = xMin + (xMax - xMin) * i / 6;
    const p = toScreen(x, 0);
    ctx.beginPath();
    ctx.moveTo(p.sx, pad.top);
    ctx.lineTo(p.sx, cssHeight - pad.bottom);
    ctx.stroke();
    ctx.fillText(x.toFixed(1), p.sx - 12, cssHeight - 12);
  }
  for (let i = 0; i <= 5; i += 1) {
    const y = yMin + (yMax - yMin) * i / 5;
    const p = toScreen(0, y);
    ctx.beginPath();
    ctx.moveTo(pad.left, p.sy);
    ctx.lineTo(cssWidth - pad.right, p.sy);
    ctx.stroke();
    ctx.fillText(y.toFixed(1), 6, p.sy + 4);
  }

  const axisX = toScreen(0, 0).sx;
  const axisY = toScreen(0, 0).sy;
  ctx.strokeStyle = "#18212f";
  ctx.lineWidth = 1.5;
  if (axisY >= pad.top && axisY <= cssHeight - pad.bottom) {
    ctx.beginPath();
    ctx.moveTo(pad.left, axisY);
    ctx.lineTo(cssWidth - pad.right, axisY);
    ctx.stroke();
  }
  if (axisX >= pad.left && axisX <= cssWidth - pad.right) {
    ctx.beginPath();
    ctx.moveTo(axisX, pad.top);
    ctx.lineTo(axisX, cssHeight - pad.bottom);
    ctx.stroke();
  }

  const [iaRaw, ibRaw] = integralInput.value.split(",").map(value => Number(value.trim()));
  if (showIntegral.checked && Number.isFinite(iaRaw) && Number.isFinite(ibRaw)) {
    const a = Math.max(xMin, Math.min(xMax, iaRaw));
    const b = Math.max(xMin, Math.min(xMax, ibRaw));
    const shade = sampleFunction(fn, Math.min(a, b), Math.max(a, b), 220);
    ctx.fillStyle = "rgba(24, 115, 107, .18)";
    ctx.beginPath();
    const start = toScreen(Math.min(a, b), 0);
    ctx.moveTo(start.sx, start.sy);
    shade.forEach(point => {
      const p = toScreen(point.x, point.y);
      ctx.lineTo(p.sx, p.sy);
    });
    const end = toScreen(Math.max(a, b), 0);
    ctx.lineTo(end.sx, end.sy);
    ctx.closePath();
    ctx.fill();
  }

  drawPath(ctx, points, toScreen, "#18736b", 3);
  if (showDerivative.checked) drawPath(ctx, derivativePoints, toScreen, "#2e65b8", 2, [7, 5]);

  const x0 = Number(tangentInput.value);
  const y0 = fn(x0);
  const slope = numericalDerivative(fn, x0);
  if (showTangent.checked && Number.isFinite(x0) && Number.isFinite(y0) && Number.isFinite(slope)) {
    const tangent = sampleFunction(x => y0 + slope * (x - x0), xMin, xMax, 80);
    drawPath(ctx, tangent, toScreen, "#c85b2b", 2, [4, 4]);
    const p = toScreen(x0, y0);
    ctx.fillStyle = "#c85b2b";
    ctx.beginPath();
    ctx.arc(p.sx, p.sy, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  const features = findGraphFeatures(fn, xMin, xMax);
  if (showCritical.checked) {
    [...features.roots.map(x => ({ x, kind: "root" })), ...features.extrema.map(x => ({ x, kind: "ext" }))].forEach(item => {
      const y = item.kind === "root" ? 0 : fn(item.x);
      const p = toScreen(item.x, y);
      ctx.fillStyle = item.kind === "root" ? "#18212f" : "#f1c756";
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const integralValue = Number.isFinite(iaRaw) && Number.isFinite(ibRaw) ? integrateSimpson(fn, iaRaw, ibRaw) : null;
  graphReadout.innerHTML = `
    <span><b>f(${Number.isFinite(x0) ? x0 : 0})</b> = ${Number.isFinite(y0) ? y0.toFixed(4) : "不可算"}</span>
    <span><b>f′(${Number.isFinite(x0) ? x0 : 0})</b> ≈ ${Number.isFinite(slope) ? slope.toFixed(4) : "不可算"}</span>
    <span><b>积分</b> ≈ ${Number.isFinite(integralValue) ? integralValue.toFixed(4) : "未设置"}</span>
    <span><b>零点</b> ${features.roots.length ? features.roots.map(x => x.toFixed(2)).join(", ") : "未检测到"}</span>
    <span><b>极值候选</b> ${features.extrema.length ? features.extrema.map(x => x.toFixed(2)).join(", ") : "未检测到"}</span>
  `;
}

function loadGraphExample() {
  graphExampleIndex = (graphExampleIndex + 1) % graphExamples.length;
  const item = graphExamples[graphExampleIndex];
  functionInput.value = item.expr;
  xMinInput.value = item.range[0];
  xMaxInput.value = item.range[1];
  tangentInput.value = item.tangent;
  integralInput.value = item.integral;
  drawGraph();
}

function renderDomesticMap() {
  const rows = domesticSectionMaps[domesticFilter.value];
  domesticMap.innerHTML = "";
  rows.forEach(row => {
    const card = document.createElement("article");
    card.className = "domestic-card";
    const sectionRows = row.sections
      .map(([jp, cn]) => `<tr><td>${jp}</td><td>${cn}</td></tr>`)
      .join("");
    card.innerHTML = `
      <div class="domestic-head">
        <strong>${row.jp}</strong>
        <span>${row.cnChapter}</span>
      </div>
      <table>
        <thead><tr><th>日本教材小节</th><th>国内教材小节</th></tr></thead>
        <tbody>${sectionRows}</tbody>
      </table>
    `;
    domesticMap.appendChild(card);
  });
}

function renderProofOptions() {
  const rows = proofBanks[proofSubjectFilter.value];
  proofChapterFilter.innerHTML = "";
  rows.forEach(row => {
    const option = document.createElement("option");
    option.value = row.id;
    option.textContent = row.chapter;
    proofChapterFilter.appendChild(option);
  });
  renderProofTrainer();
}

function renderProofTrainer() {
  const rows = proofBanks[proofSubjectFilter.value];
  const item = rows.find(row => row.id === proofChapterFilter.value) || rows[0];
  const steps = item.proofSteps.map(step => `<li>${step}</li>`).join("");
  const questions = item.questions.map((question, index) => `
    <article class="proof-question">
      <span>题 ${index + 1}</span>
      <strong>${question.title}</strong>
      <p>${question.task}</p>
      <button type="button">看证明提示</button>
      <div class="proof-hint">${question.hint}</div>
    </article>
  `).join("");

  proofTrainer.innerHTML = `
    <div class="proof-overview">
      <div>
        <p class="label">${item.domestic}</p>
        <h3>${item.chapter}</h3>
        <p>${item.pattern}</p>
      </div>
    </div>
    <div class="proof-layout">
      <article class="proof-steps">
        <p class="label">证明过程参考</p>
        <ol>${steps}</ol>
      </article>
      <div class="proof-questions">${questions}</div>
    </div>
  `;

  proofTrainer.querySelectorAll(".proof-question button").forEach(button => {
    button.addEventListener("click", () => button.parentElement.classList.toggle("open"));
  });
}

function renderExamOptions() {
  const rows = examProblems[examSubjectFilter.value];
  examChapterFilter.innerHTML = "";
  rows.forEach(row => {
    const option = document.createElement("option");
    option.value = row.id;
    option.textContent = row.chapter;
    examChapterFilter.appendChild(option);
  });
  renderExamBank();
}

function renderExamBank() {
  const rows = examProblems[examSubjectFilter.value];
  const chapter = rows.find(row => row.id === examChapterFilter.value) || rows[0];
  const selectedType = examTypeFilter.value;
  const problems = chapter.problems.filter(problem => selectedType === "all" || problem.type === selectedType);

  examBank.innerHTML = problems.map((problem, index) => {
    const answerSteps = problem.answer.map((step, stepIndex) => `<li><b>Step ${stepIndex + 1}</b><span>${step}</span></li>`).join("");
    return `
      <article class="exam-card">
        <div class="exam-meta">
          <span>${problem.type}</span>
          <small>${chapter.chapter} · 题 ${index + 1}</small>
        </div>
        <h3>${problem.title}</h3>
        <p class="exam-stem">${problem.stem}</p>
        <div class="exam-actions">
          <button type="button" data-action="hint">看提示</button>
          <button type="button" data-action="answer">看详细答案</button>
        </div>
        <div class="exam-hint">${problem.hint}</div>
        <ol class="exam-answer">${answerSteps}</ol>
      </article>
    `;
  }).join("");

  if (!problems.length) {
    examBank.innerHTML = `<p class="empty-note">这个章节暂时没有该题型，可以切换到“全部题型”。</p>`;
  }

  examBank.querySelectorAll("[data-action='hint']").forEach(button => {
    button.addEventListener("click", () => button.closest(".exam-card").classList.toggle("show-hint"));
  });
  examBank.querySelectorAll("[data-action='answer']").forEach(button => {
    button.addEventListener("click", () => button.closest(".exam-card").classList.toggle("show-answer"));
  });
}

function renderCourseGuide() {
  const guide = onlineCourseGuides[courseFilter.value];
  const strategy = guide.strategy
    .map(([label, body]) => `<li><strong>${label}</strong><span>${body}</span></li>`)
    .join("");
  const map = guide.map
    .map(([jp, body]) => `<article class="guide-map-card"><strong>${jp}</strong><p>${body}</p></article>`)
    .join("");
  const cautions = guide.cautions
    .map(item => `<li>${item}</li>`)
    .join("");

  courseGuide.innerHTML = `
    <div class="guide-hero">
      <div>
        <p class="label">主线课程</p>
        <h3>${guide.title}</h3>
        <p>${guide.why}</p>
      </div>
      <a href="${guide.link}" target="_blank" rel="noreferrer">去 B站搜索</a>
    </div>
    <div class="guide-columns">
      <article>
        <p class="label">怎么听</p>
        <ul class="listen-steps">${strategy}</ul>
      </article>
      <article>
        <p class="label">注意</p>
        <ul class="clean-list">${cautions}</ul>
      </article>
    </div>
    <div class="guide-map">${map}</div>
  `;
}

function makeWeaknesses(text) {
  const matched = glossary.filter(term => text.includes(term.jp));
  const hasCalculus = matched.some(term => term.subject === "calculus");
  const hasLinear = matched.some(term => term.subject === "linear");
  return [
    /(定義|条件|仮定|证明|証明)/.test(text)
      ? "材料里出现定义或证明信号，复习时要写清定理适用条件。"
      : "没有明显写出定义或条件，日本大学考试常会扣这部分表达。",
    hasCalculus
      ? "微积分部分要特别注意极限、连续、可微、可积之间的条件差异。"
      : "如果课程包含微积分，建议补充極限、導関数、積分的日中对照。",
    hasLinear
      ? "线代部分要把行列、行列式、階数、固有値这些日语词和中文概念绑定记。"
      : "如果课程包含线代，建议补充行列、階数、基底、固有値等核心术语。"
  ];
}

function update() {
  const text = sourceText.value.trim();
  wordCount.textContent = `${text.length} 字`;
  if (!text) return;

  const topics = getTopics(text);
  const risks = analyzeRisk(text);
  const score = readiness(text, topics, risks.score);
  const sentences = splitSentences(text);
  const summaries = sentences.slice(0, 4);

  readinessScore.textContent = `${score}`;
  readinessScore.style.setProperty("--score", `${score}%`);
  renderTopics(topics);
  renderList(summaryList, summaries.length ? summaries : ["材料较短，先补充课程名、试验范围、讲义里的日语术语和老师强调的定理。"]);
  renderList(weakList, makeWeaknesses(text));
  renderRisks(risks);
  renderPlan(topics);
  renderQuiz(topics);
  coachPrompt.textContent = topics[0]
    ? `不要直接问“${topics[0].term?.jp || topics[0].name}怎么做”。更好的问法：先让我用中文解释这个日语概念，再检查我写出的定义、条件和计算步骤。`
    : "先补充课程主题，我会把它改成适合日本大学数学考试的追问。";
}

sampleBtn.addEventListener("click", () => {
  sourceText.value = sample;
  update();
});

analyzeBtn.addEventListener("click", update);
shuffleQuiz.addEventListener("click", () => renderQuiz(getTopics(sourceText.value)));
sourceText.addEventListener("input", () => {
  wordCount.textContent = `${sourceText.value.trim().length} 字`;
});
examDate.addEventListener("change", update);
studyMinutes.addEventListener("change", update);
subjectFilter.addEventListener("change", renderGlossary);
termSearch.addEventListener("input", renderGlossary);
textbookFilter.addEventListener("change", renderChapterOptions);
chapterFilter.addEventListener("change", renderBookChapter);
domesticFilter.addEventListener("change", renderDomesticMap);
courseFilter.addEventListener("change", renderCourseGuide);
proofSubjectFilter.addEventListener("change", renderProofOptions);
proofChapterFilter.addEventListener("change", renderProofTrainer);
examSubjectFilter.addEventListener("change", renderExamOptions);
examChapterFilter.addEventListener("change", renderExamBank);
examTypeFilter.addEventListener("change", renderExamBank);
plotBtn.addEventListener("click", drawGraph);
plotExampleBtn.addEventListener("click", loadGraphExample);
[functionInput, xMinInput, xMaxInput, tangentInput, integralInput, showDerivative, showTangent, showIntegral, showCritical].forEach(control => {
  control.addEventListener("change", drawGraph);
});
window.addEventListener("resize", drawGraph);

setDefaultDate();
renderGlossary();
renderCourseMap();
renderChapterOptions();
renderDomesticMap();
renderCourseGuide();
renderProofOptions();
renderExamOptions();
sourceText.value = sample;
update();
drawGraph();
