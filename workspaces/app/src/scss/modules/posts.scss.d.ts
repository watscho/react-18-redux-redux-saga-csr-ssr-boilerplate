declare namespace PostsScssNamespace {
  export interface IPostsScss {
    actions: string;
    createPost: string;
    desc: string;
    error: string;
    formContainer: string;
    list: string;
    loading: string;
    noRecord: string;
    postView: string;
    posts: string;
    title: string;
    top: string;
  }
}

declare const PostsScssModule: PostsScssNamespace.IPostsScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PostsScssNamespace.IPostsScss;
};

export = PostsScssModule;
