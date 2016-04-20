import * as _ from 'lodash';
import 'foundation-apps/dist/js/foundation-apps';


export class Dashboard {

  scope:any;
  beersResource:any;
  statuses:any;
  beers:any;

  constructor($scope:ng.IScope, Restangular) {
    this.scope = $scope;
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
        });
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

   static toggleEditMode(beer) {
    beer.isEditMode = !beer.isEditMode;
  }

  saveChanges(beer) {
    Dashboard.toggleEditMode(beer);
    this.save(beer);
  }

  save(beer) {
    beer.save()
      .then((result) => {
        console.debug('beer save result', result);
      });
  }
}
