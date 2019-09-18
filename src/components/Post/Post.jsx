import React from "react";
import "./Post.css";

// Create an Inline list shared component
// const Categories = props => {
//   const items = props.in.map((e, i) => <li key={i}>{e}</li>);
//   const classes = "InlineList " + props.className;
//   return <ul className={classes}>{items}</ul>;
// };
// const Tags = props => {
//   const items = props.in.map((e, i) => <li key={i}>{e}</li>);
//   const classes = "InlineList " + props.className;

//   return <ul className={classes}>{items}</ul>;
// };

const Post = props => {
  // console.log("=D", props);

  const post = props.in;
  // const categories = props.categories;
  // const tags = props.tags;

  // TODO: move to an external lib
  // const translatedCategories = post.categories.map(postCatId => {
  //   if (categories) {
  //     const found = categories.find(catId => {
  //       if (postCatId === catId.id) {
  //         return catId.name;
  //       } else {
  //         return null;
  //       }
  //     });
  //     return found.name;
  //   } else {
  //     return null;
  //   }
  // });

  // TODO: move to an external lib
  // const translatedTags = post.tags.map(postTagId => {
  //   if (tags) {
  //     const found = tags.find(tagId => {
  //       if (postTagId === tagId.id) {
  //         return tagId.name;
  //       } else {
  //         return null;
  //       }
  //     });
  //     return found.name;
  //   } else {
  //     return null;
  //   }
  // });

  // if (translatedTags) console.info(translatedTags);

  if (!post) {
    return <h1>Post not loaded</h1>;
  } else {
    // console.info(post);
    return (
      <article className="Post" key={post.id}>
        <h2 className="PostTitleContainer">
          <a href={post.link} className="LinkWrapper">
            {post.title.rendered}
          </a>
          <span className="PostID">ID:{post.id}</span>
        </h2>
        <aside className="PostFooter">
          {/* <div className="CatsAndTags"> */}
          {/* <span className="firstRow">Published on {post.date}</span> */}
          {/* <Categories in={translatedCategories} className="secondRow" />
            <Tags in={translatedTags} className="thirdRow" /> */}
          {/* </div> */}
          <div className="ButtonContainer">
            {/* TODO: Service Worker and Local Storage */}
            <button id="save">Save offline</button>
            {/* TODO: post.excerpt.rendered */}
            <button id="expand">Expand</button>
            {/* TODO: Local state and Class manipulation */}
            <button id="hide">Hide</button>
          </div>
        </aside>
      </article>
    );
  }
};

export default Post;