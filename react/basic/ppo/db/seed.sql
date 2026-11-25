-- 초기 데이터. 원본: 공식 사이트(공명자 · 에코), subgamecals.com · 네이버 라운지 공식 공지(일정)
-- schema.sql 실행 후 실행

insert into factions (id, en, name, icon, sort) values
  ('huang-long', 'HUANG LONG', '황룡', '/images/reso/faction-huang-long.webp', 1),
  ('black-shores', 'BLACK SHORES', '검은 해안', '/images/reso/faction-black-shores.webp', 2),
  ('ragunna', 'RAGUNNA', '라군나', '/images/reso/faction-ragunna.webp', 3),
  ('septimont', 'SEPTIMONT', '일곱 언덕', '/images/reso/faction-septimont.webp', 4),
  ('startorch-academy', 'STARTORCH ACADEMY', '스타토치 아카데미', '/images/reso/faction-startorch-academy.webp', 5),
  ('spacetrek-collective', 'SPACETREK COLLECTIVE', '스페이스트렉 콜렉티브', '/images/reso/faction-spacetrek-collective.webp', 6),
  ('the-roya-tribe', 'THE ROYA TRIBE', '로야족', '/images/reso/faction-the-roya-tribe.webp', 7),
  ('flaming-sakura', 'FLAMING SAKURA', '타오르는 벚꽃', '/images/reso/faction-flaming-sakura.webp', 8),
  ('new-federation', 'NEW FEDERATION', '신 연방', '/images/reso/faction-new-federation.webp', 9),
  ('the-fractsidus', 'THE FRACTSIDUS', '잔성회', '/images/reso/faction-the-fractsidus.webp', 10),
  ('other', 'OTHER', '기타', '/images/reso/faction-other.webp', 11),
  ('unknown', 'UNKNOWN', '미공개', '/images/reso/faction-unknown.webp', 12);

