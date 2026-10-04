/* =========================================================================
   EDIT THIS SECTION to personalize the site — nothing below CONFIG
   needs to change.

   - heroTitle / heroIntro: the short message on the homepage
   - sections: three rows, in this order: ALIMOSONG (friends),
     12:35 FRIENDS (best friends), Me.
     Each card in a section:
       - note: the message text for that card. Use \n\n for a new
         paragraph — the page auto-sizes to however long it is.
       - song.src: path or URL to an audio file, e.g. "songs/01.mp3".
         Put your mp3 files in the "songs" folder and point each src
         at the right filename. Leave it blank and a free demo track
         plays automatically instead, just so you can test playback.
       - image (optional): a photo to use instead of the auto-picked
         random one, e.g. "images/photo1.jpg" (drop the file into the
         "images" folder next to this script).
       - artStart / artEnd (optional): override the auto-picked
         gradient colors for this card specifically.
   ========================================================================= */
const CONFIG = {
  heroTitle: "Everything below is a little<br>piece of why you're loved.",
  heroIntro:
    "I couldn't fit it into one message, so I split it up instead — press any card below to open it, and it'll bring a song along with it.",

  sections: [
    {
      id: "friends",
      heading: "ALIMOSONG",
      sub: "Messages from your cof!",
      cards: [
        {
            title: "From Ali",
            subtitle: "Friend",
            image: "img/Ali.jpg",
            note: "Hello, Aiskie!! HAPPY 18TH BIRTHDAYYY!! 🥳🎂💗 Bruh, one of the youngest in the group is finally 18!! 😭 I honestly can’t believe it HAHAHA. It feels like just yesterday we were all in G8, and now look at us, growing up and reaching these different milestones together.\n\n" +
                  "You may be younger than me, but I’ve always seen you like a big sister in so many ways. 🥹 I’m really, really happy that our friendship has lasted from G8 until now. And when I say “until now,” I don’t mean that it ends here!! This friendship is gonna extend waaaay into the future, whether you like it or not. 😭 HAHAHA. We’ve already been friends for so long, and I hope we’ll still be laughing, talking, and making random memories together years from now.\n\n" +
                  "I’m genuinely so happy and grateful to have one of the coolest friends ever!! You’re someone I’m really glad I got to meet and become friends with. We’ve gone through so many random moments together, and even though we may not always talk or see each other every day, I’m glad that the friendship is still here. 🫶\n\n" +
                  "Now that you’re officially 18, I hope this new chapter brings you so many good memories, opportunities, and experiences. I hope you continue becoming the person you want to be and never lose the fun and genuine side of yourself that makes you YOU. Always remember that you have people who care about you and are cheering you on, including me!! 💗\n\n" +
                  "Enjoy your day to the fullest because you only turn 18 once!! 🎉 Don’t forget to have fun, take lots of pictures, eat lots of good food, and make the most out of this special day. You deserve all the happiness today and in the years to come!!\n\n" +
                  "HAPPY 18TH BIRTHDAY AGAIN, AISKIЕEEE!! 🥳💐💗 Here’s to more years of friendship, more memories, more random conversations, more laughs, and probably more stoopid funny moments together HAHAHA. Love youuu so much aiskie and u better teach me how to ukay ukay hehe!! 🫶\n\n",
            song: { title: "Beautiful", artist: "Round Table feat. Nino", src: "mp3/Ali.mp3" },
        },

        {
            title: "From Ryie",
            subtitle: "Friend",
            image: "img/Ryie.jpg",
            note: "happppiiii baduuuu, mi blue aise! I’m so glad to be able to spend another year with you. lorem ipsum dolor sit amet, would you like to lengthen your message? pero hihi my lsm will be somewhere else! makita ni rhoel akong ka OAhan man jud hehehehhe, I love you so so muchieeee, my lablab!  ",
            song: { title: "Germany and Rome", artist: "The Riddleys", src: "mp3/Ryie.mp3" },
        },

        {
            title: "From Aleah",
            subtitle: "Friend",
            image: "img/Aleah.jpg",
            note: "Hello happy birthday. Ipasa mo to sa 20 ka tao para makatanggap ng blessings this 2026. ERSSSS\n\n" +
            "Happy 18th bday, Lord-eez Nutz! I honestly don’t know where to start, pero sigi, mag-wish ta. My wish for you is to have a life that makes it worth living. I wish that you grow into a woman who loves her life to the fullest, and I hope that you fulfill all the wishes and dreams that you’ve been hoping for. Wala na akong masabi. Digidigiding, happy birthday! More roblax to come  If u the hydrogen, i would be the carbon cuz u complete my life (explanation ng joke : para ma full ang valence shell sa carbon need syag hydrogen atom para ma stable ang outer shell yun covalent bond) hahahah yuckkk crineeeee K na cut! I love u future chem engineer ihhhhh uwu\n\n",
            song: { title: "It Isn’t Perfect But It Might Be Song", artist: "Olivia Dean", src: "mp3/Aleah.mp3" },
        },

        {
            title: "From Eana",
            subtitle: "Friend",
            image: "img/Eana.jpg",
            note: "Happy 18th birthday to one of the most special people in my life! 🥹💗 I honestly don’t even know where to start because we’ve been friends for SO long. From Grade 7 all the way through senior high school, and now that we’re in college, it’s crazy to think that we’ve been through so many different phases of life together. It really feels like I’ve known you since forever and ever, and I’m so grateful that somehow, through all the changes, we’re still here, still friends, and still each other’s best friend.\n\n" +
            "When I look back at our friendship, I realize how many memories we’ve made without even realizing that those little moments would become some of the things I’d treasure the most. We literally grew up together. We went from being younger students who probably had no idea what the future would look like, to surviving senior high school, and now trying to figure out college and adulthood. We’ve changed so much, but one thing that stayed the same is the friendship we have.\n\n" +
            "One of the things I love most about us is how we can share almost everything with each other. Whether it’s about acads, random thoughts, problems, plans, or personal things that we don’t usually tell everyone, I know I can always come to you. I love how we exchange our understanding and knowledge, especially when it comes to school. There are times when one of us understands something better, and the other one is struggling, and somehow we always end up helping each other. We’ve been each other’s little academic support system for so long, and I’m really thankful for that. But beyond acads, I’m even more thankful that we can also talk about the things that are actually happening in our lives, our worries, our feelings, and the things we overthink at 2 AM HAHAHA. Together with our circle of friends na we gmeet for study with chikas.\n\n" +
            "I appreciate how comfortable our friendship has become. We don’t always have to explain everything because sometimes, you just get me. And I hope you know that I get you too. You’ve seen different versions of me throughout the years, and somehow you’ve stayed. You’ve seen me during my good days, my stressful days, my overthinking days, and probably my most questionable moments, and you still chose to be my friend. That means more to me than you probably realize.\n\n" +
            "Now that you’re officially 18, I hope you realize how far you’ve come. You’re entering a new chapter of your life, and I know there will be so many new experiences, challenges, opportunities, and changes waiting for you. I hope you never feel like you have to figure everything out immediately. It’s okay to be unsure. It’s okay to make mistakes. It’s okay to take your time. You don’t have to have your entire life planned just because you’re turning 18. Just keep growing, learning, and becoming the person you want to be.\n\n" +
            "I hope college treats you kindly. I hope you meet people who appreciate you, opportunities that help you grow, and experiences that make you happy. I hope you continue to believe in yourself even during the times when you feel like you’re not doing enough. And whenever acads get overwhelming, please remember that you don’t have to go through everything alone. We can still help each other, complain about requirements together, panic over deadlines together, and somehow survive everything like we always do. \n\n" +
            "More than anything, I hope you’re happy. I hope this new chapter brings you closer to the dreams you’ve always had. I hope you become proud of yourself, not only for the achievements you get, but also for the small things you accomplish that nobody else sees. I hope you learn to give yourself the same kindness and understanding that you give to other people.\n\n" +
            "Thank you for being my best friend for all these years. Thank you for all the advice, explanations, random conversations, laughs, rants, encouragement, and even the moments when we literally just exist and somehow still have fun. Thank you for being someone I can trust and someone I can always talk to. I’m genuinely so lucky that out of all the people I could have met in this life, I got to meet you way back in Grade 7 and continue growing alongside you until now.\n\n" +
            "From Grade 7, to junior high, to senior high, and now college… we’ve really come a long way. And honestly, I hope this isn’t just the end of one chapter but the beginning of many more years of friendship. I hope that even when life gets busier, even when we have different schedules, different priorities, and maybe even different paths, we’ll still find our way back to each other.\n\n" +
            "I’m so proud of the person you’ve become, and I’m excited to see the person you’ll continue to become. You deserve so many good things, and I hope life gives you more reasons to smile than to worry.\n\n" +
            "Happy 18th birthday, aisseee! Welcome to adulthood HAHAHA, good luck sa bills and responsibilities . But seriously, I love you so much, and I’m forever grateful for our friendship. From Grade 7 until now, and hopefully until we’re old and still complaining about life and acads together, I’ll always be here for you.\n\n" +
            "Here’s to 18 years of you, and to many, many more years of our friendship. I love you always, bestie. Happy birthday! Dako naka aiskie and I’m so proud and happy for you.",
            song: { title: "KYGM", artist: "The Ridleys", src: "mp3/Eana.mp3"},
        },

        {
            title: "From Ahmed",
            subtitle: "Friend",
            image: "img/Ahmed.jpg",
            note: "Happy Takoyaki Dayyy! HBD, Louedes! I miss youuu, my forever tako-buddy! 🥺🥺🥺🥺🥺🥺🥺May life be as kind and gentle to you as you’ve always been to us.🥺🥺🥺🥺",
            song: { title: "Do I Wanna Know?", artist: "Artic Monkeys", src: "mp3/Ahmed.mp3" },
        },

        {
            title: "From Jeff",
            subtitle: "Friend",
            image: "img/Jeff.jpg",
            note: "Happyybirthdayy lourdes marielle ermino!! I wish u the best, goodluck saimo program na gi pili and stay aise! ",
            song: { title: "Ice Ice Baby", artist: "Vanila Ice", src: "mp3/Jeff.mp3" },
        },

        {
            title: "From Lui",
            subtitle: "Friend",
            image: "img/Lui.jpg",
            note: "Here's to celebrating you today and always. Happy birthday!",
            song: { title: "Song Title Seven", artist: "Artist Name", src: "mp3/Lui.mp3" },
        },

        {
            title: "From Jud",
            subtitle: "Friend",
            image: "img/Jud.jpg",
            note: "Happy 18th Birthday, Lourds!! I hope you enjoy your special day and receive all the love and blessings you deserve heh. Keep being the kind and sweet person you are, always! I’m grateful nga friend tika and for all the memories we’ve shared kita alimosong. May God guide you always, Lourds! As you go through this new chapter of your life, I hope maka laag ta w Alimosong soon! Keep chasing your big dreams, and remember to rest pag kapoy na sa school. Enjoy your 18th birthday, Balourds! Love lots from Ry n mee!!!! ",
            song: { title: "Ice Ice Baby", artist: "Vanila Ice", src: "mp3/Jud.mp3" },
        },

        {
            title: "From Polen",
            subtitle: "Friend",
            image: "img/Polen.jpg",
            note: "If kindness were a person, I’d tell people about you…U were someone I never thought i’d be friends with. U taught me how to have limitations in what I consume (as a daghan gina huna2 ers) and bai im so sorry if ma miss nako imo bday but i hope u can understand and feel that my presence is near u always UNSA DW HAHAHAH. Wishing u the best especially in this new chapter of ur life. U always have me, u always have an ate in me even tho d jud ko ganahan ate ko ninyo pero wa koy choice HAHAHAHA. I may be always absent but i’m also a one call away;)\n\n" +
            "Happy 18th Lourds! labyo so much 🩵🩵🩵\n\n",
            song: { title: "KYGM", artist: "The Ridleys", src: "mp3/Polen.mp3" },
        },

        {
            title: "From Llian",
            subtitle: "Friend",
            image: "img/Llian.jpg",
            note: "Hii Lourddddddsssss! HAPI HAPI BORTDEYYY!! I just wantt to tell u howw grateful i am satoo friendshipp/kabet (kabet sauna) joke HAHAHAHAHHAHA, pero bitawwww im so hapi to have someone like you na pwede ma gara-garaan, ma tabian, ma rant-an, and ma ask for helpp—basically my sister from anader mader hehe. I wish yoh nothing but the bestt and good lucks on your college journey diha sa XU. Thatss all Lourdsss, Misss uuuuu!!!!",
            song: { title: "Kasing Kasing", artist: "Juan Karlos", src: "mp3/Llian.mp3" },
        },

        {
            title: "From Matthew",
            subtitle: "Friend",
            image: "img/Matthew.jpg",
            note: "Happi Birthday Aisee! may 18 bring plenty of blessings and happiness for you. One thing ab being 18 tho is not having the privilege of saying “im a minor” so gl w that. But anyways Happi Birthday againn and take care always! ",
            song: { title: "Ice on my baby", artist: "Yung bleu", src: "mp3/Matthew.mp3" },
        },

        {
            title: "From Paul",
            subtitle: "Friend",
            image: "img/Paul.jpg",
            note: "Happiest birthday, my dearest Lourdes.\n\n" + "I guess it’s out of pure luck that, out of all the people in the world, I became friends with you. I had to take that jeepney at the exact time for me to end up in the same class as you. You have no idea how much our friendship has made me a better person. You taught me how to approach life with kindness and how, in the brink of darkness, there is always light. My world was dark and mundane until you came along and brought that light. That light that you always carry, that sunshine that was in you all along.\n\n" + "I wish you nothing but the best. Stay kind. Ay-El-Way < 3",
            song: { title: "Germany and Rome", artist: "The Riddleys", src: "mp3/Paul.mp3" },
        },

        {
            title: "From Julie",
            subtitle: "Friend",
            image: "img/Julie.jpg",
            note: "HALU MY LOURDESIBOLS, MY AISKIE, MY VP, MY PR LEADER, MY LABLAB MONKEY!\n\n" + 
            "happiest 18!! I really can’t believe na we’re all adults na, and it’s so exciting to see what will come forth for all of us. You have shown yourself as strong, independent, and a very capable/responsible person despite being the bebe-iest in age hehe. I’m so happy to be a part of your life ais, and honestly I owe it all to kirby(?) HAHAHAHAHA… ers pero in a way? Si kirby mangud nag force saako mag run for MaES president, and unsure kaau ko ato because I know daghan kaau mas deserving ato, and apil naka ato. Actually tong pag lineup na sa officers, dipagud ta close ato, actually intimidated ko saimo because of the set A and set b thing, pero who would’ve known na dadto taka ma close friend and learn to love as a person! At that time in my life, digud ko makig daghan friends na close because idk cautious lng ko, if dinako ma vibes is dinako pugson, butt I’m soo happy na we vibed because I wouldn’t have survived MaES without you bay. Reuse, Reduce, Recycle gud kaau nako na na pic nato because it’s my fave gudd! 15-16 pata ani/?!:?: tas the Universe really knows us na if heavy kaau atong responsibilities is we need eachother gud. from MaES to PR mapa VP to Leadernim! I really believe we balance eachother and bring the best out of one another bay. I was so worried atong first time nagawas ang pr group kay during ato na time sige mog ka grupo ni kirby and I was really hoping na ma ka grupo nako mo nila ryei TAS i saw na KIRBY RYEI PIA AND PAUL were in the same group😭😭 tas LOW AND BEHOLD KITA ANG NAG GROUP!! Thank you kaau for being my friend and I know na gaka overwhelm nagud kas pag 18 nimoo, issokay bayyy it’s just the bday things HAHAHAHA after ana kay it’s like a normal day ragud, so don’t worry and just enjoy! You know naman bay how I appreciate you so much and look up saimo (wow taas) so yeah. HEYY sabti ang music like not in a gay way but in a i feel calm when maguban ta, our ukay session, our pr late nights, our xns rrsm hee, and everything elseee! and in a europe way “somewhere in northern italy” pero sa initao eco tour lng ato HAHAHAHAAH i’ll always be here aise, and i’m always gonna be so observant saimong actions/expressions kay inana ka saakoa always. thank u so much for being my friend bruhhh, you are one of the people na I’m thankful na nag liceo ko HAHAHAHAHA love u ais happiest bdayy!! yk it all naman gud oi, saakong gift nlng dayun nimo ma see akong love ers as a gift receiver baya imong love language GAGAHAHA sige na oi nag/mag message pako saimong pearlmont.",
            song: { title: " Mystery of Love", artist: "Sufjan Stevens", src: "mp3/Julie.mp3" },
        },

        {
            title: "From Oj",
            subtitle: "Friend",
            image: "img/Oj.jpg",
            note: "Happy birthday bro aiskie 🥶❄️ More blessings to come your way kay are a god fearing and smart and good and cool and aesthetic person. Unta daghan pa kag concerts nga ma attendan(sanaol) Enjoy your special day!",
            song: { title: "Ice Ice Baby", artist: "Vanilla Ice", src: "mp3/Oj.mp3" },
        },

        {
            title: "From Van",
            subtitle: "Friend",
            image: "img/Van.jpg",
            note: "Here's to celebrating you today and always. Happy birthday!",
            song: { title: "Song Title Fifteen", artist: "Artist Name", src: "mp3/Van.mp3" },
        },

        {
            title: "From Pia",
            subtitle: "Friend",
            image: "img/Pia.jpg",
            note: "To the best classmate, friend, family, and constant anyone could ever ask for—happiest birthday!\n\n" +
            "I wish I could say that I think I've ran out of things to say to use as my opening line, but honestly, I'm more than certain that the time when I'll run out of things to say about and to you will be a day that never comes.\n\n" +
            "I just want to keep this message short and sweet para mas maka hilak paka sa akong actual letter na jud—so I just wanted to tell and remind you of how much I love and appreciate you jud.\n\n" +
            "I know I say this a lot, but you're one of the only people I run to when times get hard—ikaw ra ug si ry akshuali—and that's not because I've been friends with you for longer than others, but because I know that when the time comes that I'll need someone, I know that you'll always be there for me, no matter what.\n\n" +
            "and although a small part of me wishes this day would never come—so that we could all just be young, dumb, broke, high school (college) kids forever—I know that we've barely scratched the surface of who we are and who we will be, so I can only hope that time is kind to us.\n\n" +
            "and if I don't say it enough, I love you so much—more than you could ever imagine, believe, and further beyond that.\n\n" +
            "happiest birthday, lourd! I hope eighteen treats you well! :))",
            song: { title: "Like Real People Do", artist: "Hozier", src: "mp3/Pia.mp3" },
        },
      ],
    },
    {
      id: "bestfriends",
      heading: "12:35 FRIENDS",
      sub: "From your classmates!",
      cards: [
        {
          title: "From Bea",
          subtitle: "Classmates",
          image: "img/Bea.jpg",
          note:
            "To my Aiskie,\n\n" +
    "happy 18th birthday, my Aisais ❄️💙.\n\n" +
    "I've been thinking about what to write for you, and honestly, I don't think I'll ever find words that can fully explain how much I love and appreciate you. But I still wanted to try, because you deserve to be reminded of how special you are, especially today.\n\n" +
    "If I had to turn you into a place, I think you'd be a tiny, cozy blue beach house hidden somewhere between a quiet forest and the sea. Somewhere surrounded by trees, earthy and peaceful, but just a few steps away from the water. And it would always be golden hour there. The sun would be soft, the sky would slowly turn into that almost-sunset blue and gold, and the ocean would be shining like it had little pieces of light floating on it. There'd be an icy breeze coming through the windows, but somehow the whole place would still feel warm.\n\n" +
    "I think that's what you feel like to me.\n\n" +
    "You have this really beautiful balance in you. You're soft and gentle, but you're not weak. You're soft-spoken and grounded, but you're not afraid to put yourself out there and be silly and giddy and excited about the smallest things (hehe cutie kaayo ka basta inani), and genuinely love that about you. You have this little-kid kind of happiness that gets excited over things, and somehow, makatakod jud siyaaaa!!! Even when I'm not in the mood or I'm having a bad day, you have this way of making me smile without even trying.\n\n" +
    "But what I love just as much is that you know when to be peaceful and quiet, too. You know how to comfort people without needing to fix everything. You know how to sit with someone when words aren't really needed, and that is such a beautiful kind of kindness.\n\n" +
    "You were one of the first people I felt genuinely comfortable opening up to. There are parts of myself nga I usually keep tucked away because I'm scared that if I let people see them, they might use them against me someday. But with you, I never really felt like I had to be scared of that. I just felt safe. I felt welcomed, and I hope you know how precious that is to me.\n\n" +
    "You've always been so attentive, too. You remember the little things. The things I probably didn't even expect anyone to remember. Tapos somehow, those little details make a person feel so seen. I still remember your message to me during my 18th, and grabe, I cried so muchhh!! Crazy kaayoo pud na ikaw na ang nag 18 this timee. You being one of my 18 candles already meant a lot to me, but the things you said made it even more unforgettable (hehe also the matcha set I loved kaayooo I love youu sooo muchhh!!). I'll always carry that with me.\n\n" +
    "Also, I hope you know that I see you, too, Aiskiee 🥺\n\n" +
    "I see how kind you are. How soft-hearted you are. How willing you are to help. I see your strength, even in the parts of you that are gentle. I see how smart and talented and versatile you are. I see how beautiful you are, inside and out. And I really, really hope that someday, you'll see yourself the way the people who love you see you.\n\n" +
    "Because, Aiskie, you are genuinely such a beautiful person. An astonishing reminder of the beauty na God put into this world — the kind that serves as a reminder that beauty still exists in a world full of the opposite.\n\n" +
    "And now, 18 na ka 🥺🥺 I feel proud and sad pud kay naa na kas \"big girl age\" na stage (HAHHAHAHAHA medj oa ko pero iz truee!!!) 😛😛\n\n" +
    "Murag funny gamay kay one day we're just figuring things out, and suddenly we're supposed to be adults 😭😭 There's probably going to be a lot of pressure that comes with this age. More responsibilities, more decisions, more questions about who we are and where we're going. There might be moments when you feel like everyone is moving forward and you're still trying to figure out your next step. There might be days when you don't know what you're doing, when things don't go according to plan, or when you wonder if you're growing enough.\n\n" +
    "When those days come, I hope you remember this:\n\n" +
    "💙❄️ you do not have to have your whole life figured out just because you're officially an adult na. ❄️💙\n\n" +
    "You are allowed to take your time.\n\n" +
    "You are allowed to change your mind. You are allowed to outgrow things. You are allowed to rest. You are allowed to have days where you don't feel productive or sure or confident. And if you ever take a step backward, that doesn't erase all the steps you've already taken.\n\n" +
    "Your life is not late just because it looks different from someone else's.\n\n" +
    "And growth isn't always loud. Sometimes it looks like surviving a difficult season. Sometimes it looks like choosing yourself again. Sometimes it's simply waking up and trying one more time.\n\n" +
    "So please, don't be too hard on yourself, okay?\n\n" +
    "There is still so much life waiting for you. So many places you haven't seen, people you haven't met, sunsets you haven't watched, random conversations you haven't laughed through, songs you haven't discovered, and versions of yourself you haven't even met yet.\n\n" +
    "And I hope you let yourself enjoy them.\n\n",
          song: { title: "Would That I", artist: "Hozier", src: "mp3/Bea.mp3" },
        },
        {
          title: "From Jc",
          subtitle: "Classmates",
          image: "img/Jc.jpg",
          note:
            "Keep being Y.O.U",
          song: { title: "All I need to hear", artist: "The 1975", src: "mp3/Jc.mp3" },
        },
        {
          title: "From Kevin",
          subtitle: "Classmates",
          image: "img/Kevin.jpg",
          note:
            "Upon Thy Birthday \n" +
            "On this day, another year hath been bestowed upon thee—not merely as another passage of time, but as another chapter in the ever-unfolding story of thy life. \n\n" +
            "Mayst thou walk thy path with courage, endure thy trials with grace, and cherish the moments that make life worth living. For life, though fleeting, is made meaningful by the memories we create and the souls we encounter along the way. \n\n" +
            "May the year ahead bring thee wisdom in hardship, peace in uncertainty, and joy in the simplest of things. \n\n" +
            "Happy Birthday. May thy journey yet be long, and thy days be filled with purpose and light. \n\n",
          song: { title: "Bawat Piyesa", artist: "Munimuni", src: "mp3/Kevin.mp3" },
        },
        {
          title: "From Abdul",
          subtitle: "Classmates",
          image: "img/Abdul.jpg",
          note:
            "Happy Birthday Lourds, gulat ka noh, HAHAHAH dli kay ta inana ka close pero naa ko diris website nimo hehe, again HAPPY HAPPY HAPPY BIRTH DAY LOURDES, I remember way back sa JHS nga mura kag maldita saakong pananaw pero pag ka classmate nato sa g11, I realize nga dli man diay gyud ka mamaak HAHA, char lang buotan bitaw ka kay😜, my impression to you changed when ikaw ang na leader sa PR. I hope ipadayyn na nimo imong ka maayo sa pag leadership ug unta okay raka daras XU HAHAHAHAH kaya rana bayy, IKAW PA! Char no pressure, pero bitaw kaya bitaw nimo. Once again this is Abdulrahman R. Pandara, wishing you a Happy birthday and all the journey saimong kinabuhi.🥳🥳💝",
          song: { title: "Super Trouper", artist: "ABBA", src: "mp3/Abdul.mp3" },
        },
        {
          title: "From Ruzel",
          subtitle: "Classmates",
          image: "img/Ruzel.jpg",
          note:
            "First and foremost I picked this song, because it reminds me of how we parted ways without proper goodbyes and you might not know this but YOU REALLY means so much for me not only because of how you lead but for who you are a genuine person who has my eyes on and I wish I could thank you in personal kung unsa ko ka grateful for everything but for now I hope you do your best and never forget about me 09947497904 if u need everything ill always make an exception for you. Hapy berdy.",
          song: { title: "Let Her Go", artist: "Passenger", src: "mp3/Ruzel.mp3" },
        },
        {
          title: "From Kirby",
          subtitle: "Classmates",
          image: "img/Kirby.jpg",
          note:
            "Happy 18th Birthdayy, Lourdibolzzzzzzz!!!!! Dang it…… time is moving fast, nauna cute pakaayo kas online class, karon 18 na ka HAHAHAHAHAAHAHAHAHAHAHAHAHA. Bitaw bay, I really wish in your 18th birthday that you get to enjoy this new chapter of your life. I’m very happy seeing you happy with your new friends/classmates. I hope you continue being the same Lourdes that I know. Lourdes that is smart, Lourdes that is brave, and Lourdes that is genuine. \n\n" +
            "I hope you always remember that you deserve all the good things that come your way. Keep chasing the things in life that makes you happy, and never ever be afraid to try new things. And of course, I hope this year and future years, brings you more happiness, more opportunities, and many more reasons to smile. Padayoooonn, Future Chemical Engineer!\n\n" +
            "Enjoy your day, Lourdibolzzzz! Finally legal na ka HAHAHAHAHAHA. Amping always, and I hope God blesses you with more happiness, good health, and all the things you’re praying for.  See you around the campus. Happy 18th birthdayyy!!! 🥳🎂💗",
          song: { title: "Huling Sayaw", artist: "Kamikazee", src: "mp3/Kirby.mp3" },
        },
        {
          title: "From Ceasar",
          subtitle: "Classmates",
          image: "img/Ceasar.jpg",
          note:
            "HAPPY BIRTHDAY LOURDIE STAY COOL, SMART, POGANDA AND PASSIONATE \n" +
            "gikan sa da best driver sa PR!",
          song: { title: "Saranggola", artist: "Ben 10", src: "mp3/Ceasar.mp3" },
        },
        {
          title: "From Anonymous",
          subtitle: "sekret",
          image: "img/Anon.jpg",
          note:
            "Uhmm... Hi you may not know me so well but ill be straight forward soo I ADMIRE YOU SO MUCH so much that im willing to let you go. This is the only chance I know that I could ever have had since we wont see each other naman if only I had the guts to tell u this way back then but i held myself because I know I'm not on par with ya. Every time I see you in the campus I always hide myself afraid that I won't be able to talk properly so pardon me if I'm only able to express myself through words now that Ive got nothing to be afraid of I'll say it all all the way back to the start it never was a love at first sight but through accumulation of our interactions I realized that ure cool and chill pala and I was so lost in to you and I like you not only because you're pretty pero ang pretty mo po talaga but the way you handle yourself and the people around you and for once again u lit up the spark in me so I kept thinking about you we are on the same building so I see you often and oh mann your achievements are so remarkable kabalo ka I really wanna congratulate you during the graduation but i cant being myself get close to you. So for now im doing my best to have a chance with you because you are more than just Lourdes honestly I don't know you so much so I want to know more about you but I REALLY REALLY hope that fate crosses our paths once again. For now I hope you are doing happy and if we weren't meant for each other I want you to be with someone who wont take you for granted.",
          song: { title: "Umaasa", artist: "Calein", src: "mp3/Anon.mp3" },
        },
      ],
    },
    {
      id: "me",
      heading: "From Rhoel",
      sub: "For the OG",
      cards: [
        {
          title: "Happy Birthday!",
          subtitle: "to you",
          image: "img/Rhoel1.jpg",
          note:
            "HAPPY BIRTHDAY AISKIEE \n\n" +
            "Happy 18th Birthday baii!  Welcome to the 18 world! You’re officially an adult now. But seriously, I hope this birthday brings you lots of happiness, unforgettable memories, and everything you’ve been wishing for. I’m really happy that I get to celebrate this special milestone with you, even in my own little way. \n\n" +
            "I also hope you like and enjoy the website I made for you. Honestly I thought it was kinda corny while making it lol, but I still wanted to make something special for your 18th birthday. I hope I was able to include everyone who is important to you and everyone you care about. I put a lot of thought into it, and I really hope it makes your day a little more special. \n\n" +
            "Lastly, I hope you enjoy every moment of your special day and make lots of memories that you’ll look back on someday. This is the beginning of a new chapter in your life, and I hope it brings you new experiences, opportunities, and happiness. Enjoy your 18th birthday and welcome to this new chapter! Happy birthday again!",
          song: { title: "Everyone Adores You (At Least I Do)", artist: "Matt Maltese", src: "mp3/Rhoel1.mp3" },
        },
        {
          title: "Favorite Memory",
          subtitle: "But every memory with you is my favorite",
          image: "img/Rhoel2.jpg",
          note:
            "When I think about my favorite memories with you I honestly don’t know which one to choose because there are so many little moments that I treasure. But I guess it all started with our first conversation during the G10 tryouts when we were playing badminton. At that time, I probably didn’t think that something as simple as playing badminton would eventually lead to us becoming this close. It was just a small moment, but looking back now, I’m really glad it happened because that was where everything started.\n\n" +
            "Another favorite memory of mine was when we got grouped together for robotics. I feel like that was when we genuinely started getting closer and actually getting to know each other more. We got to spend more time together, talk about random things, and just be around each other more often. It was during those moments that I got to know more about you and somehow you became someone I really enjoyed having around. Looking back I’m really thankful that we ended up in the same group because if we didn’t, maybe we wouldn’t have gotten as close as we are now.\n\n" +
            "And then there’s probably the time when we got the closest is during our cheerdance. Those moments were honestly chaotic, scary, and funny all at the same time, but they’re also some of the memories I’ll probably never forget. Spending all that time practicing, struggling, laughing, and somehow surviving together made me appreciate having you around even more.\n\n" +
            "But honestly, when I look back at all these memories, I realize that it’s not really about the big moments. Every moment with you has become one of my favorite memories in some way. Even the simplest conversations, random jokes, little interactions, or just having you as a part of my day already makes that day a good one. I’m really grateful for all the memories we’ve made so far and I hope we get to make a lot more in this new chapter of your life.",
          song: { title: "Inner child", artist: "TONEEJAY", src: "mp3/Rhoel2.mp3" },
        },
        {
          title: "Fav pic",
          subtitle: "Blue and Gold ",
          image: "img/Rhoel3.jpg",
          note:
            "This is probably one of my favorite pictures of us and honestly, I really like everything about it. There’s just something about the overall vibe of the picture that makes me happy whenever I look at it.  One of the things that made it more special to me was knowing that you actually took my opinion when you were deciding what your hair should look like. I don’t know,p but it genuinely made me happy knowing that my opinion mattered enough for you to consider it. And seeing the final look, I really liked how it turned out. You looked really good, and I’m glad I got to be a small part of that decision.\n\n" +
            "And then there’s the funny coincidence with our outfits. You were wearing blue and gold and I was wearing a blue and gold suit too. The funny thing is, it wasn’t even planned. That was literally the only suit I could find, so I just went with it. But somehow, we still ended up matching. I know it’s probably just a coincidence, but I still think it’s pretty cool and kinda amazing how things worked out that way.\n\n" +
            "Whenever I look at this picture, I don’t just see a photo. I see one of those little moments that somehow turned out better than expected. The matching colors, the vibe, your hair, and just getting to have that moment with you all came together perfectly. It’s one of those pictures that I’ll always be happy to look back on, simply because you’re in it.",
          song: { title: "Tahanan", artist: "Munimuni", src: "mp3/Rhoel5.mp3" },
        },
        {
          title: "Gifts",
          subtitle: "Hope u like them",
          image: "img/Rhoel6.jpg",
          note:
            "For my first gift, I wanted to give you something that I hope will be useful for you, especially with your academics is a  calculator. I hope it can make your solving a little easier and help you with all the problems you’ll encounter along the way. And yes, I know it’s not blue but I made sure to find one that has more functions than your own calculator. So even if it doesn’t match your favorite color, at least it can hopefully do more than your old one. I hope it becomes something useful that you can bring with you throughout your studies.\n\n" +
            "For the second gift, it’s this random little robotics kit. Honestly, I didn’t really have a big plan when I saw it. I just happened to see it, and for some reason, you immediately came to my mind. It reminded me of robotics and all the memories we made back then, especially because that’s where I feel like our friendship really started to grow. It may be a random gift but I hope whenever you see it, it reminds you of me, our robotics days, and how we started becoming friends.\n\n" +
            "And lastly, there’s this website. This is probably the most special gift I wanted to give you because I put together all these little things like memories, pictures, messages, and the people who are important to you in one place. I hope this website can stay with you for a long time and become something you can always come back to. Maybe someday, when you miss your friends or when you just want to remember this part of your life and you can just open it again and look through everything. I hope it reminds you of all the people who care about you and of all the memories you made during this chapter of your life.\n\n" +
            "These gifts may not be the biggest or most expensive things in the world but I chose each one because they have a little meaning behind them. I hope you like them and more importantly I hope they remind you of how special you are to me. ",
          song: { title: "Best Friend", artist: "Laufey", src: "mp3/Rhoel4.mp3" },
        },
        {
          title: "Wishes and Thanks",
          subtitle: "Last message  ",
          image: "img/Rhoel5.jpg",
          note:
            "As you go forward and step into whatever the future holds, please always remember that I am right here for you. Whenever things get heavy or confusing please never be shy to ask for help with anything and everything. You don't need to figure it out all on your own, because I will always be a safe space for you to lean on.\n\n" + 
            "I genuinely hope from the bottom of my heart that you build the exact life you’ve always dreamed of. Please never give up on those dreams, and always keep holding on to the hobbies and passions that bring you happiness. Even when the road gets tough, keep going. I promise that I will always be your number one supporter through every high and every low, cheering you on the loudest. Whatever happens and whatever path you choose, I will always be incredibly proud of you, no matter what.\n\n" + 
            "I am so deeply grateful that I met someone like you. Having you in my life has been such a beautiful gift. I truly hope that our friendship never ends, and that we continue to grow and navigate all of life's seasons together. I so incredibly proud of the person you are and the person you are becoming. I'll always be rooting for you, I'll always love you, and I'll always be right here.\n\n" + "HAPPPYYY BIRTHDAYYY BAIII!!!!",
          song: { title: "Kuan", artist: "Rhoel", src: "mp3/Rhoel8.mp3" },
        },  
      ],
    },
  ],
};

