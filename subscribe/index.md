---
layout: page
title: Subscribe
permalink: /subscribe/
---

The best way to follow any blog, including this one, is via an [RSS][]
reader.

After [Google Reader][greader] was [shutdown][] the
wonderful [feedly][] came into existence to provide a cloud based
solution. You add your RSS feeds to feedly, and it follows for you in
the cloud. You read "via" feedly, so that you can read on any device
and keep any device in sync with your progress.

There are also some nice standalone apps out there; like [Vienna][]
for OS-X. [feedly][] also maintains a nice list of all
the [RSS apps][fapps] that work with it, for any platform.

<a href='http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Fbadgerous.net%2Ffeed.xml'  target='blank'><img id='feedlyFollow' src="{{ '/assets/img/feedly-follow-rectangle-volume-big_2x.png' | relative_url }}" alt='follow us in feedly' width='131' height='56'/></a>

If you really want an email, then you can use [Blogtrottr][] to setup
an RSS to email subscription; so you can be notified when I post.

This should notify you nearly instantly as well, thanks
to [GitHub Webook][webhook] via a [magic URL][magicurl] through to
a [pubsubhubbub][].

<form method='post' action='http://blogtrottr.com'>
    Your email: <input type='text' name='btr_email' /><br />
    <input type='hidden' name='btr_url' value="http://badgerous.net/feed.xml" />
    <input type='hidden' name='schedule_type' value='0' />
    <input type='submit' value='Follow this feed via email' />
</form>

[RSS]: https://en.wikipedia.org/wiki/RSS
[greader]: https://en.wikipedia.org/wiki/Google_Reader
[shutdown]: https://googlereader.blogspot.com/2013/07/a-final-farewell.html
[feedly]: https://feedly.com/
[fapps]: https://feedly.com/apps.html
[Vienna]: http://www.vienna-rss.org/
[Blogtrottr]: https://blogtrottr.com
[magicurl]: http://ivanzuzak.info/2011/01/02/enabling-pubsubhubbub-for-github-hosted-blogs.html
[pubsubhubbub]: https://pubsubhubbub.appspot.com/
[webhook]: https://help.github.com/articles/about-webhooks/
