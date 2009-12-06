module('from lib.javascript import Singleton, bind, map');
module('import class lib.Publisher');
module('import lib.xhr as xhr');
module('external lib.twitter import twitter');

// debug
twitter.setCache({'http://search.twitter.com/search.json?q=%40marcuswestin':{results:[{profile_image_url:"http://a1.twimg.com/profile_images/122372260/G6je7Uvklj28znqs3Sx0DLB7o1_500_normal.jpg", created_at:"Wed, 02 Dec 2009 22:06:17 +0000", from_user:"cowperthwait", to_user_id:null, text:"- @marcuswestin points me to a bigol' file of raw voiceover outtakes for a long-lost corporate video project. My nose whistled.", id:6282690423, from_user_id:1070905, geo:null, iso_language_code:"en", source:"&lt;a href=&quot;http://www.brizzly.com&quot; rel=&quot;nofollow&quot;&gt;Brizzly&lt;/a&gt;"}, {profile_image_url:"http://a1.twimg.com/profile_images/340328136/profilepic_normal.jpg", created_at:"Mon, 30 Nov 2009 20:13:10 +0000", from_user:"kimmaicutler", to_user_id:5780185, text:"@marcuswestin Wow that's really cool. Where is that gym?", id:6211703317, from_user_id:697071, to_user:"marcuswestin", geo:null, iso_language_code:"en", source:"&lt;a href=&quot;http://www.tweetdeck.com/&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;/a&gt;"}, {profile_image_url:"http://a3.twimg.com/profile_images/184986499/IMG_0083_normal.JPG", created_at:"Sun, 29 Nov 2009 07:03:00 +0000", from_user:"shaun510", to_user_id:5780185, text:"@marcuswestin Sadly, no GNAR points were assigned today -- perhaps we should have tried radness yells?", id:6164127248, from_user_id:14073047, to_user:"marcuswestin", geo:null, iso_language_code:"en", source:"&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"}, {profile_image_url:"http://s.twimg.com/a/1259091217/images/default_profile_2_normal.png", created_at:"Sat, 28 Nov 2009 09:27:13 +0000", from_user:"gudinokosav", to_user_id:null, text:"RT @mikeyk: @marcuswestin I'm walking beaches while you're hitting slopes...I love California.", id:6137757400, from_user_id:81397661, geo:null, iso_language_code:"en", source:"&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"}, {profile_image_url:"http://a3.twimg.com/profile_images/548783385/face_normal.jpg", created_at:"Sat, 28 Nov 2009 09:13:53 +0000", from_user:"mikeyk", to_user_id:5780185, text:"@marcuswestin I'm walking beaches while you're hitting slopes...I love California.", id:6137591173, from_user_id:143994, to_user:"marcuswestin", geo:null, iso_language_code:"en", source:"&lt;a href=&quot;http://www.atebits.com/&quot; rel=&quot;nofollow&quot;&gt;Tweetie&lt;/a&gt;"}, {profile_image_url:"http://a3.twimg.com/profile_images/513669467/1_normal.jpg", created_at:"Sat, 28 Nov 2009 01:17:06 +0000", from_user:"AmieRod", to_user_id:null, text:"RT @marcuswestin: Thanks, @dropbox. &quot;Growl notifications strongly recommended&quot; - not for those sensitive to spacial clutter http://briz ...", id:6128459203, from_user_id:81359160, geo:null, iso_language_code:"en", source:"&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"}], max_id:6355227932, since_id:0, refresh_url:"?since_id=6355227932&q=%40marcuswestin", results_per_page:15, page:1, completed_in:0.342462, query:"%40marcuswestin"}, 'http://twitter.com/statuses/user_timeline.json?id=marcuswestin':[{truncated:false, favorited:false, source:"<a href=\"http://www.brizzly.com\" rel=\"nofollow\">Brizzly</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{notifications:false, favourites_count:22, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, verified:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, profile_text_color:"7e430c", followers_count:203, protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, friends_count:73, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Sat Dec 05 01:22:32 +0000 2009", id:6355812104, geo:null, text:"Awesome startup model: Position yourself such that others can make money on top of your platform or through your services."}, {source:"web", truncated:false, favorited:false, user:{profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", description:"Javascript engineer, loving life", geo_enabled:false, profile_link_color:"d92f20", following:true, profile_background_tile:true, profile_background_color:"C6E2EE", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", friends_count:73, profile_sidebar_fill_color:"dd9a64", url:"http://blog.narcvs.com", screen_name:"marcuswestin", time_zone:"Quito", profile_sidebar_border_color:"89322a", protected:false, favourites_count:22, created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", verified:false, id:8904922, notifications:false, statuses_count:546, utc_offset:-18000, profile_text_color:"7e430c", followers_count:203}, in_reply_to_user_id:null, in_reply_to_status_id:null, created_at:"Thu Dec 03 20:46:57 +0000 2009", in_reply_to_screen_name:null, id:6314533324, geo:null, text:"Cats against climate change! Awesome video: http://www.youtube.com/watch?v=thyAeCIqLA0&feature=popular"}, {truncated:false, favorited:false, source:"<a href=\"http://www.brizzly.com\" rel=\"nofollow\">Brizzly</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Mon Nov 30 21:03:50 +0000 2009", id:6212962182, geo:null, text:"It's fun to use Twitter to confirm that Twitter is indeed over capacity. http://brizzly.com/pic/KHO"}, {truncated:false, favorited:false, source:"<a href=\"http://www.brizzly.com\" rel=\"nofollow\">Brizzly</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Mon Nov 30 20:11:43 +0000 2009", id:6211666332, geo:null, text:"Hey! Who knows of interesting price models? Ex: Danish gym has you pay more the less you go. Let me know!"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Mon Nov 30 01:20:39 +0000 2009", id:6186483097, geo:null, text:"Heading up the mountain with @shaun510 and Randall. See how white the trees are! http://yfrog.com/4fj8ej"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Mon Nov 30 00:59:21 +0000 2009", id:6185902913, geo:null, text:"RT @cowperthwait: Proposed Ugandan law: lifetime prison for gays; capital punishment for HIV+; 3 yrs for not snitching http://bit.ly/80GlRQ"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Mon Nov 30 00:57:22 +0000 2009", id:6185851007, geo:null, text:"RT @elerue: The Commonwealth will allow Uganda to enter the group, in spite of the fact that Uganda is passing a law to execute HIV+ gays"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Sat Nov 28 18:40:27 +0000 2009", id:6147576343, geo:null, text:"Tahoe, CA: \"Radness hand gestures - go\" http://yfrog.com/4iyk0jj"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Sat Nov 28 18:40:14 +0000 2009", id:6147571505, geo:null, text:"First lift - looking fucking gnarly!!! http://yfrog.com/4isn3aj"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Sat Nov 28 09:38:38 +0000 2009", id:6137898828, geo:null, text:"Reading screenplay of \"The Social Network,\" upcoming movie about Facebook. Entertaining stuff!"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Sat Nov 28 09:20:20 +0000 2009", id:6137671562, geo:null, text:"That's a tv. In the bathroom. The shape of a ghost busters plasma gun. http://yfrog.com/3n3ryj"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Sat Nov 28 09:12:03 +0000 2009", id:6137569137, geo:null, text:"Just made south lake Tahoe - crashing at the casinos tonight. Promising amount of snow. Tomorrow we hit the slopes (cont) http://tl.gd/134m1"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Fri Nov 27 21:09:59 +0000 2009", id:6122667839, geo:null, text:"Today our nation dedicates itself to a day of worship."}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Fri Nov 27 03:21:34 +0000 2009", id:6101369704, geo:null, text:"While a turkey can't quite convince me to ignore my flu, the first snowfall of the year certainly can. Let's shred some gnar."}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Thu Nov 26 21:02:36 +0000 2009", id:6092407961, geo:null, text:"1 part Pernod, 3 parts water, lots of lime and finely chopped basil, served chilled. Surprisingly good."}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Tue Nov 24 04:48:33 +0000 2009", id:5999350988, geo:null, text:"\"I hear snuggles are a particularly fruitful source of front end computer programming. Endless supply can be found here\" Oh joy!!"}, {truncated:false, favorited:false, source:"<a href=\"http://www.atebits.com/\" rel=\"nofollow\">Tweetie</a>", in_reply_to_user_id:null, in_reply_to_status_id:null, in_reply_to_screen_name:null, user:{verified:false, profile_background_color:"C6E2EE", description:"Javascript engineer, loving life", following:false, profile_sidebar_fill_color:"dd9a64", profile_image_url:"http://a3.twimg.com/profile_images/379382059/n2904387_30962178_8468_normal.jpg", time_zone:"Quito", profile_sidebar_border_color:"89322a", followers_count:203, url:"http://blog.narcvs.com", screen_name:"marcuswestin", statuses_count:547, friends_count:73, profile_text_color:"7e430c", protected:false, profile_background_image_url:"http://a1.twimg.com/profile_background_images/5368680/hq-wallpapers-032.jpg", created_at:"Sat Sep 15 23:00:31 +0000 2007", location:"San Francisco", name:"Marcus Westin", geo_enabled:false, notifications:false, favourites_count:22, profile_link_color:"d92f20", id:8904922, profile_background_tile:true, utc_offset:-18000}, created_at:"Tue Nov 24 04:31:56 +0000 2009", id:5998987231, geo:null, text:"RT @sethjs: Meebo needs a head of revenue operations like now. Self serve, targeting, scaling entire revenue op. Ping me. Tell your friends."}]});

exports.navigationManager = Singleton(lib.Publisher, function(supr) {
	
	this.init = function() {
		supr(this, 'init');
		setInterval(bind(this, '_checkLocation'), 50);
	}
	
	this._checkLocation = function() {
		if (document.location.hash == this._lastLocation) { return; }
		this.navigateTo(document.location.hash);
	}
	
	this.navigateTo = function(location) {
		this._lastLocation = location;
		var destination = location.substr(1);
		
		var pending = 1;
		
		var results = [];
		var onResponse = bind(this, function(items) {
			results = results.concat(items);
			if (!--pending) {  this.publish('Navigate', location.substr(1), results); }
		});
		
		if (destination == 'All' || destination == 'Twitter') {
			function onTweets(response) { 
				var result = [];
				for (var i=0, tweet; tweet = response.results[i]; i++) { 
					result.push({ type: 'Tweet', data: tweet });
				}
				onResponse(result); 
			}
			pending++;
			twitter.getMentions('marcuswestin', function(response) {
				onResponse(map(response.results, function(tweet){ return { type: 'Tweet', data: tweet }; }));
			});
			pending++;
			twitter.getTimeline('marcuswestin', function(tweets){
				onResponse(map(tweets, function(tweet){ return { type: 'Tweet', data: tweet }; }));
			});
		}
		
		xhr.getJSON('navigate.php?path=' + destination, onResponse);
	}
})