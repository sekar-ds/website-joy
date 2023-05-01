import React from 'react';
import Dashboard from './dasbord';
import Headertotal from '../component/headerTotal'


const sidenav = () => {
  return (
   
         <Dashboard/>
          <div class="col p-0 m-0">
    
					<div className='p-2 d-flex justify-content-center shadow'>
						<h4>Employee Management System</h4>						
					</div>
					<Headertotal/>
				</div>
			
   
   
  )
}

export default sidenav
