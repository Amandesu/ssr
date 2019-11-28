
export const CINEMA_SET_LIST = 'cinema_set_list';
export const CINEMA_INIT_LIST = 'cinema_init_list';
export const CHANGE_CINEMA = 'change_cinema';
export const GET_SCHEDULES = 'get_schedules';
export const GET_SET_FILMS = 'get_set_films';
export const SET_FILM_DATES = 'set_film_dates';
export const SET_NUM = 'set_num';
export const SET_FILM_ID = 'set_film_id';
export const SET_FILM_CONTENT = 'set_film_content';

const defaultState = {
    cinema: [],
    cinemas: [],
    allCinemas: [],
    schedules: [],
    films: [],
    filmDates: [],
    num: 0,
    filmContent: {}
};

export default (state = defaultState,action) => {
    switch(action.type) {
        case CINEMA_SET_LIST:
            return {
                ...state,
                cinemas: action.cinemas
            };
        case CINEMA_INIT_LIST:
            return {
                ...state,
                cinemas: action.cinemas,
                allCinemas: action.cinemas
            };
        case CHANGE_CINEMA:
            return {
                ...state,
                cinema: action.cinema
            };
        case GET_SCHEDULES:
            return {
                ...state,
                schedules: action.schedules
            };
        case GET_SET_FILMS:
            return {
                ...state,
                films: action.films,
                filmDates: action.films[0].showDate
            };
        case SET_FILM_DATES:
            return {
                ...state,
                filmDates: action.filmDates
            };
        case SET_NUM:
            return {
                ...state,
                num: action.num
            };
        case SET_FILM_CONTENT:
            return {
                ...state, 
                filmContent: action.content
            }
        default: return state;
    }
}