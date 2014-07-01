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
        name: "worldnews",
        posts: [],
        moderators: [ "news", "politics", "science" ]
    }

### Post

#### Structure

    {
        title: "Obama Signs Important Document",
        content: "http://www.nytimes.com/obama-signs-important-document",
        comments: []
    }

