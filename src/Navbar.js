import React, { useState, useEffect, useRef } from 'react';
import Logo2 from './Logo.js'




 function Navbar(){ 

  return(
    <div class="navbar bg-base-100 fixed z-10"  >
      <div class="flex-1" >
        <a class="btn btn-ghost normal-case text-xl"><Logo2/></a>
      </div>
      <div class="flex-none font-light" >
        <ul class="menu menu-horizontal p-0">
        <li class="hover-bordered"><a >Home</a></li>
          <li tabindex="0" class="hover-bordered" >
              <a>
              Services
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100 font-light">
              <li class="hoveer-bordered"><a>Full Turn-Key Solutions</a></li>
              <li class="hoveer-bordered"><a>PLC Programming and Engineering</a></li>
              <li class="hoveer-bordered"><a>Panel Design and Schematics</a></li>
              </ul>
          </li>
          <li class="hover-bordered"><a >Success stories</a></li>
          <li class="hover-bordered"><a >About us</a></li>
        </ul>
      </div>
    </div>
  );

}
export default Navbar