insert into resonators (faction_id, en, name, attr, rarity, description, img, thumb, sort) values
  ('huang-long', 'SUOMING', '쇄명', '전도', 5, '몽주 화정 사람. 고향에 닥친 재앙 ｢악장｣을 해결하기 위해 금쇄십계를 만들고 계주가 되었다. 이후 ｢수호신｣의 명을 받들어 주감의 자리에 올라, 제천감을 관장하며 몽주를 수호하고 있다.', '/images/reso/suoming.webp', '/images/reso/suoming-thumb.webp', 1),
  ('huang-long', 'HSIN', '여우의 별자리', '전도', 5, '수호신 「여우의 별자리」, 몽주 문명을 이끄는 인도자. 감수성이 넘치며, 인간 세상의 기쁨을 사랑한다. 수많은 삶이 활기를 띠고 만물이 끊임없이 변화하는 가운데, 세상의 온기가 오래도록 꺼지지 않게 지켜 나간다.', '/images/reso/hsin.webp', '/images/reso/hsin-thumb.webp', 2),
  ('huang-long', 'JINGRAN', '경연', '용융', 5, '몽주 출신의 유람객. 신기루와 남겨진 폐허 사이를 오가며, 두 눈으로 만물에 남겨진 주파수와 구시대의 흔적을 꿰뚫어 본다. 그의 행보는 문파의 법도에 얽매이지 않고, 신불의 규율도 아랑곳하지 않는다. 그는 신기루를 넘나들고 저승을 가로지르며, 오직 자신의 뜻에 따라 시비를 가리며 자신만의 길을 걷는다.', '/images/reso/jingran.webp', '/images/reso/jingran-thumb.webp', 3),
  ('huang-long', 'QINGXIAO', '청초', '기류', 5, '은거 중인 검술 수행자, 현방성의 진현사기에 이름을 올려두고 있다. 감정을 거의 드러내지 않으며, 좀처럼 가까이하기 힘든 차가운 분위기를 풍기지만, 금과 검술 실력만은 견줄 자가 없다. 그녀가 바로 세상 사람들이 말하는 「검선」이다. 긴 세월 동안 검을 들고 한 지역의 산하를 지켜왔으나, 그 칼끝의 서늘한 빛은 여전히 처음과 같다.', '/images/reso/qingxiao.webp', '/images/reso/qingxiao-thumb.webp', 4),
  ('huang-long', 'SUISUI', '수수', '응결', 5, '명정에 있는 세가의 장녀이자, 소명 상인회의 젊은 책임자. 물의 부채로 실을 당기고 상도로 비단을 짜내니, 손에 검을 쥐지 않아도 천하의 태평을 능히 엮어내리라.', '/images/reso/suisui.webp', '/images/reso/suisui-thumb.webp', 5),
  ('huang-long', 'YANGYANG: XUANLING', '양양·현령', '인멸', 5, '바람의 숨결과 교감할 수 있는 ｢소리의 수호자｣인 양양은 명정 음악 명가의 둘째 아가씨로, 다정하고 강인하며 순수하면서도 낭만적인 성품을 지녔다. 청풍이 감돌고 협의가 드날리니, 이 몸과 이 검은 수호를 위해 태어났노라.', '/images/reso/yangyang-xuanling.webp', '/images/reso/yangyang-xuanling-thumb.webp', 6),
  ('huang-long', 'QIUYUAN', '구원', '기류', 5, '구원, 황룡 각지를 떠도는 고독한 검객. 소박한 옷차림의 그는 강호에 이름을 떨치거나 권좌에 오르는 일에는 뜻을 두지 않는다. 신의를 행함에 있어 꺾이지 않고, 마음을 다해 검을 휘두를 수 있기만을 바랄 뿐.', '/images/reso/qiuyuan.webp', '/images/reso/qiuyuan-thumb.webp', 7),
  ('huang-long', 'LUMI', '루미', '전도', 4, '从山林奔跑向广阔的原野，呜呜物流领航员灯灯是大家永远的“小太阳”。自律认真的她现在应该也在物流工作的旅途中，定将货物准时送达！', '/images/reso/lumi.webp', '/images/reso/lumi-thumb.webp', 8),
  ('huang-long', 'YOUHU', '유호', '응결', 4, '釉瑚有着与生俱来的鉴宝天赋，能说会道、喜憎分明。面对珍奇古物，活泼跳脱的她却会沉下心来细心感知，像在追溯古物的悠长过往。', '/images/reso/youhu.webp', '/images/reso/youhu-thumb.webp', 9),
  ('huang-long', 'XIANGLI YAO', '상리요', '전도', 5, '今州华胥研究院首席研究员，年轻的多领域专家。他平易近人、温和明理，对机关研究拥有独特的见解与执着的追求。', '/images/reso/xiangli-yao.webp', '/images/reso/xiangli-yao-thumb.webp', 10),
  ('huang-long', 'ZHEZHI', '절지', '응결', 5, '以画为生的委托画师，文静腼腆、不善言辞。偶尔笨拙迷糊的她对绘画专注认真，有着不可思议的坚持与热爱。', '/images/reso/zhezhi.webp', '/images/reso/zhezhi-thumb.webp', 11),
  ('huang-long', 'CHANGLI', '장리', '용융', 5, '今州令尹参事长离，善于洞察并利用人性引敌入局。作为今汐的老师，她温柔耐心、循循善诱。为达成夙愿，她将自己置身棋局，与时间博弈，也与毁灭博弈。', '/images/reso/changli.webp', '/images/reso/changli-thumb.webp', 12),
  ('huang-long', 'JINHSI', '금희', '회절', 5, '今令尹今汐，她手握崇高的职权，亦肩负沉重的责任。即便前路艰险，悲鸣如亘古不化的霜雪般盘旋千年。她也将竭尽全力，从风雪中开辟出属于人类的未来。', '/images/reso/jinhsi.webp', '/images/reso/jinhsi-thumb.webp', 13),
  ('huang-long', 'YINLIN', '음림', '전도', 5, '吟霖曾经是治安署的优秀巡尉，成熟可靠、深藏不露。她善于利用身边一切资源，调查那些大家接触不到的罪恶。看似孤傲冷淡，当获得她足够的信任之后，你会明白她藏在艳丽张扬外表下坚强善良的内心。', '/images/reso/yinlin.webp', '/images/reso/yinlin-thumb.webp', 14),
  ('huang-long', 'JIYAN', '기염', '기류', 5, '瑝珑夜归军的领军者忌炎，心怀正义，雷厉风行。出生于医学世家的他医术精湛，细腻体贴。后来为守一方疆土，护家国安宁，他放弃医者的身份，拿起了杀敌的武器与残象抗争。', '/images/reso/jiyan.webp', '/images/reso/jiyan-thumb.webp', 15),
  ('huang-long', 'LINGYANG', '능양', '응결', 5, '착하고 열정이 넘쳐나는, 영적인 이족 이방인.능양은 우연한 기회로 금주 사자춤 공연단에 가입하게 되고, 모두가 열정이 넘쳐나는 ''사자춤''을 보며 두려움을 떨쳐 버리길 바란다.', '/images/reso/lingyang.webp', '/images/reso/lingyang-thumb.webp', 16),
  ('huang-long', 'VERINA', '벨리나', '회절', 5, '신연방의 한 「선행 공약」 소대를 따라 금주에 온 소녀로 조용하고 수줍음이 많은 성격에 자상하고 믿음직스럽다.또한 식물 원예사인 그녀는 나이에 걸맞지 않은 강인함을 지녀, 팀 내에서 늘 자연스레 세심한 후방 지원 역할을 맡는다.', '/images/reso/verina.webp', '/images/reso/verina-thumb.webp', 17),
  ('huang-long', 'JIANXIN', '감심', '기류', 5, '들판에서 태어나 도관에서 자란 「풍의권」의 계승자로 그녀는 천진난만하고 마음은 깨끗한 거울과도 같다.그녀는 순수, 집착, 집중의 이상적인 대표이며 무술의 최고 경지를 추구한다는 단호한 신념을 가지고 있다.이때, 그녀는 산에서 내려와 세상을 여행하며 다양한 삶, 세상의 냉정함과 온기를 경험하고 있었다.', '/images/reso/jianxin.webp', '/images/reso/jianxin-thumb.webp', 18),
  ('huang-long', 'TAOQI', '도기', '인멸', 4, '「천공」의 변방 수비 책임자는 게으른 것 같지만 실제로는 매우 믿음직스럽다.도기는 모든 사람을 보호하고 적의 침입을 막는 방어선 일뿐만 아니라 모든 사람의 배후에서 모든 것을 안정적으로 지탱하는 선이다.항상 효율적으로 임무를 완수하며 느릿느릿한 생활을 즐긴다.걸음은 느리지만 한 걸음 한 걸음 자신이 구상하는 안전한 미래를 실현하고 있다.', '/images/reso/taoqi.webp', '/images/reso/taoqi-thumb.webp', 19),
  ('huang-long', 'YUANWU', '연무', '전도', 4, '권법 도장 관장, 겸손하고 예의 바르게 행동하며 일 처리에 있어 느긋하고 자유롭다.뇌황권 권법에 정통할 뿐만 아니라 건강 관리법에도 능통하다.유아하고 부드럽지만 그 속에는 강력한 패기와 힘을 느낄 수 있다.', '/images/reso/yuanwu.webp', '/images/reso/yuanwu-thumb.webp', 20),
  ('huang-long', 'DANJIN', '단근', '인멸', 4, '단순하고 솔직하며, 흑백이 분명한 협객 소녀.여행 중 세상의 수많은 일들을 체험하며 선악의 준칙을 탐구하고 있다.비록 길이 험하지만, 소녀는 여전히 천하의 악을 적으로 삼아 권선징악하고 세상을 정화하기로 한다.', '/images/reso/danjin.webp', '/images/reso/danjin-thumb.webp', 21),
  ('huang-long', 'MORTEFI', '모르테피', '용융', 4, '상류층 출신으로 성격이 다소 도도하고 반듯한 외모를 가지고 있다.과학 연구 분야에 매우 뛰어난 재능을 보이며 신 연방의 최연소 천재라고 알려져 있다.지식을 추구하기 위해 귀족 신분을 버리고 연구원에서 외부 초빙 멤버로 근무한다.그의 앞에서 약한 모습을 보이며 선의의 말을 더하면 모르테피의 호감을 쉽게 얻을 수 있다.', '/images/reso/mortefi.webp', '/images/reso/mortefi-thumb.webp', 22),
  ('huang-long', 'SANHUA', '산화', '응결', 4, '금희의 호위, 과묵하지만 충직하고 믿음직스럽습니다.산화가 눈에 비친 세상과 정상적인 세상과는 큰 차이가 존재하며, 체온도 일반인보다 낮아 사방의 기온을 낮추며 눈과 얼음을 소환할 수 있습니다. 산화는 검술 수련을 통해 심성을 안정시키는 한편 어빌리티의 제어 능력를 향상시켜 어빌리티 사용으로 인해 오는 신체 후유증을 완화시킵니다. 뒤틀린 그녀의 시선 속에서 언제나 변함없이 나타나는 형체의 순수한 진실은 산화가 버틸 수 있는 유일한 버팀목이 됩니다.이제 방랑자의 도래는 그녀의 세계에 새로운 파란을 일으킵니다.', '/images/reso/sanhua.webp', '/images/reso/sanhua-thumb.webp', 23),
  ('huang-long', 'BAIZHI', '설지', '응결', 4, '설지는 논리성과 실행력을 겸비한 화서연구원이다.겉으로는 차갑고 서먹서먹한 모습이지만 실제로는 어렵지 않게 지낼 수 있다.다만 이성주의자로서 엄격하고 정확하게 행동하는 데 익숙하다.미지의 탐구는 끝이 없듯, 설지는 인류가 「울림」의 수수께끼를 완벽하게 풀어낼 때까지 평생의 대가를 치르더라도 연구를 멈추지 않을 것이다.', '/images/reso/baizhi.webp', '/images/reso/baizhi-thumb.webp', 24),
  ('huang-long', 'CHIXIA', '치샤', '용융', 4, '치샤는 금주 보안서의 견습 순찰관이다.그녀는 끝없이 샘솟는 열정처럼, 넘쳐흐르는 에너지로 금주의 거리를 활보한다.도움이 필요한 사람이 있는 곳에선 항상 그녀의 모습을 찾을 수 있다.', '/images/reso/chixia.webp', '/images/reso/chixia-thumb.webp', 25),
  ('huang-long', 'YANGYANG', '양양', '기류', 4, '가문의 비호를 떠나 「답백」멤버로써 성장한 소녀.자신의 존재를 드러내기보다는 조용히 다른 사람의 곁에 있어주고, 적절한 위로를 해주는 것에 익숙하다.한동안 좌절과 막막함을 겪었지만 지금은 「다른 사람을 돕고 보호할 수 있는 사람이 되는 것」이라는 뚜렷한 목표를 가지고 성장해 나간다.', '/images/reso/yangyang.webp', '/images/reso/yangyang-thumb.webp', 26),
  ('black-shores', 'BULING', '복링', '전도', 4, '사방을 유랑하며 기이한 사건과 이야기를 조사하는 ｢퇴마｣ 도사, 검은 해안의 초청 멤버 복링. 기문둔갑과 풍수지리, 각종 점술과 퇴마에 능한 그녀는 법보와 부적을 팔아 여행 경비를 마련하고, 도움이 필요한 사람들을 이끌어 주기도 한다.', '/images/reso/buling.webp', '/images/reso/buling-thumb.webp', 1),
  ('black-shores', 'GALBRENA', '갈브레나', '용융', 5, '갈브레나, ｢영원한 불꽃의 악마｣이자, 악마를 사냥하는 사냥꾼.그녀는 무수히 많은 사선과 전쟁의 잿더미를 헤쳐나와, 어둠과 지옥 사이를 가로지르며 한 사냥터에서 또 다른 사냥터로 향한다. 그녀의 사냥은, 영원토록 끝나지 않을 것이다.', '/images/reso/galbrena.webp', '/images/reso/galbrena-thumb.webp', 2),
  ('black-shores', 'CAMELLYA', '카멜리아', '인멸', 5, '黑海岸执花椿，自由随性，自有一种“危险”的吸引力。她相信这个世界中存在着命运既定的牵系，且乐意顺着这份牵引愉快地游走世间。', '/images/reso/camellya.webp', '/images/reso/camellya-thumb.webp', 3),
  ('black-shores', 'THE SHOREKEEPER', '파수인', '회절', 5, '黑海岸守岸人，神秘清冷、超然物外。她因你的唤醒而生，在漫长的守望中萌生出情感和渴望——守护与世界，与你之间的羁绊。', '/images/reso/the-shorekeeper.webp', '/images/reso/the-shorekeeper-thumb.webp', 4),
  ('black-shores', 'ENCORE', '앙코', '용융', 5, '검은 해안의 객경인 앙코, 조금은 기괴하고 활발하며 환상과 동화로 우정과 모험을 묘사하는 것을 좋아한다.그녀의 옆에는 그늘이와 구름이가 함께 하는데 그들은 앙코의 제일 친한 친구이자 수호자이다.앙코는 그늘이, 구름이 그리고 알토와 함께 온 세상을 돌아다닌다!', '/images/reso/encore.webp', '/images/reso/encore-thumb.webp', 5),
  ('black-shores', 'AALTO', '알토', '기류', 4, '안개처럼 불투명하여 종잡을 수 없는 정보상인 알토는 언제나 웃는 얼굴로 손님들을 맞이한다. 값만 쳐준다면 그에게서 원하는 정보를 구입할 수 있다고 한다.앙코와 시너지가 잘 맞는 최고의 파트너로써, 둘은 항상 함께 다니며 티격태격한다.검은 해안의 초대를 받아 섬에 도착한 후, 알토는 검은 해안과 장기적인 협력 관계를 이루었으며, 검은 해안에 수많은 정보를 제공해 왔다.알토의 진짜 모습을 제대로 알고 싶다면, 자욱이 낀 안개가 걷히길 기다려야 한다. 안개가 걷힌 후 우리는 비로소 알토의 믿음직함과 섬세한 마음을 발견할 수 있을 것이다.', '/images/reso/aalto.webp', '/images/reso/aalto-thumb.webp', 6),
  ('ragunna', 'CARTETHYIA', '카르티시아', '기류', 5, '수호신과 명식의 힘이 그녀의 육체 속에서 뒤섞이고 요동치며, 그녀를 미지의 미래로 이끈다. 그 미래가 밝든 어둡든, 그녀는 검을 굳게 쥔 채 모든 것을 마주할 것이다.', '/images/reso/cartethyia.webp', '/images/reso/cartethyia-thumb.webp', 1),
  ('ragunna', 'CIACCONA', '샤콘', '기류', 5, '리나시타의 음유시인 샤콘. 자유와 낭만, 그리고 진솔한 열정을 지녔다. 기적과 격동, 고난, 죽음, 그리고 이별. 인간에 대한 모든 것을 담은, 성녀와 영웅의 눈부신 서사를 그녀는 노래한다.', '/images/reso/ciaccona.webp', '/images/reso/ciaccona-thumb.webp', 2),
  ('ragunna', 'ZANI', '젠니', '회절', 5, '믿음직하고 성실한 몬텔리의 직원 젠니. 거의 언제나 원칙대로 업무를 처리하며, 그 어떤 일이라도 능숙하게 해낼 수 있다. 항상 정시에 칼같이 출근하며, 업무 시간이 아닐 때에는 자신이 정성껏 계획한 일상을 최대한 즐기려 노력한다.', '/images/reso/zani.webp', '/images/reso/zani-thumb.webp', 3),
  ('ragunna', 'CANTARELLA', '칸타렐라', '인멸', 5, '翡萨烈第三十六任家主，坎特蕾拉·翡萨烈。她用深不见底的眸子望着你，眼中似有幽海翻涌。你凝视着海底一闪而过的虚影……却分不清那是潜渊的鱼，还是天马的尾羽。', '/images/reso/cantarella.webp', '/images/reso/cantarella-thumb.webp', 4),
  ('ragunna', 'BRANT', '브렌트', '용융', 5, '黎那汐塔愚人剧团团长布兰特，随性洒脱、自由不羁。在张扬的“假面”之后，是他对家人、伙伴的珍视，他将引领剧团众人找到最温暖的港湾。', '/images/reso/brant.webp', '/images/reso/brant-thumb.webp', 5),
  ('ragunna', 'PHOEBE', '페비', '회절', 5, '隐海修会的教士菲比，友善虔诚、稳重得体。恪守教义、自我约束的圣职者，仍然存有着为所爱之物欢欣雀跃的真挚之心。', '/images/reso/phoebe.webp', '/images/reso/phoebe-thumb.webp', 6),
  ('ragunna', 'ROCCIA', '로코코', '인멸', 5, '愚人剧团副手、万能道具师兼即兴喜剧演员。面容平静、波澜不惊的她乘着箱子划过船舱，井井有条地打理着剧团的一切。', '/images/reso/roccia.webp', '/images/reso/roccia-thumb.webp', 7),
  ('ragunna', 'CARLOTTA', '카를로타', '응결', 5, '莫塔里家族的二小姐，审美品味不凡的投资人，举止优雅，却不被规则桎梏。为了对家族更有利的未来，她在双重身份间游走，将某些不便言明的“麻烦”一一解决。', '/images/reso/carlotta.webp', '/images/reso/carlotta-thumb.webp', 8),
  ('septimont', 'IUNO', '유노', '기류', 5, '천재라고 불리는 일곱 언덕의 ｢예언자｣, 유노. 운명의 총애를 받는 그녀는, 달빛의 흐름 속에서 누구도 닿을 수 없는 절대적으로 정확한 미래를 들여다볼 수 있다.', '/images/reso/iuno.webp', '/images/reso/iuno-thumb.webp', 1),
  ('septimont', 'AUGUSTA', '아우구스타', '전도', 5, '아우구스타. 콜로세움을 지배하는 불패의 왕관, 피와 철에서 태어난 두려움 없는 지도자. 평범한 육신으로 찬란한 영광을 이룬 그녀는, 자신의 검으로 힘이란 무엇인지를 증명하였다.', '/images/reso/augusta.webp', '/images/reso/augusta-thumb.webp', 2),
  ('septimont', 'LUPA', '루파', '용융', 5, '일곱 언덕의 스타 검투사 루파는 순수하고, 야성적이며, 열정적이고 또한 타고난 재능을 지녔다.그녀는 언제나 자신이 좋아하는 것, 즉 경기장에서 경기를 마음껏 즐기며 스스로를 드러내는, 불타는 순간을 향해 달릴 것이다.', '/images/reso/lupa.webp', '/images/reso/lupa-thumb.webp', 3),
  ('startorch-academy', 'LUUK HERSSEN', '루크 · 헤르센', '회절', 5, '스타토치 아카데미의 의사 겸 심리 상담사, 루크 · 헤르센. 부드럽고 따스하면서도, 쾌활하고 편안한 성격의 소유자다. 비록 과거의 피와 거짓을 짊어지고 있을지라도, 어둠을 가르고 진실을 바라보는 길을 택했다.', '/images/reso/luuk-herssen.webp', '/images/reso/luuk-herssen-thumb.webp', 1),
  ('startorch-academy', 'AEMEATH', '에이메스', '용융', 5, '에이메스는 한때 스타토치 아카데미의 엑소스트라이더 적격자였으나, 지금은 그 누구도 볼 수 없는 ''전자 유령''이 되었다. 다양한 취미를 지닌 그녀는 활발하면서도 장난기가 넘치며, 다양한 사람들과 어울리며 캠퍼스 라이프를 만끽하는 동시에 자신의 즐거움을 모두와 나누는 것을 좋아한다.', '/images/reso/aemeath.webp', '/images/reso/aemeath-thumb.webp', 2),
  ('startorch-academy', 'LYNAE', '린네', '회절', 5, '매사에 당당하면서도 털털하고 자유로운 성격을 지닌, 스타토치 아카데미의 예과 학생, 린네. 그녀의 소원은, 지금처럼 자유롭게 바이크를 타고 질주하며 마음껏 자신의 색채를 흩뿌리는 아름다운 아카데미 생활을 계속해서 이어 나가는 것이다.', '/images/reso/lynae.webp', '/images/reso/lynae-thumb.webp', 3),
  ('startorch-academy', 'CHISA', '치사', '인멸', 5, '매사에 진지하며, 냉철하면서도 단정한 성격의 스타토치 아카데미의 학원생, 치사. 그녀에게 있어서, 대부분의 문제들은 해체하여 풀어낼 수 있는 수리적인 문제에 불과하다. 오직 진실된 감정만이 셀 수도, 잘려 나갈 수도 없으니──｢재단｣을 다루기에, ｢연결｣을 더욱 소중히 여기는 법이다.', '/images/reso/chisa.webp', '/images/reso/chisa-thumb.webp', 4),
  ('spacetrek-collective', 'LUCILLA', '루실라', '응결', 5, '스타토치 아카데미의 교장 루실라, 그녀는 가슴에 이상을 품고 있으면서도 현실의 냉혹함을 깊이 이해하는 수호자다.', '/images/reso/lucilla.webp', '/images/reso/lucilla-thumb.webp', 1),
  ('spacetrek-collective', 'MORNYE', '모니에', '용융', 5, '스페이스트렉 콜렉티브 연구소의 연구원이자 스타토치 아카데미의 교수 모니에,', '/images/reso/mornye.webp', '/images/reso/mornye-thumb.webp', 2),
  ('the-roya-tribe', 'SIGRIKA', '시그리카', '기류', 5, '시그리카는 스타토치 아카데미의 학생이자, 로야 룬의 공명자다. 훌륭한 솔스원이 되기 위해, 그녀는 그 어떤 난관을 맞닥트릴지라도 전력을 다해 모든 비밀을 밝혀낼 것이다.', '/images/reso/sigrika.webp', '/images/reso/sigrika-thumb.webp', 1),
  ('flaming-sakura', 'HIYUKI', '히유키', '응결', 5, '라하이 로이 특별 대책반 구성원 히유키, 그녀의 주위에는 얼음처럼 시리고 맑은 기운이 감돈다.히유키에게 전해진 기도들은, 사람들과 짧은 만남의 길에서, 그녀가 끊임없이 앞으로 나아가도록 밀어주는 힘이다.', '/images/reso/hiyuki.webp', '/images/reso/hiyuki-thumb.webp', 1),
  ('new-federation', 'LILY', '릴리', '회절', 5, '연방 공명자 전쟁에 휘말린 조향사 소녀. 특별한 공명 어빌리티 덕분에 전쟁 속에서 사람들의 마음을 치유하는 심리 치료사가 되었다. 전쟁을 막을 수 없었던 마음씨 고운 소녀는, 그저 눈앞의 사람들을 한 명이라도 더 구하기 위해 온 힘을 다할 뿐이었다.', '/images/reso/lily.webp', '/images/reso/lily-thumb.webp', 1),
  ('new-federation', 'CALCHARO', '카카루', '전도', 5, '다국적 독립 용병 조직인 「유령사냥단」의 단장은 냉정하고 엄숙하며 보이지 않는 압박감을 뿜어낸다.추방자였던 그는 마치 일인 군단처럼 유령사냥단을 이끌고 위세를 떨쳤다.마음이 모질고 손속이 독하며, 이익을 우선시하지만 실제로는 이 모든 것은 가족을 보호하기 위해서다.', '/images/reso/calcharo.webp', '/images/reso/calcharo-thumb.webp', 2),
  ('the-fractsidus', 'PHROLOVA', '플로로', '인멸', 5, '잔성회의 간부 플로로. 우울하면서도 조용한 그녀는, 가까이 다가가기만 해도 끝없는 슬픔에 빠질 것만 같은 분위기를 지녔다.', '/images/reso/phrolova.webp', '/images/reso/phrolova-thumb.webp', 1),
  ('other', 'DENIA', '데니아', '용융', 5, '스타토치 아카데미 보이드매터 과학부 학생 데니아, 언제나 모두에게 ''다정한'' 미소를 지어주며 가끔은 장난기 섞인 농담을 건네기도 한다. 데니아는 보통 나른하게 졸거나, 자신과 같이 지내는 사람들을 조용히 관찰하고는 한다. 그들의 활기차면서도 진실된 웃음은 그녀에게 따스한 안도감을 준다.', '/images/reso/denia.webp', '/images/reso/denia-thumb.webp', 1),
  ('unknown', 'REBECCA', '레베카', '전도', 5, '“가자! 한판 붙으러!”', '/images/reso/rebecca.webp', '/images/reso/rebecca-thumb.webp', 1),
  ('unknown', 'LUCY', '루시', '회절', 5, '“나이트 시티에서 이름을 남기려면, 어떻게 사느냐가 아니라... 어떻게 죽느냐가 중요해.”', '/images/reso/lucy.webp', '/images/reso/lucy-thumb.webp', 2),
  ('unknown', 'ROVER', '방랑자', '회절', 5, '신분을 알 수 없는 방랑자가 어떤 이유에서인지 깨어나 여행을 떠나고, 그 여행을 통해 점차 세상과 연결된다.', '/images/reso/rover-f.webp', '/images/reso/rover-f-thumb.webp', 3),
  ('unknown', 'ROVER', '방랑자', '회절', 5, '신분을 알 수 없는 방랑자가 어떤 이유에서인지 깨어나 여행을 떠나고, 그 여행을 통해 점차 세상과 연결된다.', '/images/reso/rover-m.webp', '/images/reso/rover-m-thumb.webp', 4);

