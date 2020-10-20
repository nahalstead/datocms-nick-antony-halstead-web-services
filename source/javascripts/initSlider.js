import { lory } from 'lory.js';
import imagesLoaded from 'imagesloaded';

export default function() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  imagesLoaded(slider).on('always', () => {
    slider.classList.remove('is-loading');
    lory(slider, { 
    	infinite: 1, 
    	enableMouseEvents: true,
    	slidesToScroll: 1,
    	rewind: true
	});
  });
}
