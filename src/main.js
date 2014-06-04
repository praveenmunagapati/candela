// When all scripts are loaded, we invoke the application
$(function () {
    $('.dash-container').trackerdash({
        day: '2014-06-03',
        branch: 'master',
        trend: [{
            success: 3,
            bad: 1,
            fail: 6,
            date: '2014-05-27'
        }, {
            success: 2,
            bad: 3,
            fail: 5,
            date: '2014-05-28'
        }, {
            success: 4,
            bad: 5,
            fail: 1,
            date: '2014-05-29'
        }, {
            success: 3,
            bad: 3,
            fail: 4,
            date: '2014-05-30'
        }, {
            success: 7,
            bad: 2,
            fail: 1,
            date: '2014-05-31'
        }, {
            success: 6,
            bad: 4,
            fail: 0,
            date: '2014-06-01'
        }, {
            success: 10,
            bad: 0,
            fail: 0,
            date: '2014-06-02'
        }, {
            success: 8,
            bad: 1,
            fail: 1,
            date: '2014-06-03'
        }],
        totalDatasets: 15,
        totalDistance: 1243,
        distanceRun: 988,
        numSuccess: 8,
        numBad: 1,
        numFail: 1,
        percentErrorByDataset: [{
            dataset: 'dataset0',
            metric: 'alga',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset0',
            metric: 'sparse',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset0',
            metric: 'ba',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset1',
            metric: 'alga',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset1',
            metric: 'sparse',
            length: 300,
            mean: 15,
            current: 14,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset1',
            metric: 'ba',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset2',
            metric: 'alga',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset2',
            metric: 'sparse',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset2',
            metric: 'ba',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset3',
            metric: 'alga',
            length: 300,
            mean: 11,
            current: 28,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset3',
            metric: 'sparse',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }, {
            dataset: 'dataset3',
            metric: 'ba',
            length: 300,
            mean: 11,
            current: 5,
            target: 7,
            warning: 10,
            fail: 25
        }]
    });
});