insert into calendar_events (lane, title, start_date, end_date, img, img_pos, sort) values
  ('업데이트', '3.7 『거울에 잠긴 허상, 마음이 비추는 인간 세상』', '2026-09-30', '2026-11-12', '/images/ver-3.7.webp', null, 1),
  ('업데이트', '3.8 『아득한 꿈속, 잔잔히 스러진 백합』', '2026-11-12', '2026-12-24', '/images/ver-3.8.webp', null, 2),
  ('픽업', '여우의 별자리 · 유노 · 치사', '2026-09-30', '2026-10-22', '/images/tuning-0930.webp', '72% 25%', 1),
  ('픽업', '쇄명 · 린네 · 루실라', '2026-10-22', '2026-11-11', '/images/tuning-1022.webp', '55% 30%', 2),
  ('픽업', '릴리 · 시그리카 · 구원', '2026-11-12', '2026-12-03', '/images/tuning-1112.webp', '63% 55%', 3),
  ('픽업', '양양·현령 · 수수 · 히유키', '2026-12-03', '2026-12-23', '/images/tuning-1203.webp', '62% 35%', 4),
  ('이벤트', '세컨드 솔라리스: 이름 없는 꿈', '2026-11-12', '2026-12-21', '/images/event-1112-second-solaris.webp', null, 1),
  ('이벤트', '옛 꿈의 선물 · 7일 출석', '2026-11-12', '2026-12-21', '/images/event-1112-oldgift.webp', null, 2),
  ('이벤트', '라하이 로이 퍼즐 · 역전', '2026-11-19', '2026-12-03', '/images/event-1119-puzzle.webp', null, 3),
  ('이벤트', '울림의 영역 2배', '2026-11-26', '2026-12-03', '/images/event-1126-double.webp', null, 4),
  ('이벤트', '무무 기획 · 정비', '2026-12-03', '2026-12-17', '/images/event-1203-mumu.webp', '20% 50%', 5),
  ('이벤트', '꿈의 들판, 기이함을 찾아서', '2026-12-03', '2026-12-21', '/images/event-1203-dream.webp', 'center', 6),
  ('이벤트', '바람이 향하는 곳 · 출석', '2026-12-07', '2026-12-21', '/images/event-1207-wind.webp', '45% 20%', 7),
  ('특별 방송', '3.8 프리뷰 특별 방송', '2026-11-06', '2026-11-06', null, null, 1),
  ('콜라보·행사', '명조 X 롯데시네마', '2026-10-19', '2026-11-01', '/images/collab-1019.webp', null, 1);

