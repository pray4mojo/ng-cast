angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<'
    },

    controller: function(youTube) {
      this.searchResults = () => {
        console.log(this.result);
        youTube.search(this.query, this.result);
      };
    },

    template: `
    <div class="search-bar form-inline">
    <input ng-model="$ctrl.query" class="form-control" type="text" />
    <button ng-click="$ctrl.searchResults()" class="btn">
      <span class="glyphicon glyphicon-search"></span>
    </button>
    </div>
  `
  });
