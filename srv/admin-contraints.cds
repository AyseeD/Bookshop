using { AdminService } from './admin-service';

//cosntraints fpr validation of book inputs
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

//contraints for authors
annotate AdminService.Authors with {
    name @mandatory;

    dateOfBirth @assert: (case
        when dateOfBirth > dateOfDeath then 'Date of birth cannot be after date of death'
    end);

    dateOfDeath @assert: (case
        when dateOfDeath < dateOfBirth then 'Date of death cannot be before date of birth'
    end);
};

//contraints for Genres
annotate AdminService.Genres with {
    name @mandatory;

    parent @assert: (case
        when parent == ID then 'A genre cannot be its own parent'
    end);
};

// annotate AdminService with @requires:'admin';