import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import './BlogPost.css';

// title: post.title,
// body: post.body,
// author: authors[post.userId - 1],
// category: 'Fitness',
// date: 'October 27, 2012',
// authorImg: 'https://randomuser.me/api/portraits/men/42.jpg',
// postImg: doctor,

function BlogPost(props) {

  const match = useRouteMatch();

  console.log(match);


  return (
    <div className="blog-post">
      <h2 className="blog-post__title">{props.title}</h2>
      <div className="blog-post__info-box">
        <img className="info-box__img" src={props.postImg} alt="random" />
        <div className="info-box__user-box">
          <div className="user-box__content-wrapper">
            <h3 className="user-box__category">{props.category}</h3>
          </div>
          <div className="user-box__content-wrapper">
            <div className="user-box__user-info">
              <img className="user-info__img" src={props.authorImg} alt="random user" />
              <p className="user-info__author">{props.author}</p>
              <p className="user-info__date">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post__body">
        <p className="blog-post__body__content">Bacon ipsum dolor amet tail rump cupim chicken. Bresaola tongue strip steak ground round capicola meatball. Strip steak salami venison corned beef. Picanha beef filet mignon prosciutto strip steak tongue, jowl turducken tri-tip cupim ball tip biltong kevin boudin. Buffalo picanha spare ribs hamburger burgdoggen t-bone fatback brisket capicola swine ribeye tenderloin short ribs venison. Shankle rump drumstick, bacon cupim pig alcatra.</p>

        <p className="blog-post__body__content">Cow jowl beef brisket salami tail tri-tip boudin andouille pancetta tenderloin. Pastrami ground round leberkas drumstick ham tri-tip. Drumstick sausage filet mignon kielbasa, ham hock brisket buffalo pork belly spare ribs turkey turducken hamburger pork loin. Alcatra turkey venison, kielbasa pork loin fatback shoulder corned beef beef frankfurter pancetta pig t-bone. Filet mignon tri-tip swine pork belly shoulder. Biltong jowl flank swine strip steak pig drumstick fatback tongue pastrami alcatra rump short ribs shank meatball.</p>

        <p className="blog-post__body__content">Tri-tip cow bacon flank ball tip alcatra salami. Sausage frankfurter ball tip, drumstick shoulder ham hock kevin biltong chicken pork loin doner ham cupim pancetta. Meatball ham pork, short ribs picanha turkey porchetta ribeye biltong. Flank brisket picanha capicola tail, buffalo hamburger jerky chislic turkey chicken burgdoggen corned beef kevin andouille</p>
      </div>
    </div>
  );
}

export default BlogPost;