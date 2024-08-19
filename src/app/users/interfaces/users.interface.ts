export interface Pagination {
    current_page:   number;
    data:           Users[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface Users {
    id:                number;
    name:              string;
    last_name:         string;
    rfc:               null;
    business_name:     null;
    email:             string;
    email_verified_at: null;
    role:              string;
    role_id:           number | null;
    created_at:        Date;
    updated_at:        Date;
    deleted_at:        Date | null;
    visibility:        number;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