insert into echo_terms (en, name, img, description, sort) values
  ('TACET FIELD', '무음구역', '/images/echo/tacet-field.webp', '현재 학계에서는 「무음구역」이 잔상이 탄생하는 곳이라고 생각하며, 무음구역이 형성될 때는 하늘을 뒤덮은 거꾸로 된 바다가 보이는 현상과 땅을 깊숙이 가르는 십자형 성흔 현상이 동반되는 경우가 많다. 무음구역에서는 수많은 잔향이 계속해서 반사, 교차, 중첩되고, 강렬한 흰빛이 현실과 그 반대편의 미지의 공간을 연결하며, 그 결과 무수한 잔상이 무음구역에 소환된다.', 1),
  ('TACET DISCORD', '잔상', '/images/echo/tacet-discord.webp', '비명 이후에 탄생해 인류의 적이 된 미증유의 존재들. 혼란스러운 주파수 에너지로 구성된 유사 생명체로서 특수 구조인 「성핵」을 가지고 있다. 잔상의 본능은 다른 주파수를 흡수 병합함으로써 자신의 안정성을 유지하고, 심지어는 진화하려는 것으로 사냥과 포식에 집착하는 행동 패턴을 보인다. 그들의 능력, 외형, 행동은 주파수 구성의 차이로 인해 달라지며, 형태가 매우 다양하긴 하지만 대부분은 사람과 비슷한 형태다.', 2),
  ('ECHO', '에코', '/images/echo/echo.webp', '「잔상」의 능력을 반고 단말기로 포착하거나, 이용하거나, 재현할 수 있는 특별한 주파수. 「잔상」을 처치한 후 일정 확률로 상응하는 「잔향」이 남겨진다.「잔향」은 단말기의 데이터 스테이션을 통해 「에코」로 변환되어, 전투에서 이용할 수 있는 힘이 된다.', 3),
  ('THRENODIAN', '명식', '/images/echo/threnodian.webp', '잔상류 중 최상급의 파괴력을 가진 잔상. 인류가 자랑하는 문명과 성숙한 정신을 파괴하려는 욕망을 가지고 있으며, 인류의 절망을 자신의 「식량」으로 삼는다. 「비명」과 함께 태어난 끔찍한 「잔상」들을 동반한다. 만약 문명이 인류의 건강한 의지의 응집이라면, 「명식」은 그 뒤에 숨겨진 어두운 걱정과 은밀한 악의의 응집이다.', 4);

