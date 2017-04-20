function ExibirDados(moeda, $scope, cotacao1, cotacao2, cotacao3, cotacao4, cotacao5, cotacao6, cotacao7) {
    $('#container').highcharts({
        chart: {
        },
        xAxis: {
            categories: [$scope.dia7, $scope.dia6, $scope.dia5, $scope.dia4,
            $scope.dia3, $scope.dia2, $scope.dia1]
        },
        title: {
            text: 'Gráfico Dólar x ' + moeda
        },
        series: [{
            data: [cotacao7, cotacao6, cotacao5, cotacao4, cotacao3, cotacao2, cotacao1]
        }]
    });
};

function carregarURL(moeda, data) {
    return "http://www.apilayer.net/api/historical" +
        "?access_key=cdfae7f35cd10590298132f3e57fac51" +
        "&date=" + data +
        "&currencies=" + moeda;
};

function carregarCotacao($scope, $http, dateFilter) {

    $scope.dia1 = dateFilter(new Date(), 'yyyy-MM-dd');
    $scope.dia2 = dateFilter($scope.dia1, 'yyyy-MM-dd', '-2400');
    $scope.dia3 = dateFilter($scope.dia2, 'yyyy-MM-dd', '-2400');
    $scope.dia4 = dateFilter($scope.dia3, 'yyyy-MM-dd', '-2400');
    $scope.dia5 = dateFilter($scope.dia4, 'yyyy-MM-dd', '-2400');
    $scope.dia6 = dateFilter($scope.dia5, 'yyyy-MM-dd', '-2400');
    $scope.dia7 = dateFilter($scope.dia6, 'yyyy-MM-dd', '-2400');

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia1))
        .then(function (cotacao) {
            $scope.BRL_cotacao1 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao1 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao1 = cotacao.data.quotes.USDARS;
        });

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia2))
        .then(function (cotacao) {
            $scope.BRL_cotacao2 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao2 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao2 = cotacao.data.quotes.USDARS;
        });

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia3))
        .then(function (cotacao) {
            $scope.BRL_cotacao3 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao3 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao3 = cotacao.data.quotes.USDARS;
        });

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia4))
        .then(function (cotacao) {
            $scope.BRL_cotacao4 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao4 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao4 = cotacao.data.quotes.USDARS;
        });

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia5))
        .then(function (cotacao) {
            $scope.BRL_cotacao5 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao5 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao5 = cotacao.data.quotes.USDARS;
        });

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia6))
        .then(function (cotacao) {
            $scope.BRL_cotacao6 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao6 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao6 = cotacao.data.quotes.USDARS;
        });

    $http.get(carregarURL("BRL,EUR,ARS", $scope.dia7))
        .then(function (cotacao) {
            $scope.BRL_cotacao7 = cotacao.data.quotes.USDBRL;
            $scope.EUR_cotacao7 = cotacao.data.quotes.USDEUR;
            $scope.ARS_cotacao7 = cotacao.data.quotes.USDARS;
        });

};