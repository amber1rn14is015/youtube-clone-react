import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const SearchPage = () => {
  return(
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BBC_News_%282008%29.svg/1200px-BBC_News_%282008%29.svg.png"
        channel="BBC News Hindi"
        verified
        subs="8.99M"
        noOfVideos={8195}
        description="हिंदी में ताज़ा समाचार,  ब्रेकिंग न्यूज़,  वीडियो, ऑडियो और फ़ीचर. bbchindi.com पर भारत, पाकिस्तान और चीन सहित दुनिया भर दिलचस्प मल्टीमीडिया कंटेट.  BBC HINDI for up-to-the-minute news, breaking news, video, audio and feature stories."
      />
      <hr />
      <VideoRow 
        views="1.4M"
        subs="659K"
        description="1949 में माओत्से तुंग ने पीपल्स रिपब्लिक ऑफ़ चाइना का गठन किया. एक अप्रैल 1950 को भारत ने इसे मान्यता दी और राजनयिक संबंध स्थापित किया. चीन को इस तरह तवज्जो देने वाला भारत पहला ग़ैर-कम्युनिस्ट देश बना. 1954 में भारत ने तिब्बत को लेकर भी चीनी संप्रभुता को स्वीकार कर लिया. मतलब भारत ने मान लिया कि तिब्बत चीन का हिस्सा है. 'हिन्दी-चीनी, भाई-भाई' का नारा भी लगा. जून 1954 से जनवरी 1957 के बीच चीन के पहले प्रधानमंत्री चाउ एन लाई चार बार भारत के दौरे पर आये. अक्टूबर 1954 में नेहरू भी चीन गए. नेहरू के चीन दौरे को लेकर अमरीकी अख़बार 'न्यूयॉर्क टाइम्स' ने लिखा था कि 'ग़ैर-कम्युनिस्ट देश के किसी प्रधानमंत्री का पीपल्स रिपब्लिक ऑफ़ चाइना बनने के बाद का यह पहला दौरा है.' तब न्यूयॉर्क टाइम्स ने लिखा था कि ''एयरपोर्ट से शहर के बीच लगभग 10 किलोमीटर की दूरी तक नेहरू के स्वागत में चीन के लोग ताली बजाते हुए खड़े थे.'' इस दौरे में नेहरू की मुलाक़ात ना केवल प्रधानमंत्री से हुई, बल्कि पीपल्स रिपब्लिक ऑफ़ चाइना के प्रमुख माओ से भी हुई. दूसरी तरफ़ तिब्बत की हालत लगातार ख़राब हो रही थी और चीन का आक्रमण बढ़ता जा रहा था. 1950 में चीन ने तिब्बत पर हमला शुरू कर दिया और उसे अपने नियंत्रण में ले लिया. तिब्बत पर चीनी हमले ने पूरे इलाक़े की जियोपॉलिटिक्स को बदल दिया. चीनी हमले से पहले तिब्बत की नज़दीकी चीन की तुलना में भारत से ज़्यादा थी. आख़िरकार तिब्बत एक आज़ाद मुल्क नहीं रहा. स्वीडिश पत्रकार बर्टिल लिंटनर ने अपनी क़िताब 'चाइना इंडिया वॉर' में लिखा है, ''तब नेहरू सरकार में गृहमंत्री सरदार वल्लभ भाई पटेल उन कुछ नेताओं में से एक थे जो तिब्बत में हुए इस बदलाव की अहमियत को समझते थे. इसे लेकर पटेल ने नेहरू को दिसंबर 1950 में अपनी मौत से एक महीने पहले नवंबर 1950 में एक पत्र भी लिखा था.''"
        timestamp="10 minutes ago"
        channel="BBC News Hindi"
        title="India China Face Off : चीन पर PM Modi क्या Nehru वाली ही 'ग़लती' दोहरा रहे हैं? (BBC Hindi)"
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/25/ecff73d2-7ddc-11e9-8126-9d0e63452fe9_image_hires_173155.JPG?itok=yPt6cACg&v=1558776722"
      />
      <VideoRow 
        views="1.4M"
        subs="659K"
        description="1949 में माओत्से तुंग ने पीपल्स रिपब्लिक ऑफ़ चाइना का गठन किया. एक अप्रैल 1950 को भारत ने इसे मान्यता दी और राजनयिक संबंध स्थापित किया. चीन को इस तरह तवज्जो देने वाला भारत पहला ग़ैर-कम्युनिस्ट देश बना. 1954 में भारत ने तिब्बत को लेकर भी चीनी संप्रभुता को स्वीकार कर लिया. मतलब भारत ने मान लिया कि तिब्बत चीन का हिस्सा है. 'हिन्दी-चीनी, भाई-भाई' का नारा भी लगा. जून 1954 से जनवरी 1957 के बीच चीन के पहले प्रधानमंत्री चाउ एन लाई चार बार भारत के दौरे पर आये. अक्टूबर 1954 में नेहरू भी चीन गए. नेहरू के चीन दौरे को लेकर अमरीकी अख़बार 'न्यूयॉर्क टाइम्स' ने लिखा था कि 'ग़ैर-कम्युनिस्ट देश के किसी प्रधानमंत्री का पीपल्स रिपब्लिक ऑफ़ चाइना बनने के बाद का यह पहला दौरा है.' तब न्यूयॉर्क टाइम्स ने लिखा था कि ''एयरपोर्ट से शहर के बीच लगभग 10 किलोमीटर की दूरी तक नेहरू के स्वागत में चीन के लोग ताली बजाते हुए खड़े थे.'' इस दौरे में नेहरू की मुलाक़ात ना केवल प्रधानमंत्री से हुई, बल्कि पीपल्स रिपब्लिक ऑफ़ चाइना के प्रमुख माओ से भी हुई. दूसरी तरफ़ तिब्बत की हालत लगातार ख़राब हो रही थी और चीन का आक्रमण बढ़ता जा रहा था. 1950 में चीन ने तिब्बत पर हमला शुरू कर दिया और उसे अपने नियंत्रण में ले लिया. तिब्बत पर चीनी हमले ने पूरे इलाक़े की जियोपॉलिटिक्स को बदल दिया. चीनी हमले से पहले तिब्बत की नज़दीकी चीन की तुलना में भारत से ज़्यादा थी. आख़िरकार तिब्बत एक आज़ाद मुल्क नहीं रहा. स्वीडिश पत्रकार बर्टिल लिंटनर ने अपनी क़िताब 'चाइना इंडिया वॉर' में लिखा है, ''तब नेहरू सरकार में गृहमंत्री सरदार वल्लभ भाई पटेल उन कुछ नेताओं में से एक थे जो तिब्बत में हुए इस बदलाव की अहमियत को समझते थे. इसे लेकर पटेल ने नेहरू को दिसंबर 1950 में अपनी मौत से एक महीने पहले नवंबर 1950 में एक पत्र भी लिखा था.''"
        timestamp="10 minutes ago"
        channel="BBC News Hindi"
        title="India China Face Off : चीन पर PM Modi क्या Nehru वाली ही 'ग़लती' दोहरा रहे हैं? (BBC Hindi)"
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/25/ecff73d2-7ddc-11e9-8126-9d0e63452fe9_image_hires_173155.JPG?itok=yPt6cACg&v=1558776722"
      />
      <VideoRow 
        views="1.4M"
        subs="659K"
        description="1949 में माओत्से तुंग ने पीपल्स रिपब्लिक ऑफ़ चाइना का गठन किया. एक अप्रैल 1950 को भारत ने इसे मान्यता दी और राजनयिक संबंध स्थापित किया. चीन को इस तरह तवज्जो देने वाला भारत पहला ग़ैर-कम्युनिस्ट देश बना. 1954 में भारत ने तिब्बत को लेकर भी चीनी संप्रभुता को स्वीकार कर लिया. मतलब भारत ने मान लिया कि तिब्बत चीन का हिस्सा है. 'हिन्दी-चीनी, भाई-भाई' का नारा भी लगा. जून 1954 से जनवरी 1957 के बीच चीन के पहले प्रधानमंत्री चाउ एन लाई चार बार भारत के दौरे पर आये. अक्टूबर 1954 में नेहरू भी चीन गए. नेहरू के चीन दौरे को लेकर अमरीकी अख़बार 'न्यूयॉर्क टाइम्स' ने लिखा था कि 'ग़ैर-कम्युनिस्ट देश के किसी प्रधानमंत्री का पीपल्स रिपब्लिक ऑफ़ चाइना बनने के बाद का यह पहला दौरा है.' तब न्यूयॉर्क टाइम्स ने लिखा था कि ''एयरपोर्ट से शहर के बीच लगभग 10 किलोमीटर की दूरी तक नेहरू के स्वागत में चीन के लोग ताली बजाते हुए खड़े थे.'' इस दौरे में नेहरू की मुलाक़ात ना केवल प्रधानमंत्री से हुई, बल्कि पीपल्स रिपब्लिक ऑफ़ चाइना के प्रमुख माओ से भी हुई. दूसरी तरफ़ तिब्बत की हालत लगातार ख़राब हो रही थी और चीन का आक्रमण बढ़ता जा रहा था. 1950 में चीन ने तिब्बत पर हमला शुरू कर दिया और उसे अपने नियंत्रण में ले लिया. तिब्बत पर चीनी हमले ने पूरे इलाक़े की जियोपॉलिटिक्स को बदल दिया. चीनी हमले से पहले तिब्बत की नज़दीकी चीन की तुलना में भारत से ज़्यादा थी. आख़िरकार तिब्बत एक आज़ाद मुल्क नहीं रहा. स्वीडिश पत्रकार बर्टिल लिंटनर ने अपनी क़िताब 'चाइना इंडिया वॉर' में लिखा है, ''तब नेहरू सरकार में गृहमंत्री सरदार वल्लभ भाई पटेल उन कुछ नेताओं में से एक थे जो तिब्बत में हुए इस बदलाव की अहमियत को समझते थे. इसे लेकर पटेल ने नेहरू को दिसंबर 1950 में अपनी मौत से एक महीने पहले नवंबर 1950 में एक पत्र भी लिखा था.''"
        timestamp="10 minutes ago"
        channel="BBC News Hindi"
        title="India China Face Off : चीन पर PM Modi क्या Nehru वाली ही 'ग़लती' दोहरा रहे हैं? (BBC Hindi)"
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/25/ecff73d2-7ddc-11e9-8126-9d0e63452fe9_image_hires_173155.JPG?itok=yPt6cACg&v=1558776722"
      />
      <VideoRow 
        views="1.4M"
        subs="659K"
        description="1949 में माओत्से तुंग ने पीपल्स रिपब्लिक ऑफ़ चाइना का गठन किया. एक अप्रैल 1950 को भारत ने इसे मान्यता दी और राजनयिक संबंध स्थापित किया. चीन को इस तरह तवज्जो देने वाला भारत पहला ग़ैर-कम्युनिस्ट देश बना. 1954 में भारत ने तिब्बत को लेकर भी चीनी संप्रभुता को स्वीकार कर लिया. मतलब भारत ने मान लिया कि तिब्बत चीन का हिस्सा है. 'हिन्दी-चीनी, भाई-भाई' का नारा भी लगा. जून 1954 से जनवरी 1957 के बीच चीन के पहले प्रधानमंत्री चाउ एन लाई चार बार भारत के दौरे पर आये. अक्टूबर 1954 में नेहरू भी चीन गए. नेहरू के चीन दौरे को लेकर अमरीकी अख़बार 'न्यूयॉर्क टाइम्स' ने लिखा था कि 'ग़ैर-कम्युनिस्ट देश के किसी प्रधानमंत्री का पीपल्स रिपब्लिक ऑफ़ चाइना बनने के बाद का यह पहला दौरा है.' तब न्यूयॉर्क टाइम्स ने लिखा था कि ''एयरपोर्ट से शहर के बीच लगभग 10 किलोमीटर की दूरी तक नेहरू के स्वागत में चीन के लोग ताली बजाते हुए खड़े थे.'' इस दौरे में नेहरू की मुलाक़ात ना केवल प्रधानमंत्री से हुई, बल्कि पीपल्स रिपब्लिक ऑफ़ चाइना के प्रमुख माओ से भी हुई. दूसरी तरफ़ तिब्बत की हालत लगातार ख़राब हो रही थी और चीन का आक्रमण बढ़ता जा रहा था. 1950 में चीन ने तिब्बत पर हमला शुरू कर दिया और उसे अपने नियंत्रण में ले लिया. तिब्बत पर चीनी हमले ने पूरे इलाक़े की जियोपॉलिटिक्स को बदल दिया. चीनी हमले से पहले तिब्बत की नज़दीकी चीन की तुलना में भारत से ज़्यादा थी. आख़िरकार तिब्बत एक आज़ाद मुल्क नहीं रहा. स्वीडिश पत्रकार बर्टिल लिंटनर ने अपनी क़िताब 'चाइना इंडिया वॉर' में लिखा है, ''तब नेहरू सरकार में गृहमंत्री सरदार वल्लभ भाई पटेल उन कुछ नेताओं में से एक थे जो तिब्बत में हुए इस बदलाव की अहमियत को समझते थे. इसे लेकर पटेल ने नेहरू को दिसंबर 1950 में अपनी मौत से एक महीने पहले नवंबर 1950 में एक पत्र भी लिखा था.''"
        timestamp="10 minutes ago"
        channel="BBC News Hindi"
        title="India China Face Off : चीन पर PM Modi क्या Nehru वाली ही 'ग़लती' दोहरा रहे हैं? (BBC Hindi)"
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/25/ecff73d2-7ddc-11e9-8126-9d0e63452fe9_image_hires_173155.JPG?itok=yPt6cACg&v=1558776722"
      />
      <VideoRow 
        views="1.4M"
        subs="659K"
        description="1949 में माओत्से तुंग ने पीपल्स रिपब्लिक ऑफ़ चाइना का गठन किया. एक अप्रैल 1950 को भारत ने इसे मान्यता दी और राजनयिक संबंध स्थापित किया. चीन को इस तरह तवज्जो देने वाला भारत पहला ग़ैर-कम्युनिस्ट देश बना. 1954 में भारत ने तिब्बत को लेकर भी चीनी संप्रभुता को स्वीकार कर लिया. मतलब भारत ने मान लिया कि तिब्बत चीन का हिस्सा है. 'हिन्दी-चीनी, भाई-भाई' का नारा भी लगा. जून 1954 से जनवरी 1957 के बीच चीन के पहले प्रधानमंत्री चाउ एन लाई चार बार भारत के दौरे पर आये. अक्टूबर 1954 में नेहरू भी चीन गए. नेहरू के चीन दौरे को लेकर अमरीकी अख़बार 'न्यूयॉर्क टाइम्स' ने लिखा था कि 'ग़ैर-कम्युनिस्ट देश के किसी प्रधानमंत्री का पीपल्स रिपब्लिक ऑफ़ चाइना बनने के बाद का यह पहला दौरा है.' तब न्यूयॉर्क टाइम्स ने लिखा था कि ''एयरपोर्ट से शहर के बीच लगभग 10 किलोमीटर की दूरी तक नेहरू के स्वागत में चीन के लोग ताली बजाते हुए खड़े थे.'' इस दौरे में नेहरू की मुलाक़ात ना केवल प्रधानमंत्री से हुई, बल्कि पीपल्स रिपब्लिक ऑफ़ चाइना के प्रमुख माओ से भी हुई. दूसरी तरफ़ तिब्बत की हालत लगातार ख़राब हो रही थी और चीन का आक्रमण बढ़ता जा रहा था. 1950 में चीन ने तिब्बत पर हमला शुरू कर दिया और उसे अपने नियंत्रण में ले लिया. तिब्बत पर चीनी हमले ने पूरे इलाक़े की जियोपॉलिटिक्स को बदल दिया. चीनी हमले से पहले तिब्बत की नज़दीकी चीन की तुलना में भारत से ज़्यादा थी. आख़िरकार तिब्बत एक आज़ाद मुल्क नहीं रहा. स्वीडिश पत्रकार बर्टिल लिंटनर ने अपनी क़िताब 'चाइना इंडिया वॉर' में लिखा है, ''तब नेहरू सरकार में गृहमंत्री सरदार वल्लभ भाई पटेल उन कुछ नेताओं में से एक थे जो तिब्बत में हुए इस बदलाव की अहमियत को समझते थे. इसे लेकर पटेल ने नेहरू को दिसंबर 1950 में अपनी मौत से एक महीने पहले नवंबर 1950 में एक पत्र भी लिखा था.''"
        timestamp="10 minutes ago"
        channel="BBC News Hindi"
        title="India China Face Off : चीन पर PM Modi क्या Nehru वाली ही 'ग़लती' दोहरा रहे हैं? (BBC Hindi)"
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/25/ecff73d2-7ddc-11e9-8126-9d0e63452fe9_image_hires_173155.JPG?itok=yPt6cACg&v=1558776722"
      />
      <VideoRow 
        views="1.4M"
        subs="659K"
        description="1949 में माओत्से तुंग ने पीपल्स रिपब्लिक ऑफ़ चाइना का गठन किया. एक अप्रैल 1950 को भारत ने इसे मान्यता दी और राजनयिक संबंध स्थापित किया. चीन को इस तरह तवज्जो देने वाला भारत पहला ग़ैर-कम्युनिस्ट देश बना. 1954 में भारत ने तिब्बत को लेकर भी चीनी संप्रभुता को स्वीकार कर लिया. मतलब भारत ने मान लिया कि तिब्बत चीन का हिस्सा है. 'हिन्दी-चीनी, भाई-भाई' का नारा भी लगा. जून 1954 से जनवरी 1957 के बीच चीन के पहले प्रधानमंत्री चाउ एन लाई चार बार भारत के दौरे पर आये. अक्टूबर 1954 में नेहरू भी चीन गए. नेहरू के चीन दौरे को लेकर अमरीकी अख़बार 'न्यूयॉर्क टाइम्स' ने लिखा था कि 'ग़ैर-कम्युनिस्ट देश के किसी प्रधानमंत्री का पीपल्स रिपब्लिक ऑफ़ चाइना बनने के बाद का यह पहला दौरा है.' तब न्यूयॉर्क टाइम्स ने लिखा था कि ''एयरपोर्ट से शहर के बीच लगभग 10 किलोमीटर की दूरी तक नेहरू के स्वागत में चीन के लोग ताली बजाते हुए खड़े थे.'' इस दौरे में नेहरू की मुलाक़ात ना केवल प्रधानमंत्री से हुई, बल्कि पीपल्स रिपब्लिक ऑफ़ चाइना के प्रमुख माओ से भी हुई. दूसरी तरफ़ तिब्बत की हालत लगातार ख़राब हो रही थी और चीन का आक्रमण बढ़ता जा रहा था. 1950 में चीन ने तिब्बत पर हमला शुरू कर दिया और उसे अपने नियंत्रण में ले लिया. तिब्बत पर चीनी हमले ने पूरे इलाक़े की जियोपॉलिटिक्स को बदल दिया. चीनी हमले से पहले तिब्बत की नज़दीकी चीन की तुलना में भारत से ज़्यादा थी. आख़िरकार तिब्बत एक आज़ाद मुल्क नहीं रहा. स्वीडिश पत्रकार बर्टिल लिंटनर ने अपनी क़िताब 'चाइना इंडिया वॉर' में लिखा है, ''तब नेहरू सरकार में गृहमंत्री सरदार वल्लभ भाई पटेल उन कुछ नेताओं में से एक थे जो तिब्बत में हुए इस बदलाव की अहमियत को समझते थे. इसे लेकर पटेल ने नेहरू को दिसंबर 1950 में अपनी मौत से एक महीने पहले नवंबर 1950 में एक पत्र भी लिखा था.''"
        timestamp="10 minutes ago"
        channel="BBC News Hindi"
        title="India China Face Off : चीन पर PM Modi क्या Nehru वाली ही 'ग़लती' दोहरा रहे हैं? (BBC Hindi)"
        image="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/25/ecff73d2-7ddc-11e9-8126-9d0e63452fe9_image_hires_173155.JPG?itok=yPt6cACg&v=1558776722"
      />
    </div>
  )
}

export default SearchPage