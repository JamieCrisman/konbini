import React, {Component} from "react";
//import {Link} from "react-router";
import { connect } from "react-redux";
import _ from "lodash";

import {
  loadResources
} from "../../actions";

import {ResourceList} from "../../components";

export class InfoArea extends Component {
  handleFilterChange(args) {
    //refactor this plz
    var results = Object.assign(
      {},
      this.props.filters,
    );
    results = _.merge(results,args);
    const section = _.keys(args)[0];
    const option = _.keys(args[section])[0];
    if(option == "any" && section == "type" && args.type.any){ //yeah that's gross I know
      results = _.merge(results, {type:{
        any: true,
        website: false,
        book: false,
        video: false
      }});
    } else if(option == "any" && section == "level" && args.level.any){ //yeah that's gross I know
      results = _.merge(results, {level:{
        any: true,
        beginner: false,
        intermediate: false,
        advanced: false
      }});
    } else if(option == "any" && section == "topics" && args.topics.any){ //yeah that's gross I know
      results = _.merge(results, {topics:{
        any: true,
        jlpt: false,
        grammar: false,
        vocabulary: false,
        kanji: false,
        kana: false,
        practice: false
      }});
    }else {
      if(results.topics.any && section == "topics") {
        results.topics.any = false;
      } else if (results.level.any && section == "level") {
        results.level.any = false;
      } else if (results.type.any && section == "type") {
        results.type.any = false;
      }
    }
    if(section != "other") {
      let setAny = false;
      for (let key of _.keys(results[section])) {
        if(results[section][key]) {
          setAny = true;
          break;
        }
      }
      if(!setAny) {
        results[section].any = true;
      }
    }
    this.props.loadResources({filters:results});
  }
  render() {
    const {filters} = this.props;
    //refactor please
    return (
      <div className="card cyan lighten-4">
        <div className="card-content">
          <span className="card-title">
            Filter
          </span>
          <div className="row">
            <form>
              <div className="section col s6 m3">
                <h6>
                  Type
                </h6>
                <p>
                  <input type="checkbox" 
                    id="type-any" 
                    checked={filters.type.any} 
                    onChange={this.handleFilterChange.bind(this, {type: {any:!filters.type.any}} )}/>
                  <label htmlFor="type-any" className="black-text">Any</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.type.website} 
                    id="type-website" 
                    onChange={this.handleFilterChange.bind(this, {type: {website:!filters.type.website}} )}/>
                  <label htmlFor="type-website" className="black-text">Website</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.type.book} 
                    id="type-book" 
                    onChange={this.handleFilterChange.bind(this, {type: {book:!filters.type.book}} )}/>
                  <label htmlFor="type-book" className="black-text">Book</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.type.video} 
                    id="type-video" 
                    onChange={this.handleFilterChange.bind(this, {type: {video:!filters.type.video}} )}/>
                  <label htmlFor="type-video" className="black-text">Video</label>
                </p>
              </div>
              <div className="section col s6 m3">
                <h6>
                  Topics
                </h6>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.any} 
                    id="topic-any" 
                    onChange={this.handleFilterChange.bind(this, {topics: {any:!filters.topics.any}} )}/>
                  <label htmlFor="topic-any" className="black-text">Any</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.jlpt} 
                    id="topic-jlpt" 
                    onChange={this.handleFilterChange.bind(this, {topics: {jlpt:!filters.topics.jlpt}} )}/>
                  <label htmlFor="topic-jlpt" className="black-text">JLPT</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.grammar} 
                    id="topic-grammar" 
                    onChange={this.handleFilterChange.bind(this, {topics: {grammar:!filters.topics.grammar}} )}/>
                  <label htmlFor="topic-grammar" className="black-text">Grammar</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.vocabulary} 
                    id="topic-vocabulary" 
                    onChange={this.handleFilterChange.bind(this, {topics: {vocabulary:!filters.topics.vocabulary}} )}/>
                  <label htmlFor="topic-vocabulary" className="black-text">Vocabulary</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.kanji} 
                    id="topic-kanji" 
                    onChange={this.handleFilterChange.bind(this, {topics: {kanji:!filters.topics.kanji}} )}/>
                  <label htmlFor="topic-kanji" className="black-text">Kanji</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.kana} 
                    id="topic-kana" 
                    onChange={this.handleFilterChange.bind(this, {topics: {kana:!filters.topics.kana}} )}/>
                  <label htmlFor="topic-kana" className="black-text">Kana</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.topics.practice} 
                    id="topic-practice" 
                    onChange={this.handleFilterChange.bind(this, {topics: {practice:!filters.topics.practice}} )}/>
                  <label htmlFor="topic-practice" className="black-text">Practice</label>
                </p>
              </div>
              <div className="section col s6 m3">
                <h6>
                  Level
                </h6>
                <p>
                  <input type="checkbox" 
                    checked={filters.level.any} 
                    id="level-any" 
                    onChange={this.handleFilterChange.bind(this, {level: {any:!filters.level.any}} )}/>
                  <label htmlFor="level-any" className="black-text">Any</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.level.beginner} 
                    id="level-beginner" 
                    onChange={this.handleFilterChange.bind(this, {level: {beginner:!filters.level.beginner}} )}/>
                  <label htmlFor="level-beginner" className="black-text">Beginner</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.level.intermediate} 
                    id="level-intermediate" 
                    onChange={this.handleFilterChange.bind(this, {level: {intermediate:!filters.level.intermediate}} )}/>
                  <label htmlFor="level-intermediate" className="black-text">Intermediate</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.level.advanced} 
                    id="level-advanced" 
                    onChange={this.handleFilterChange.bind(this, {level: {advanced:!filters.level.advanced}} )}/>
                  <label htmlFor="level-advanced" className="black-text">Advanced</label>
                </p>
              </div>
              <div className="section col s6 m3">
                <h6>
                  Other Options
                </h6>
                <p>
                  <input type="checkbox" 
                    checked={filters.other.free} 
                    id="other-free"
                    onChange={this.handleFilterChange.bind(this, {other: {free:!filters.other.free}} )}/>
                  <label htmlFor="other-free" className="black-text">Free</label>
                </p>
                <p>
                  <input type="checkbox" 
                    checked={filters.other.reviews} 
                    id="other-review"
                    onChange={this.handleFilterChange.bind(this, {other: {reviews:!filters.other.reviews}} )}/>
                  <label htmlFor="other-review" className="black-text">Has Reviews</label>
                </p>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default class Dashboard extends Component {
  componentWillMount() {
    this.props.loadResources({
      filters: {
        type: {
          any: true,
          website: false,
          book: false,
          video: false
        },
        topics: {
          any: true,
          jlpt: false,
          grammar: false,
          vocabulary: false,
          kanji: false,
          kana: false,
          practice: false
        },
        level: {
          any: true,
          beginner: false,
          intermediate: false,
          advanced: false
        },
        other: {
          free: false,
          reviews: false
        }
      }
    });
  }
  render() {
    const {resources, loadResources, filters} = this.props;
    if (this.props.loading || !filters) {
      return (
        <div className="container">
        <div className="row">
          <div className="col s12">
            Loading~
          </div>
        </div>
      </div>
      );
    }
    let restrictions = {};
    if(filters.other.free) {
      restrictions.cost = {hasCost: false};
    }
    if(filters.other.reviews) {
      restrictions.reviews = [{}];
    }

    let filteredResources = _.filter(resources, _.matches(restrictions));
    let typefilter = [];
    _.forEach(filters.type, function(n, key) {
      if((n || filters.type.any) && key != "any") {
        typefilter.push(key);
      }
    });
    let levelfilter = [];
    _.forEach(filters.level, function(n, key) {
      if((n || filters.level.any) && key != "any") {
        levelfilter.push(key);
      }
    });
    let topicsfilter = [];
    _.forEach(filters.topics, function(n, key) {
      if((n || filters.topics.any) && key != "any") {
        topicsfilter.push(key);
      }
    });
    filteredResources = _.filter(filteredResources, (item) => {
      return _.contains(typefilter, item.type);
    });
    filteredResources = _.filter(filteredResources, (item) => {
      let contains = false;
      _.forEach(item.level, function(level) {
        if(_.contains(levelfilter, level)) {
          contains = true;
          return;
        }
      });
      return contains;
    });
    filteredResources = _.filter(filteredResources, (item) => {
      let contains = false;
      _.forEach(item.topics, function(topic) {
        if(_.contains(topicsfilter, topic)) {
          contains = true;
          return;
        }
      });
      return contains;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <InfoArea filters={filters} loadResources={loadResources}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <ResourceList resources={filteredResources}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {resources} = state;
  if (resources.loading) {
    return {
      loading: resources.loading
    };
  }
  return {
    loading: resources.loading,
    resources: resources.resources,
    filters: resources.filters
  };
}

export default connect(mapStateToProps, {
  loadResources
})(Dashboard);