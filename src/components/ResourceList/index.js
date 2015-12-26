import React, {Component} from "react";
import classNames from "classnames";
import _ from "lodash";
//import mui from "material-ui";
import BookIcon from "react-material-icons/icons/action/book";
import WebsiteIcon from "react-material-icons/icons/av/web";
import MovieIcon from "react-material-icons/icons/av/movie";
import MoneyIcon from "react-material-icons/icons/editor/attach-money";

import {
  customColors
} from "../../utils/dummyData";

export class ResourceListItem extends Component {
  componentDidUpdate(){
    //disable linter because we're pulling jquery in a laksjdflwe way
    /*eslint-disable */
    $(".tooltipped").tooltip("remove"); 
    $(".tooltipped").tooltip({delay: 50}); 
    /*eslint-enable */
  }
  renderIcon(type, isTitle) {
    //refactor this
    if(type == "book") {
      return (
        <BookIcon 
          data-tooltip="Book" 
          data-position="top" 
          data-delay="20" 
          className={classNames({"title-icon": isTitle, "tooltipped": true})}/>
      );
    } else if(type == "website"){
      return (
        <WebsiteIcon
          data-tooltip="Website" 
          data-position="top" 
          data-delay="20" 
          className={classNames({"title-icon": isTitle, "tooltipped": true})}/>
      );
    } else if(type == "video"){
      return (
        <MovieIcon 
          data-tooltip="Video" 
          data-position="top" 
          data-delay="20" 
          className={classNames({"title-icon": isTitle, "tooltipped": true})}/>
      );
    } else {
      return;
    }
  }

  renderPriceIcon(cost, isTitle) {
    if(!cost.hasCost) {
      return;
    }
    let costString = "$" + cost.min  + 
                     ((cost.min != cost.max)? " - " + "$" + cost.max : "") + 
                     ((cost.is_subscription)? " Subscription Based" : "");
    return (
      <MoneyIcon 
        data-tooltip={costString} 
        data-position="top" 
        data-delay="20" 
        className={classNames({"title-icon": isTitle, "tooltipped": true, "money-icon": true})}/>
    );
  }

  renderReviews(list) {
    return list.map((item) => {
      return (
        <a href={item.url} key={item.id} className="blue-text review-link">
          {item.website_title}
        </a>
      );
    });
  }

  renderChips(list, chipColor) {
    return list.map((item, index) => {
      const color = _.get(customColors, [item], chipColor);
      return (
        <span key={index} className={classNames(["chip", "chip-tags", color])}>
          {item.toUpperCase()}
        </span>
      );
    });
  }

  renderLinks(list) {
    return list.map((item) => {
      return (
        <a href={item.url} key={item.id} target="_blank" className="waves-effect blue-text">
          {item.website_title}
        </a>
      );
    });
  }
  renderReviewsContainer(reviews) {
    if(reviews.length > 0) {
      return (
        <p>
          {reviews.length == 1 ? "Review": "Reviews"}: {reviews.length > 0 ? this.renderReviews(reviews) : "None"}
        </p>
      );
    }else{
      return;
    }
  }
  render() {
    const { name, description, level, topics, url, type, cost, reviews} = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title" testRef="resourceTitle">{name} {this.renderIcon(type, true)} {this.renderPriceIcon(cost, true)}</span>
          <p>{description}</p>
          {this.renderReviewsContainer(reviews)}
          <div>
            {this.renderChips(level, "light-blue lighten-2")}{this.renderChips(topics, "blue accent-1")}
          </div>
        </div>
        <div className="card-action">
          {this.renderLinks(url)}
        </div>
      </div>
    );
  }
}

export default class ResourceList extends Component {
  renderList() {
    const {resources} = this.props;
    if (!resources || resources.length < 1) {
      return (
        <div testRef="errorMessage" className="card red lighten-4">
          <div className="card-content">
            <span className="card-title">
              No Resources Found :C
            </span>
          </div>
        </div>
      );
    }
    return resources.map((item) => {
      return (
        <ResourceListItem
          key={item.id}
          {...item} />
      );
    });
  }

  render() {
    return (
      <div testRefCollection="storyListContainer">
        {this.renderList()}
      </div>
    );
  }
}
