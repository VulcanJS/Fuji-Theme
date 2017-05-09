import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const FujiHero = () =>

  <div className="hero">

  </div>

FujiHero.displayName = 'FujiHero';

registerComponent('Hero', FujiHero);