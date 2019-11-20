var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NeiwuCfg = (function () {
    function NeiwuCfg() {
    }
    NeiwuCfg.cfgs = [
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公，魏国大使前来觐见", "想要我们归顺魏国。"],
            word2: ["前来何意？"],
            tip: "是否斩杀来使？",
            option: {
                1: 0,
                2: { goods: ((Math.random() * 40 + 20) >> 0) }
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公上体天心，下安黎民，只需为黎民做出表率即可。", "种植谷物，稍作农活即可。"],
            word2: ["那如何做出表率呢？"],
            tip: "种植与否呢？",
            option: {
                1: { goods: ((Math.random() * 40 + 20) >> 0) },
                2: 0
            }
        },
        {
            name1: "乞丐",
            name2: "我",
            head1: "neiwu_head_5_png",
            head2: "neiwu_head_7_png",
            word1: ["讨了一天了，一点吃的都没有，这日子可怎么过啊？", "我从平原一路乞讨至此。"],
            word2: ["唉，连年战火，民不聊生啊，老丈是哪里人士呢？"],
            tip: "种植与否呢？",
            option: {
                1: { goods: ((Math.random() * 40 + 20) >> 0) },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公,蛮夷之地派人前来缴纳供奉，是否接见？"],
            word2: [],
            tip: "是否接见",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["今年旱年，百姓哀声怨道，家中已无余粮。", "当应发放部分国库余粮,兴建水利工程。"],
            word2: ["百姓乃立国之根本，爱卿有何高见？"],
            tip: "是否采取措施？",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "百姓甲",
            name2: "百姓乙",
            head1: "neiwu_head_4_png",
            head2: "neiwu_head_1_png",
            word1: ["这头牛是我的，你看腿上还有泥，是我刚刚耕完地牵回来的。"],
            word2: ["我说是我的就是我的，再和我多说一句。休要怪我动手。"],
            tip: "是否惩罚恶人？",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公，魏国大将前来归顺，是否接见？"],
            word2: [],
            tip: "是否接见",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["蝗虫即将成灾，若不及时处理，将会颗粒无收，饥民造反，社会动荡", "主公圣明。"],
            word2: ["募民捕蝗，易以粟"],
            tip: "是否采取措施？",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "小摊贩甲",
            name2: "小摊贩乙",
            head1: "neiwu_head_6_png",
            head2: "neiwu_head_1_png",
            word1: ["快来瞧一瞧 看一看。胸口碎大石。走过路过不要错过！！！。", "我先来的，凭什么说是你的位置。"],
            word2: ["走走走 。别占了我摆摊的位置。"],
            tip: "是否参与和解？",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公，前方战役我方大将损失颇多，臣有一良计。", "听闻蜀国大将勇冠三军，前去招纳。"],
            word2: ["哦？ 爱卿有何良计？"],
            tip: "是否前去招纳",
            option: {
                1: { general: 1 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公，野外突现大虫伤人，百姓人心惶惶。", "主公且安坐，此事臣去安排"],
            word2: ["派出将领，将其伏诛"],
            tip: "是否采取措施？",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "百姓丙",
            name2: "我",
            head1: "neiwu_head_4_png",
            head2: "neiwu_head_7_png",
            word1: ["啊。。。。。。（远处传来了大声的吼叫）？", "不知道哪一个天杀的小人，将我家钱财偷的一干二净，往后可如何是好啊？"],
            word2: ["请问发生了什么事？"],
            tip: "是否帮忙抓小偷？",
            option: {
                1: { goods: 20 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公，臣欲想归隐田野？", "臣个人能力不足，无法继续辅佐君王。继而推荐比臣更加有才能的人来辅佐君王成就大业"],
            word2: ["爱卿因何有此想法？"],
            tip: "是否放任其离去",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "谋士",
            name2: "我",
            head1: "neiwu_head_3_png",
            head2: "neiwu_head_7_png",
            word1: ["主公，城外有许多他国百姓前来投奔我国", "主公多想。此乃因战乱流离失所的百姓。"],
            word2: ["哦？确认是百姓吗？或是他国派来的小人？"],
            tip: "是否打开城门",
            option: {
                1: { medal: 1 },
                2: 0
            }
        },
        {
            name1: "商人",
            name2: "我",
            head1: "neiwu_head_6_png",
            head2: "neiwu_head_7_png",
            word1: ["没想到想购买一方土地竟然如此之贵。。。唉。。。", "那地方权贵竟要我100000两黄金。。。"],
            word2: ["请问有多贵呢？"],
            tip: "是否帮助百姓惩罚地方权贵？",
            option: {
                1: { medal: 1 },
                2: 0
            }
        }
    ];
    return NeiwuCfg;
}());
__reflect(NeiwuCfg.prototype, "NeiwuCfg");
//# sourceMappingURL=NeiwuCfg.js.map