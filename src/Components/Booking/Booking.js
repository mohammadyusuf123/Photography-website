import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const{categoriesId}=useParams()
    return (
        
     <div className='pt-5'>
         <h1 class="text-center">Our Package</h1>
           <div className='row pt-3 m-5'>
               <div className='col-md-4 p-3  '>
               <div>
                        <h1>$300</h1>
                        <h3>Business fair</h3>
                        <small>For most businesses event like book fair, craft fair.</small>
                      </div>
                      <div class="pt-3 " >
                        <ul class="list-group" >
                            <li  class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>limited space access</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Secuirty facility</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Event support</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Decoration design</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Per day bill</li>
                          </ul>
                      </div>
                      <div class="">
                        <button type="button" class="btn ms-3 mt-3 btn-md text-white w-50 btn-info">Choose plan</button>
                    </div>
               </div>
               <div className='col-md-4'>
               <div>
                        <h1>$500</h1>
                        <h3>wedding basic</h3>
                        <small>For weddings with basic plan
                          and limited item</small>
                      </div>
                      <div class="pt-3 " >
                        <ul class="list-group" >
                            <li  class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>limited space access</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Secuirty facility</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Event support</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Decoration design</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Per day bill</li>
                          </ul>
                      </div>
                      <div class="">
                        <button type="button" class="btn ms-3 mt-3 btn-md text-white w-50 btn-info">Choose plan</button>
                    </div>
               </div>
               < div className='col-md-4'>
               <div>
                        <h1>$1200</h1>
                        <h3>Corporate event</h3>
                        <small>For most corporate business events</small>
                      </div>
                      <div class="pt-3 " >
                        <ul class="list-group" >
                            <li  class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>limited space access</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Secuirty facility</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Event support</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Decoration design</li>
                            <li class="list-group-item border-0"><i class="fas pe-2 fa-check-circle"></i>Per day bill</li>
                          </ul>
                      </div>
                      <div class="">
                        <button type="button" class="btn ms-3 mt-3 btn-md text-white w-50 btn-info">Choose plan</button>
                    </div>
               </div>

           </div>
     </div>
    );
};

export default Booking;