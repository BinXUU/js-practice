(function () {
    var position = 'absolute';
    // 记录之前创建的蛇
    var elements = [];


    function Snake(options) {
        options = options || {};
        // 蛇节 的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        // 蛇移动的方向
        this.direction = options.direction || 'right';
        //蛇的身体，第一个位置为蛇的头部
        this.body=[
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
        }

    Snake.prototype.render = function (map) {


    };

    Snake.prototype.move = function (map) {


    };


    Snake.prototype.remove = function (map) {


    };


    windows.Snake=Snake;
    }();