/* ========================================================================= */

// Cards can optionally set their own image/artStart/artEnd. Any that don't
// get one automatically assigned from this palette, cycling by position,
// so you don't have to color every card by hand.
const ART_PALETTE = [
  ["#0055a0", "#4cafb7"],
  ["#12284b", "#8cc1e9"],
  ["#1f8790", "#4cafb7"],
  ["#438bc4", "#90c0c0"],
  ["#0055a0", "#1f8790"],
  ["#12284b", "#4cafb7"],
  ["#8cc1e9", "#438bc4"],
  ["#4cafb7", "#0055a0"],
];

// Free, publicly-hosted instrumental demo tracks (SoundHelix) — used only
// as placeholder audio so playback can be tested. Set a real song.src on
// any card in CONFIG to override this for that card.
const DEMO_TRACKS = Array.from(
  { length: 16 },
  (_, n) => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n + 1}.mp3`
);

function decorateCards(cards) {
  return cards.map((card, i) => {
    const [defaultStart, defaultEnd] = ART_PALETTE[i % ART_PALETTE.length];
    const artStart = card.artStart || defaultStart;
    const artEnd = card.artEnd || defaultEnd;
    const seed = card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const image = card.image || `https://picsum.photos/seed/${seed}/400/400`;
    // If no song file was given, fall back to a real demo track so you can
    // hear playback working right away — swap in your own songs later.
    const song = { ...card.song, src: card.song.src || DEMO_TRACKS[i % DEMO_TRACKS.length] };
    return { ...card, artStart, artEnd, image, song };
  });
}

