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
        ip: "192.168.0.1", //IP address of authentication server,\
        posts: [],
        moderators: [ "gummybear5" ], //contact information for moderators
        subscriptions: [ { name: "news", ip: "192.168.0.1:80" } ], //posts from these users are automatically added.
        users: [ "roodles", "chewblanket" ], //These users may post. Authentication is determined separately by the server.
    }

### Post

#### Structure

    {
        title: "Obama Signs Important Document",
        uuid: "ab5640",
        content: "http://www.nytimes.com/obama-signs-important-document",
        comments: [],
        date: ""
    }

### Comment

#### Structure

## Technical Implementation

Storage and communication of content chunks can be done through any mechanism available. Servers provide read only access to content chunks, aggregate content from subscriptions (users who are on the subscription list may post content).

## Requests

To download data a request is made to the ip followed by `/u/url`, this will return the last 10 content chunks. Servers may support query string parameters to download additional chunks, or submit information.