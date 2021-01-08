import React from 'react';
import phones from '../images/phones.png';

const HomeContent = () => (
  <div className="content">
    <div>
      <h2 className="content__header">Paragraph Header</h2>
      <p className="content__para">Varius morbi enim nunc faucibus a pellentesque sit amet. At auctor urna nunc id cursus metus aliquam eleifend mi. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Odio eu feugiat pretium nibh ipsum. Sit amet est placerat in egestas erat imperdiet. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Commodo nulla facilisi nullam vehicula. Pretium aenean pharetra magna ac placerat vestibulum lectus. Turpis nunc eget lorem dolor. Enim lobortis scelerisque fermentum dui faucibus in ornare. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Neque gravida in fermentum et. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Imperdiet massa tincidunt nunc pulvinar. At erat pellentesque adipiscing commodo. Est ante in nibh mauris cursus mattis molestie a.</p>
    </div>
    <img className="content__image" src={phones} alt="Smartphones" />
    <p className="content__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
);

export default HomeContent;
