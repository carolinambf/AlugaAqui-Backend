exports.all=function(req, res){                         
    res.json([                                    // base de dados teste
        {
            titulo: 'Flash',
            resumo: 'O Flash corre muito!',
            duracao: 100,
            dataRealizacao: '2020-02-18'
        },
        {
            titulo: 'Dumbo',
            resumo: 'Orelhas grandes!',
            duracao: 98,
            dataRealizacao: '2020-06-18'
        },
    ])
};