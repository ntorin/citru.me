/**
 * Account
 * 
 * 
 */
export const ACCOUNT_ACTIONS = {
    
}

/**
 * Conversation
 * 
 * @prop {object[]} conversations
 * @prop {number[]} conversationIds
 * @prop {number} selectedConversationId
 * @prop {number} hoveredConversationId
 * @prop {number} focusedConversationId
 * @prop {object[][]} conversationMessages first array conversation ID, second array conversation messages
 * @prop {number[]} newConversationMessageCounts
 * @prop {object[]} openedConversations
 * @prop {string} cmcMessage
 */
export const CONVERSATION_ACTIONS = {

    //network requests
    LOAD_CONVERSATIONS_REQUEST: 'LOAD_CONVERSATIONS_REQUEST',
    LOAD_CONVERSATIONS_SUCCESS: 'LOAD_CONVERSATIONS_SUCCESS',
    LOAD_CONVERSATIONS_FAILURE: 'LOAD_CONVERSATIONS_FAILURE',

    //websocket actions
    CONVERSATION_MESSAGE_CREATED: 'CONVERSATION_MESSAGE_CREATED',

    SELECT_CONVERSATION: 'SELECT_CONVERSATION',
    HOVER_CONVERSATION: 'HOVER_CONVERSATION',
    UNHOVER_CONVERSATION: 'UNHOVER_CONVERSATION',
    OPEN_CONVERSATION: 'OPEN_CONVERSATION',
    CLOSE_CONVERSATION: 'CLOSE_CONVERSATION',
    FOCUS_CONVERSATION: 'FOCUS_CONVERSATION',
    EXPAND_CONVERSATION_TAB: 'EXPAND_CONVERSATION_TAB',
    COLLAPSE_CONVERSATION_TAB: 'COLLAPSE_CONVERSATION_TAB',
    
    HOVER_CONVERSATION_TAB: 'HOVER_CONVERSATION_TAB',
    UNHOVER_CONVERSATION_TAB: 'UNHOVER_CONVERSATION_TAB',
}

/**
 * Feed
 * 
 * @prop {object[]} feeds
 * @prop {number[]} feedIds
 * @prop {number} selectedFeedId
 * @prop {number} hoveredFeedId
 * @prop {object[]} newFeeds
 * 
 */
export const FEED_ACTIONS = {

    //network requests
    LOAD_FEEDS_REQUEST: 'LOAD_FEEDS_REQUEST',
    LOAD_FEEDS_SUCCESS: 'LOAD_FEEDS_SUCCESS',
    LOAD_FEEDS_FAILURE: 'LOAD_FEEDS_FAILURE',

    //websocket actions
    FEED_CREATED: 'FEED_CREATED',

    HOVER_FEED: 'HOVER_FEED',
    UNHOVER_FEED: 'UNHOVER_FEED',
    SELECT_FEED: 'SELECT_FEED'
};

/**
 * Grapevine
 * 
 * @prop {object[]} grapevines
 * @prop {number[]} grapevineIds
 * @prop {number} focusedGrapevineId
 * @prop {object[][]} grapevineMessages first array grapevine ID, second array messages
 * @prop {number[][]} grapevineMessageIds first array grapevine ID, second array message IDs
 * @prop {number[]} newGrapevineMessageCounts
 * @prop {object[]} openedGrapevines
 * @prop {string} gmcMessage
 * @prop {boolean} gmcIsAnonymous
 * @prop {string} gmcName
 */
export const GRAPEVINE_ACTIONS = {
    //network requests
    CREATE_GRAPEVINE_REQUEST: 'CREATE_GRAPEVINE_REQUEST',
    CREATE_GRAPEVINE_SUCCESS: 'CREATE_GRAPEVINE_SUCCESS',
    CREATE_GRAPEVINE_FAILURE: 'CREATE_GRAPEVINE_FAILURE',

    OPEN_GRAPEVINE: 'OPEN_GRAPEVINE',
    CLOSE_GRAPEVINE: 'CLOSE_GRAPEVINE',
    FOCUS_GRAPEVINE: 'FOCUS_GRAPEVINE'
}

/**
 * Group
 * 
 * @prop {object[]} groups
 * @prop {number[]} groupIds
 * @prop {number} selectedGroupId
 * @prop {number} hoveredGroupId
 * @prop {object[]} newGroups
 * @prop {object[]} openedGroups
 * @prop {string} gcName
 * @prop {string} gcIdentifier
 * @prop {string} gcTags
 * @prop {string} gcDescription
 * @prop {boolean} gcIsAnonymous
 * @prop {number} focusedGroupId
 * @prop {number} previewedGroupId
 * 
 */