// Flatten sections into one ordered list, each card tagged with its
// section heading, decorated with colors/image, indexed for note.html?card=N
function getAllCards() {
  const all = [];
  CONFIG.sections.forEach((section) => {
    section.cards.forEach((card) => {
      all.push({ ...card, sectionHeading: section.heading });
    });
  });
  return decorateCards(all);
}

function gradient(card) {
  return `linear-gradient(135deg, ${card.artStart}, ${card.artEnd})`;
}

function artHTML(card, imgClass) {
  return `<img src="${card.image}" alt="${card.title}" class="${imgClass}" onerror="this.style.display='none'">`;
}

function formatTime(seconds) {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/* ---------- shared Now Playing panel + toggle controller ---------- */
function setupPlayer() {
  const audioEl = document.getElementById("audioEl");
  if (!audioEl) return null;

  const el = {
    audioEl,
    npActive: document.getElementById("npActive"),
    npArt: document.getElementById("npArt"),
    npTrackTitle: document.getElementById("npTrackTitle"),
    npTrackArtist: document.getElementById("npTrackArtist"),
    npPlayPause: document.getElementById("npPlayPause"),
    npPrev: document.getElementById("npPrev"),
    npNext: document.getElementById("npNext"),
    npSeek: document.getElementById("npSeek"),
    npCurrentTime: document.getElementById("npCurrentTime"),
    npDuration: document.getElementById("npDuration"),
    npToggle: document.getElementById("npToggle"),
    miniPlayer: document.getElementById("miniPlayer"),
    miniArt: document.getElementById("miniArt"),
    miniTitle: document.getElementById("miniTitle"),
    miniArtist: document.getElementById("miniArtist"),
    miniPlayPause: document.getElementById("miniPlayPause"),
    miniExpand: document.getElementById("miniExpand"),
  };

  let isSeeking = false;

  function setPlayIcon(isPlaying) {
    const icon = isPlaying ? "⏸" : "▶";
    if (el.npPlayPause) el.npPlayPause.textContent = icon;
    if (el.miniPlayPause) el.miniPlayPause.textContent = icon;
  }

  function togglePlay() {
    if (!el.audioEl.src) return;
    if (el.audioEl.paused) el.audioEl.play().catch(() => {});
    else el.audioEl.pause();
  }

  function setPanelOpen(open) {
    document.body.classList.toggle("panel-closed", !open);
  }

  function loadTrack(card, { autoplay } = {}) {
    const bg = gradient(card);
    if (el.npArt) {
      el.npArt.style.background = bg;
      el.npArt.innerHTML = artHTML(card, "np-photo");
    }
    if (el.npTrackTitle) el.npTrackTitle.textContent = card.song.title;
    if (el.npTrackArtist) el.npTrackArtist.textContent = card.song.artist;

    if (el.miniArt) {
      el.miniArt.style.background = bg;
      el.miniArt.innerHTML = artHTML(card, "np-photo");
    }
    if (el.miniTitle) el.miniTitle.textContent = card.song.title;
    if (el.miniArtist) el.miniArtist.textContent = card.song.artist;

    if (card.song.src) {
      el.audioEl.src = card.song.src;
      if (autoplay) el.audioEl.play().catch(() => setPlayIcon(false));
    } else {
      el.audioEl.removeAttribute("src");
      setPlayIcon(false);
    }
  }

  if (el.npPlayPause) el.npPlayPause.addEventListener("click", togglePlay);
  if (el.miniPlayPause) el.miniPlayPause.addEventListener("click", togglePlay);

  if (el.npToggle) el.npToggle.addEventListener("click", () => setPanelOpen(false));
  if (el.miniExpand) el.miniExpand.addEventListener("click", () => setPanelOpen(true));
  if (el.miniPlayer) {
    el.miniPlayer.addEventListener("click", (e) => {
      if (e.target === el.miniPlayPause || e.target === el.miniExpand) return;
      setPanelOpen(true);
    });
  }

  if (el.npSeek) {
    el.npSeek.addEventListener("input", () => {
      isSeeking = true;
      el.npSeek.style.setProperty("--seek-pct", `${el.npSeek.value}%`);
    });
    el.npSeek.addEventListener("change", () => {
      if (el.audioEl.duration) {
        el.audioEl.currentTime = (el.npSeek.value / 100) * el.audioEl.duration;
      }
      isSeeking = false;
    });
  }

  el.audioEl.addEventListener("timeupdate", () => {
    if (isSeeking || !el.audioEl.duration || !el.npSeek) return;
    const pct = (el.audioEl.currentTime / el.audioEl.duration) * 100;
    el.npSeek.value = pct;
    el.npSeek.style.setProperty("--seek-pct", `${pct}%`);
    if (el.npCurrentTime) el.npCurrentTime.textContent = formatTime(el.audioEl.currentTime);
  });
  el.audioEl.addEventListener("loadedmetadata", () => {
    if (el.npDuration) el.npDuration.textContent = formatTime(el.audioEl.duration);
  });
  el.audioEl.addEventListener("play", () => setPlayIcon(true));
  el.audioEl.addEventListener("pause", () => setPlayIcon(false));

  return { el, loadTrack, togglePlay, setPanelOpen };
}

/* ---------- homepage ---------- */
function initHome() {
  const rowsContainer = document.getElementById("rowsContainer");
  if (!rowsContainer) return;

  document.getElementById("heroTitle").innerHTML = CONFIG.heroTitle;
  document.getElementById("heroIntro").textContent = CONFIG.heroIntro;

  // Sidebar: just the three level names, no individual people
  const sideLevels = document.getElementById("sideLevels");
  if (sideLevels) {
    CONFIG.sections.forEach((section) => {
      const link = document.createElement("a");
      link.href = `#${section.id}`;
      link.className = "side-level-link";
      link.textContent = section.heading;
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(section.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      sideLevels.appendChild(link);
    });
  }

  let globalIndex = 0;
  const decorated = getAllCards();

  CONFIG.sections.forEach((section) => {
    const section_el = document.createElement("section");
    section_el.className = "grid-section";
    section_el.id = section.id;

    const heading = document.createElement("div");
    heading.className = "grid-heading";
    heading.innerHTML = `
      <div class="grid-heading-text">
        <h2>${section.heading}</h2>
        <span class="grid-sub">${section.sub}</span>
      </div>
      <div class="row-controls">
        <button class="row-arrow" data-dir="-1" aria-label="Show previous">‹</button>
        <button class="row-arrow" data-dir="1" aria-label="Show more">›</button>
      </div>
    `;
    section_el.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "card-grid";

    section.cards.forEach(() => {
      const card = decorated[globalIndex];
      const i = globalIndex;
      const a = document.createElement("a");
      a.className = "card";
      a.href = `note.html?card=${i}`;
      a.innerHTML = `
        <div class="card-art" style="background: ${gradient(card)}">${artHTML(card, "card-photo")}</div>
        <p class="card-title">${card.title}</p>
        <p class="card-sub">${card.subtitle}</p>
      `;
      grid.appendChild(a);
      globalIndex++;
    });

    section_el.appendChild(grid);
    rowsContainer.appendChild(section_el);

    // Arrow buttons page the row left/right by roughly one screenful
    heading.querySelectorAll(".row-arrow").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = parseInt(btn.getAttribute("data-dir"), 10);
        grid.scrollBy({ left: dir * grid.clientWidth * 0.85, behavior: "smooth" });
      });
    });
  });

  setupPlayer(); // stays idle on the homepage until she opens a note
}

