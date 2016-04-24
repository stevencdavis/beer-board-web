import * as momentObj from "moment";
let moment = momentObj['default'];


export class Dashboard {

  scope:any;
  timeout:any;
  beersResource:any;
  statuses:any;
  beers:any;

  constructor($scope:ng.IScope, $timeout, Restangular) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.beersResource = Restangular.all('/beers');
    this.statuses = ['empty', 'foamy', 'flat', 'warm', 'slow'];

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
          _.forEach(this.statuses, (status:string) => {
            beer[status] = !!beer[status];
          });

          // Set the "good" status of the beer
          beer.good = !_.some(this.statuses, (status:string) => {
            return beer[status];
          });

          beer.isEditMode = false;
        });

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
    beer.good = !_.some(this.statuses, (status:string) => {
      return beer[status];
    });
    this.save(beer);
  }

  clearProblems(beer) {
    console.debug('clearing beer statuses!', beer);
    if (beer.good) {
      _.forEach(this.statuses, (status) => {
        beer[status] = false;
      });
    }
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
      });
  }

  dateToTimeAgo(d) {
    return moment(d).fromNow();
  }
}
