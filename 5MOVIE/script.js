// OMDB API Key
    const apiKey = '9e76bc53';

    // YouTube trailer links for movies (for demo purposes)
    const movieTrailers = {
      "The Shawshank Redemption": "https://www.youtube.com/embed/6hB3S9bIaco",
      "The Godfather": "https://www.youtube.com/embed/sY1S34973zA",
      "The Dark Knight": "https://www.youtube.com/embed/EXeTwQWrcwY",
      "Pulp Fiction": "https://www.youtube.com/embed/s7EdQ4FqbhY",
      "Fight Club": "https://www.youtube.com/embed/qtRKdVHc-cE",
      "Inception": "https://www.youtube.com/embed/YoHD9XEInc0",
      "Interstellar": "https://www.youtube.com/embed/zSWdZVtXT7E",
      "The Godfather: Part II": "https://www.youtube.com/embed/9O1Iy9od7-A",
      "12 Angry Men": "https://www.youtube.com/embed/_13J_9B5jEk",
      "Schindler's List": "https://www.youtube.com/embed/gG22XNhtnoY",
      "The Lord of the Rings": "https://www.youtube.com/embed/V75dMMIW2B4",
      "Goodfellas": "https://www.youtube.com/embed/qo5jJpHtI1Y",
      "Seven Samurai": "https://www.youtube.com/embed/wJ1TOratCTo",
      "The Matrix": "https://www.youtube.com/embed/vKQi3bBA1y8",
      "Dune": "https://www.youtube.com/embed/n9xhJrPXop4",
      "No Time to Die": "https://www.youtube.com/embed/BIhNsAtPbPI",
      "Spider-Man: No Way Home": "https://www.youtube.com/embed/JfVOs4VSpmA",
      "The Batman": "https://www.youtube.com/embed/mqqft2x_Aa4",
      "Morbius": "https://www.youtube.com/embed/oZ6iiRrz1SY",
      "Doctor Strange": "https://www.youtube.com/embed/aWzlQ2N6qqg",
      "Top Gun: Maverick": "https://www.youtube.com/embed/giXco2jaZ_4",
      "Die Hard": "https://www.youtube.com/embed/jaJuwKCmJbY",
      "John Wick": "https://www.youtube.com/embed/C0BMx-qxsP4",
      "Mad Max: Fury Road": "https://www.youtube.com/embed/hEJnMQG9ev8",
      "The Bourne Identity": "https://www.youtube.com/embed/FpKaB5dvQ4g",
      "Mission: Impossible": "https://www.youtube.com/embed/Ohws8y572KE",
      "Terminator 2": "https://www.youtube.com/embed/CRRlbK5w8AE",
      "Avengers: Endgame": "https://www.youtube.com/embed/TcMBFSGVi1c",
      "The Hangover": "https://www.youtube.com/embed/tcdUhdOlz9M",
      "Superbad": "https://www.youtube.com/embed/4eaZ_48ZYog",
      "Bridesmaids": "https://www.youtube.com/embed/FNppLrmdyug",
      "Borat": "https://www.youtube.com/embed/WtAQHLDG8YI",
      "Step Brothers": "https://www.youtube.com/embed/CewglxElBK0",
      "The Grand Budapest Hotel": "https://www.youtube.com/embed/1Fg5iWmQjwk",
      "Anchorman": "https://www.youtube.com/embed/NJQ4qEWm9lU"
    };

    // Slider functionality
    const slidesContainer = document.getElementById("slides");
    let currentIndex = 0;

    // Featured movies data for the slider (with quotes)
    const featuredMovies = [
      {
        title: "Mommy Don't Cry, Daddy is Sorry",
        description: "Μια συγκινητική οικογενειακή ιστορία για συγχώρεση.",
        quote: "Sometimes the hardest person to forgive is the one we love the most.",
        backdrop: "https://img.freepik.com/premium-photo/movie-poster-movie-with-burning-city-background_783884-35357.jpg",
        comingSoon: true
      },
      {
        title: "The Last Journey",
        description: "Ένα έπος περιπέτειας σε άγνωστα εδάφη.",
        quote: "Beyond the horizon lies not just a destination, but a discovery of oneself.",
        backdrop: "https://static.vecteezy.com/system/resources/thumbnails/028/274/915/small/strong-athletic-male-fighter-view-from-the-back-photo.jpg",
        comingSoon: true
      },
      {
        title: "City of Dreams",
        description: "Η ιστορία μιας πόλης και των ανθρώπων της.",
        quote: "In a city where dreams are currency, some become rich while others go bankrupt.",
        backdrop: "https://www.companyfolders.com/blog/media/2017/07/the-dark-knight-rises.jpg",
        comingSoon: false
      },
      {
        title: "Secrets Within",
        description: "Ένα θρίλερ γεμάτο ανατροπές.",
        quote: "The most dangerous secrets are the ones we keep from ourselves.",
        backdrop: "https://as1.ftcdn.net/jpg/05/87/30/68/1000_F_587306880_C1yJXTS5NhyOvIXFphi0VTxawj9rulzh.jpg",
        comingSoon: true
      },
      {
        title: "Broken Melody",
        description: "Μια μουσική διαδρομή γεμάτη πόνο και ελπίδα.",
        quote: "Sometimes the most beautiful melodies come from broken instruments.",
        backdrop: "https://4kwallpapers.com/images/wallpapers/wicked-movie-poster-2048x2048-18391.jpeg",
        comingSoon: false
      },
      {
        title: "Winds of Change",
        description: "Το χρονικό μιας επανάστασης.",
        quote: "Revolution isn't about changing the world; it's about changing ourselves first.",
        backdrop: "https://static.vecteezy.com/system/resources/thumbnails/038/079/808/small_2x/colorful-film-strip-frames-movie-background-photo.jpg",
        comingSoon: true
      },
      {
        title: "Shadows of the Past",
        description: "Το παρελθόν επιστρέφει.",
        quote: "The past is never where you think you left it.",
        backdrop: "https://media.istockphoto.com/id/1302167833/vector/movie-and-film-poster-design-template-background-with-vintage-film-camera.jpg?s=612x612&w=0&k=20&c=MR4nwkfQgSr3dy9EDEnaPc_S7qrbNy6qV7UW6vpegk8=",
        comingSoon: false
      },
      {
        title: "The Forgotten Child",
        description: "Ένα παιδί που κανείς δεν θυμόταν…",
        quote: "To be forgotten is worse than to be hated.",
        backdrop: "https://png.pngtree.com/thumb_back/fh260/background/20210305/pngtree-movie-poster-background-image_577860.jpg",
        comingSoon: true
      },
      {
        title: "Voices in the Wind",
        description: "Ιστορίες από τα τέσσερα σημεία του ορίζοντα.",
        quote: "Listen carefully and you'll hear the stories the wind carries from distant lands.",
        backdrop: "https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-splash-ink-high-end-two-color-film-festival-film-and-television-image_220288.jpg",
        comingSoon: false
      },
      {
        title: "Ocean of Silence",
        description: "Μια κατάδυση στην ψυχή.",
        quote: "In the deepest silence, we find the loudest truths.",
        backdrop: "https://intheposter.com/cdn/shop/products/sunsets-with-you-in-the-poster-1.jpg?v=1733910537",
        comingSoon: true
      }
    ];

    // Movie lists data (will be fetched from OMDB API)
    const movieLists = {
      popular: [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "Pulp Fiction",
        "Fight Club",
        "Inception",
        "Interstellar"
      ],
      topRated: [
        "The Godfather: Part II",
        "12 Angry Men",
        "Schindler's List",
        "The Lord of the Rings",
        "Goodfellas",
        "Seven Samurai",
        "The Matrix"
      ],
      newRelease: [
        "Dune",
        "No Time to Die",
        "Spider-Man: No Way Home",
        "The Batman",
        "Morbius",
        "Doctor Strange",
        "Top Gun: Maverick"
      ],
      // New category lists
      action: [
        "Die Hard",
        "John Wick",
        "Mad Max: Fury Road",
        "The Bourne Identity",
        "Mission: Impossible",
        "Terminator 2",
        "Avengers: Endgame"
      ],
      comedy: [
        "The Hangover",
        "Superbad",
        "Bridesmaids",
        "Borat",
        "Step Brothers",
        "The Grand Budapest Hotel",
        "Anchorman"
      ],
      drama: [
        "The Godfather",
        "Forrest Gump",
        "The Shawshank Redemption",
        "Schindler's List",
        "Titanic",
        "The Green Mile",
        "The Pianist"
      ],
      // Documentaries lists
      historic: [
        "Apollo 11",
        "They Shall Not Grow Old",
        "The Civil War",
        "Shoah",
        "The Last Days",
        "The Vietnam War",
        "The World at War"
      ],
      environment: [
        "An Inconvenient Truth",
        "Before the Flood",
        "Chasing Ice",
        "Planet Earth",
        "Blackfish",
        "The Cove",
        "My Octopus Teacher"
      ],
      science: [
        "Cosmos",
        "Particle Fever",
        "March of the Penguins",
        "A Beautiful Planet",
        "The Theory of Everything",
        "The Farthest",
        "The Human Body"
      ],
      // Paidika lists
      animation: [
        "Toy Story",
        "Frozen",
        "The Lion King",
        "Finding Nemo",
        "Coco",
        "How to Train Your Dragon",
        "Spirited Away"
      ],
      educational: [
        "Sesame Street",
        "The Magic School Bus",
        "Bill Nye the Science Guy",
        "Blue's Clues",
        "Dora the Explorer",
        "Reading Rainbow",
        "Schoolhouse Rock!"
      ],
      family: [
        "Home Alone",
        "The Goonies",
        "Mrs. Doubtfire",
        "Jumanji",
        "The Wizard of Oz",
        "E.T. the Extra-Terrestrial",
        "The Karate Kid"
      ]
    };

    // Movie quotes (for when clicking on a movie)
    const movieQuotes = {
      "The Shawshank Redemption": "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
      "The Godfather": "I'm gonna make him an offer he can't refuse.",
      "The Dark Knight": "Why so serious?",
      "Pulp Fiction": "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.",
      "Fight Club": "The first rule of Fight Club is: you do not talk about Fight Club.",
      "Inception": "You mustn't be afraid to dream a little bigger, darling.",
      "Interstellar": "We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt.",
      "The Godfather: Part II": "Keep your friends close, but your enemies closer.",
      "12 Angry Men": "It takes a great deal of courage to stand alone.",
      "Schindler's List": "Whoever saves one life, saves the world entire.",
      "The Lord of the Rings": "Not all those who wander are lost.",
      "Goodfellas": "As far back as I can remember, I always wanted to be a gangster.",
      "Seven Samurai": "This is the nature of war. By protecting others, you save yourselves.",
      "The Matrix": "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",
      "Dune": "Fear is the mind-killer.",
      "No Time to Die": "The proper function of man is to live, not to exist.",
      "Spider-Man: No Way Home": "With great power comes great responsibility.",
      "The Batman": "Fear is a tool. They think I'm hiding in the shadows. But I am the shadows.",
      "Morbius": "The cure is worse than the disease.",
      "Doctor Strange": "We never lose our demons, we only learn to live above them.",
      "Top Gun: Maverick": "It's not the plane, it's the pilot."
    };

    // Movie descriptions (for hover effect)
    const movieDescriptions = {
      // ... (unchanged, omitted for brevity)
      "The Shawshank Redemption": "Δύο άνδρες καταδικασμένοι σε ισόβια στις φυλακές Shawshank δημιουργούν μια ισχυρή φιλία στη διάρκεια πολλών ετών, βρίσκοντας παρηγοριά και τελικά λύτρωση μέσα από κοινές πράξεις ευγένειας.",
      "The Godfather": "Ο γηράσκων αρχηγός μιας διάσημης οικογένειας της μαφίας μεταβιβάζει τον έλεγχο της αυτοκρατορίας του στον απρόθυμο γιο του.",
      "The Dark Knight": "Όταν η απειλή που είναι γνωστή ως ο Τζόκερ προκαλεί χάος και καταστροφή στην πόλη Γκόθαμ, ο Μπάτμαν πρέπει να αποδεχτεί μία από τις μεγαλύτερες ψυχολογικές και φυσικές δοκιμασίες της ικανότητάς του να πολεμήσει την αδικία.",
      "Pulp Fiction": "Οι ζωές δύο εκτελεστών της μαφίας, ενός μποξέρ, μιας συζύγου γκάνγκστερ και δύο ληστών συνδέονται σε τέσσερις ιστορίες βίας και εξιλέωσης.",
      "Fight Club": "Ένας καταθλιπτικός υπάλληλος που πάσχει από αϋπνία και ένας πωλητής σαπουνιού με περίεργες αντιλήψεις δημιουργούν μια υπόγεια λέσχη μάχης που εξελίσσεται σε κάτι πολύ περισσότερο.",
      "Inception": "Ένας κλέφτης που κλέβει εταιρικά μυστικά μέσω της τεχνολογίας διαμοιρασμού ονείρων του δίνεται το αντίστροφο έργο να εμφυτεύσει μια ιδέα στο μυαλό ενός CEO.",
      "Interstellar": "Μια ομάδα εξερευνητών ταξιδεύει μέσα από μια σκουληκότρυπα στο διάστημα σε μια προσπάθεια να εξασφαλίσει την επιβίωση της ανθρωπότητας.",
      // ... (rest unchanged)
    };

    // Initialize slider
    function initSlider() {
      featuredMovies.forEach(movie => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url('${movie.backdrop}')`;

        // Always show ΕΡΧΕΤΑΙ... on all slides
        slide.innerHTML = `
          <h1>${movie.title}</h1>
          <p>${movie.description}</p>
          <div class="coming-soon-badge">ΕΡΧΕΤΑΙ...</div>
        `;

        slidesContainer.appendChild(slide);
      });

      // Start the slider
      startSlider();
    }

    function startSlider() {
      setInterval(() => {
        currentIndex = (currentIndex + 1) % featuredMovies.length;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
      }, 10000);
    }

    // Fetch movie data from OMDB API
    async function fetchMovieData(title) {
      try {
        const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === "True") {
          return data;
        } else {
          console.error(`Error fetching data for ${title}: ${data.Error}`);
          return null;
        }
      } catch (error) {
        console.error(`Error fetching movie data: ${error}`);
        return null;
      }
    }

    // Create movie cards
    async function createMovieList(listId, movies) {
      const container = document.getElementById(listId);

      for (const title of movies) {
        const movieData = await fetchMovieData(title);

        if (movieData) {
          const movieCard = document.createElement('div');
          movieCard.className = 'movie-card';
          movieCard.setAttribute('data-title', title);

          const posterUrl = movieData.Poster !== "N/A" ?
            movieData.Poster :
            `https://via.placeholder.com/300x450/333/666?text=${encodeURIComponent(title)}`;

          // For demonstration, let's show the "coming soon" badge for movies with no year or year in the future
          let comingSoon = false;
          let year = parseInt(movieData.Year, 10);
          if (isNaN(year) || year > new Date().getFullYear()) {
            comingSoon = true;
          }

          // Use our own description if available, else fallback to OMDB
          const description = movieDescriptions[title] || (movieData.Plot && movieData.Plot !== "N/A" ? movieData.Plot : "");

          // Create the movie poster with play button
          const posterDiv = document.createElement('div');
          posterDiv.className = 'movie-poster';
          posterDiv.style.backgroundImage = `url('${posterUrl}')`;

          // Add the description
          const descDiv = document.createElement('div');
          descDiv.className = 'movie-description';
          descDiv.textContent = description;
          posterDiv.appendChild(descDiv);

          // Add play button
          const playButton = document.createElement('button');
          playButton.className = 'play-button';
          playButton.textContent = 'Play';
          playButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the card click
            showMovieTrailer(title);
          });
          posterDiv.appendChild(playButton);

          // Add coming soon badge if needed
          if (comingSoon) {
            const badge = document.createElement('div');
            badge.className = 'coming-soon-badge';
            badge.textContent = 'ΕΡΧΕΤΑΙ...';
            posterDiv.appendChild(badge);
          }

          // Create the movie info
          const infoDiv = document.createElement('div');
          infoDiv.className = 'movie-info';
          infoDiv.innerHTML = `
            <h3>${movieData.Title}</h3>
            <p>${movieData.Year}</p>
          `;

          // Add elements to card
          movieCard.appendChild(posterDiv);
          movieCard.appendChild(infoDiv);

          // Add click event to show movie details
          movieCard.addEventListener('click', () => {
            showMovieDetails(movieData, title);
          });

          container.appendChild(movieCard);
        }
      }
    }

    // Show movie trailer in modal
    function showMovieTrailer(title) {
      const videoModal = document.getElementById('video-modal');
      const videoIframe = document.getElementById('video-iframe');
      const backButton = document.getElementById('back-button');
      const videoContainer = document.querySelector('.video-container');

      // Get trailer URL (default to a placeholder if not available)
      const trailerUrl = movieTrailers[title] || 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Default trailer

      // Set iframe source
      videoIframe.src = trailerUrl;

      // Show modal
      videoModal.style.display = 'flex';

      // Set up back button
      backButton.onclick = () => {
        videoModal.style.display = 'none';
        videoIframe.src = ''; // Clear iframe source to stop video
      };

      // Close when clicking outside the video
      videoModal.addEventListener('click', function outsideClick(e) {
        if (!videoContainer.contains(e.target) && e.target !== backButton) {
          videoModal.style.display = 'none';
          videoIframe.src = '';
          videoModal.removeEventListener('click', outsideClick);
        }
      });

      // Close on escape key
      document.addEventListener('keydown', function escListener(e) {
        if (e.key === 'Escape') {
          videoModal.style.display = 'none';
          videoIframe.src = '';
          document.removeEventListener('keydown', escListener);
        }
      });
    }

    // Show movie details in modal
    function showMovieDetails(movieData, title) {
      const modal = document.getElementById('movie-modal');
      const modalPoster = document.getElementById('modal-poster');
      const modalTitle = document.getElementById('modal-title');
      const modalYear = document.getElementById('modal-year');
      const modalPlot = document.getElementById('modal-plot');
      const modalQuote = document.getElementById('modal-quote');

      // Set modal content
      modalPoster.style.backgroundImage = movieData.Poster !== "N/A" ?
        `url('${movieData.Poster}')` :
        `url('https://via.placeholder.com/300x450/333/666?text=${encodeURIComponent(title)}')`;

      modalTitle.textContent = movieData.Title;
      modalYear.textContent = `${movieData.Year} | ${movieData.Runtime} | ${movieData.Genre}`;
      modalPlot.textContent = movieDescriptions[title] || movieData.Plot;

      // Set quote if available
      const quote = movieQuotes[title] || "No memorable quotes available for this film.";
      modalQuote.textContent = `"${quote}"`;

      // Show modal
      modal.style.display = 'block';
    }

    // Close modal when clicking on X or outside the modal
    function setupModalClose() {
      const modal = document.getElementById('movie-modal');
      const closeBtn = document.querySelector('.close-modal');

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }

    // --- Search bar functionality ---
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    let searchTimeout = null;

    function clearSearchResults() {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
    }

    function showSearchResults(results) {
      if (!results || results.length === 0) {
        searchResults.innerHTML = '<div style="padding:10px;color:#aaa;">Δεν βρέθηκαν αποτελέσματα.</div>';
        searchResults.style.display = 'block';
        return;
      }
      searchResults.innerHTML = '';
      results.forEach(movie => {
        const item = document.createElement('div');
        item.className = 'search-result-item';

        // Create poster element
        const posterDiv = document.createElement('div');
        posterDiv.className = 'search-result-poster';
        posterDiv.style.backgroundImage = `url('${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/80x120/333/666?text=No+Image"}')`;

        // Create info element
        const infoDiv = document.createElement('div');
        infoDiv.className = 'search-result-info';
        infoDiv.innerHTML = `
          <h4>${movie.Title}</h4>
          <p>${movie.Year} | ${movie.Type ? movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1) : ''}</p>
          <button class="play-button" style="position:static;opacity:1;margin-top:5px;font-size:12px;padding:4px 12px;">Play</button>
        `;

        // Add click event for the whole item
        item.addEventListener('click', async () => {
          // Fetch full movie data for modal
          const data = await fetchMovieData(movie.Title);
          if (data) showMovieDetails(data, movie.Title);
          clearSearchResults();
        });

        // Add play button click event
        const playButton = infoDiv.querySelector('.play-button');
        playButton.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent triggering the item click
          showMovieTrailer(movie.Title);
          clearSearchResults();
        });

        // Append elements to item
        item.appendChild(posterDiv);
        item.appendChild(infoDiv);

        searchResults.appendChild(item);
      });
      searchResults.style.display = 'block';
    }

    async function searchMovies(query) {
      if (!query || query.length < 2) {
        clearSearchResults();
        return;
      }
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
        const data = await response.json();
        if (data.Response === "True") {
          showSearchResults(data.Search.slice(0, 8));
        } else {
          showSearchResults([]);
        }
      } catch (e) {
        showSearchResults([]);
      }
    }

    searchInput && searchInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchMovies(value);
      }, 400);
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchResults.contains(e.target) && e.target !== searchInput) {
        clearSearchResults();
      }
    });

    // Handle category navigation
    function setupCategoryNavigation() {
      // Get all the category links
      const categoryLinks = document.querySelectorAll('nav a[href^="#"]');

      // Add click event to each link
      categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // Get the target section ID
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
            e.preventDefault(); // Prevent default anchor behavior

            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Show the scroll-to-top button immediately
            scrollTopBtn.style.display = 'block';

            // Highlight the section briefly
            targetSection.style.transition = 'background-color 0.5s ease';
            targetSection.style.backgroundColor = 'rgba(0, 102, 204, 0.2)';
            setTimeout(() => {
              targetSection.style.backgroundColor = 'transparent';
            }, 1000);
          }
        });
      });
    }

    // Improved scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize slider
      initSlider();

      // Create movie lists
      createMovieList('popular-movies', movieLists.popular);
      createMovieList('top-rated-movies', movieLists.topRated);
      createMovieList('new-release-movies', movieLists.newRelease);

      // Create category lists
      createMovieList('action-movies', movieLists.action);
      createMovieList('comedy-movies', movieLists.comedy);
      createMovieList('drama-movies', movieLists.drama);

      // Create documentary lists
      createMovieList('historic-movies', movieLists.historic);
      createMovieList('environment-movies', movieLists.environment);
      createMovieList('science-movies', movieLists.science);

      // Create paidika lists
      createMovieList('animation-movies', movieLists.animation);
      createMovieList('educational-movies', movieLists.educational);
      createMovieList('family-movies', movieLists.family);

      // Setup modal close
      setupModalClose();

      // Setup category navigation
      setupCategoryNavigation();
    });