export const GROUP_ACTIONS = {

    //network requests
    LOAD_GROUPS_REQUEST: '',
    LOAD_GROUPS_SUCCESS: '',
    LOAD_GROUPS_FAILURE: '',
    CREATE_GROUP_REQUEST: '',
    CREATE_GROUP_SUCCESS: '',
    CREATE_GROUP_FAILURE: '',
    UPDATE_GROUP_REQUEST: '',
    UPDATE_GROUP_SUCCESS: '',
    UPDATE_GROUP_FAILURE: '',
    DELETE_GROUP_REQUEST: '',
    DELETE_GROUP_SUCCESS: '',
    DELETE_GROUP_FAILURE: '',
    CHECK_GROUP_IDENTIFIER_REQUEST: '',
    CHECK_GROUP_IDENTIFIER_SUCCESS: '',
    CHECK_GROUP_IDENTIFIER_FAILURE: '',

    //websocket actions
    GROUP_CREATED: '',
    GROUP_UPDATED: '',
    GROUP_DELETED: '',

    SELECT_GROUP: '',
    HOVER_GROUP: '',
    UNHOVER_GROUP: '',
    CLOSE_GROUP: '',
    OPEN_GROUP: '',
    PREVIEW_GROUP: '',
    FOCUS_GROUP: '',
}

/**
 * Notification
 * 
 * 
 */
export const NOTIFICATION_ACTIONS = {
    
}

/**
 * Post
 * 
 * @prop {object[][]} posts first array topic ID, second array posts
 * @prop {number[][]} postIds first array topic ID, second array post IDs
 * @prop {number} hoveredPostId
 * @prop {number[]} quotedPosts
 * @prop {object[][]} newPosts first array topic ID, second array posts
 * @prop {string} pcContent
 * @prop {boolean} pcIsAnonymous
 * 
 */
export const POST_ACTIONS = {

    //network requests
    LOAD_POSTS_REQUEST: '',
    LOAD_POSTS_SUCCESS: '',
    LOAD_POSTS_FAILURE: '',
    CREATE_POST_REQUEST: '',
    CREATE_POST_SUCCESS: '',
    CREATE_POST_FAILURE: '',
    UPDATE_POST_REQUEST: '',
    UPDATE_POST_SUCCESS: '',
    UPDATE_POST_FAILURE: '',
    DELETE_POST_REQUEST: '',
    DELETE_POST_SUCCESS: '',
    DELETE_POST_FAILURE: '',

    //websocket actions
    POST_CREATED: '',
    POST_UPDATED: '',
    POST_DELETED: '',

    HOVER_POST: '',
    UNHOVER_POST: '',
    QUOTE_POST: ''
}

/**
 * Topic
 * 
 * @prop {object[][]} topics first array group ID, second array topics
 * @prop {number[][]} topicIds first array group ID, second array topic IDs
 * @prop {number} selectedTopicId
 * @prop {number} hoveredTopicId
 * @prop {object[][]} newTopics
 * @prop {string} tcTitle
 * @prop {string} tcTags
 * @prop {boolean} tcIsAnonymous
 * @prop {object[][]} openedTopics first array group ID, second array topic counts
 * @prop {number} previewedTopicId
 * @prop {number} focusedTopicId
 * 
 */
export const TOPIC_ACTIONS = {

    //network requests
    LOAD_TOPICS_REQUEST: 'LOAD_TOPICS_REQUEST',
    LOAD_TOPICS_SUCCESS: 'LOAD_TOPICS_SUCCESS',
    LOAD_TOPICS_FAILURE: 'LOAD_TOPICS_FAILURE',
    CREATE_TOPIC_REQUEST: 'CREATE_TOPIC_REQUEST',
    CREATE_TOPIC_SUCCESS: 'CREATE_TOPIC_SUCCESS',
    CREATE_TOPIC_FAILURE: 'CREATE_TOPIC_FAILURE',
    DELETE_TOPIC_REQUEST: 'DELETE_TOPIC_REQUEST',
    DELETE_TOPIC_SUCCESS: 'DELETE_TOPIC_SUCCESS',
    DELETE_TOPIC_FAILURE: 'DELETE_TOPIC_FAILURE',
    UPDATE_TOPIC_REQUEST: 'UPDATE_TOPIC_REQUEST',
    UPDATE_TOPIC_SUCCESS: 'UPDATE_TOPIC_SUCCESS',
    UPDATE_TOPIC_FAILURE: 'UPDATE_TOPIC_FAILURE',

    //websocket actions
    TOPIC_CREATED: 'TOPIC_CREATED',
    TOPIC_UPDATED: 'TOPIC_UPDATED',
    TOPIC_DELETED: 'TOPIC_DELETED',

    SELECT_TOPIC: 'SELECT_TOPIC',
    HOVER_TOPIC: 'HOVER_TOPIC',
    UNHOVER_TOPIC: 'UNHOVER_TOPIC',
    CLOSE_TOPIC: 'CLOSE_TOPIC',
    OPEN_TOPIC: 'OPEN_TOPIC',
    PREVIEW_TOPIC: 'PREVIEW_TOPIC',
    FOCUS_TOPIC: 'FOCUS_TOPIC'
};

/**
 * User
 * 
 * 
 */
export const USER_ACTIONS = {
    
}