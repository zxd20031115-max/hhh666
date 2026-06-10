window.calculusFormulaArchive = {
  "title": "微积分公式全集",
  "source": "calculus_formulas_extracted.json",
  "chapters": [
    {
      "index": 1,
      "chapter": "第1章 極限・連続関数",
      "source_file": "第一章.pdf",
      "items": [
        {
          "id": "seq-limit-notation",
          "section": "数列の極限",
          "type": "definition",
          "name": "数列の極限記号",
          "aliases": [
            "数列极限"
          ],
          "statement": "数列が一定の値に近づくことを表す。",
          "formula": "a_n \\to \\alpha \\quad (n\\to\\infty),\\qquad \\lim_{n\\to\\infty}a_n=\\alpha",
          "tags": [
            "数列",
            "極限"
          ]
        },
        {
          "id": "seq-infinite-limit",
          "section": "数列の極限",
          "type": "definition",
          "name": "無限大への発散",
          "aliases": [
            "发散到正无穷"
          ],
          "statement": "正の数列では無限大への発散と逆数が0へ収束することが対応する。",
          "formula": "a_n\\to +\\infty,\\qquad a_n>0\\text{ なら }a_n\\to +\\infty \\Longleftrightarrow a_n^{-1}\\to0",
          "tags": [
            "数列",
            "無限大"
          ]
        },
        {
          "id": "eventual-equality",
          "section": "数列の極限",
          "type": "formula",
          "name": "十分大きい番号以後で一致する数列",
          "aliases": [
            "有限项不影响极限"
          ],
          "statement": "有限個の項を変えても極限は変わらない。",
          "formula": "\\exists N,\\ \\forall n\\ge N,\\ a_n=b_n \\Longrightarrow \\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}b_n",
          "tags": [
            "数列",
            "極限"
          ]
        },
        {
          "id": "limit-linear",
          "section": "数列の極限",
          "type": "theorem",
          "name": "和差・定数倍の極限",
          "aliases": [
            "极限四则运算-加减"
          ],
          "statement": "両方の極限が存在するとき成立する。",
          "formula": "\\lim_{n\\to\\infty}(\\alpha a_n+\\beta b_n)=\\alpha\\lim_{n\\to\\infty}a_n+\\beta\\lim_{n\\to\\infty}b_n",
          "tags": [
            "極限",
            "四則演算"
          ]
        },
        {
          "id": "limit-product",
          "section": "数列の極限",
          "type": "theorem",
          "name": "積の極限",
          "aliases": [
            "乘积极限"
          ],
          "statement": "両方の極限が存在するとき成立する。",
          "formula": "\\lim_{n\\to\\infty}a_nb_n=\\left(\\lim_{n\\to\\infty}a_n\\right)\\left(\\lim_{n\\to\\infty}b_n\\right)",
          "tags": [
            "極限",
            "四則演算"
          ]
        },
        {
          "id": "limit-quotient",
          "section": "数列の極限",
          "type": "theorem",
          "name": "商の極限",
          "aliases": [
            "商的极限"
          ],
          "statement": "分母の極限が0でないとき成立する。",
          "formula": "\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=\\frac{\\lim_{n\\to\\infty}a_n}{\\lim_{n\\to\\infty}b_n}\\quad\\left(\\lim_{n\\to\\infty}b_n\\ne0\\right)",
          "tags": [
            "極限",
            "四則演算"
          ]
        },
        {
          "id": "order-limit",
          "section": "数列の極限",
          "type": "theorem",
          "name": "大小関係と極限",
          "aliases": [
            "极限保序"
          ],
          "statement": "十分大きなnで成り立つ大小関係は極限にも残る。",
          "formula": "a_n\\ge b_n\\ (n\\ge N),\\ \\lim a_n,\\lim b_n\\text{ が存在}\\Longrightarrow \\lim a_n\\ge\\lim b_n",
          "tags": [
            "極限",
            "不等式"
          ]
        },
        {
          "id": "squeeze-sequence",
          "section": "数列の極限",
          "type": "theorem",
          "name": "はさみうちの原理",
          "aliases": [
            "夹逼准则",
            "夹挤定理"
          ],
          "statement": "上下から同じ極限で挟めば中央の数列も同じ極限をもつ。",
          "formula": "a_n\\ge c_n\\ge b_n,\\quad \\lim a_n=\\lim b_n=L\\Longrightarrow \\lim c_n=L",
          "tags": [
            "極限",
            "数列"
          ]
        },
        {
          "id": "sqrt-limit",
          "section": "数列の極限",
          "type": "formula",
          "name": "平方根の極限",
          "aliases": [
            "根号极限"
          ],
          "statement": "平方根関数の連続性を使う。",
          "formula": "a_n>0,\\ a_n\\to a>0\\Longrightarrow \\lim_{n\\to\\infty}\\sqrt{a_n}=\\sqrt a",
          "tags": [
            "極限",
            "連続"
          ]
        },
        {
          "id": "nth-root-constant",
          "section": "数列の極限",
          "type": "formula",
          "name": "定数の n 乗根の極限",
          "aliases": [
            "n次根极限"
          ],
          "statement": "正の定数に対する基本極限。",
          "formula": "a>0\\Longrightarrow \\lim_{n\\to\\infty}\\sqrt[n]{a}=\\lim_{n\\to\\infty}a^{1/n}=1",
          "tags": [
            "極限"
          ]
        },
        {
          "id": "monotone-increasing",
          "section": "単調数列",
          "type": "definition",
          "name": "単調増加数列",
          "aliases": [
            "单调递增数列"
          ],
          "statement": "項が減少しない数列。",
          "formula": "a_1\\le a_2\\le a_3\\le\\cdots\\le a_n\\le a_{n+1}\\le\\cdots",
          "tags": [
            "単調数列"
          ]
        },
        {
          "id": "monotone-decreasing",
          "section": "単調数列",
          "type": "definition",
          "name": "単調減少数列",
          "aliases": [
            "单调递减数列"
          ],
          "statement": "項が増加しない数列。",
          "formula": "a_1\\ge a_2\\ge a_3\\ge\\cdots\\ge a_n\\ge a_{n+1}\\ge\\cdots",
          "tags": [
            "単調数列"
          ]
        },
        {
          "id": "monotone-bounded",
          "section": "単調数列",
          "type": "theorem",
          "name": "単調有界定理",
          "aliases": [
            "单调有界准则"
          ],
          "statement": "単調減少で下に有界な場合も収束する。",
          "formula": "\\{a_n\\}\\text{ 単調増加かつ上に有界 }\\Longrightarrow \\{a_n\\}\\text{ は収束}",
          "tags": [
            "単調数列",
            "収束"
          ]
        },
        {
          "id": "function-limit",
          "section": "関数の極限値",
          "type": "definition",
          "name": "関数の極限",
          "aliases": [
            "函数极限"
          ],
          "statement": "xがaに近づくときf(x)がAに近づくことを表す。",
          "formula": "\\lim_{x\\to a}f(x)=A",
          "tags": [
            "関数",
            "極限"
          ]
        },
        {
          "id": "one-sided-limits",
          "section": "関数の極限値",
          "type": "definition",
          "name": "右極限・左極限",
          "aliases": [
            "左右极限"
          ],
          "statement": "両側極限が等しいとき通常の極限が存在する。",
          "formula": "\\lim_{x\\to a+0}f(x),\\qquad \\lim_{x\\to a-0}f(x)",
          "tags": [
            "関数",
            "極限"
          ]
        },
        {
          "id": "function-limit-laws",
          "section": "関数の極限値",
          "type": "theorem",
          "name": "関数極限の四則演算",
          "aliases": [
            "函数极限四则运算"
          ],
          "statement": "積・商についても数列の極限と同様の公式が成り立つ。",
          "formula": "\\lim_{x\\to a}(\\alpha f(x)+\\beta g(x))=\\alpha\\lim_{x\\to a}f(x)+\\beta\\lim_{x\\to a}g(x)",
          "tags": [
            "関数",
            "極限"
          ]
        },
        {
          "id": "sinx-over-x",
          "section": "関数の極限値",
          "type": "formula",
          "name": "三角関数の基本極限",
          "aliases": [
            "重要极限"
          ],
          "statement": "三角関数の極限計算で基本になる。",
          "formula": "\\lim_{x\\to0}\\frac{\\sin x}{x}=1",
          "tags": [
            "三角関数",
            "極限"
          ]
        },
        {
          "id": "continuous-definition",
          "section": "連続関数",
          "type": "definition",
          "name": "点での連続",
          "aliases": [
            "连续定义"
          ],
          "statement": "関数が点aで連続であることの定義。",
          "formula": "\\lim_{x\\to a}f(x)=f(a)",
          "tags": [
            "連続"
          ]
        },
        {
          "id": "continuous-composition",
          "section": "連続関数",
          "type": "theorem",
          "name": "合成関数の連続性",
          "aliases": [
            "复合函数连续性"
          ],
          "statement": "連続関数を合成しても連続。",
          "formula": "g\\text{ が }a\\text{ で連続},\\ f\\text{ が }g(a)\\text{ で連続}\\Longrightarrow f\\circ g\\text{ は }a\\text{ で連続}",
          "tags": [
            "連続",
            "合成関数"
          ]
        },
        {
          "id": "intermediate-value",
          "section": "連続関数",
          "type": "theorem",
          "name": "中間値の定理",
          "aliases": [
            "介值定理"
          ],
          "statement": "閉区間上の連続関数は中間の値をすべて取る。",
          "formula": "f\\in C[a,b],\\ f(a)<k<f(b)\\Longrightarrow \\exists c\\in(a,b),\\ f(c)=k",
          "tags": [
            "連続",
            "閉区間"
          ]
        },
        {
          "id": "extreme-value",
          "section": "連続関数",
          "type": "theorem",
          "name": "最大値・最小値の定理",
          "aliases": [
            "最值定理"
          ],
          "statement": "閉区間上の連続関数は最大値・最小値をもつ。",
          "formula": "f\\in C[a,b]\\Longrightarrow \\exists x_M,x_m\\in[a,b]:\\ f(x_M)=\\max f,\\ f(x_m)=\\min f",
          "tags": [
            "連続",
            "閉区間"
          ]
        }
      ]
    },
    {
      "index": 2,
      "chapter": "第2章 1変数関数の微分法",
      "source_file": "第二章.pdf",
      "items": [
        {
          "id": "derivative-definition",
          "section": "微分係数・導関数",
          "type": "definition",
          "name": "微分係数",
          "aliases": [
            "导数定义"
          ],
          "statement": "点x0での微分係数。",
          "formula": "f'(x_0)=\\lim_{\\Delta x\\to0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}",
          "tags": [
            "微分",
            "導関数"
          ]
        },
        {
          "id": "differentiability-linear",
          "section": "微分係数・導関数",
          "type": "definition",
          "name": "微分可能性の一次近似表示",
          "aliases": [
            "可微定义"
          ],
          "statement": "微分可能性を一次近似で表す形。",
          "formula": "\\Delta y=a\\Delta x+\\varepsilon,\\qquad \\lim_{\\Delta x\\to0}\\frac{\\varepsilon}{\\Delta x}=0,\\qquad a=f'(x_0)",
          "tags": [
            "微分",
            "近似"
          ]
        },
        {
          "id": "differentiable-continuous",
          "section": "微分係数・導関数",
          "type": "theorem",
          "name": "微分可能なら連続",
          "aliases": [
            "可微必连续"
          ],
          "statement": "逆は一般には成り立たない。",
          "formula": "f\\text{ が }x_0\\text{ で微分可能}\\Longrightarrow f\\text{ は }x_0\\text{ で連続}",
          "tags": [
            "微分",
            "連続"
          ]
        },
        {
          "id": "tangent-line",
          "section": "接線",
          "type": "formula",
          "name": "接線の方程式",
          "aliases": [
            "切线方程"
          ],
          "statement": "グラフ上の点\\((x_0,f(x_0))\\)における接線。",
          "formula": "y=f'(x_0)(x-x_0)+f(x_0)",
          "tags": [
            "微分",
            "接線"
          ]
        },
        {
          "id": "derivative-notation",
          "section": "導関数の計算",
          "type": "definition",
          "name": "導関数の記号",
          "aliases": [
            "导函数记号"
          ],
          "statement": "導関数を表す代表的な記号。",
          "formula": "f'(x),\\quad \\frac{df}{dx},\\quad \\frac{d}{dx}f(x),\\quad y',\\quad \\frac{dy}{dx}",
          "tags": [
            "導関数"
          ]
        },
        {
          "id": "derivative-sum",
          "section": "導関数の計算",
          "type": "theorem",
          "name": "和・差の導関数",
          "aliases": [
            "和差求导"
          ],
          "statement": "微分可能な関数の和差に対する公式。",
          "formula": "(f+g)'=f'+g',\\qquad (f-g)'=f'-g'",
          "tags": [
            "微分",
            "公式"
          ]
        },
        {
          "id": "derivative-constant-multiple",
          "section": "導関数の計算",
          "type": "theorem",
          "name": "定数倍の導関数",
          "aliases": [
            "常数倍求导"
          ],
          "statement": "cは定数。",
          "formula": "(cf)'=cf'",
          "tags": [
            "微分",
            "公式"
          ]
        },
        {
          "id": "derivative-product",
          "section": "導関数の計算",
          "type": "theorem",
          "name": "積の導関数",
          "aliases": [
            "乘积求导"
          ],
          "statement": "積の微分公式。",
          "formula": "(fg)'=f'g+fg'",
          "tags": [
            "微分",
            "公式"
          ]
        },
        {
          "id": "derivative-quotient",
          "section": "導関数の計算",
          "type": "theorem",
          "name": "商の導関数",
          "aliases": [
            "商的求导"
          ],
          "statement": "商の微分公式。",
          "formula": "\\left(\\frac{f}{g}\\right)'=\\frac{f'g-fg'}{g^2}\\quad(g\\ne0)",
          "tags": [
            "微分",
            "公式"
          ]
        },
        {
          "id": "chain-rule",
          "section": "導関数の計算",
          "type": "theorem",
          "name": "合成関数の微分法",
          "aliases": [
            "链式法则"
          ],
          "statement": "合成関数の導関数。",
          "formula": "(f\\circ g)'(x)=f'(g(x))g'(x),\\qquad \\frac{dz}{dx}=\\frac{dz}{dy}\\frac{dy}{dx}",
          "tags": [
            "微分",
            "合成関数"
          ]
        },
        {
          "id": "inverse-derivative",
          "section": "導関数の計算",
          "type": "theorem",
          "name": "逆関数の導関数",
          "aliases": [
            "反函数求导"
          ],
          "statement": "\\(y=f(x)\\), \\(x=f^{-1}(y)\\) として用いる。",
          "formula": "\\frac{d}{dy}f^{-1}(y)=\\frac{1}{f'(x)},\\qquad \\frac{dx}{dy}=\\frac{1}{dy/dx}",
          "tags": [
            "微分",
            "逆関数"
          ]
        },
        {
          "id": "basic-power-derivative",
          "section": "具体的な関数の導関数",
          "type": "formula",
          "name": "べき関数の導関数",
          "aliases": [
            "幂函数导数"
          ],
          "statement": "整数・実数指数の基本公式。",
          "formula": "\\frac{d}{dx}x^\\alpha=\\alpha x^{\\alpha-1}",
          "tags": [
            "導関数"
          ]
        },
        {
          "id": "exp-log-derivative",
          "section": "具体的な関数の導関数",
          "type": "formula",
          "name": "指数・対数関数の導関数",
          "aliases": [
            "指数对数导数"
          ],
          "statement": "a>0, a≠1。",
          "formula": "(e^x)'=e^x,\\quad (a^x)'=a^x\\log a,\\quad (\\log x)'=\\frac1x,\\quad (\\log|x|)'=\\frac1x",
          "tags": [
            "導関数"
          ]
        },
        {
          "id": "trig-derivative",
          "section": "具体的な関数の導関数",
          "type": "formula",
          "name": "三角関数の導関数",
          "aliases": [
            "三角函数导数"
          ],
          "statement": "基本三角関数の微分。",
          "formula": "(\\sin x)'=\\cos x,\\quad (\\cos x)'=-\\sin x,\\quad (\\tan x)'=\\frac1{\\cos^2x}",
          "tags": [
            "導関数",
            "三角関数"
          ]
        },
        {
          "id": "inverse-trig-derivative",
          "section": "具体的な関数の導関数",
          "type": "formula",
          "name": "逆三角関数の導関数",
          "aliases": [
            "反三角函数导数"
          ],
          "statement": "逆三角関数の基本微分。",
          "formula": "(\\arcsin x)'=\\frac1{\\sqrt{1-x^2}},\\quad (\\arccos x)'=-\\frac1{\\sqrt{1-x^2}},\\quad (\\arctan x)'=\\frac1{1+x^2}",
          "tags": [
            "導関数"
          ]
        },
        {
          "id": "higher-derivative",
          "section": "高階導関数",
          "type": "definition",
          "name": "高階導関数",
          "aliases": [
            "高阶导数"
          ],
          "statement": "n回微分した導関数。",
          "formula": "f^{(n)}(x)=\\frac{d^n f}{dx^n}",
          "tags": [
            "高階導関数"
          ]
        },
        {
          "id": "leibniz-formula",
          "section": "高階導関数",
          "type": "formula",
          "name": "Leibniz公式",
          "aliases": [
            "莱布尼茨公式"
          ],
          "statement": "積のn階導関数。",
          "formula": "(fg)^{(n)}=\\sum_{k=0}^{n}\\binom{n}{k}f^{(k)}g^{(n-k)}",
          "tags": [
            "高階導関数"
          ]
        },
        {
          "id": "rolle-theorem",
          "section": "平均値の定理",
          "type": "theorem",
          "name": "Rolleの定理",
          "aliases": [
            "罗尔定理"
          ],
          "statement": "平均値の定理の基礎。",
          "formula": "f\\in C[a,b],\\ f\\text{ は }(a,b)\\text{ で微分可能},\\ f(a)=f(b)\\Longrightarrow \\exists c\\in(a,b):f'(c)=0",
          "tags": [
            "平均値の定理"
          ]
        },
        {
          "id": "lagrange-mvt",
          "section": "平均値の定理",
          "type": "theorem",
          "name": "平均値の定理",
          "aliases": [
            "拉格朗日中值定理"
          ],
          "statement": "fが[a,b]で連続、(a,b)で微分可能なとき。",
          "formula": "\\exists c\\in(a,b):\\quad f'(c)=\\frac{f(b)-f(a)}{b-a}",
          "tags": [
            "平均値の定理"
          ]
        },
        {
          "id": "cauchy-mvt",
          "section": "平均値の定理",
          "type": "theorem",
          "name": "Cauchyの平均値の定理",
          "aliases": [
            "柯西中值定理"
          ],
          "statement": "f,gが[a,b]で連続、(a,b)で微分可能なとき。",
          "formula": "\\exists c\\in(a,b):\\quad \\{f(b)-f(a)\\}g'(c)=\\{g(b)-g(a)\\}f'(c)",
          "tags": [
            "平均値の定理"
          ]
        },
        {
          "id": "lhopital",
          "section": "不定形の極限",
          "type": "theorem",
          "name": "L'Hôpitalの定理",
          "aliases": [
            "洛必达法则"
          ],
          "statement": "0/0型や∞/∞型で、右辺の極限が存在する場合に使う。",
          "formula": "\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}",
          "tags": [
            "極限",
            "微分"
          ]
        },
        {
          "id": "taylor-theorem",
          "section": "Taylorの定理",
          "type": "theorem",
          "name": "Taylorの定理",
          "aliases": [
            "泰勒公式"
          ],
          "statement": "点aの近くで関数を多項式で近似する。",
          "formula": "f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)",
          "tags": [
            "Taylor",
            "近似"
          ]
        },
        {
          "id": "taylor-lagrange-remainder",
          "section": "Taylorの定理",
          "type": "formula",
          "name": "Lagrange型剰余項",
          "aliases": [
            "拉格朗日余项"
          ],
          "statement": "Taylorの定理の代表的な剰余項。",
          "formula": "R_n(x)=\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}\\quad(c\\text{ は }a,x\\text{ の間})",
          "tags": [
            "Taylor"
          ]
        },
        {
          "id": "maclaurin",
          "section": "Taylorの定理",
          "type": "formula",
          "name": "Maclaurin展開",
          "aliases": [
            "麦克劳林公式"
          ],
          "statement": "a=0の場合のTaylor展開。",
          "formula": "f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(0)}{k!}x^k+R_n(x)",
          "tags": [
            "Taylor"
          ]
        },
        {
          "id": "exp-series",
          "section": "近似値・極限再論",
          "type": "formula",
          "name": "指数関数の展開",
          "aliases": [
            "e的展开"
          ],
          "statement": "Maclaurin展開の代表例。",
          "formula": "e^x=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\cdots",
          "tags": [
            "Taylor",
            "級数"
          ]
        },
        {
          "id": "sin-cos-series",
          "section": "近似値・極限再論",
          "type": "formula",
          "name": "sin・cosの展開",
          "aliases": [
            "三角函数展开"
          ],
          "statement": "三角関数のMaclaurin展開。",
          "formula": "\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots,\\qquad \\cos x=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots",
          "tags": [
            "Taylor",
            "三角関数"
          ]
        },
        {
          "id": "log-binomial-series",
          "section": "近似値・極限再論",
          "type": "formula",
          "name": "log・二項展開",
          "aliases": [
            "对数展开",
            "二项展开"
          ],
          "statement": "近似計算でよく使う展開。",
          "formula": "\\log(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots,\\qquad (1+x)^\\alpha=1+\\alpha x+\\frac{\\alpha(\\alpha-1)}{2!}x^2+\\cdots",
          "tags": [
            "Taylor"
          ]
        }
      ]
    },
    {
      "index": 3,
      "chapter": "第3章 多変数関数の微分法",
      "source_file": "第三章.pdf",
      "items": [
        {
          "id": "multi-continuity",
          "section": "多変数関数",
          "type": "definition",
          "name": "多変数関数の連続",
          "aliases": [
            "多元函数连续"
          ],
          "statement": "ここでx,aは多変数の点を表す。",
          "formula": "\\lim_{x\\to a}f(x)=f(a)",
          "tags": [
            "多変数",
            "連続"
          ]
        },
        {
          "id": "multi-continuity-laws",
          "section": "多変数関数",
          "type": "theorem",
          "name": "連続関数の四則演算",
          "aliases": [
            "多元连续函数四则运算"
          ],
          "statement": "1変数の場合と同様。",
          "formula": "f,g\\text{ が }a\\text{ で連続}\\Longrightarrow f+g,\\ fg,\\ f/g\\ (g(a)\\ne0)\\text{ も連続}",
          "tags": [
            "連続"
          ]
        },
        {
          "id": "partial-derivative-definition",
          "section": "偏導関数",
          "type": "definition",
          "name": "偏微分係数",
          "aliases": [
            "偏导数定义"
          ],
          "statement": "一つの変数だけを動かして微分する。",
          "formula": "f_x(a,b)=\\lim_{h\\to0}\\frac{f(a+h,b)-f(a,b)}{h},\\qquad f_y(a,b)=\\lim_{k\\to0}\\frac{f(a,b+k)-f(a,b)}{k}",
          "tags": [
            "偏導関数"
          ]
        },
        {
          "id": "partial-notation",
          "section": "偏導関数",
          "type": "definition",
          "name": "偏導関数の記号",
          "aliases": [
            "偏导记号"
          ],
          "statement": "偏導関数を表す記号。",
          "formula": "f_x,\\ \\frac{\\partial f}{\\partial x},\\ \\partial_x f,\\ z_x,\\ \\frac{\\partial z}{\\partial x}",
          "tags": [
            "偏導関数"
          ]
        },
        {
          "id": "total-differential-definition",
          "section": "全微分",
          "type": "definition",
          "name": "全微分可能",
          "aliases": [
            "全微分定义",
            "可微"
          ],
          "statement": "2変数関数の一次近似が存在すること。",
          "formula": "\\Delta z=A\\Delta x+B\\Delta y+\\varepsilon,\\qquad \\frac{\\varepsilon}{\\sqrt{\\Delta x^2+\\Delta y^2}}\\to0",
          "tags": [
            "全微分"
          ]
        },
        {
          "id": "total-differential",
          "section": "全微分",
          "type": "formula",
          "name": "全微分",
          "aliases": [
            "全微分公式"
          ],
          "statement": "全微分可能なときの形式的な表し方。",
          "formula": "dz=A\\,dx+B\\,dy",
          "tags": [
            "全微分"
          ]
        },
        {
          "id": "total-diff-partials",
          "section": "全微分",
          "type": "theorem",
          "name": "全微分と偏導関数",
          "aliases": [
            "全微分与偏导"
          ],
          "statement": "全微分の係数は偏導関数になる。",
          "formula": "z=f(x,y)\\text{ が全微分可能}\\Longrightarrow dz=f_x(x,y)dx+f_y(x,y)dy",
          "tags": [
            "全微分",
            "偏導関数"
          ]
        },
        {
          "id": "tangent-plane",
          "section": "全微分",
          "type": "formula",
          "name": "接平面",
          "aliases": [
            "切平面"
          ],
          "statement": "曲面\\(z=f(x,y)\\)の接平面。",
          "formula": "z-f(x_0,y_0)=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)",
          "tags": [
            "全微分",
            "接平面"
          ]
        },
        {
          "id": "continuous-partials-differentiable",
          "section": "全微分",
          "type": "theorem",
          "name": "偏導関数の連続性による全微分可能性",
          "aliases": [
            "连续偏导推出可微"
          ],
          "statement": "多変数微分でよく使う十分条件。",
          "formula": "f_x,f_y\\text{ が近傍で存在し連続}\\Longrightarrow f\\text{ は全微分可能}",
          "tags": [
            "全微分"
          ]
        },
        {
          "id": "chain-rule-one-parameter",
          "section": "合成関数の偏微分",
          "type": "theorem",
          "name": "1変数媒介の連鎖律",
          "aliases": [
            "链式法则"
          ],
          "statement": "x,yがtの関数である場合。",
          "formula": "\\frac{d}{dt}f(x(t),y(t))=f_x(x(t),y(t))x'(t)+f_y(x(t),y(t))y'(t)",
          "tags": [
            "合成関数",
            "偏微分"
          ]
        },
        {
          "id": "chain-rule-two-parameters",
          "section": "合成関数の偏微分",
          "type": "theorem",
          "name": "2変数変換の連鎖律",
          "aliases": [
            "多元链式法则"
          ],
          "statement": "z=f(x,y), x=x(u,v), y=y(u,v)。",
          "formula": "\\frac{\\partial z}{\\partial u}=\\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial u}+\\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial u},\\quad \\frac{\\partial z}{\\partial v}=\\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial v}+\\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial v}",
          "tags": [
            "合成関数",
            "偏微分"
          ]
        },
        {
          "id": "jacobian",
          "section": "合成関数の偏微分",
          "type": "formula",
          "name": "Jacobian",
          "aliases": [
            "雅可比"
          ],
          "statement": "変数変換で使う行列式。",
          "formula": "\\frac{\\partial(x,y)}{\\partial(u,v)}=\\begin{vmatrix}x_u&x_v\\\\y_u&y_v\\end{vmatrix}=x_uy_v-x_vy_u",
          "tags": [
            "Jacobian"
          ]
        },
        {
          "id": "higher-partials",
          "section": "高階偏導関数",
          "type": "definition",
          "name": "高階偏導関数",
          "aliases": [
            "高阶偏导"
          ],
          "statement": "偏導を繰り返して得る。",
          "formula": "f_{xx}=\\frac{\\partial^2 f}{\\partial x^2},\\quad f_{xy}=\\frac{\\partial^2 f}{\\partial y\\partial x},\\quad f_{yy}=\\frac{\\partial^2 f}{\\partial y^2}",
          "tags": [
            "高階偏導"
          ]
        },
        {
          "id": "mixed-partials",
          "section": "高階偏導関数",
          "type": "theorem",
          "name": "混合偏導関数の一致",
          "aliases": [
            "混合偏导相等"
          ],
          "statement": "2階偏導関数が連続なとき成立する。",
          "formula": "f_{xy}=f_{yx}",
          "tags": [
            "高階偏導"
          ]
        },
        {
          "id": "two-variable-taylor",
          "section": "Taylorの定理",
          "type": "formula",
          "name": "2変数Taylor公式",
          "aliases": [
            "多元泰勒公式"
          ],
          "statement": "偏導関数は点(a,b)で評価する。",
          "formula": "f(a+h,b+k)=f(a,b)+f_xh+f_yk+\\frac12\\left(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2\\right)+\\cdots",
          "tags": [
            "Taylor",
            "多変数"
          ]
        },
        {
          "id": "gradient",
          "section": "極値",
          "type": "definition",
          "name": "勾配",
          "aliases": [
            "梯度"
          ],
          "statement": "関数の増加方向を表すベクトル。",
          "formula": "\\nabla f=(f_x,f_y)\\quad\\text{または}\\quad \\nabla f=(f_{x_1},\\ldots,f_{x_n})",
          "tags": [
            "勾配"
          ]
        },
        {
          "id": "directional-derivative",
          "section": "極値",
          "type": "formula",
          "name": "方向微分",
          "aliases": [
            "方向导数"
          ],
          "statement": "\\(\\mathbf u\\)は単位ベクトル。",
          "formula": "D_{\\mathbf u}f=\\nabla f\\cdot\\mathbf u",
          "tags": [
            "勾配"
          ]
        },
        {
          "id": "critical-point",
          "section": "極値",
          "type": "theorem",
          "name": "極値の必要条件",
          "aliases": [
            "极值必要条件"
          ],
          "statement": "偏導関数がすべて0になる。",
          "formula": "f\\text{ が内部点で極値をもち微分可能}\\Longrightarrow \\nabla f=0",
          "tags": [
            "極値"
          ]
        },
        {
          "id": "hessian-test",
          "section": "極値",
          "type": "theorem",
          "name": "Hessianによる2変数極値判定",
          "aliases": [
            "黑塞矩阵判别法"
          ],
          "statement": "D>0かつfxx>0なら極小、D>0かつfxx<0なら極大、D<0なら鞍点。",
          "formula": "D=f_{xx}f_{yy}-f_{xy}^2",
          "tags": [
            "極値",
            "Hessian"
          ]
        },
        {
          "id": "lagrange-multiplier",
          "section": "極値",
          "type": "method",
          "name": "Lagrangeの未定乗数法",
          "aliases": [
            "拉格朗日乘数法"
          ],
          "statement": "制約条件つき極値を求める方法。",
          "formula": "\\nabla f=\\lambda\\nabla g\\quad(g(x,y)=0)",
          "tags": [
            "極値"
          ]
        },
        {
          "id": "implicit-function-derivative",
          "section": "陰関数定理",
          "type": "theorem",
          "name": "陰関数の導関数",
          "aliases": [
            "隐函数求导"
          ],
          "statement": "陰関数としてyをxの関数とみる場合。",
          "formula": "F(x,y)=0,\\ F_y\\ne0\\Longrightarrow \\frac{dy}{dx}=-\\frac{F_x}{F_y}",
          "tags": [
            "陰関数"
          ]
        }
      ]
    },
    {
      "index": 4,
      "chapter": "第4章 1変数関数の積分法",
      "source_file": "第四章.pdf",
      "items": [
        {
          "id": "primitive-definition",
          "section": "原始関数・不定積分",
          "type": "definition",
          "name": "原始関数",
          "aliases": [
            "原函数"
          ],
          "statement": "Fをfの原始関数という。",
          "formula": "F'(x)=f(x)",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "primitive-family",
          "section": "原始関数・不定積分",
          "type": "theorem",
          "name": "原始関数の全体",
          "aliases": [
            "原函数族"
          ],
          "statement": "原始関数は定数差を除いて同じ。",
          "formula": "F(x)\\text{ が }f(x)\\text{ の原始関数}\\Longleftrightarrow F(x)=F_1(x)+C",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "indefinite-integral",
          "section": "原始関数・不定積分",
          "type": "definition",
          "name": "不定積分",
          "aliases": [
            "不定积分"
          ],
          "statement": "Cを積分定数という。",
          "formula": "\\int f(x)\\,dx=F(x)+C",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "power-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "べき関数の積分",
          "aliases": [
            "幂函数积分"
          ],
          "statement": "基本積分公式。",
          "formula": "\\int x^a\\,dx=\\frac{x^{a+1}}{a+1}+C\\quad(a\\ne-1)",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "log-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "1/xの積分",
          "aliases": [
            "对数积分"
          ],
          "statement": "a=-1の場合の公式。",
          "formula": "\\int \\frac1x\\,dx=\\log|x|+C",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "exp-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "指数関数の積分",
          "aliases": [
            "指数积分"
          ],
          "statement": "指数関数の基本積分。",
          "formula": "\\int e^{ax}\\,dx=\\frac1a e^{ax}+C\\quad(a\\ne0)",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "sin-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "sinの積分",
          "aliases": [
            "正弦积分"
          ],
          "statement": "三角関数の基本積分。",
          "formula": "\\int \\sin x\\,dx=-\\cos x+C",
          "tags": [
            "積分公式",
            "三角関数"
          ]
        },
        {
          "id": "cos-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "cosの積分",
          "aliases": [
            "余弦积分"
          ],
          "statement": "三角関数の基本積分。",
          "formula": "\\int \\cos x\\,dx=\\sin x+C",
          "tags": [
            "積分公式",
            "三角関数"
          ]
        },
        {
          "id": "tan-sec-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "tan・sec系の積分",
          "aliases": [
            "三角积分"
          ],
          "statement": "三角関数の微分公式から得られる。",
          "formula": "\\int \\frac{1}{\\cos^2x}\\,dx=\\tan x+C,\\qquad \\int \\frac{1}{\\sin^2x}\\,dx=-\\cot x+C",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "arctan-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "arctan型",
          "aliases": [
            "反正切积分"
          ],
          "statement": "逆三角関数に関係する公式。",
          "formula": "\\int\\frac{1}{1+x^2}\\,dx=\\arctan x+C",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "arcsin-integral",
          "section": "不定積分の公式",
          "type": "formula",
          "name": "arcsin型",
          "aliases": [
            "反正弦积分"
          ],
          "statement": "逆三角関数に関係する公式。",
          "formula": "\\int\\frac{1}{\\sqrt{1-x^2}}\\,dx=\\arcsin x+C",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "integral-linearity",
          "section": "原始関数・不定積分",
          "type": "theorem",
          "name": "不定積分の線形性",
          "aliases": [
            "积分线性"
          ],
          "statement": "a,bは定数。",
          "formula": "\\int\\{af(x)+bg(x)\\}\\,dx=a\\int f(x)\\,dx+b\\int g(x)\\,dx",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "integration-by-parts",
          "section": "原始関数・不定積分",
          "type": "theorem",
          "name": "部分積分",
          "aliases": [
            "分部积分"
          ],
          "statement": "積の微分公式から得られる。",
          "formula": "\\int f'(x)g(x)\\,dx=f(x)g(x)-\\int f(x)g'(x)\\,dx",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "substitution-indefinite",
          "section": "原始関数・不定積分",
          "type": "theorem",
          "name": "置換積分",
          "aliases": [
            "换元积分"
          ],
          "statement": "x=g(t), dx=g'(t)dt とおく。",
          "formula": "\\int f(x)\\,dx=\\int f(g(t))g'(t)\\,dt",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "substitution-common",
          "section": "原始関数・不定積分",
          "type": "theorem",
          "name": "置換積分のよく使う形",
          "aliases": [
            "换元积分常用形"
          ],
          "statement": "合成関数の形を見つける。",
          "formula": "\\int f(g(x))g'(x)\\,dx=\\int f(t)\\,dt\\quad(t=g(x))",
          "tags": [
            "積分"
          ]
        },
        {
          "id": "special-integral-1",
          "section": "原始関数・不定積分",
          "type": "formula",
          "name": "平方根型1",
          "aliases": [
            "根式积分"
          ],
          "statement": "画像内の練習式にも出ていた型。",
          "formula": "\\int\\frac{x}{\\sqrt{x^2+A}}\\,dx=\\sqrt{x^2+A}+C",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "special-integral-2",
          "section": "原始関数・不定積分",
          "type": "formula",
          "name": "平方根型2",
          "aliases": [
            "根式积分"
          ],
          "statement": "画像内の練習式にも出ていた型。",
          "formula": "\\int\\frac{x}{\\sqrt{a^2-x^2}}\\,dx=-\\sqrt{a^2-x^2}+C",
          "tags": [
            "積分公式"
          ]
        },
        {
          "id": "definite-integral",
          "section": "定積分",
          "type": "definition",
          "name": "定積分",
          "aliases": [
            "定积分"
          ],
          "statement": "Riemann和の極限として定義される。",
          "formula": "\\int_a^b f(x)\\,dx",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "integrability-continuous",
          "section": "定積分",
          "type": "theorem",
          "name": "連続関数の可積分性",
          "aliases": [
            "连续函数可积"
          ],
          "statement": "定積分の基本定理の前提としてよく使う。",
          "formula": "f\\in C[a,b]\\Longrightarrow f\\text{ は }[a,b]\\text{ で積分可能}",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "ftc-1",
          "section": "定積分",
          "type": "theorem",
          "name": "微分積分学の基本定理1",
          "aliases": [
            "微积分基本定理1"
          ],
          "statement": "fが連続な場合。",
          "formula": "F(x)=\\int_a^x f(t)\\,dt\\Longrightarrow F'(x)=f(x)",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "ftc-2",
          "section": "定積分",
          "type": "theorem",
          "name": "微分積分学の基本定理2",
          "aliases": [
            "牛顿莱布尼茨公式"
          ],
          "statement": "定積分を原始関数で計算する公式。",
          "formula": "\\int_a^b f(x)\\,dx=F(b)-F(a)\\quad(F'=f)",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "definite-linearity",
          "section": "定積分",
          "type": "theorem",
          "name": "定積分の線形性",
          "aliases": [
            "定积分线性"
          ],
          "statement": "定積分の基本性質。",
          "formula": "\\int_a^b(\\alpha f+\\beta g)\\,dx=\\alpha\\int_a^b f\\,dx+\\beta\\int_a^b g\\,dx",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "definite-additivity",
          "section": "定積分",
          "type": "theorem",
          "name": "区間加法性",
          "aliases": [
            "区间可加性"
          ],
          "statement": "区間を分けて積分できる。",
          "formula": "\\int_a^b f(x)\\,dx=\\int_a^c f(x)\\,dx+\\int_c^b f(x)\\,dx",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "definite-order",
          "section": "定積分",
          "type": "theorem",
          "name": "大小関係と定積分",
          "aliases": [
            "积分保序"
          ],
          "statement": "積分による不等式評価。",
          "formula": "f(x)\\le g(x)\\ (a\\le x\\le b)\\Longrightarrow \\int_a^b f(x)\\,dx\\le\\int_a^b g(x)\\,dx",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "definite-substitution",
          "section": "定積分",
          "type": "theorem",
          "name": "定積分の置換積分",
          "aliases": [
            "定积分换元"
          ],
          "statement": "上下端も置換する。",
          "formula": "\\int_{\\alpha}^{\\beta} f(g(t))g'(t)\\,dt=\\int_{g(\\alpha)}^{g(\\beta)}f(x)\\,dx",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "definite-parts",
          "section": "定積分",
          "type": "theorem",
          "name": "定積分の部分積分",
          "aliases": [
            "定积分分部"
          ],
          "statement": "不定積分の部分積分の定積分版。",
          "formula": "\\int_a^b f'(x)g(x)\\,dx=[f(x)g(x)]_a^b-\\int_a^b f(x)g'(x)\\,dx",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "integral-mean-value",
          "section": "定積分",
          "type": "theorem",
          "name": "積分の平均値定理",
          "aliases": [
            "积分中值定理"
          ],
          "statement": "fが[a,b]で連続な場合。",
          "formula": "\\exists c\\in[a,b]:\\quad \\int_a^b f(x)\\,dx=f(c)(b-a)",
          "tags": [
            "定積分"
          ]
        },
        {
          "id": "improper-infinite",
          "section": "広義積分",
          "type": "definition",
          "name": "無限区間の広義積分",
          "aliases": [
            "无穷区间广义积分"
          ],
          "statement": "極限が存在するとき収束という。",
          "formula": "\\int_a^{\\infty}f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx",
          "tags": [
            "広義積分"
          ]
        },
        {
          "id": "improper-singular",
          "section": "広義積分",
          "type": "definition",
          "name": "特異点をもつ広義積分",
          "aliases": [
            "瑕积分"
          ],
          "statement": "端点aで発散する可能性がある場合の定義例。",
          "formula": "\\int_a^b f(x)\\,dx=\\lim_{\\varepsilon\\to+0}\\int_{a+\\varepsilon}^b f(x)\\,dx",
          "tags": [
            "広義積分"
          ]
        },
        {
          "id": "area-between-curves",
          "section": "定積分の応用",
          "type": "formula",
          "name": "平面図形の面積",
          "aliases": [
            "面积公式"
          ],
          "statement": "2つの曲線に挟まれた面積。",
          "formula": "S=\\int_a^b |f(x)-g(x)|\\,dx",
          "tags": [
            "応用"
          ]
        },
        {
          "id": "arc-length",
          "section": "定積分の応用",
          "type": "formula",
          "name": "曲線の長さ",
          "aliases": [
            "弧长公式"
          ],
          "statement": "曲線y=f(x)の長さ。",
          "formula": "L=\\int_a^b\\sqrt{1+\\{f'(x)\\}^2}\\,dx",
          "tags": [
            "応用"
          ]
        },
        {
          "id": "volume-disk",
          "section": "定積分の応用",
          "type": "formula",
          "name": "回転体の体積",
          "aliases": [
            "旋转体体积"
          ],
          "statement": "x軸まわりの回転体。",
          "formula": "V=\\pi\\int_a^b \\{f(x)\\}^2\\,dx",
          "tags": [
            "応用"
          ]
        }
      ]
    },
    {
      "index": 5,
      "chapter": "第5章 多変数関数の積分法",
      "source_file": "第五章.pdf",
      "items": [
        {
          "id": "vertical-domain",
          "section": "2重積分",
          "type": "definition",
          "name": "縦線集合",
          "aliases": [
            "纵线集合"
          ],
          "statement": "xを先に範囲指定する基本集合。",
          "formula": "D=\\{(x,y)\\mid \\varphi_1(x)\\le y\\le\\varphi_2(x),\\ a\\le x\\le b\\}",
          "tags": [
            "重積分",
            "領域"
          ]
        },
        {
          "id": "horizontal-domain",
          "section": "2重積分",
          "type": "definition",
          "name": "横線集合",
          "aliases": [
            "横线集合"
          ],
          "statement": "yを先に範囲指定する基本集合。",
          "formula": "D=\\{(x,y)\\mid \\psi_1(y)\\le x\\le\\psi_2(y),\\ c\\le y\\le d\\}",
          "tags": [
            "重積分",
            "領域"
          ]
        },
        {
          "id": "double-integral-definition",
          "section": "2重積分",
          "type": "definition",
          "name": "2重積分",
          "aliases": [
            "二重积分定义"
          ],
          "statement": "Riemann和の極限として定義する。",
          "formula": "\\iint_D f(x,y)\\,dxdy=\\lim_{|\\Delta|\\to0}R(\\Delta,D,f)",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "double-integrable-continuous",
          "section": "2重積分",
          "type": "theorem",
          "name": "連続関数の重積分可能性",
          "aliases": [
            "连续函数可重积分"
          ],
          "statement": "連続関数は基本集合上で重積分可能。",
          "formula": "f\\text{ が基本集合 }D\\text{ 上で連続}\\Longrightarrow f\\text{ は重積分可能}",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "volume-double-integral",
          "section": "2重積分",
          "type": "formula",
          "name": "体積としての2重積分",
          "aliases": [
            "二重积分体积"
          ],
          "statement": "曲面z=f(x,y)の下の体積。",
          "formula": "V=\\iint_D f(x,y)\\,dxdy\\quad(f(x,y)\\ge0)",
          "tags": [
            "重積分",
            "体積"
          ]
        },
        {
          "id": "fubini-vertical",
          "section": "累次積分",
          "type": "theorem",
          "name": "縦線集合での累次積分",
          "aliases": [
            "累次积分"
          ],
          "statement": "Dが縦線集合のとき。",
          "formula": "\\iint_D f(x,y)\\,dxdy=\\int_a^b\\left\\{\\int_{\\varphi_1(x)}^{\\varphi_2(x)}f(x,y)\\,dy\\right\\}dx",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "fubini-horizontal",
          "section": "累次積分",
          "type": "theorem",
          "name": "横線集合での累次積分",
          "aliases": [
            "交换积分次序"
          ],
          "statement": "Dが横線集合のとき。",
          "formula": "\\iint_D f(x,y)\\,dxdy=\\int_c^d\\left\\{\\int_{\\psi_1(y)}^{\\psi_2(y)}f(x,y)\\,dx\\right\\}dy",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "double-linearity",
          "section": "2重積分",
          "type": "theorem",
          "name": "2重積分の線形性",
          "aliases": [
            "重积分线性"
          ],
          "statement": "重積分の基本性質。",
          "formula": "\\iint_D(\\alpha f+\\beta g)\\,dxdy=\\alpha\\iint_Df\\,dxdy+\\beta\\iint_Dg\\,dxdy",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "double-order",
          "section": "2重積分",
          "type": "theorem",
          "name": "大小関係と2重積分",
          "aliases": [
            "重积分保序"
          ],
          "statement": "重積分の不等式評価。",
          "formula": "f\\le g\\text{ on }D\\Longrightarrow \\iint_Df\\,dxdy\\le\\iint_Dg\\,dxdy",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "change-of-variables-2d",
          "section": "変数変換",
          "type": "theorem",
          "name": "2重積分の変数変換",
          "aliases": [
            "二重积分换元"
          ],
          "statement": "Jacobianの絶対値をかける。",
          "formula": "\\iint_D f(x,y)\\,dxdy=\\iint_E f(x(u,v),y(u,v))\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|\\,dudv",
          "tags": [
            "変数変換"
          ]
        },
        {
          "id": "polar-coordinates",
          "section": "変数変換",
          "type": "formula",
          "name": "極座標変換",
          "aliases": [
            "极坐标"
          ],
          "statement": "円・扇形領域で便利。",
          "formula": "x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad \\left|\\frac{\\partial(x,y)}{\\partial(r,\\theta)}\\right|=r",
          "tags": [
            "変数変換"
          ]
        },
        {
          "id": "triple-integral",
          "section": "3重積分",
          "type": "definition",
          "name": "3重積分",
          "aliases": [
            "三重积分"
          ],
          "statement": "3変数関数の積分。",
          "formula": "\\iiint_D f(x,y,z)\\,dxdydz",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "triple-volume",
          "section": "3重積分",
          "type": "formula",
          "name": "体積",
          "aliases": [
            "体积公式"
          ],
          "statement": "空間領域Dの体積。",
          "formula": "V=\\iiint_D1\\,dxdydz",
          "tags": [
            "重積分"
          ]
        },
        {
          "id": "triple-change",
          "section": "変数変換",
          "type": "theorem",
          "name": "3重積分の変数変換",
          "aliases": [
            "三重积分换元"
          ],
          "statement": "\\(J=\\partial(x,y,z)/\\partial(u,v,w)\\)。",
          "formula": "\\iiint_D f(x,y,z)\\,dxdydz=\\iiint_E f(x(u,v,w),y(u,v,w),z(u,v,w))|J|\\,dudvdw",
          "tags": [
            "変数変換"
          ]
        },
        {
          "id": "cylindrical",
          "section": "変数変換",
          "type": "formula",
          "name": "円柱座標",
          "aliases": [
            "柱坐标"
          ],
          "statement": "z軸対称の領域で便利。",
          "formula": "x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad z=z,\\quad dV=r\\,drd\\theta dz",
          "tags": [
            "変数変換"
          ]
        },
        {
          "id": "spherical",
          "section": "変数変換",
          "type": "formula",
          "name": "球座標",
          "aliases": [
            "球坐标"
          ],
          "statement": "球対称の領域で便利。",
          "formula": "x=\\rho\\sin\\phi\\cos\\theta,\\quad y=\\rho\\sin\\phi\\sin\\theta,\\quad z=\\rho\\cos\\phi,\\quad dV=\\rho^2\\sin\\phi\\,d\\rho d\\phi d\\theta",
          "tags": [
            "変数変換"
          ]
        },
        {
          "id": "center-of-mass-2d",
          "section": "重積分の応用",
          "type": "formula",
          "name": "平面領域の重心",
          "aliases": [
            "质心"
          ],
          "statement": "密度\\(\rho\\)がある平面領域の重心。",
          "formula": "\\bar x=\\frac{1}{M}\\iint_D x\\rho(x,y)\\,dxdy,\\quad \\bar y=\\frac{1}{M}\\iint_D y\\rho(x,y)\\,dxdy,\\quad M=\\iint_D\\rho\\,dxdy",
          "tags": [
            "応用"
          ]
        },
        {
          "id": "green-theorem",
          "section": "ストークスの定理など",
          "type": "theorem",
          "name": "Greenの定理",
          "aliases": [
            "格林公式"
          ],
          "statement": "平面領域の境界積分と面積分の関係。",
          "formula": "\\oint_{\\partial D}P\\,dx+Q\\,dy=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dxdy",
          "tags": [
            "ベクトル解析"
          ]
        },
        {
          "id": "gauss-theorem",
          "section": "ストークスの定理など",
          "type": "theorem",
          "name": "Gaussの発散定理",
          "aliases": [
            "高斯公式",
            "散度定理"
          ],
          "statement": "閉曲面上の流束と発散の体積積分の関係。",
          "formula": "\\iint_{\\partial V}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_V \\operatorname{div}\\mathbf F\\,dV",
          "tags": [
            "ベクトル解析"
          ]
        },
        {
          "id": "stokes-theorem",
          "section": "ストークスの定理など",
          "type": "theorem",
          "name": "Stokesの定理",
          "aliases": [
            "斯托克斯公式"
          ],
          "statement": "曲線積分と回転の面積分の関係。",
          "formula": "\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\operatorname{rot}\\mathbf F)\\cdot\\mathbf n\\,dS",
          "tags": [
            "ベクトル解析"
          ]
        }
      ]
    },
    {
      "index": 6,
      "chapter": "第6章 級数",
      "source_file": "第六章.pdf",
      "items": [
        {
          "id": "partial-sum",
          "section": "級数",
          "type": "definition",
          "name": "第n部分和",
          "aliases": [
            "部分和"
          ],
          "statement": "級数の前からn項までの和。",
          "formula": "s_n=\\sum_{k=1}^{n}a_k=a_1+a_2+\\cdots+a_n",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "series-convergence",
          "section": "級数",
          "type": "definition",
          "name": "級数の収束",
          "aliases": [
            "级数收敛定义"
          ],
          "statement": "部分和が収束するとき級数は収束する。",
          "formula": "\\lim_{n\\to\\infty}s_n=s\\Longleftrightarrow \\sum_{n=1}^{\\infty}a_n=s",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "geometric-series",
          "section": "級数",
          "type": "formula",
          "name": "等比級数",
          "aliases": [
            "几何级数"
          ],
          "statement": "|r|≥1なら発散。",
          "formula": "\\sum_{n=0}^{\\infty}r^n=\\frac1{1-r}\\quad(|r|<1),\\qquad \\sum_{n=1}^{\\infty}r^n=\\frac{r}{1-r}\\quad(|r|<1)",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "series-linearity-sum",
          "section": "級数",
          "type": "theorem",
          "name": "級数の和の線形性",
          "aliases": [
            "级数线性"
          ],
          "statement": "両方が収束するとき成立。",
          "formula": "\\sum_{n=1}^{\\infty}(a_n+b_n)=\\sum_{n=1}^{\\infty}a_n+\\sum_{n=1}^{\\infty}b_n",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "series-linearity-constant",
          "section": "級数",
          "type": "theorem",
          "name": "級数の定数倍",
          "aliases": [
            "级数常数倍"
          ],
          "statement": "収束級数の定数倍。",
          "formula": "\\sum_{n=1}^{\\infty}ca_n=c\\sum_{n=1}^{\\infty}a_n",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "term-test",
          "section": "級数",
          "type": "theorem",
          "name": "一般項が0に収束する必要条件",
          "aliases": [
            "项趋于零必要条件"
          ],
          "statement": "対偶として、一般項が0に行かなければ発散。",
          "formula": "\\sum_{n=1}^{\\infty}a_n\\text{ が収束}\\Longrightarrow \\lim_{n\\to\\infty}a_n=0",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "positive-series-bounded",
          "section": "正項級数",
          "type": "theorem",
          "name": "正項級数の収束条件",
          "aliases": [
            "正项级数有界判别"
          ],
          "statement": "正項級数では部分和が単調増加。",
          "formula": "a_n\\ge0,\\quad \\sum a_n\\text{ が収束}\\Longleftrightarrow \\{s_n\\}\\text{ が有界}",
          "tags": [
            "正項級数"
          ]
        },
        {
          "id": "comparison-test",
          "section": "正項級数",
          "type": "theorem",
          "name": "比較判定法",
          "aliases": [
            "比较判别法"
          ],
          "statement": "大きい方が収束すれば小さい方も収束。",
          "formula": "0\\le a_n\\le cb_n\\ (n\\ge n_0),\\quad \\sum b_n<\\infty\\Longrightarrow \\sum a_n<\\infty",
          "tags": [
            "正項級数"
          ]
        },
        {
          "id": "limit-comparison",
          "section": "正項級数",
          "type": "theorem",
          "name": "極限比較判定法",
          "aliases": [
            "极限比较判别法"
          ],
          "statement": "同じ次数の正項級数を比べる。",
          "formula": "\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=\\ell\\quad(0<\\ell<\\infty)\\Longrightarrow \\sum a_n,\\sum b_n\\text{ は同時に収束または発散}",
          "tags": [
            "正項級数"
          ]
        },
        {
          "id": "integral-test",
          "section": "正項級数",
          "type": "theorem",
          "name": "積分判定法",
          "aliases": [
            "积分判别法"
          ],
          "statement": "正項級数と広義積分を比較する。",
          "formula": "f(x)\\ge0\\text{ 連続単調減少}\\Longrightarrow \\sum_{n=1}^{\\infty}f(n)\\text{ と }\\int_1^{\\infty}f(x)\\,dx\\text{ は同時に収束または発散}",
          "tags": [
            "正項級数"
          ]
        },
        {
          "id": "p-series",
          "section": "正項級数",
          "type": "formula",
          "name": "p級数",
          "aliases": [
            "p级数"
          ],
          "statement": "積分判定法の代表例。",
          "formula": "\\sum_{n=1}^{\\infty}\\frac1{n^p}\\begin{cases}\\text{収束},&p>1\\\\\\text{発散},&p\\le1\\end{cases}",
          "tags": [
            "正項級数"
          ]
        },
        {
          "id": "ratio-test",
          "section": "正項級数",
          "type": "theorem",
          "name": "比の判定法",
          "aliases": [
            "比值判别法"
          ],
          "statement": "ρ=1の場合は判定不能。",
          "formula": "\\rho=\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|;\\quad \\rho<1\\Rightarrow\\sum a_n\\text{ 収束},\\ \\rho>1\\Rightarrow\\text{発散}",
          "tags": [
            "級数判定"
          ]
        },
        {
          "id": "root-test",
          "section": "正項級数",
          "type": "theorem",
          "name": "根の判定法",
          "aliases": [
            "根值判别法"
          ],
          "statement": "ρ=1の場合は判定不能。",
          "formula": "\\rho=\\limsup_{n\\to\\infty}\\sqrt[n]{|a_n|};\\quad \\rho<1\\Rightarrow\\sum a_n\\text{ 収束},\\ \\rho>1\\Rightarrow\\text{発散}",
          "tags": [
            "級数判定"
          ]
        },
        {
          "id": "alternating-test",
          "section": "交代級数",
          "type": "theorem",
          "name": "交代級数判定法",
          "aliases": [
            "交错级数判别法"
          ],
          "statement": "Leibniz型の判定法。",
          "formula": "a_n\\ge0,\\ a_n\\downarrow0\\Longrightarrow \\sum_{n=1}^{\\infty}(-1)^{n-1}a_n\\text{ は収束}",
          "tags": [
            "交代級数"
          ]
        },
        {
          "id": "absolute-convergence",
          "section": "交代級数",
          "type": "definition",
          "name": "絶対収束",
          "aliases": [
            "绝对收敛"
          ],
          "statement": "絶対収束なら通常の意味でも収束。",
          "formula": "\\sum_{n=1}^{\\infty}|a_n|\\text{ が収束}\\Longrightarrow \\sum_{n=1}^{\\infty}a_n\\text{ は絶対収束}",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "conditional-convergence",
          "section": "交代級数",
          "type": "definition",
          "name": "条件収束",
          "aliases": [
            "条件收敛"
          ],
          "statement": "符号の打ち消しにより収束する場合。",
          "formula": "\\sum a_n\\text{ は収束するが }\\sum|a_n|\\text{ は発散}",
          "tags": [
            "級数"
          ]
        },
        {
          "id": "function-sequence-uniform",
          "section": "関数列・関数項級数",
          "type": "definition",
          "name": "一様収束",
          "aliases": [
            "一致收敛"
          ],
          "statement": "定義域全体で同じ速さで収束すること。",
          "formula": "\\sup_{x\\in D}|f_n(x)-f(x)|\\to0",
          "tags": [
            "関数列"
          ]
        },
        {
          "id": "function-series-uniform",
          "section": "関数列・関数項級数",
          "type": "definition",
          "name": "関数項級数の一様収束",
          "aliases": [
            "函数项级数一致收敛"
          ],
          "statement": "部分和列の一様収束として定義する。",
          "formula": "\\sum_{n=1}^{\\infty}f_n(x)\\text{ が一様収束}\\Longleftrightarrow \\sup_{x\\in D}\\left|\\sum_{k=1}^{n}f_k(x)-S(x)\\right|\\to0",
          "tags": [
            "関数項級数"
          ]
        },
        {
          "id": "weierstrass-m-test",
          "section": "関数列・関数項級数",
          "type": "theorem",
          "name": "WeierstrassのM判定法",
          "aliases": [
            "魏尔斯特拉斯判别法"
          ],
          "statement": "関数項級数の重要な判定法。",
          "formula": "|f_n(x)|\\le M_n,\\quad \\sum M_n<\\infty\\Longrightarrow \\sum f_n(x)\\text{ は一様絶対収束}",
          "tags": [
            "一様収束"
          ]
        },
        {
          "id": "uniform-continuity-limit",
          "section": "関数列・関数項級数",
          "type": "theorem",
          "name": "連続関数列の一様極限",
          "aliases": [
            "一致收敛保持连续"
          ],
          "statement": "一様収束なら連続性が保たれる。",
          "formula": "f_n\\in C(D),\\ f_n\\rightrightarrows f\\Longrightarrow f\\in C(D)",
          "tags": [
            "一様収束"
          ]
        },
        {
          "id": "termwise-integration",
          "section": "関数列・関数項級数",
          "type": "theorem",
          "name": "項別積分",
          "aliases": [
            "逐项积分"
          ],
          "statement": "一様収束など適切な条件下で成立。",
          "formula": "\\int_a^b\\sum_{n=1}^{\\infty}f_n(x)\\,dx=\\sum_{n=1}^{\\infty}\\int_a^b f_n(x)\\,dx",
          "tags": [
            "一様収束"
          ]
        },
        {
          "id": "termwise-differentiation",
          "section": "関数列・関数項級数",
          "type": "theorem",
          "name": "項別微分",
          "aliases": [
            "逐项求导"
          ],
          "statement": "導関数級数の一様収束などの条件下で成立。",
          "formula": "\\left(\\sum_{n=1}^{\\infty}f_n(x)\\right)'=\\sum_{n=1}^{\\infty}f_n'(x)",
          "tags": [
            "一様収束"
          ]
        },
        {
          "id": "power-series",
          "section": "巾級数",
          "type": "definition",
          "name": "巾級数",
          "aliases": [
            "幂级数"
          ],
          "statement": "点aを中心とする冪級数。",
          "formula": "\\sum_{n=0}^{\\infty}a_n(x-a)^n",
          "tags": [
            "巾級数"
          ]
        },
        {
          "id": "radius-root",
          "section": "巾級数",
          "type": "formula",
          "name": "収束半径",
          "aliases": [
            "收敛半径"
          ],
          "statement": "冪級数の収束範囲を決める。",
          "formula": "R=\\frac{1}{\\limsup_{n\\to\\infty}\\sqrt[n]{|a_n|}}",
          "tags": [
            "巾級数"
          ]
        },
        {
          "id": "radius-ratio",
          "section": "巾級数",
          "type": "formula",
          "name": "比による収束半径",
          "aliases": [
            "比值法收敛半径"
          ],
          "statement": "極限が存在する場合。",
          "formula": "R=\\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right|",
          "tags": [
            "巾級数"
          ]
        },
        {
          "id": "power-series-interval",
          "section": "巾級数",
          "type": "theorem",
          "name": "収束区間",
          "aliases": [
            "收敛区间"
          ],
          "statement": "端点は別途調べる。",
          "formula": "|x-a|<R\\text{ で収束},\\qquad |x-a|>R\\text{ で発散}",
          "tags": [
            "巾級数"
          ]
        },
        {
          "id": "taylor-series",
          "section": "巾級数",
          "type": "formula",
          "name": "Taylor級数",
          "aliases": [
            "泰勒级数"
          ],
          "statement": "関数を冪級数で表す。",
          "formula": "f(x)\\sim\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n",
          "tags": [
            "Taylor",
            "巾級数"
          ]
        },
        {
          "id": "maclaurin-series",
          "section": "巾級数",
          "type": "formula",
          "name": "Maclaurin級数",
          "aliases": [
            "麦克劳林级数"
          ],
          "statement": "Taylor級数でa=0の場合。",
          "formula": "f(x)\\sim\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n",
          "tags": [
            "Taylor",
            "巾級数"
          ]
        },
        {
          "id": "known-series-exp",
          "section": "巾級数",
          "type": "formula",
          "name": "e^xの級数",
          "aliases": [
            "指数函数级数"
          ],
          "statement": "すべての実数xで収束。",
          "formula": "e^x=\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}",
          "tags": [
            "Taylor"
          ]
        },
        {
          "id": "known-series-sincos",
          "section": "巾級数",
          "type": "formula",
          "name": "sin・cosの級数",
          "aliases": [
            "三角函数级数"
          ],
          "statement": "すべての実数xで収束。",
          "formula": "\\sin x=\\sum_{n=0}^{\\infty}(-1)^n\\frac{x^{2n+1}}{(2n+1)!},\\quad \\cos x=\\sum_{n=0}^{\\infty}(-1)^n\\frac{x^{2n}}{(2n)!}",
          "tags": [
            "Taylor"
          ]
        },
        {
          "id": "known-series-log",
          "section": "巾級数",
          "type": "formula",
          "name": "log(1+x)の級数",
          "aliases": [
            "对数级数"
          ],
          "statement": "対数関数の代表的な冪級数。",
          "formula": "\\log(1+x)=\\sum_{n=1}^{\\infty}(-1)^{n-1}\\frac{x^n}{n}\\quad(-1<x\\le1)",
          "tags": [
            "Taylor"
          ]
        },
        {
          "id": "known-series-binomial",
          "section": "巾級数",
          "type": "formula",
          "name": "二項級数",
          "aliases": [
            "二项级数"
          ],
          "statement": "一般化二項係数を使う。",
          "formula": "(1+x)^\\alpha=\\sum_{n=0}^{\\infty}\\binom{\\alpha}{n}x^n\\quad(|x|<1)",
          "tags": [
            "Taylor"
          ]
        }
      ]
    }
  ]
};
