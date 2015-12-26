import React, {Component} from "react";
//import {Link} from "react-router";
import { connect } from "react-redux";
import _ from "lodash";

import {
  loadResources
} from "../../actions";

import {
  defaultFilters
} from "../../utils/dummyData";

import {ResourceList, FilterMenu} from "../../components";

export default class Dashboard extends Component {
  componentWillMount() {
    this.props.loadResources({
      filters: defaultFilters
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
    filteredResources = _.sortBy(filteredResources, function (i) { return i.name.toLowerCase(); });

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <FilterMenu filters={filters} loadResources={loadResources}/>
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