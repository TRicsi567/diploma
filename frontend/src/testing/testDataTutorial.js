const TutorialData = {
  id: 1,
  name: 'Változók',
  description:
    'Egy programozó szerszámosládájának alapvető eszköze. Szó lesz a különböző változótípusokról és azoknak tulajdonságairól',
  slides: [
    [
      {
        text:
          "<p>Mint a legt&ouml;bb programoz&aacute;si nyelv, a C k&eacute;pes n&eacute;vvel ell&aacute;tott v&aacute;ltoz&oacute;k &eacute;s azok tartalm&aacute;nak haszn&aacute;lat&aacute;ra &eacute;s feldolgoz&aacute;s&aacute;ra. A '<em>v&aacute;ltoz&oacute;k</em>&nbsp;csak nevek, amelyek a mem&oacute;ria egy hely&eacute;re hivatkoznak - arra a helyre, amely azt az &eacute;rt&eacute;ket t&aacute;rolja, amire hivatkozunk.</p>",
      },
      {
        text:
          '<p>Hasznos, ha &uacute;gy gondolunk a v&aacute;ltoz&oacute;kra, mint az &eacute;rt&eacute;ket helyettes&iacute;tő n&eacute;vre. &Uacute;gy gondolhatunk a v&aacute;ltoz&oacute;ra, mint ami egyen&eacute;rt&eacute;kű a hozz&aacute; tartoz&oacute; &eacute;rt&eacute;kkel. Teh&aacute;t, ha van egy&nbsp;<em>i</em>&nbsp;v&aacute;ltoz&oacute;, amelyiket 4-es &eacute;rt&eacute;kkel hoztunk l&eacute;tre (4-es &eacute;rt&eacute;kkel&nbsp;<strong>inicializ&aacute;ltunk</strong>), abb&oacute;l k&ouml;vetkezik, hogy az&nbsp;<em>i+1</em>&nbsp;az&nbsp;<em>5</em>&nbsp;lesz.</p>',
      },
      {
        text:
          '<p>Mivel a C viszonylag alacsony sz&iacute;ntű programoz&aacute;si nyelv, mielőtt egy C program haszn&aacute;lni tud egy mem&oacute;riater&uuml;letet egy v&aacute;ltoz&oacute; t&aacute;rol&aacute;s&aacute;ra, ig&eacute;nyelni kell azt. Ezt a v&aacute;ltoz&oacute;&nbsp;<strong>deklar&aacute;l&aacute;s&aacute;val</strong>&nbsp;tehetj&uuml;k meg. A v&aacute;ltoz&oacute; deklar&aacute;l&aacute;sa az a folyamat, amikor a C programnak megadjuk, hogy h&aacute;ny v&aacute;ltoz&oacute; legyen, mi legyen a nev&uuml;k &eacute;s mekkora mem&oacute;riater&uuml;letre van sz&uuml;ks&eacute;g&uuml;k az egyes v&aacute;ltoz&oacute;knak.</p>',
      },
      {
        text:
          '<p>A C programoz&aacute;si nyelvben, amikor v&aacute;ltoz&oacute;kkal dolgozunk, fontos tudni a v&aacute;ltoz&oacute;&nbsp;<em>t&iacute;pus&aacute;t</em>&nbsp;&eacute;s m&eacute;ret&eacute;t. Mivel a C egy el&eacute;g alacsony szintű nyelv, ezek hardver-specifikusak lehetnek - azaz, az hogy hogyan műk&ouml;dik az egyik g&eacute;pen, k&uuml;l&ouml;nb&ouml;zhet att&oacute;l, hogy hogyan műk&ouml;dik egy m&aacute;sikon.</p>',
      },
      {
        text:
          '<p>A C nyelv &ouml;sszes v&aacute;ltoz&oacute;j&aacute;t csak a deklar&aacute;l&aacute;skor megadott t&iacute;pus t&aacute;rol&aacute;s&aacute;ra haszn&aacute;lhatjuk.</p>',
      },
    ],
    [
      {
        text:
          '<h1>Deklar&aacute;l&aacute;s, inicializ&aacute;l&aacute;s &eacute;s &eacute;rt&eacute;kad&aacute;s</h1>',
      },
      {
        text:
          '<p>Itt egy p&eacute;lda egy eg&eacute;sz t&iacute;pus&oacute; v&aacute;ltoz&oacute; deklar&aacute;l&aacute;s&aacute;ra. Ezt a v&aacute;ltoz&oacute;t&nbsp;<tt>egy_szam</tt>&nbsp;n&eacute;ven fogjuk nevezni. (Fontos a sor v&eacute;gi pontosvessző; a ford&iacute;t&oacute; ilyen m&oacute;don v&aacute;lasztja el egym&aacute;st&oacute;l a program egyes&nbsp;<em>utas&iacute;t&aacute;sait</em>.)</p>',
      },
      { code: 'int egy_szam;' },
      {
        text:
          '<p>Ez az utas&iacute;t&aacute;s azt jelenti, hogy az&nbsp;<tt>egy_szam</tt>&nbsp;nevű v&aacute;ltoz&oacute; sz&aacute;m&aacute;ra annyi helyet foglaltunk a mem&oacute;ri&aacute;ban, ami egy eg&eacute;sz t&iacute;pus (integer) t&iacute;pus&uacute; v&aacute;ltoz&oacute; t&aacute;rol&aacute;s&aacute;ra elegendő. Fontos, hogy meg kell adni az adat t&iacute;pus&aacute;t, amelyet a v&aacute;ltoz&oacute; t&aacute;rolni fog. Speci&aacute;lis kulcsszavak vannak a t&iacute;pusok megad&aacute;s&aacute;ra - ezt a k&ouml;vetkező fejezetben fogjuk l&aacute;tni.</p>',
      },
      {
        text:
          '<p>T&ouml;bb v&aacute;ltoz&oacute; is deklar&aacute;lhat&oacute; egyetlen utas&iacute;t&aacute;sban a k&ouml;vetkezők&eacute;ppen:</p>',
      },
      { code: 'int egy_szam, masik_szam, megegy_szam;' },
      {
        text:
          '<p>Azt is megtehetj&uuml;k, hogy deklar&aacute;ljuk a v&aacute;ltoz&oacute;t&nbsp;<em>&eacute;s</em>&nbsp;r&ouml;gt&ouml;n &eacute;rt&eacute;ket adunk neki.</p>',
      },
      { code: 'int egy_szam=3;' },
      {
        text:
          '<p>Ezt h&iacute;vj&aacute;k&nbsp;<em>initializ&aacute;l&aacute;snak</em>.</p>\n<p>A C korai verzi&oacute;iban a v&aacute;ltoz&oacute;kat a blokkok elej&eacute;n kellett deklar&aacute;lni. A C99-ben (a C 1999-es verzi&oacute;j&aacute;ban) megengedett a deklar&aacute;l&aacute;sok &eacute;s az egy&eacute;b utas&iacute;t&aacute;sok kever&eacute;se - de nem gyakran haszn&aacute;lj&aacute;k, mert ritk&aacute;n sz&uuml;ks&eacute;ges, &eacute;s n&eacute;h&aacute;ny ford&iacute;t&oacute; m&eacute;g nem t&aacute;mogatja a C99-et.</p>\n<p>Miut&aacute;n deklar&aacute;ltunk egy v&aacute;ltoz&oacute;t, &eacute;rt&eacute;ket adhatunk a v&aacute;ltoz&oacute;nak egy al&aacute;bbihoz hasonl&oacute; utas&iacute;t&aacute;ssal:</p>',
      },
      { code: 'egy_szam=6;' },
      {
        text:
          '<p>Egy v&aacute;ltoz&oacute;nak ak&aacute;rh&aacute;nyszor &eacute;rt&eacute;ket adhatunk, ez&eacute;rt is h&iacute;vj&aacute;k v&aacute;ltoz&oacute;nak.</p>\n<p>Egy v&aacute;ltoz&oacute;nak egy m&aacute;sik v&aacute;ltoz&oacute; &eacute;rt&eacute;k&eacute;t is &aacute;tadhatjuk:</p>',
      },
      { code: 'egy_szam = masikszam;' },
      {
        text:
          '<p>Vagy t&ouml;bb v&aacute;ltoz&oacute;nak ugyanazt az &eacute;rt&eacute;ket adhatjuk egyetlen utas&iacute;t&aacute;ssal:</p>',
      },
      { code: 'egy_szam = masikszam = megegyszam = 3;' },
      {
        text:
          '<p>Ez az&eacute;rt műk&ouml;dik, mert az&nbsp;<tt>x = y</tt>&nbsp;&eacute;rt&eacute;kad&aacute;s a v&aacute;ltoz&oacute;hoz rendelt &eacute;rt&eacute;kkel t&eacute;r vissza. Az&nbsp;<tt>x = y = z&nbsp;</tt>val&oacute;j&aacute;ban egy r&ouml;vid&iacute;t&eacute;se a&nbsp;<tt>x = (y = z)</tt>&nbsp;utas&iacute;t&aacute;snak.</p>',
      },
    ],
    [
      { text: '<h2>V&aacute;ltoz&oacute;k elnevez&eacute;se</h2>' },
      {
        text:
          '<p>A C-ben a v&aacute;ltoz&oacute;nevek betűkből (&eacute;kezettelen nagy &eacute;s kisbetűk) &eacute;s sz&aacute;mokb&oacute;l &aacute;llnak. Az al&aacute;h&uacute;z&aacute;s karakter ("_") is megengedett. A nevek nem kezdődhetnek sz&aacute;mmal.</p>\n<p>Al&aacute;bb l&aacute;that&oacute; p&aacute;r &eacute;rv&eacute;nyes v&aacute;ltoz&oacute;n&eacute;v:</p>',
      },
      { code: 'oszto\nNevek\nURL\nszemelyi_szam\n_alma\n_\nJeloloBizottsag' },
      {
        text:
          '<p>P&aacute;r p&eacute;lda &eacute;rv&eacute;nytelen nevekre:</p>',
      },
      {
        code:
          '7szilvafa    (számmal kezdődik)\nlegnagyobb kozos oszto  (szóköz nem megengedett nevekben)\n$koltseg    ($ nem megengedett -- csak betűk, számok és _)\nwhile   (a nyelv kulcsszavai nem használhatóak változónévnek)',
      },
      {
        text:
          '<p>Ahogy az utols&oacute; p&eacute;lda mutatja, bizonyos szavak le vannak foglalva a nyelv kulcsszavai sz&aacute;m&aacute;ra, &eacute;s ezeket nem haszn&aacute;lhatjuk v&aacute;ltoz&oacute;n&eacute;vk&eacute;nt. Ilyenek p&eacute;ld&aacute;ul az if &eacute;s a for is. &Eacute;rdemes betartani, hogy az al&aacute;h&uacute;z&aacute;ssal kezdődő v&aacute;ltoz&oacute;neveket nem haszn&aacute;lunk.</p>\n<p>A C v&aacute;ltoz&oacute;neveinek szab&aacute;lyai &eacute;rv&eacute;nyesek egy&eacute;b nyelvi konstrukci&oacute;k, mint a f&uuml;ggv&eacute;nynevek, strukt&uacute;r&aacute;k tag-jei &eacute;s makr&oacute;k eset&eacute;n is; ezekről k&eacute;sőbb lesz sz&oacute;.</p>',
      },
      {
        text:
          '<h3>Liter&aacute;lisok</h3>\n<p>Minden esetben, amikor a programban egy &eacute;rt&eacute;ket k&ouml;zvetlen&uuml;l adunk meg ahelyett, hogy egy v&aacute;ltoz&oacute;ra hivatkozn&aacute;nk, vagy egy&eacute;b m&aacute;s m&oacute;don, az &eacute;rt&eacute;ket&nbsp;<strong>liter&aacute;lisnak</strong>&nbsp;nevezz&uuml;k. A fenti inicializ&aacute;l&aacute;si p&eacute;ld&aacute;ban a 3 egy liter&aacute;lis.</p>',
      },
    ],
    [
      {
        text:
          '<h1>A n&eacute;gy alapvető adatt&iacute;pus</h1>\n<p>A C szabv&aacute;nyban n&eacute;gy alapvető adatt&iacute;pus van. Ezek az&nbsp;<code><strong>int</strong></code>,&nbsp;<code><strong>char</strong></code>,&nbsp;<code><strong>float</strong></code>&nbsp;&eacute;s&nbsp;<code><strong>double</strong></code>.</p>',
      },
      {
        text:
          '<h3>Az <strong>int t&iacute;pus</strong></h3>\n<p>Az&nbsp;<tt>int</tt>&nbsp;t&iacute;pus eg&eacute;sz sz&aacute;mokat k&eacute;pes t&aacute;rolni. Egy eg&eacute;sz &eacute;rt&eacute;ke tipikusan a sz&aacute;m&iacute;t&oacute;g&eacute;p szav&aacute;nak m&eacute;ret&eacute;vel egyezik, amely a legt&ouml;bb modern szem&eacute;lyi sz&aacute;m&iacute;t&oacute;g&eacute;pben 32 bits (4 byte) vagy 64 bit (8 byte). A k&ouml;vetkezők p&eacute;ld&aacute;k eg&eacute;sz liter&aacute;lisokra: 1,2,3, 10, 100... Ha az&nbsp;<tt>int</tt> 32 bites, minden eg&eacute;sz sz&aacute;mot k&eacute;pes t&aacute;rolni -2147483648 &eacute;s 2147483647 k&ouml;z&ouml;tt. Egy 32 bites sz&aacute;m 4294967296 (azaz<span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y">&nbsp;2<sup>32</sup></span></span>) lehetős&eacute;get k&eacute;pes t&aacute;rolni.</p>\n<p>Ha &uacute;j eg&eacute;sz v&aacute;ltoz&oacute;t szeretn&eacute;nk haszn&aacute;lni, az&nbsp;<tt>int</tt>&nbsp;kulcssz&oacute;t haszn&aacute;ljuk. P&eacute;ld&aacute;ul:</p>',
      },
      { text: '', code: 'int hallgatok_szama, i, j=5;' },
      {
        text:
          '<p>Ekkor h&aacute;rom v&aacute;ltoz&oacute;t deklar&aacute;lunk, tov&aacute;bb&aacute; a j-nek az 5 liter&aacute;lis &eacute;rt&eacute;ket adjuk.</p>',
      },
      {
        text:
          "<h3>A <strong>char</strong> t&iacute;pus</h3>\n<p>A&nbsp;<code>char</code>&nbsp;t&iacute;pus k&eacute;pes t&aacute;rolni a v&eacute;grehajt&aacute;s karakterk&eacute;szlet&eacute;nek b&aacute;rmelyik elem&eacute;t. Olyan adatot t&aacute;rol, mint az&nbsp;<code>int</code>, de tipikusan egy byte m&eacute;retű. A legt&ouml;bb implement&aacute;ci&oacute; az&nbsp;<a class=\"extiw\" title=\"w:ASCII\" href=\"https://hu.wikipedia.org/wiki/ASCII\">ASCII</a>&nbsp;karakterk&eacute;szletet haszn&aacute;lja a v&eacute;grehajt&aacute;s karakterk&eacute;szletek&eacute;nt.</p>\n<p>P&eacute;ld&aacute;k karakterliter&aacute;lisokra 'a', 'b', '1', stb, valamint n&eacute;h&aacute;ny speci&aacute;lis karakter, mint a '<code>\\0</code>' (a null karakter) &eacute;s '<code>\\n</code>' (&uacute;jsor, eml&eacute;kezz&uuml;nk a \"Hello, Vil&aacute;g\" p&eacute;ld&aacute;ra). Vegy&uuml;k &eacute;szre, hogy a&nbsp;<code>char</code>&nbsp;&eacute;rt&eacute;knek egyszeres id&eacute;zőjelben kell lenni&uuml;k.</p>\n<p>Egy p&eacute;lda az inicializ&aacute;l&aacute;sra:</p>",
      },
      { code: "char betu1 = 'a';" },
      {
        text:
          '<h3>A <strong>float</strong> t&iacute;pus</h3>\n<p>A&nbsp;<code>float</code>&nbsp;a&nbsp;<strong>floating point</strong>, azaz lebegőpontos sz&aacute;m r&ouml;vid&iacute;t&eacute;se. Val&oacute;s sz&aacute;mokat tud t&aacute;rolni, de csak a egy g&eacute;pi sz&oacute; m&eacute;retben. Ez&eacute;rt akkor haszn&aacute;ljuk, hogy nem sz&uuml;ks&eacute;ges a double &aacute;ltal el&eacute;rhető pontoss&aacute;g. A&nbsp;<code>float</code>&nbsp;liter&aacute;lisok v&eacute;g&eacute;re F vagy f betűt kell &iacute;rni, m&aacute;sk&eacute;ppen double-k&eacute;nt ker&uuml;lnek &eacute;rtelmez&eacute;sre. P&eacute;ld&aacute;k: 3.1415926f, 4.0f, 6.022e+23f. A&nbsp;<code>float</code>&nbsp;v&aacute;ltoz&oacute;k a&nbsp;<tt>float</tt>&nbsp;kulcssz&oacute;val deklar&aacute;lhat&oacute;ak.</p>',
      },
      {
        text:
          '<h3>A <strong>double</strong> t&iacute;pus</h3>\n<p>A&nbsp;<tt>double</tt>&nbsp;&eacute;s a&nbsp;<tt>float</tt>&nbsp;t&iacute;pusok nagyon hasonl&oacute;ak, de a&nbsp;<tt>double</tt>&nbsp;k&eacute;tszeres pontoss&aacute;ggal k&eacute;pes t&aacute;rolni a sz&aacute;mokat &ndash; val&oacute;s sz&aacute;mokat, vagyis eg&eacute;sz &eacute;s t&ouml;rt sz&aacute;mokat. P&eacute;ld&aacute;k&nbsp;<tt>double</tt>&nbsp;liter&aacute;lisra 3.1415926535897932, 4.0, 6.022e+23. Az utols&oacute; p&eacute;lda&nbsp;<a class="extiw" title="w:norm&aacute;lalak" href="https://hu.wikipedia.org/wiki/norm%C3%A1lalak">norm&aacute;lalakot haszn&aacute;l</a>, azaz 6,022&middot;10<sup>23</sup>&nbsp;&eacute;rt&eacute;ket jelent. Ha 4-et haszn&aacute;lunk 4.0 helyett, azt eg&eacute;szk&eacute;nt (<tt>int</tt>&nbsp;t&iacute;pusk&eacute;nt) &eacute;rtelmezi a program.</p>\n<p>A&nbsp;<code>double</code>&nbsp;v&aacute;ltoz&oacute;k a&nbsp;<tt>double</tt>&nbsp;kulcssz&oacute;val deklar&aacute;lhat&oacute;ak:</p>',
      },
      { code: 'double ket_pi = 6.2883185307179586;' },
    ],
    [
      {
        text:
          '<h1>Utas&iacute;t&aacute;s blokkok &eacute;s a v&aacute;ltoz&oacute;k hat&aacute;sk&ouml;rei</h1>\n<h2>Utas&iacute;t&aacute;sblokk</h2>\n<p>T&ouml;bb utas&iacute;t&aacute;st elhelyezhet&uuml;nk egy utas&iacute;t&aacute;sblokkban. Ekkor az utas&iacute;t&aacute;sok el&eacute; nyit&oacute; kapcsos z&aacute;r&oacute;jelet&nbsp;<tt>"{"</tt>, ut&aacute;nuk z&aacute;r&oacute; kapcsos z&aacute;r&oacute;jelet&nbsp;<tt>"}"</tt>&nbsp;kell rakni. &Aacute;ltal&aacute;nos szab&aacute;ly, hogy egy C programban&nbsp;<em>ahol egy utas&iacute;t&aacute;s &aacute;llhat, ott mindig lehet utas&iacute;t&aacute;sblokk</em>&nbsp;is. Erre &aacute;ltal&aacute;ban akkor van sz&uuml;ks&eacute;g, ha egy ciklusmaghoz, a felt&eacute;teles el&aacute;gaz&aacute;s egyik &aacute;g&aacute;hoz t&ouml;bb utas&iacute;t&aacute;s tartozik.</p>\n<p>Egy p&eacute;ld&aacute;t m&aacute;r l&aacute;ttunk utas&iacute;t&aacute;sblokkra. A main f&uuml;ggv&eacute;ny utas&iacute;t&aacute;sait utas&iacute;t&aacute;sblokkba helyezt&uuml;k, ahogy a f&uuml;ggv&eacute;nyek eset&eacute;n sz&uuml;ks&eacute;ges. K&eacute;sőbb a vez&eacute;rl&eacute;si szerkezetek fejezetben megismerj&uuml;k a ciklusokat. Ezek gyakran egyetlen utas&iacute;t&aacute;st ism&eacute;telgetnek majd:</p>',
      },
      { code: 'for (i=0; i<20, i++)\n  printf("Sokszor kiírom.\\n");' },
      {
        text:
          '<p>Itt a ciklusmag egyetlen utas&iacute;t&aacute;sa a printf f&uuml;ggv&eacute;ny megh&iacute;v&aacute;sa. Ha viszont a ciklusmagba t&ouml;bb utas&iacute;t&aacute;s tartozik, akkor utas&iacute;t&aacute;sblokkra van sz&uuml;ks&eacute;g&uuml;nk. Ez nem csak for-ciklusn&aacute;l műk&ouml;dik: a kapcsos z&aacute;r&oacute;jel jelzi, hogy meddig tart a f&uuml;ggv&eacute;ny defin&iacute;ci&oacute;ja, a ciklus magja, a felt&eacute;teles el&aacute;gaz&aacute;s valamelyik &aacute;ga.</p>\n<p>A k&ouml;vetkező p&eacute;ld&aacute;ban egyn&eacute;l t&ouml;bb utas&iacute;t&aacute;s tartozik a for-ciklushoz, ez&eacute;rt sz&uuml;ks&eacute;ges az utas&iacute;t&aacute;sok blokkba (kapcsos z&aacute;r&oacute;jelek k&ouml;z&eacute;) z&aacute;r&aacute;sa:</p>',
      },
      {
        code:
          'for (i=1; i<20, i++)\n{\n  printf("%d. alkalom", i) \n  printf("Sokszor kiírom.\\n");\n}',
      },
      {
        text:
          '<p>(A printf karakterl&aacute;nc&aacute;ban a %d hely&eacute;re fog be&iacute;r&oacute;dni az i v&aacute;ltoz&oacute; &eacute;rt&eacute;ke. A ki&iacute;rat&aacute;sr&oacute;l a&nbsp;<a title="C programoz&aacute;s/Ki&iacute;rat&aacute;s &eacute;s beolvas&aacute;s" href="https://hu.wikibooks.org/wiki/C_programoz%C3%A1s/Ki%C3%ADrat%C3%A1s_%C3%A9s_beolvas%C3%A1s">Ki&iacute;rat&aacute;s &eacute;s beolvas&aacute;s</a>&nbsp;fejezetben lesz bővebben sz&oacute;.)</p>\n<p>Mindig fontos figyelni arra, hogy a kapcsos z&aacute;r&oacute;jelek p&aacute;rosan szerepeljenek: minden utas&iacute;t&aacute;sblokk le legyen z&aacute;rva.</p>',
      },
      {
        text:
          '<h2><sup>V&aacute;ltoz&oacute; hat&aacute;sk&ouml;rei</sup></h2>\n<p>&Eacute;rt&eacute;keket v&aacute;ltoz&oacute;kban t&aacute;rolhatunk. Ekkor elősz&ouml;r deklar&aacute;lni kell a v&aacute;ltoz&oacute;t, azaz meg kell adni a t&iacute;pus&aacute;t. Ezut&aacute;n &eacute;rt&eacute;ket adhatunk a v&aacute;ltoz&oacute;nak, majd ki&iacute;rathatjuk a&nbsp;<tt>printf</tt>&nbsp;utas&iacute;t&aacute;ssal:</p>',
      },
      {
        code:
          '#include <stdio.h>\n\nint main(void)\n{\n  int i;\n  i = 8;\n  printf("%d\\n", i);\n}',
      },
      {
        text:
          '<p>Egy&nbsp;<strong>v&aacute;ltoz&oacute; hat&aacute;sk&ouml;re</strong>&nbsp;azt a szintet jelzi, ahol a v&aacute;ltoz&oacute; l&aacute;that&oacute;. Egy utas&iacute;t&aacute;sblokkban deklar&aacute;lt v&aacute;ltoz&oacute; csak az utas&iacute;t&aacute;sblokkon bel&uuml;l lesz el&eacute;rhető. Utas&iacute;t&aacute;sblokk tartalmazhat &uacute;jabb utas&iacute;t&aacute;sblokkot is. A belső utas&iacute;t&aacute;sblokkban deklar&aacute;lt v&aacute;ltoz&oacute;k a k&uuml;lsőben nem &eacute;rhetőek el.</p>',
        code:
          '/* a main függvény */\nint main(void)\n{\n    /* Ez a main függvény definíciójának a blokkja */\n\n    int i; /* ezt a külső blokkban deklaráltuk */\n    i = 6;\n    {\n        /* ez egy új blokk új hatókörrel */\n\n        /* ez is egy i változó, de mivel egy új blokkban van,\n           nem befolyásolja a külső blokk i változójának értékét. */\n        int i;\n        i = 5;\n        printf("%d\\n", i); /* 5-öt ír ki a képernyőre */\n    }\n    /* visszatértünk a külső blokkba */\n\n    printf("%d\\n", i); /* 6-ot ír ki a képernyőre */\n\n    return 0;\n}',
      },
      {
        text:
          '<p>A C-ben k&eacute;tf&eacute;le hat&aacute;sk&ouml;r van. Azt mondjuk, hogy egy&nbsp;<strong>v&aacute;ltoz&oacute; glob&aacute;lis</strong>, ha egy v&aacute;ltoz&oacute; a program tetszőleges hely&eacute;n l&aacute;that&oacute; &eacute;s m&oacute;dos&iacute;that&oacute;. Akkor mondjuk, hogy egy&nbsp;<strong>v&aacute;ltoz&oacute; lok&aacute;lis</strong>&nbsp;ha csak abban a blokkban el&eacute;rhető &eacute;s m&oacute;dos&iacute;that&oacute; a v&aacute;ltoz&oacute;, amelyben l&eacute;trehozt&aacute;k. Az al&aacute;bbi p&eacute;ld&aacute;ban a main f&uuml;ggv&eacute;nyen k&iacute;v&uuml;l deklar&aacute;lt i &eacute;s j v&aacute;ltoz&oacute; glob&aacute;lis lesz, a bel&uuml;l deklar&aacute;lt i v&aacute;ltoz&oacute; lok&aacute;lis.</p>',
      },
      {
        code:
          'int i =  5; /* ez globális változó, a programban akárhol elérhető */\nint j = 15; /* ez is */\n\n/*\nEz egy függvény.\nAz összes benne definiált változó lokális, csak a függvényben érhető el.\n*/\nint main(void)\n{\n    int i = 6; /* \'i\' most 6 */\n    printf("%d\\n", i); /* kiírja a lokális 6-ot a globális i változó 5-ös értéke helyett */\n    printf("%d\\n", j); /* kiírja a 15-öt, a globális változó értékét */\n\n    return 0;\n}',
      },
    ],
  ],
  exercise: {
    id: 1,
    question:
      'Írj egy olyan programot ami eltárolja (12 / 14.23) * 32.1 + 12 pontos végeredményét egy változóba majd kiírja az a standard outputra (cout)',
    solution: '39.0696',
    name: 'Változók',
    description: 'Gondoljunk a lebegőpontos ábrázolásra',
    quizzes: {
      '01b790cd-727f-471f-82d4-00f8718ff63a': {
        question: 'Al alábbiak közül melyik érvényes változónév?',
        options: {
          '1egyalmafa': false,
          int12: true,
          _valtozo: true,
          do: false,
          var: true,
          $foobar: true,
        },
      },
      '6e87181f-23e3-425b-9cef-06f4cecf3225': {
        question: 'Az alábbiak közül melyek a helyes deklarációk?',
        options: {
          'const int almafa;': false,
          'const int almafa=12;': true,
          'const int var1, var2 = 12;': false,
          'int var1, var2;': true,
        },
      },
      'e290ef19-b727-483c-ae64-b048afad7d78': {
        question: 'int var1, var2 = 15; esetén mi lesz var1 értéke?',
        options: { 15: false, 'nem definiált': true },
      },
    },
  },
};

export default TutorialData;