insert into regions (en, name, img, description, sort) values
  ('JINZHOU', '금주', '/images/lore-jinzhou.jpg', '황룡 지역의 중심 도시. 세세의 비호 아래 번영한 성채 도시로, 잔상의 위협에 맞서는 최전선이기도 하다.', 1),
  ('RINASCITA', '리나시타', '/images/lore-rinascita.webp', '바다 위에 펼쳐진 축제의 공화국. 화려한 거리 뒤편에는 오래된 신앙과 비밀이 숨어 있다.', 2),
  ('BLACK SHORES', '흑해안', '/images/lore-black-shores.jpg', '시간이 멈춘 듯한 해안. 비명 이후의 세계와 방랑자의 과거를 잇는 수수께끼의 장소.', 3);

insert into game_info (k, label, value, sort) values
  ('GENRE', '장르', '오픈월드 액션 RPG', 1),
  ('PLATFORM', '플랫폼', 'PC · iOS · Android · PS5', 2),
  ('DEVELOPER', '개발', 'KURO GAMES', 3),
  ('LAUNCH', '출시', '2024.05', 4);

insert into gameplay_slides (title, description, img, sort) values
  ('자유 탐색', '벽 타기, 활공, 그래플로 솔라리스-3의 지형을 막힘없이 누빈다.', '/images/play-1.webp', 1),
  ('액션 전투', '퍼펙트 회피와 반격, 변주·협주 스킬 연계로 이어지는 빠른 전투.', '/images/play-2.webp', 2),
  ('잔상 토벌', '필드를 배회하는 강력한 잔상과 맞서고 보상을 획득한다.', '/images/play-3.webp', 3);

insert into notices (tag, title, published_on) values
  ('공지', '정기 점검 안내 (예시)', '2026-11-20'),
  ('이벤트', '기간 한정 이벤트 오픈 (예시)', '2026-11-18'),
  ('업데이트', '신규 버전 업데이트 내역 (예시)', '2026-11-13'),
  ('공지', '커뮤니티 운영 정책 변경 (예시)', '2026-11-06');
