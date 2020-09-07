export interface IPhotos {
    small: string | null;
    large: string | null;
}

export interface IUser {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: IPhotos;
    status: string;
    followed: boolean;
}

export interface IInitial {
    initialisation: boolean;
}

export interface IUsersPage {
    users: IUser[];
    totalNumberOfUsers: number | null;
    currentPage: number;
    numberUsersOnPage: number;
    loadedUsers: boolean;
}

export interface IContacts {
    facebook: null | string;
    website: null | string;
    vk: null | string;
    twitter: null | string;
    instagram: null | string;
    youtube: null | string;
    github: null | string;
    mainLink: null | string;
}

export interface IProfile {
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    userId: number;
    photos: IPhotos;
    contacts: IContacts;
}

export interface IProfilePage {
    status: string | null;
    loadProfile: boolean;
    friendBtnState: boolean;
    friendStatus: boolean;
    postsUpdate: boolean;
    profile: IProfile;
    posts: string[];
}

export interface IAuth {
    id: number;
    email: string;
    login: string;
    loadLogin: boolean | null
    myPhoto: null | string;
    captchaUrl: null | string;
}

export interface IMessage {
    id: string;
    body: string;
    translatedBody: string | null
    addedAt: string;
    senderId: number;
    senderName: string;
    recipientId: number;
    viewed: boolean;
}

export interface IDialogsPage {
    friends: IUser[];
    allMessages: IMessage[];
    totalCount: number;
    page: number;
    friendLoaded: boolean;
    sendMessageStatus: boolean;
}

export interface ISettings {
    aboutMe: null | string;
    photos: null | IPhotos;
    submitFinished: null | boolean;
    uploadPhotos: null | string;
}

export interface INew {
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text: string;
    comment_text: null
    num_comments: number;
    story_id: null
    story_title: null
    story_url: null
    parent_id: null
    created_at_i: number;
    relevancy_score: number;
    objectID: string;
    _tag: any;
    _hichlightResult: any;
}

export interface INewsPage {
    currentPage: number;
    hitsPerPage: number;
    totalCountUsers: number;
    news: INew[];
}

export interface IState {
    initial: IInitial;
    usersPage: IUsersPage;
    profilePage: IProfilePage;
    auth: IAuth;
    dialogsPage: IDialogsPage;
    settings: ISettings;
    newsPage: INewsPage;
}
