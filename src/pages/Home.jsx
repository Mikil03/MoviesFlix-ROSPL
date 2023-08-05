import React,{useState,useEffect} from 'react'

function Home() {
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        getMovies();
    }, []);
    function getMovies(){
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d0793f5c9e1fe4a5bbae8c5b5e1eae01")
            .then((res) => res.json())
            .then((data) => {
                setTrending(data.results);
            });
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d0793f5c9e1fe4a5bbae8c5b5e1eae01")
        .then((res) => res.json())
        .then((data) => {
            setTopRated(data.results);
        });
    }
    if(trending.length==0 || topRated.length==0){
        return(
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        )
    }
    else{
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center ">
                        <img style={{ borderRadius: "50%" }}
                            src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                            className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MoviesFlix</span>
                    </a>
                    <div className="flex md:order-2">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..." />
                        </div>
                        <button id="menu-toggle" data-collapse-toggle="navbar-search" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..." />
                        </div>
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Explore</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="text-center py-4 lg:px-4">
                <div className="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                    <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Important</span>
                    <span className="font-semibold mr-2 text-left flex-auto">All Content Is Hosted On Third Party Services</span>
                </div>
            </div>
            <h1 style={{ textAlign: "center", color: "white", fontSize: "xx-large", fontWeight: "bolder",marginBottom:"1em" }}> Trending</h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1em",justifyContent: "center",margin: "auto" }}>
                {trending.map((movie) => {
                return (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{movie.title}</h2>
                        <p style={{overflow: "hidden",display: "-webkit-box","-webkit-line-clamp": "4","-webkit-box-orient": "vertical"}}>{movie.overview}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch Now</button>
                        </div>
                    </div>
                </div>
                );
                })}
            </div>
            <hr style={{ width: "35%", margin: "auto", marginTop: "1em", marginBottom:"1em" }} />
            <h1 style={{ textAlign: "center", color: "white", fontSize: "xx-large", fontWeight: "bolder",marginBottom:"1em" }}> Top Rated</h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1em",justifyContent: "center",margin: "auto" }}>
                {topRated.map((movie) => {
                return (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch Now</button>
                        </div>
                    </div>
                </div>
                );
                })}
            </div>

            <footer className="z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">MoviesFlix™</a>.    All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                </div>
            </footer>
        </div>
    )
    }
}

export default Home
