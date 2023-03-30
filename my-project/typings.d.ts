
export interface Tweet extends TweetBody {
    _id : string 
    _createdAt : string
    _updatedAt : string
    _rev :string 
    _type :'tweet'
    blockTweet : boolean
    
}

export type TweetBody  ={
    Text  :string,
    UserName :string,
    profileImg :string, 
    image?: string
}

export type CommentBody ={
    comment : string 
    tweetId : string
    username : string
    profileimg :string, 
}

export interface Comment extends CommentBody {
    _id : string 
    _createdAt : string
    _updatedAt : string
    type : 'comment'
    tweet:{
        _ref : string
        _type : reference
    }
}