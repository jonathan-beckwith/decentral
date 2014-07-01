# Decentral
*Decentralized sharing and communication platform.**

## Content

Describes how content is structured without reference to technical implementation or display details.

### Page

#### URI

`/u/worldnews`

#### Description
This represents a node running on a server. It aggregates posts made to all subscribed reddits, along with any posts made to the page itself.

Whoever runs the server is the admin (obviously), and can appoint additional moderators with granular levels of control over the site.

#### Structure

    { 
        title: "News from around the world"
        name: "worldnews",
        url: "192.168.0.1",
        chunks: [],
        content: "A description of the site"
        moderators: [ "gummybear5" ]
        subscriptions: [ { name: "news", ip: "www.decentral.org/u/news" } ]
        users: [ "roodles", "chewblanket" ]
    }

#### Details

`name` - The name of this page, so that it can be remembered and referenced on the server.

`ip` - The IP that this came from, could also be an email address or anything.

`chunks` - Content chunks, see below.

### Chunk

Content chunks should display whatever information is available, chunks, pages, users and all other specific terms can be applied at the display level.

#### Structure Examples

    {
        title: "Obama Signs Important Document",
        content: "http://www.nytimes.com/obama-signs-important-document",
        chunks: [],
        date: ""
    }

    {
        title: "IAMA user of Markdow, AMA!",
        content: "#It's working!",
        chunks: [],
        date: ""
    }

    {
        content: "Hey, I don't think the document was that important.",
        chunks: []
    }

## Technical Implementation

Storage and communication of content chunks can be done through any mechanism available. Servers provide read only access to content chunks, aggregate content from subscriptions (users who are on the subscription list may post content).

## Requests

To download data a request is made to the ip followed by `/u/url`, this will return the (newest/hottest/most popular/etc) content chunks. Servers may support query string parameters to download additional chunks, or submit information.

## Client

Your client runs on your IP whenever your computer is running and allows you to publish your own pages with full control, share your IP address and people can start accessing pages using any browser.