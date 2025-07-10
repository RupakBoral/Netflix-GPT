import { useEffect, useState } from "react";
import Error from "../Error";
import { API_OPTIONS } from "../../utils/constants";
import { useParams } from "react-router-dom";

const MovieDesc = () => {
  // when used link then params can be accessed using useParams
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        API_OPTIONS
      );
      const data = await res.json();
      console.log(data);
      setMovieData(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  if (error) {
    return <Error err={error} />;
  }

  if (!movieData) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-error">Movie not found</h2>
        </div>
      </div>
    );
  }

  const {
    title,
    original_title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    runtime,
    vote_average,
    vote_count,
    genres,
    tagline,
    status,
    spoken_languages,
    popularity,
  } = movieData;

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section with Backdrop */}
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="hero-content text-neutral-content flex-col lg:flex-row max-w-7xl mx-auto px-4">
          {/* Movie Poster */}
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
            <div className="card bg-base-100 shadow-2xl">
              <figure className="px-4 pt-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  className="rounded-xl w-80 h-auto object-cover"
                />
              </figure>
            </div>
          </div>

          {/* Movie Details */}
          <div className="flex-1 text-left">
            {/* Title and Tagline */}
            <div className="mb-6">
              <h1 className="text-5xl font-bold mb-2 text-white drop-shadow-lg">
                {title}
              </h1>
              {original_title !== title && (
                <h2 className="text-2xl font-medium text-gray-300 mb-2">
                  {original_title}
                </h2>
              )}
              {tagline && (
                <p className="text-xl italic text-gray-200 drop-shadow">
                  "{tagline}"
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="stat bg-black bg-opacity-40 rounded-lg p-4 min-w-0">
                <div className="stat-title text-gray-300">Rating</div>
                <div className="stat-value text-primary text-2xl">
                  ⭐ {vote_average?.toFixed(1)}
                </div>
                <div className="stat-desc text-gray-400">
                  {vote_count?.toLocaleString()} votes
                </div>
              </div>

              {runtime && (
                <div className="stat bg-black bg-opacity-40 rounded-lg p-4 min-w-0">
                  <div className="stat-title text-gray-300">Runtime</div>
                  <div className="stat-value text-secondary text-2xl">
                    {formatRuntime(runtime)}
                  </div>
                  <div className="stat-desc text-gray-400">Duration</div>
                </div>
              )}

              {release_date && (
                <div className="stat bg-black bg-opacity-40 rounded-lg p-4 min-w-0">
                  <div className="stat-title text-gray-300">Release Date</div>
                  <div className="stat-value text-accent text-lg">
                    {formatDate(release_date)}
                  </div>
                  <div className="stat-desc text-gray-400">{status}</div>
                </div>
              )}
            </div>

            {/* Genres */}
            {genres && genres.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="badge badge-primary badge-lg"
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}
            {overview && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Overview
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed max-w-4xl">
                  {overview}
                </p>
              </div>
            )}

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spoken_languages && spoken_languages.length > 0 && (
                <div className="bg-black bg-opacity-40 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {spoken_languages.map((lang, index) => (
                      <span
                        key={index}
                        className="badge badge-outline badge-sm"
                      >
                        {lang.english_name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {popularity && (
                <div className="bg-black bg-opacity-40 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Popularity</h4>
                  <div className="text-primary text-xl font-bold">
                    {popularity.toFixed(1)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
