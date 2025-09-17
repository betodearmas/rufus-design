// SWUP FUNCTIONALITY
function initPageScripts() {
  console.log("initPageScripts called");

  // HIGHLIGHT NAV
      function highlightNav() {
      // Remove old highlights
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
      });

      // Current path (no query or hash)
      const currentPath = window.location.pathname;

      // Find the matching link by href
      const activeLink = document.querySelector(`nav a[href="${currentPath}"]`);

      if (activeLink) {
        activeLink.classList.add("active");
      }
      }
      // Run once on first load
      highlightNav();
      // Run again on Swup reload
      document.addEventListener("swup:contentReplaced", highlightNav);

      // --- GALLERY ---
      const galleryData = {
          'item-D1': [
            { artworktitle: '「akoya pearls」', src: 'Images/Main Section Images/**A-Akoya/A_akoya_0.webp', caption: 'This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows. This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows. This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows. This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows. This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows. This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows.'},
            { artworktitle: '「akoya pearls」', src: 'Images/Main Section Images/**A-Akoya/A_akoya_1.webp', caption: 'This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows' },
            { artworktitle: '「akoya pearls」', src: 'Images/Main Section Images/**A-Akoya/A_akoya_2.webp', caption: 'This is a test to see how the text will be displayed in each of the images. Since some images are larger / wider than others, I am curious to see how this longer or shorter text will be displayed in the different windows' },
          ],
          'item-D2': [
            { artworktitle: '「BELLA VISTA」', src: 'Images/Main Section Images/**A-Bella Vista/E_BellaVista_1.webp', caption: 'Slide 1/5' },
            { artworktitle: '「BELLA VISTA」', src: 'Images/Main Section Images/**A-Bella Vista/E_BellaVista_2.webp', caption: 'Slide 2/5' },
            { artworktitle: '「BELLA VISTA」', src: 'Images/Main Section Images/**A-Bella Vista/E_BellaVista_3.webp', caption: 'Slide 3/5' },
            { artworktitle: '「BELLA VISTA」', src: 'Images/Main Section Images/**A-Bella Vista/E_BellaVista_4.webp', caption: 'Slide 4/5' },
            { artworktitle: '「BELLA VISTA」', src: 'Images/Main Section Images/**A-Bella Vista/E_BellaVista_5.webp', caption: 'Slide 5/5' },
          ],
          'item-D3': [
            { src: 'Images/Main Section Images/**A-Spanish Shoes/shoe_1.webp', artworktitle: '「shoes from Spain」', caption: 'Slide 1/6' },
            { src: 'Images/Main Section Images/**A-Spanish Shoes/shoe_2.webp', artworktitle: '「shoes from Spain」', caption: 'Slide 2/6' },
            { src: 'Images/Main Section Images/**A-Spanish Shoes/shoe_3.webp', artworktitle: '「shoes from Spain」', caption: 'Slide 3/6' },
            { src: 'Images/Main Section Images/**A-Spanish Shoes/shoe_4.webp', artworktitle: '「shoes from Spain」', caption: 'Slide 4/6' },
            { src: 'Images/Main Section Images/**A-Spanish Shoes/shoe_5.webp', artworktitle: '「shoes from Spain」', caption: 'Slide 5/6' },
            { src: 'Images/Main Section Images/**A-Spanish Shoes/shoe_6.webp', artworktitle: '「shoes from Spain」', caption: 'Slide 6/6' },
          ],
          'item-D4': [
            { src: 'Images/Main Section Images/**A-Takano/takano mag_1.webp', artworktitle: '「takano」', caption: 'Slide 1/4' },
            { src: 'Images/Main Section Images/**A-Takano/takano mag_2.webp', artworktitle: '「takano」', caption: 'Slide 2/4' },
            { src: 'Images/Main Section Images/**A-Takano/takano mag_3.webp', artworktitle: '「takano」', caption: 'Slide 3/4' },
            { src: 'Images/Main Section Images/**A-Takano/takano mag_4.webp', artworktitle: '「takano」', caption: 'Slide 4/4' },
          ],
          'item-D5': [
            { src: 'Images/Main Section Images/**D-Yoga insta/yoga-1.webp', artworktitle: '「yoga」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D-Yoga insta/yoga-1.webp', artworktitle: '「yoga」', caption: 'Slide 1 of item 2' },
          ],
          'item-D6': [
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_pc_00.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_pc_01.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_pc_02.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_pc_04.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_pc_05.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_sp_01.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_sp_02.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_sp_03.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_sp_04.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**D_beonaroll_2023/beonaroll_sp_05.webp', artworktitle: '「beonaroll」', caption: 'Slide 0 of item 2' },
          ],
          'item-D7': [
            { src: 'Images/Main Section Images/**E-FinSum-Tabloid/FS_1.webp', artworktitle: '「Fin Sum」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-FinSum-Tabloid/FS_2.webp', artworktitle: '「Fin Sum」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-FinSum-Tabloid/FS_3.webp', artworktitle: '「Fin Sum」', caption: 'Slide 0 of item 2' },
          ],
          'item-D8': [
            { src:'Images/Main Section Images/**E-Kyoto/Kyoto_0.webp' , artworktitle: '「kyoto」', caption: 'Slide 0 of item 2' },
            { src:'Images/Main Section Images/**E-Kyoto/Kyoto_1.webp' , artworktitle: '「kyoto」', caption: 'Slide 0 of item 2' },
            { src:'Images/Main Section Images/**E-Kyoto/Kyoto_2.webp' , artworktitle: '「kyoto」', caption: 'Slide 0 of item 2' },
            { src:'Images/Main Section Images/**E-Kyoto/Kyoto_3.webp' , artworktitle: '「kyoto」', caption: 'Slide 0 of item 2' },
            { src:'Images/Main Section Images/**E-Kyoto/Kyoto_4.webp' , artworktitle: '「kyoto」', caption: 'Slide 0 of item 2' },
            { src:'Images/Main Section Images/**E-Kyoto/Kyoto_5.webp' , artworktitle: '「kyoto」', caption: 'Slide 0 of item 2' },

          ],
          'item-D9': [
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_1.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_2.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_3.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_4.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_5.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_6.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**E-Toyotimes/Toyotimes_7.webp', artworktitle: '「toyota times」', caption: 'Slide 0 of item 2' },

          ],
          'item-D10': [
            { src: 'Images/Main Section Images/**G-FouFow/G_FouFow_1.webp', artworktitle: '「fou fow」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**G-FouFow/G_FouFow_2.webp', artworktitle: '「fou fow」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**G-FouFow/G_FouFow_3.webp', artworktitle: '「fou fow」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**G-FouFow/G_FouFow_4.webp', artworktitle: '「fou fow」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**G-FouFow/G_FouFow_5.webp', artworktitle: '「fou fow」', caption: 'Slide 0 of item 2' },

          ],
          'item-D11': [
            { src: 'Images/Main Section Images/**G-Gyoen/gyoen-温室-omote_1.webp', artworktitle: '「gyōen」', caption: 'Slide 0 of item 2' },
            { src: 'Images/Main Section Images/**G-Gyoen/gyoen-温室-ura_2.webp', artworktitle: '「gyōen」', caption: 'Slide 0 of item 2' },

          ],
          // Add more as needed...
        };

      const modal = document.querySelector('.gallery-modal');
      const modalImg = document.querySelector('.gallery-img');
      const modalCaption = document.querySelector('.gallery-caption');
      const modalArtworkTitle = document.querySelector('.gallery-artworktitle');
      const closeBtn = document.querySelector('.close-button');
      const leftBtn = document.querySelector('.arrow.left');
      const rightBtn = document.querySelector('.arrow.right');
      const allItems = document.querySelectorAll('.grid-item');
      const galleryImgContainer = document.querySelector('.gallery-img-container');

      let currentGallery = [];
      let currentIndex = 0;

          function openGallery(id) {
            currentGallery = galleryData[id];
            if (!currentGallery || !modal) return;
            currentIndex = 0;
            updateModal();
            modal.classList.add('active');
            console.log("Gallery opened:", id);
            if (closeBtn) {
              requestAnimationFrame(() => {
                closeBtn.classList.remove('is-animating');
                void closeBtn.offsetWidth;
                closeBtn.classList.add('is-animating');
              });
            }
          }
          function updateModal() {
            if (!modalImg || !modalCaption || !modalArtworkTitle) return;
            modalImg.src = currentGallery[currentIndex].src;
            modalCaption.textContent = currentGallery[currentIndex].caption;
            modalArtworkTitle.textContent = currentGallery[currentIndex].artworktitle;
            console.log("Modal updated - index:", currentIndex);
          }
          if (closeBtn) closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            closeBtn.classList.remove('is-animating');
            console.log("Gallery modal closed");
          });
          if (leftBtn) leftBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
            updateModal();
          });
          if (rightBtn) rightBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % currentGallery.length;
            updateModal();
          });
          allItems.forEach(item => {
            const id = item.getAttribute('data-gallery-id');
            if (id) item.addEventListener('click', () => openGallery(id));
          });



      // --- HAMBURGER MENU ---
      const hamburger = document.getElementById("hamburger");
      const overlay = document.getElementById("overlay");
      const hamMenu = document.querySelector('.hamburger');
      const offScreenMenu = document.querySelector('.off-screen-menu');

          if (hamburger && overlay) {
            hamburger.addEventListener("click", () => {
              overlay.classList.toggle("active");
              console.log("Hamburger clicked - overlay toggled");
            });
          }
          if (hamMenu && offScreenMenu) {
            hamMenu.addEventListener('click', () => {
              hamMenu.classList.toggle('active');
              offScreenMenu.classList.toggle('active');
              console.log("Hamburger menu active toggle");
            });
          }

          // --- MOBILE SWIPE ---
          if (galleryImgContainer) {
            let touchStartX = 0;
            let touchEndX = 0;
            const swipeThreshold = 50;
            galleryImgContainer.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
            galleryImgContainer.addEventListener('touchend', e => {
              touchEndX = e.changedTouches[0].screenX;
              const diffX = touchStartX - touchEndX;
              if (Math.abs(diffX) > swipeThreshold) {
                currentIndex = (diffX > 0) ? (currentIndex + 1) % currentGallery.length
                                          : (currentIndex - 1 + currentGallery.length) % currentGallery.length;
                updateModal();
                console.log("Swipe detected, new index:", currentIndex);
              }
            });
          }


      // HORIZONTAL SCROLLING
      const thumbs = document.querySelectorAll(".thumbnails img");
      const mainDisplay = document.getElementById("mainDisplay");
      const thumbRow = document.getElementById("thumbRow");

          // Map vertical scroll to horizontal
          window.addEventListener("wheel", (e) => {
              e.preventDefault();
              thumbRow.scrollLeft += e.deltaY; 
          }, { passive: false });

          // Use throttling to update active state efficiently
          let ticking = false;
          thumbRow.addEventListener("scroll", () => {
              if (!ticking) {
              window.requestAnimationFrame(() => {
                  updateActive();
                  ticking = false;
              });
              ticking = true;
              }
          });


          // Update active
          function updateActive() {
          const scrollLeft = thumbRow.scrollLeft;
          let current = null;

          for (let i = 0; i < thumbs.length; i++) {
              const thumb = thumbs[i];
              if (thumb.offsetLeft >= scrollLeft) {
              current = thumb;
              break;
              }
          }

          if (current) {
              thumbs.forEach(t => t.classList.remove("active"));
              current.classList.add("active");
              mainDisplay.src = current.src; // use the same image
          }
              }

          // Click to jump
          thumbs.forEach(thumb => {
          thumb.addEventListener("click", () => {
              thumbRow.scrollTo({
              left: thumb.offsetLeft - thumbRow.offsetWidth / 2 + thumb.offsetWidth / 2,
              behavior: "smooth"
              });
              mainDisplay.src = thumb.src;
              thumbs.forEach(t => t.classList.remove("active"));
              thumb.classList.add("active");
          });
          });


          // Initialize
          updateActive();




      



      // ABOUT SLOW REVEAL
      function animateAboutPage() {
      const items = document.querySelectorAll(".reveal-wrapper");
      items.forEach(el => {
        el.classList.add("reveal");
      });
      }
      // Run once on first load
      animateAboutPage();
      // Run again on Swup reload
      document.addEventListener("swup:contentReplaced", animateAboutPage);




}
//END OF SWUP FUNCTIONALITY



// CONSOLE LOGS
// --- INITIAL LOAD ---
console.log("Initial page load");
initPageScripts();
// --- SWUP RELOAD ---
document.addEventListener("swup:contentReplaced", () => {
  console.log("SWUP content replaced");
  initPageScripts();
});

      
      
      