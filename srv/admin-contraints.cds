using { AdminService } from './admin-service';
annotate AdminService.Books with {
    title @mandatory;

    author @assert : (case
        when not exists author then 'Specified Author does not exist'
    end);

    genre @assert: (case
        when not exists genre then 'SPecified Genre does not exist'
    end);

    price @assert.range : [1,111]; // 1...111 inclusive
    stock @asser.range: [(0), _]; //positive nurmbers only
};