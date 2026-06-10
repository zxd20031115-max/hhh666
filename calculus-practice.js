window.calculusTongjiPractice = [
  {
    id: "calc-ch1",
    chapter: "第1章 極限・連続関数",
    problems: [
      {
        type: "计算题",
        title: "1.1 数列极限",
        stem: "求数列 a_n=(3n^2+2n)/(n^2+n+1) 的极限。",
        hint: "分子分母同时除以 n^2。",
        answer: ["分子分母同除以 n^2，得 a_n=(3+2/n)/(1+1/n+1/n^2)。", "令 n→∞，含 1/n 的项都趋于 0。", "所以极限为 3。"]
      },
      {
        type: "证明题",
        title: "1.1 单调有界数列收敛",
        stem: "设 {a_n} 单调递增且有上界。证明 {a_n} 收敛。",
        hint: "取 A=sup{a_n}，用上确界定义证明。",
        answer: ["设 A=sup{a_n}。任取 ε>0，由上确界定义，存在 N 使 a_N>A-ε。", "n≥N 时，由单调性得 A-ε<a_N≤a_n≤A。", "所以 |a_n-A|<ε，故 a_n→A。"]
      },
      {
        type: "计算题",
        title: "1.2 函数极限",
        stem: "求 lim_{x→0} sin(3x)/(2x)。",
        hint: "凑出 sin(3x)/(3x)。",
        answer: ["sin(3x)/(2x)=(3/2)·sin(3x)/(3x)。", "当 x→0 时，3x→0，因此 sin(3x)/(3x)→1。", "极限为 3/2。"]
      },
      {
        type: "证明题",
        title: "1.3 连续函数零点",
        stem: "设 f 在 [a,b] 上连续，且 f(a)f(b)<0。证明存在 c∈(a,b)，使 f(c)=0。",
        hint: "使用介值定理。",
        answer: ["f(a) 与 f(b) 异号，所以 0 介于 f(a)、f(b) 之间。", "由 f 在 [a,b] 连续，介值定理可用。", "故存在 c∈(a,b)，使 f(c)=0。"]
      }
    ]
  },
  {
    id: "calc-ch2",
    chapter: "第2章 1変数関数の微分法",
    problems: [
      {
        type: "计算题",
        title: "2.1 用定义求导",
        stem: "用导数定义求 f(x)=x^2 在 x=a 处的导数。",
        hint: "计算 [f(a+h)-f(a)]/h。",
        answer: ["[f(a+h)-f(a)]/h=((a+h)^2-a^2)/h。", "化简为 2a+h。", "令 h→0，得 f'(a)=2a。"]
      },
      {
        type: "计算题",
        title: "2.2 复合函数求导",
        stem: "求 y=e^{sin x} 的导数。",
        hint: "外层 e^u，内层 u=sin x。",
        answer: ["设 u=sin x，则 y=e^u。", "dy/dx=e^u·du/dx。", "所以 y'=e^{sin x}cos x。"]
      },
      {
        type: "证明题",
        title: "2.3 Rolle 定理",
        stem: "设 f 在 [a,b] 连续，在 (a,b) 可导，且 f(a)=f(b)。证明存在 c∈(a,b)，使 f'(c)=0。",
        hint: "讨论最大值、最小值是否在内点取得。",
        answer: ["由连续性，f 在 [a,b] 上取到最大值与最小值。", "若最大值等于最小值，则 f 为常值，结论显然。", "否则至少有一个极值在内点取得，由 Fermat 引理得 f'(c)=0。"]
      },
      {
        type: "综合题",
        title: "2.5 Taylor 近似",
        stem: "用到 x^3 项的 Maclaurin 展开近似 sin 0.2。",
        hint: "sin x=x-x^3/3!+O(x^5)。",
        answer: ["sin x=x-x^3/6+O(x^5)。", "代入 x=0.2，得 0.2-0.008/6。", "近似值为 0.198666...。"]
      }
    ]
  },
  {
    id: "calc-ch3",
    chapter: "第3章 多変数関数の微分法",
    problems: [
      {
        type: "计算题",
        title: "3.1 二元函数定义域",
        stem: "求 f(x,y)=ln(1-x^2-y^2) 的定义域。",
        hint: "对数内部必须大于 0。",
        answer: ["要求 1-x^2-y^2>0。", "即 x^2+y^2<1。", "定义域是以原点为中心、半径 1 的开圆盘。"]
      },
      {
        type: "计算题",
        title: "3.2 偏导数",
        stem: "设 z=x^2y+e^{xy}，求 z_x 与 z_y。",
        hint: "求 z_x 时把 y 看成常数，求 z_y 时把 x 看成常数。",
        answer: ["z_x=2xy+y e^{xy}。", "z_y=x^2+x e^{xy}。", "注意 e^{xy} 对 x 求导时乘 y，对 y 求导时乘 x。"]
      },
      {
        type: "综合题",
        title: "3.3 复合函数偏微分",
        stem: "设 z=f(u,v)，u=x+y，v=xy。写出 ∂z/∂x。",
        hint: "链式法则：z_x=f_u u_x+f_v v_x。",
        answer: ["u_x=1，v_x=y。", "由链式法则 z_x=f_u·1+f_v·y。", "所以 ∂z/∂x=f_u+y f_v。"]
      },
      {
        type: "证明题",
        title: "3.5 隐函数求导",
        stem: "由方程 x^2+y^2=1 在 y>0 附近确定 y=y(x)。求 dy/dx，并说明步骤。",
        hint: "两边对 x 求导。",
        answer: ["对 x^2+y^2=1 两边求导，得 2x+2y y'=0。", "解得 y'=-x/y。", "在 y>0 支上，可写为 y'=-x/sqrt(1-x^2)。"]
      }
    ]
  },
  {
    id: "calc-ch4",
    chapter: "第4章 1変数関数の積分法",
    problems: [
      {
        type: "计算题",
        title: "4.1 换元积分",
        stem: "求 ∫ 2x cos(x^2) dx。",
        hint: "令 u=x^2。",
        answer: ["令 u=x^2，则 du=2x dx。", "原积分变为 ∫ cos u du。", "结果为 sin(x^2)+C。"]
      },
      {
        type: "计算题",
        title: "4.2 定积分",
        stem: "计算 ∫_0^1 (3x^2+2x) dx。",
        hint: "先求原函数，再代上下限。",
        answer: ["原函数为 x^3+x^2。", "代入 0 到 1，得 (1+1)-0。", "结果为 2。"]
      },
      {
        type: "计算题",
        title: "4.3 广义积分",
        stem: "判断 ∫_1^∞ 1/x^p dx 在什么条件下收敛。",
        hint: "先把上限写成 R，再令 R→∞。",
        answer: ["p≠1 时，∫_1^R x^{-p}dx=(R^{1-p}-1)/(1-p)。", "p>1 时 R^{1-p}→0，积分收敛。", "p≤1 时发散，所以收敛条件为 p>1。"]
      },
      {
        type: "图表题",
        title: "4.5 面积",
        stem: "求 y=x^2，0≤x≤1，与 x 轴围成的面积。",
        hint: "面积为 ∫_0^1 x^2 dx。",
        answer: ["面积 S=∫_0^1 x^2 dx。", "原函数为 x^3/3。", "S=1/3。"]
      }
    ]
  },
  {
    id: "calc-ch5",
    chapter: "第5章 多変数関数の積分法",
    problems: [
      {
        type: "计算题",
        title: "5.1 二重积分",
        stem: "计算 ∬_D (x+y)dA，其中 D=[0,1]×[0,2]。",
        hint: "写成累次积分。",
        answer: ["积分为 ∫_0^1∫_0^2 (x+y)dy dx。", "内层积分得 2x+2。", "再对 x 从 0 到 1 积分，结果为 3。"]
      },
      {
        type: "综合题",
        title: "5.2 交换积分次序",
        stem: "把 ∫_0^1∫_0^x f(x,y)dy dx 改写为先对 x 积分。",
        hint: "区域为 0≤y≤x≤1。",
        answer: ["区域 D={0≤y≤x≤1}。", "固定 y 后，x 从 y 到 1。", "所以积分等于 ∫_0^1∫_y^1 f(x,y)dx dy。"]
      },
      {
        type: "计算题",
        title: "5.4 极坐标变换",
        stem: "计算单位圆盘 D: x^2+y^2≤1 的面积。",
        hint: "用极坐标，Jacobian 为 r。",
        answer: ["极坐标下 0≤r≤1, 0≤θ≤2π。", "面积 S=∫_0^{2π}∫_0^1 r dr dθ。", "结果为 π。"]
      },
      {
        type: "综合题",
        title: "5.7 Green 公式入门",
        stem: "用 Green 公式计算 ∮_C (-y dx+x dy)，C 为单位圆正向边界。",
        hint: "P=-y, Q=x，计算 Q_x-P_y。",
        answer: ["Green 公式：∮ Pdx+Qdy=∬(Q_x-P_y)dA。", "这里 Q_x=1，P_y=-1，所以 Q_x-P_y=2。", "单位圆面积为 π，积分为 2π。"]
      }
    ]
  },
  {
    id: "calc-ch6",
    chapter: "第6章 級数",
    problems: [
      {
        type: "计算题",
        title: "6.1 正项级数比较",
        stem: "判断 ∑_{n=1}^∞ 1/(n^2+n) 是否收敛。",
        hint: "与 1/n^2 比较。",
        answer: ["因为 1/(n^2+n)≤1/n^2。", "∑1/n^2 收敛。", "由比较判别法，原级数收敛。"]
      },
      {
        type: "证明题",
        title: "6.1 收敛级数的必要条件",
        stem: "证明若 ∑a_n 收敛，则 a_n→0。",
        hint: "令部分和 s_n，利用 a_n=s_n-s_{n-1}。",
        answer: ["设 s_n=∑_{k=1}^n a_k。若 ∑a_n 收敛，则 s_n→S。", "同时 s_{n-1}→S。", "a_n=s_n-s_{n-1}→S-S=0。"]
      },
      {
        type: "综合题",
        title: "6.2 一致收敛判别",
        stem: "设 |f_n(x)|≤1/n^2 对所有 x∈D 成立。证明 ∑f_n(x) 在 D 上一致收敛。",
        hint: "用 Weierstrass M 判别法。",
        answer: ["取 M_n=1/n^2。", "∑M_n=∑1/n^2 收敛。", "由 Weierstrass 判别法，∑f_n(x) 在 D 上一致绝对收敛，因此一致收敛。"]
      },
      {
        type: "计算题",
        title: "6.3 幂级数收敛半径",
        stem: "求 ∑_{n=1}^∞ n x^n 的收敛半径。",
        hint: "用比值判别法。",
        answer: ["设 a_n=n x^n。", "|a_{n+1}/a_n|=((n+1)/n)|x|→|x|。", "收敛要求 |x|<1，所以收敛半径 R=1。"]
      }
    ]
  }
];
