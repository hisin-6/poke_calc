(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    "7C78": function (n, t) {
      !(function () {
        (String.prototype.romaToHiragana = function () {
          return n(this, "hiragana");
        }),
          (String.prototype.romaToKatakana = function () {
            return n(this, "katakana");
          });
        var n = function (n, e) {
            for (
              var r, i, o = [], l = 0, u = /[a-zA-Z.,-]/, a = 0;
              a < n.length;
              a++
            )
              if (l > 0) l--;
              else if (((r = n.charAt(a)), u.test(r))) {
                for (var s = 5, c = !1; --s; )
                  if (((r = n.slice(a, a + s)), t[e].hasOwnProperty(r))) {
                    (c = !0),
                      (i = t[e][r]),
                      (l = 2 == s ? 1 : s - 1),
                      2 == s && i.charAt(0) == t[e].tt && a--,
                      o.push(i);
                    break;
                  }
                !c && o.push(r);
              } else o.push(r);
            return o.join("");
          },
          t = {
            hiragana: {
              a: "あ",
              i: "い",
              yi: "い",
              u: "う",
              wu: "う",
              whu: "う",
              e: "え",
              o: "お",
              la: "ぁ",
              xa: "ぁ",
              li: "ぃ",
              xi: "ぃ",
              lyi: "ぃ",
              xyi: "ぃ",
              lu: "ぅ",
              xu: "ぅ",
              le: "ぇ",
              xe: "ぇ",
              lye: "ぇ",
              xye: "ぇ",
              lo: "ぉ",
              xo: "ぉ",
              wha: "うぁ",
              whi: "うぃ",
              wi: "うぃ",
              whe: "うぇ",
              we: "うぇ",
              who: "うぉ",
              ka: "か",
              ca: "か",
              ki: "き",
              ku: "く",
              cu: "く",
              qu: "く",
              ke: "け",
              ko: "こ",
              co: "こ",
              lka: "ヵ",
              xka: "ヵ",
              lke: "ヶ",
              xke: "ヶ",
              ga: "が",
              gi: "ぎ",
              gu: "ぐ",
              ge: "げ",
              go: "ご",
              kya: "きゃ",
              kyi: "きぃ",
              kyu: "きゅ",
              kye: "きぇ",
              kyo: "きょ",
              qya: "くゃ",
              qyu: "くゅ",
              qwa: "くぁ",
              qa: "くぁ",
              kwa: "くぁ",
              qwi: "くぃ",
              qi: "くぃ",
              qyi: "くぃ",
              qwu: "くぅ",
              qwe: "くぇ",
              qe: "くぇ",
              qye: "くぇ",
              qwo: "くぉ",
              qo: "くぉ",
              gya: "ぎゃ",
              gyi: "ぎぃ",
              gyu: "ぎゅ",
              gye: "ぎぇ",
              gyo: "ぎょ",
              gwa: "ぐぁ",
              gwi: "ぐぃ",
              gwu: "ぐぅ",
              gwe: "ぐぇ",
              gwo: "ぐぉ",
              sa: "さ",
              si: "し",
              ci: "し",
              shi: "し",
              su: "す",
              se: "せ",
              ce: "せ",
              so: "そ",
              za: "ざ",
              zi: "じ",
              ji: "じ",
              zu: "ず",
              ze: "ぜ",
              zo: "ぞ",
              sya: "しゃ",
              sha: "しゃ",
              syi: "しぃ",
              syu: "しゅ",
              shu: "しゅ",
              sye: "しぇ",
              she: "しぇ",
              syo: "しょ",
              sho: "しょ",
              swa: "すぁ",
              swi: "すぃ",
              swu: "すぅ",
              swe: "すぇ",
              swo: "すぉ",
              zya: "じゃ",
              ja: "じゃ",
              jya: "じゃ",
              zyi: "じぃ",
              jyi: "じぃ",
              zyu: "じゅ",
              ju: "じゅ",
              jyu: "じゅ",
              zye: "じぇ",
              je: "じぇ",
              jye: "じぇ",
              zyo: "じょ",
              jo: "じょ",
              jyo: "じょ",
              ta: "た",
              ti: "ち",
              chi: "ち",
              tu: "つ",
              tsu: "つ",
              te: "て",
              to: "と",
              ltu: "っ",
              xtu: "っ",
              ltsu: "っ",
              da: "だ",
              di: "ぢ",
              du: "づ",
              de: "で",
              do: "ど",
              tya: "ちゃ",
              cha: "ちゃ",
              cya: "ちゃ",
              tyi: "ちぃ",
              cyi: "ちぃ",
              tyu: "ちゅ",
              chu: "ちゅ",
              cyu: "ちゅ",
              tye: "ちぇ",
              che: "ちぇ",
              cye: "ちぇ",
              tyo: "ちょ",
              cho: "ちょ",
              cyo: "ちょ",
              tsa: "つぁ",
              tsi: "つぃ",
              tse: "つぇ",
              tso: "つぉ",
              tha: "てゃ",
              thi: "てぃ",
              thu: "てゅ",
              the: "てぇ",
              tho: "てょ",
              twa: "とぁ",
              twi: "とぃ",
              twu: "とぅ",
              twe: "とぇ",
              two: "とぉ",
              dya: "ぢゃ",
              dyi: "ぢぃ",
              dyu: "ぢゅ",
              dye: "ぢぇ",
              dyo: "ぢょ",
              dha: "でゃ",
              dhi: "でぃ",
              dhu: "でゅ",
              dhe: "でぇ",
              dho: "でょ",
              dwa: "どぁ",
              dwi: "どぃ",
              dwu: "どぅ",
              dwe: "どぇ",
              dwo: "どぉ",
              na: "な",
              ni: "に",
              nu: "ぬ",
              ne: "ね",
              no: "の",
              nya: "にゃ",
              nyi: "にぃ",
              nyu: "にゅ",
              nye: "にぇ",
              nyo: "にょ",
              ha: "は",
              hi: "ひ",
              hu: "ふ",
              fu: "ふ",
              he: "へ",
              ho: "ほ",
              ba: "ば",
              bi: "び",
              bu: "ぶ",
              be: "べ",
              bo: "ぼ",
              pa: "ぱ",
              pi: "ぴ",
              pu: "ぷ",
              pe: "ぺ",
              po: "ぽ",
              hya: "ひゃ",
              hyi: "ひぃ",
              hyu: "ひゅ",
              hye: "ひぇ",
              hyo: "ひょ",
              fya: "ふゃ",
              fyu: "ふゅ",
              fyo: "ふょ",
              fwa: "ふぁ",
              fa: "ふぁ",
              fwi: "ふぃ",
              fi: "ふぃ",
              fyi: "ふぃ",
              fwu: "ふぅ",
              fwe: "ふぇ",
              fe: "ふぇ",
              fye: "ふぇ",
              fwo: "ふぉ",
              fo: "ふぉ",
              bya: "びゃ",
              byi: "びぃ",
              byu: "びゅ",
              bye: "びぇ",
              byo: "びょ",
              va: "ヴぁ",
              vi: "ヴぃ",
              vu: "ヴ",
              ve: "ヴぇ",
              vo: "ヴぉ",
              vya: "ヴゃ",
              vyi: "ヴぃ",
              vyu: "ヴゅ",
              vye: "ヴぇ",
              vyo: "ヴょ",
              pya: "ぴゃ",
              pyi: "ぴぃ",
              pyu: "ぴゅ",
              pye: "ぴぇ",
              pyo: "ぴょ",
              ma: "ま",
              mi: "み",
              mu: "む",
              me: "め",
              mo: "も",
              mya: "みゃ",
              myi: "みぃ",
              myu: "みゅ",
              mye: "みぇ",
              myo: "みょ",
              ya: "や",
              yu: "ゆ",
              yo: "よ",
              lya: "ゃ",
              xya: "ゃ",
              lyu: "ゅ",
              xyu: "ゅ",
              lyo: "ょ",
              xyo: "ょ",
              ra: "ら",
              ri: "り",
              ru: "る",
              re: "れ",
              ro: "ろ",
              rya: "りゃ",
              ryi: "りぃ",
              ryu: "りゅ",
              rye: "りぇ",
              ryo: "りょ",
              wa: "わ",
              wo: "を",
              n: "ん",
              nn: "ん",
              "n'": "ん",
              xn: "ん",
              lwa: "ゎ",
              xwa: "ゎ",
              ".": "。",
              ",": "、",
              bb: "っ",
              cc: "っ",
              dd: "っ",
              ff: "っ",
              gg: "っ",
              hh: "っ",
              jj: "っ",
              kk: "っ",
              ll: "っ",
              mm: "っ",
              pp: "っ",
              qq: "っ",
              rr: "っ",
              ss: "っ",
              tt: "っ",
              vv: "っ",
              ww: "っ",
              xx: "っ",
              yy: "っ",
              zz: "っ",
              "-": "ー",
            },
            katakana: {
              a: "ア",
              i: "イ",
              yi: "イ",
              u: "ウ",
              wu: "ウ",
              whu: "ウ",
              e: "エ",
              o: "オ",
              la: "ァ",
              xa: "ァ",
              li: "ィ",
              xi: "ィ",
              lyi: "ィ",
              xyi: "ィ",
              lu: "ゥ",
              xu: "ゥ",
              le: "ェ",
              xe: "ェ",
              lye: "ェ",
              xye: "ェ",
              lo: "ォ",
              xo: "ォ",
              wha: "ウァ",
              whi: "ウィ",
              wi: "ウィ",
              whe: "ウェ",
              we: "ウェ",
              who: "ウォ",
              ka: "カ",
              ca: "カ",
              ki: "キ",
              ku: "ク",
              cu: "ク",
              qu: "ク",
              ke: "ケ",
              ko: "コ",
              co: "コ",
              lka: "ヵ",
              xka: "ヵ",
              lke: "ヶ",
              xke: "ヶ",
              ga: "ガ",
              gi: "ギ",
              gu: "グ",
              ge: "ゲ",
              go: "ゴ",
              kya: "キャ",
              kyi: "キィ",
              kyu: "キュ",
              kye: "キェ",
              kyo: "キョ",
              qya: "クャ",
              qyu: "クュ",
              qwa: "クァ",
              qa: "クァ",
              kwa: "クァ",
              qwi: "クィ",
              qi: "クィ",
              qyi: "クィ",
              qwu: "クゥ",
              qwe: "クェ",
              qe: "クェ",
              qye: "クェ",
              qwo: "クォ",
              qo: "クォ",
              gya: "ギャ",
              gyi: "ギィ",
              gyu: "ギュ",
              gye: "ギェ",
              gyo: "ギョ",
              gwa: "グァ",
              gwi: "グィ",
              gwu: "グゥ",
              gwe: "グェ",
              gwo: "グォ",
              sa: "サ",
              si: "シ",
              ci: "シ",
              shi: "シ",
              su: "ス",
              se: "セ",
              ce: "セ",
              so: "ソ",
              za: "ザ",
              zi: "ジ",
              ji: "ジ",
              zu: "ズ",
              ze: "ゼ",
              zo: "ゾ",
              sya: "シャ",
              sha: "シャ",
              syi: "シィ",
              syu: "シュ",
              shu: "シュ",
              sye: "シェ",
              she: "シェ",
              syo: "ショ",
              sho: "ショ",
              swa: "スァ",
              swi: "スィ",
              swu: "スゥ",
              swe: "スェ",
              swo: "スォ",
              zya: "ジャ",
              ja: "ジャ",
              jya: "ジャ",
              zyi: "ジィ",
              jyi: "ジィ",
              zyu: "ジュ",
              ju: "ジュ",
              jyu: "ジュ",
              zye: "ジェ",
              je: "ジェ",
              jye: "ジェ",
              zyo: "ジョ",
              jo: "ジョ",
              jyo: "ジョ",
              ta: "タ",
              ti: "チ",
              chi: "チ",
              tu: "ツ",
              tsu: "ツ",
              te: "テ",
              to: "ト",
              ltu: "ッ",
              xtu: "ッ",
              ltsu: "ッ",
              da: "ダ",
              di: "ヂ",
              du: "ヅ",
              de: "デ",
              do: "ド",
              tya: "チャ",
              cha: "チャ",
              cya: "チャ",
              tyi: "チィ",
              cyi: "チィ",
              tyu: "チュ",
              chu: "チュ",
              cyu: "チュ",
              tye: "チェ",
              che: "チェ",
              cye: "チェ",
              tyo: "チョ",
              cho: "チョ",
              cyo: "チョ",
              tsa: "ツァ",
              tsi: "ツィ",
              tse: "ツェ",
              tso: "ツォ",
              tha: "テャ",
              thi: "ティ",
              thu: "テュ",
              the: "テェ",
              tho: "テョ",
              twa: "トァ",
              twi: "トィ",
              twu: "トゥ",
              twe: "トェ",
              two: "トォ",
              dya: "ヂャ",
              dyi: "ヂィ",
              dyu: "ヂュ",
              dye: "ヂェ",
              dyo: "ヂョ",
              dha: "デャ",
              dhi: "ディ",
              dhu: "デュ",
              dhe: "デェ",
              dho: "デョ",
              dwa: "ドァ",
              dwi: "ドィ",
              dwu: "ドゥ",
              dwe: "ドェ",
              dwo: "ドォ",
              na: "ナ",
              ni: "ニ",
              nu: "ヌ",
              ne: "ネ",
              no: "ノ",
              nya: "ニャ",
              nyi: "ニィ",
              nyu: "ニュ",
              nye: "ニェ",
              nyo: "ニョ",
              ha: "ハ",
              hi: "ヒ",
              hu: "フ",
              fu: "フ",
              he: "ヘ",
              ho: "ホ",
              ba: "バ",
              bi: "ビ",
              bu: "ブ",
              be: "ベ",
              bo: "ボ",
              pa: "パ",
              pi: "ピ",
              pu: "プ",
              pe: "ペ",
              po: "ポ",
              hya: "ヒャ",
              hyi: "ヒィ",
              hyu: "ヒュ",
              hye: "ヒェ",
              hyo: "ヒョ",
              fya: "フャ",
              fyu: "フュ",
              fyo: "フョ",
              fwa: "ファ",
              fa: "ファ",
              fwi: "フィ",
              fi: "フィ",
              fyi: "フィ",
              fwu: "フゥ",
              fwe: "フェ",
              fe: "フェ",
              fye: "フェ",
              fwo: "フォ",
              fo: "フォ",
              bya: "ビャ",
              byi: "ビィ",
              byu: "ビュ",
              bye: "ビェ",
              byo: "ビョ",
              va: "ヴァ",
              vi: "ヴィ",
              vu: "ヴ",
              ve: "ヴェ",
              vo: "ヴォ",
              vya: "ヴャ",
              vyi: "ヴィ",
              vyu: "ヴュ",
              vye: "ヴェ",
              vyo: "ヴョ",
              pya: "ピャ",
              pyi: "ピィ",
              pyu: "ピュ",
              pye: "ピェ",
              pyo: "ピョ",
              ma: "マ",
              mi: "ミ",
              mu: "ム",
              me: "メ",
              mo: "モ",
              mya: "ミャ",
              myi: "ミィ",
              myu: "ミュ",
              mye: "ミェ",
              myo: "ミョ",
              ya: "ヤ",
              yu: "ユ",
              yo: "ヨ",
              lya: "ャ",
              xya: "ャ",
              lyu: "ュ",
              xyu: "ュ",
              lyo: "ョ",
              xyo: "ョ",
              ra: "ラ",
              ri: "リ",
              ru: "ル",
              re: "レ",
              ro: "ロ",
              rya: "リャ",
              ryi: "リィ",
              ryu: "リュ",
              rye: "リェ",
              ryo: "リョ",
              wa: "ワ",
              wo: "ヲ",
              n: "ン",
              nn: "ン",
              "n'": "ン",
              xn: "ン",
              lwa: "ヮ",
              xwa: "ヮ",
              ".": "。",
              ",": "、",
              bb: "ッ",
              cc: "ッ",
              dd: "ッ",
              ff: "ッ",
              gg: "ッ",
              hh: "ッ",
              jj: "ッ",
              kk: "ッ",
              ll: "ッ",
              mm: "ッ",
              pp: "ッ",
              qq: "ッ",
              rr: "ッ",
              ss: "ッ",
              tt: "ッ",
              vv: "ッ",
              ww: "ッ",
              xx: "ッ",
              yy: "ッ",
              zz: "ッ",
              "-": "ー",
            },
          };
      })();
    },  
  }
]);