import * as momentObj from "moment";
let moment = momentObj['default'];


export class Dashboard {

  scope:any;
  timeout:any;
  beersResource:any;
  statuses:any;
  problems:any;
  beers:any;

  constructor($scope:ng.IScope, $timeout, Restangular) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.beersResource = Restangular.all('/beers');
    this.statuses = ['good', 'empty', 'problems'];
    this.problems = ['foamy', 'flat', 'warm', 'slow'];

    this.beers = [];
    this.getData();
  }

  getData() {
    this.beersResource.getList()
      .then((beers) => {
        console.log('result:', beers.plain());
        this.beers = beers;

        // Transform results from database
        _.forEach(this.beers, (beer) => {

          // Transform integers to booleans
          _.forEach(this.problems, (problem:string) => {
            beer[problem] = !!beer[problem];
          });

          beer.isEditMode = false;
        });

        this.updateBestBets();

        this.timeout(function () {
          console.debug("initializing foundation!");
          $(document).foundation();
        }, 0, false);

      });
  }

  updateType(beer) {
    console.debug('beer type changed!', beer.type);
    this.save(beer);
  }

  updateStatus(beer) {
    console.debug('beer status changed!', beer);

    beer.status = _.some(this.problems, (problem:string) => {
      return beer[problem];
    }) ? 'problems' : 'good';

    this.save(beer);
  }

  clearProblems(beer) {
    _.forEach(this.problems, (problem) => {
      beer[problem] = false;
    });

    this.save(beer);
  }

  toggleEditMode(beer) {
    console.debug('editing:', beer);
    beer.isEditMode = !beer.isEditMode;
  }

  saveChanges(beer) {
    this.toggleEditMode(beer);
    this.save(beer);
  }

  save(beer) {
    beer.save()
      .then((result) => {
        console.debug('beer save result', result);
        beer.modified = result.modified;
        this.updateBestBets();
      });
  }

  updateBestBets() {
    _.forEach(this.beers, (beer) => {
      beer.bestBet = beer.status === 'good' && beer.type && this.isRecent(beer.modified);
    });
    console.debug(this.beers);
  }

  getBestBets() {
    return _.filter(this.beers, 'bestBet');
  }

  dateToTimeAgo(d) {
    var dateTime = moment.utc(d).subtract(5, 'seconds');
    return dateTime.local().fromNow();
  }

  isRecent(d) {
    return (moment.utc().diff(moment.utc(d), 'minutes') < 60);
  }

  getAgeCategory(timestamp) {
    var age = moment.utc().diff(moment.utc(timestamp), 'minutes');
    if (age < 2) {
      return 'age-1';
    }
    else if (age < 5) {
      return 'age-2';
    }
    else if (age < 10) {
      return 'age-3';
    }
    else if (age < 15) {
      return 'age-4';
    }
    else if (age < 30) {
      return 'age-5';
    }
    else if (age < 45) {
      return 'age-6';
    }
    else {
      return 'age-7';
    }
  }
}
