// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "阪神タイガース非公認検定",
        "main":    "<p>阪神タイガースのいろいろを凝縮し、勝手に作った検定です。</p>",
        "results": "<h5>お疲れ様でした</h5><p></p>",
        "level1":  "合格",
        "level2":  "合格",
        "level3":  "合格",
        "level4":  "不合格",
        "level5":  "不合格" // no comma here
    },
    "questions": [
        { // Question 1 
            "q": "阪神タイガースが最後に日本シリーズに出場したのはいつでしょう",
            "a": [
                {"option": "2012年",      "correct": false},
                {"option": "2013年",     "correct": false},
                {"option": "2014年",      "correct": true},
                {"option": "2015年",     "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> 阪神は2014年、ペナントレースを2位通過しましたが、クライマックスシリーズファイナルステージで巨人軍を打ち負かし、日本シリーズに出場しています。</p>",
            "incorrect": "<p><span>不正解</span> 阪神は2014年、ペナントレースを2位通過しましたが、クライマックスシリーズファイナルステージで巨人軍を打ち負かし、日本シリーズに出場しています。</p>" // no comma here
        },
        { // Question 2 
            "q": "阪神甲子園球場が完成したのが「きのえねの年」なので「甲子園」と命名されたのだが、さて、それは何年か。",
            "a": [
                {"option": "1921年", "correct": false},
                {"option": "1922年", "correct": false},
                {"option": "1923年", "correct": false},
                {"option": "1924年", "correct": true} // no comma here
            ],
        
            "correct": "<p><span>正解</span> 1924(大正13)年3月に起工式、8月に竣工式が行われ完成した。当時は「阪神電車甲子園大運動場」という名前であった</p>",
            "incorrect": "<p><span>不正解</span> 1924(大正13)年3月に起工式、8月に竣工式が行われ完成した。当時は「阪神電車甲子園大運動場」という名前であった</p>" // no comma here
        },
        { // Question 3 
            "q": "下記の選手のうち、2000本安打を達成していないのは？",
            "a": [
                {"option": "掛布雅之", "correct": true},
                {"option": "金本知憲", "correct": false},
                {"option": "藤田平",   "correct": false},
                {"option": "新井貴浩", "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> 掛布雅之選手は、1985年リーグ優勝、日本一の立役者ではありますが、通算安打数は1656本と、名球会入りを果たしていません</p>",
            "incorrect": "<p><span>不正解</span> 掛布雅之選手は、1985年リーグ優勝、日本一の立役者ではありますが、通算安打数は1656本と、名球会入りを果たしていません</p>" // no comma here
        },
        { // Question 4
            "q": "2001年から2005年まで、赤星憲広選手が盗塁王を連続で記録しましたが、その前のタイガースの盗塁王は？",
            "a": [
                {"option": "大野久",   "correct": false},
                {"option": "吉田義男", "correct": true},
                {"option": "松永浩美", "correct": false},
                {"option": "藤田平",   "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> 赤星憲広選手より以前に盗塁王を記録したのは、大阪タイガース時代の吉田義男選手まで遡ります。大野久選手はダイエーホークスに移籍してから、松永浩美選手は阪急ブレーブス時代に盗塁王を記録しています。</p>",
            "incorrect": "<p><span>不正解</span> 赤星憲広選手より以前に盗塁王を記録したのは、大阪タイガース時代の吉田義男選手まで遡ります。大野久選手はダイエーホークスに移籍してから、松永浩美選手は阪急ブレーブス時代に盗塁王を記録しています。</p>" // no comma here
        },
        { // Question 5
            "q": "1985年4月17日、甲子園球場・巨人戦の７回裏。ランディ・バース、掛布雅之、岡田彰布がバックスクリーンへ３者連続ホームランを放ちました。打たれた投手は誰でしょう？",
            "a": [
                {"option": "江川卓",   "correct": false},
                {"option": "槙原寛己", "correct": true},
                {"option": "桑田真澄", "correct": false},
                {"option": "西本聖",   "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> 佐野元国とバッテリーを組み、3者連続でバックスクリーンへの本塁打（バックスクリーン3連発）を喫した。ただし、阪神戦は通算38勝10敗とかなり相性は良かった。</p>",
            "incorrect": "<p><span>不正解</span> 佐野元国とバッテリーを組み、3者連続でバックスクリーンへの本塁打（バックスクリーン3連発）を喫した。ただし、阪神戦は通算38勝10敗とかなり相性は良かった。</p>" // no comma here
        },
        { // Question 6
            "q": "1999年6月12日の対巨人戦（甲子園）で、12回裏同点1死1・3塁の場面で打者の新庄剛志に敬遠球を打たれサヨナラ負けした投手は誰？",
            "a": [
                {"option": "桑田真澄",   "correct": false},
                {"option": "槇原寛己", "correct": true},
                {"option": "斎藤雅樹", "correct": false},
                {"option": "上原浩治",   "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> なお、槙原にとってはこれが現役最後の敬遠であった。</p>",
            "incorrect": "<p><span>不正解</span> なお、槙原にとってはこれが現役最後の敬遠であった。</p>" // no comma here
        },
        { // Question 7
            "q": "1985年日本一なった阪神の監督の名前は？",
            "a": [
                {"option": "藤村冨美男",   "correct": false},
                {"option": "吉田義男", "correct": true},
                {"option": "中西太", "correct": false},
                {"option": "野村克也",   "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> この結果を受けて、現役時代の背番号が永久欠番に指定されることになった。</p>",
            "incorrect": "<p><span>不正解</span> 吉田義男。この結果を受けて、現役時代の背番号が永久欠番に指定されることになった。</p>" // no comma here
        },
        { // Question 8
            "q": "1985年、21年ぶりにリーグ優勝を収め、見事日本シリーズへ進出したタイガースの前に 立ちふさがったのは、どこでしょう？",
            "a": [
                {"option": "近鉄バファローズ",   "correct": false},
                {"option": "西武ライオンズ", "correct": true},
                {"option": "オリックスブルーフェーブ", "correct": false},
                {"option": "福岡ダイエーホークス", "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> 西武ライオンズです。</p>",
            "incorrect": "<p><span>不正解</span> 西武ライオンズです。</p>" // no comma here
        },
        { // Question 9
            "q": "タイガースが、リーグ優勝を収めたのはどことの試合で何球場でしょう？",
            "a": [
                {"option": "対巨人戦・後楽園球場",   "correct": false},
                {"option": "対ヤクルト戦・神宮球場", "correct": true},
                {"option": "対広島戦・広島市民球場", "correct": false},
                {"option": "対中日・ナゴヤ球場",   "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span> 対ヤクルトで神宮球場です。</p>",
            "incorrect": "<p><span>不正解</span> 対ヤクルトで神宮球場です。</p>" // no comma here
        },
        { // Question 10
            "q": "2004年10月4日に、井川慶投手がノーヒットノーランを達成しましたが、以下の選手のうち、ノーヒットノーランを達成したことのない投手は？",
            "a": [
                {"option": "湯船敏郎",    "correct": false},
                {"option": "川尻哲郎",    "correct": false},
                {"option": "野田浩司",    "correct": true},
                {"option": "江夏豊",     "correct": false} // no comma here
            ],
            "correct": "<p><span>正解</span>湯舟敏郎投手は1992年6月14日に、川尻哲郎投手は1998年5月26日に、江夏豊投手は1973年8月30日にノーヒットノーランを達成しています。</p>",
            "incorrect": "<p><span>不正解</span> 湯舟敏郎投手は1992年6月14日に、川尻哲郎投手は1998年5月26日に、江夏豊投手は1973年8月30日にノーヒットノーランを達成しています。</p>" // no comma here
        } // no comma here


    ]
};