/* ---------- note page ---------- */
function initNote() {
  const noteBody = document.getElementById("noteBody");
  if (!noteBody) return;

  const all = getAllCards();
  const params = new URLSearchParams(window.location.search);
  let index = parseInt(params.get("card"), 10);
  if (isNaN(index) || index < 0 || index >= all.length) index = 0;

  const player = setupPlayer();

  function render(i) {
    const card = all[i];

    const bannerImg = document.getElementById("noteBannerImg");
    document.getElementById("noteBanner").style.background = gradient(card);
    bannerImg.style.display = "block";
    bannerImg.src = card.image;
    bannerImg.alt = card.title;

    document.getElementById("noteEyebrow").textContent = card.sectionHeading;
    document.getElementById("noteTitle").textContent = card.title;
    document.getElementById("noteSubheader").textContent = card.subtitle;
    document.getElementById("noteBody").textContent = card.note;
    document.getElementById("noteSongName").textContent = `${card.song.title} — ${card.song.artist}`;

    const prevIndex = (i - 1 + all.length) % all.length;
    const nextIndex = (i + 1) % all.length;
    document.getElementById("notePrevLink").href = `note.html?card=${prevIndex}`;
    document.getElementById("noteNextLink").href = `note.html?card=${nextIndex}`;

    // build the quick-jump list in the sidebar as a collapsible accordion —
    // collapsed by default, with the current section auto-expanded
    const list = document.getElementById("sideNoteList");
    list.innerHTML = "";
    let ci = 0;
    CONFIG.sections.forEach((section) => {
      const sectionStart = ci;
      const sectionEnd = ci + section.cards.length - 1;
      const isCurrentSection = i >= sectionStart && i <= sectionEnd;

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "side-group-toggle";
      toggle.setAttribute("aria-expanded", isCurrentSection ? "true" : "false");
      toggle.innerHTML = `<span>${section.heading}</span><span class="chevron">▾</span>`;

      const groupLinks = document.createElement("div");
      groupLinks.className = "side-group-links";
      groupLinks.hidden = !isCurrentSection;

      section.cards.forEach((c) => {
        const idx = ci;
        const link = document.createElement("a");
        link.href = `note.html?card=${idx}`;
        link.className = "side-note-link" + (idx === i ? " current" : "");
        link.textContent = c.title;
        groupLinks.appendChild(link);
        ci++;
      });

      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
        groupLinks.hidden = expanded;
      });

      list.appendChild(toggle);
      list.appendChild(groupLinks);
    });

    if (player) player.loadTrack(card, { autoplay: true });

    window.history.replaceState(null, "", `note.html?card=${i}`);
  }

  render(index);
}

initHome();
initNote();
