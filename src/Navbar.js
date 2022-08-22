import React, { useState, useEffect, useRef } from 'react';
import Logo2 from './Logo.js'
import {Link} from 'react-router-dom';





 function Navbar(){ 

  return(
    <div class="navbar bg-base-100 fixed z-10 shadow-sm"  >
      <div class="flex-1" >
        <a class="btn btn-ghost normal-case text-xl"><Logo2/></a>
      </div>
      <div class="flex-none font-light" >
        <ul class="menu menu-horizontal p-0">
          <Link to="/"><li class="hover-bordered"><a >Home</a></li></Link>
        
          <li tabindex="0" class="hover-bordered" >
            <Link to="/Services">
              Services
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </Link>
              
              <ul class="p-2 bg-base-100 font-light shadow-xl">
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